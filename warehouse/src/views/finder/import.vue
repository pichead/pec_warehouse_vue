
<style>


</style>
<template>

<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="col-11 mx-auto">
            <div class="h4 mt-4 col text-center font-weight-bold">Import Excel</div>
            <br>
            <div class="row">
                <div class="mx-auto col-12 row">
                    <button id="import" class="btn btn-success" >เลือกไฟล์</button>
                    <button id="upload"  class="btn btn-dark ml-3" data-toggle="modal" data-target="#importExcel">นำเข้าข้อมูล</button>
                    <input type="file" class="d-none" id="fileUpload" />
                </div>
            </div>
            <div class="modal" id="importExcel" aria-hidden="true" style="display: none">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="h3 mt-5 text-center" style="color: black">นำเข้าข้อมูล</div>
                    <div class="modal-body">
                        <form id="addform">
                        <div id="text" class="form-group" style="color:black">
                            <h5 class="text-center">กรุณาตรวจสอบข้อมูลก่อนกดปุ่มยืนยัน</h5>
                        </div>
                        <div id="dataerror" class="my-2 col-12 mx-auto">
                        </div>
                        <div id="modelbtn" class="mb-3 d-flex justify-content-center row-hl">
                            <button id="submitmodel" class="btn btn-success mr-1  col-2" type="button">บันทึก</button>
                            <button id="modalclose"  class="btn btn-dark col-2" data-dismiss="modal">ยกเลิก</button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>

            <div id="data" class="">

            </div>
            
        </div>
    </div>
</template>

<script>
import { projectFirestore, projectAuth } from "../../firebase/config";
import pagination from '../../assets/pagination'

import Sidebar from "../../components/Sidebar.vue";
import router from "@/router";
import numeral from "numeral";

export default {
    components: { Sidebar },
    mounted() {
        var siteName
        var buildingName
        
        var roomName
        var systemName
        var batteryList = []
        var barcodeList = []
        var systemList = []
        var timestamp = Math.round(new Date().getTime() / 1000);


        $('#import').on('click',function(){
            $('#fileUpload').click()
        })
        var excelArray = [];


       $("#fileUpload").on("change", function () {
            batteryList = []
            excelArray = []
            //Reference the FileUpload element.
            var fileUpload = $("#fileUpload")[0];

            //Validate whether File is valid Excel file.
            var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/;
            // var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls)$/;

            if (regex.test(fileUpload.value.toLowerCase())) {
                if (typeof (FileReader) != "undefined") {
                    var reader = new FileReader();

                    //For Browsers other than IE.
                    if (reader.readAsBinaryString) {
                        reader.onload = function (e) {
                            ProcessExcel(e.target.result);
                        };
                        reader.readAsBinaryString(fileUpload.files[0]);
                    } else {
                        //For IE Browser.
                        reader.onload = function (e) {
                            var data = "";
                            var bytes = new Uint8Array(e.target.result);
                            for (var i = 0; i < bytes.byteLength; i++) {
                                data += String.fromCharCode(bytes[i]);
                            }
                            ProcessExcel(data);
                        };
                        reader.readAsArrayBuffer(fileUpload.files[0]);
                    }
                } else {
                    alert("This browser does not support HTML5.");
                }
            } else {
                alert("Please upload a valid Excel file.");
            }
        });

        
        var errdata = []
        function ProcessExcel(data) {

            //Read the Excel File data.
            var workbook = XLSX.read(data, {
                type: 'binary'
            });

            //Fetch the name of First Sheet.
            var firstSheet = workbook.SheetNames[0];

            //Read all rows from First Sheet into an JSON array.
            var headexcelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);
            var excelRow = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[workbook.SheetNames[1]]);
            var model
            var specification

            var voltageHigh
            var voltageLow
            var conductanceHigh
            var conductanceLow
            var resistanceHigh
            var resistanceLow
            
            projectFirestore.collection("Batteries").where("barcode", '==', excelRow[0].barcode).limit(1).get().then((barcodes) => {
                barcodes.forEach((barcode) => {
                    model = barcode.data().series
                })
            }).then(()=>{
                projectFirestore.collection("BatterySpecifications").where("series", '==', model).limit(1).get().then((specs) => {
                    specs.forEach((spec) => {
                        specification = spec.data()
                        voltageHigh = spec.data().floatHiUrgent
                        voltageLow = spec.data().floatLoUrgent
                        conductanceHigh = (spec.data().refG)*1.4
                        conductanceLow = (spec.data().refG)*0.6
                        resistanceHigh = (spec.data().refR)*1.5
                        resistanceLow = (spec.data().refR)*0.6
                    })
                   
                }).then(()=>{
                    console.log(specification)
                    const roomCount = headexcelRows.length
                    $('#data').html('')
                    for (let i = 0; i < roomCount; i++) {
                        const TotalString = headexcelRows[i].total_string
                        roomName = headexcelRows[i].room
                        systemName = headexcelRows[i].ups_name
                        siteName = headexcelRows[i].site

                        $('#data').append('<div class="border col-12 my-3 p-2 pl-3 rounded bg-white"><div id="head'+(i+1)+'" class="row"></div></div>')
                        $('#head'+(i+1)+'').html('<div class="col-xl-4 col-12 my-1"><b>Room</b> : '+headexcelRows[i].room+'</div>'+
                            '<div class="col-xl-4 col-12 my-1"><b>Ups name</b> : '+headexcelRows[i].ups_name+'</div>'+
                            '<div class="col-xl-4 col-12 my-1"><b>String</b> : '+headexcelRows[i].string+'</div>'+
                            '<div class="col-xl-4 col-12 my-1"><b>Date</b> : '+headexcelRows[i]['dd-mm-yy']+'</div>'+
                            '<div class="col-xl-4 col-12 my-1"><b>Ambient temp</b> : '+numeral(headexcelRows[i].ambient_temp).format("0.0")+' °C</div>'+
                            '<div class="col-xl-4 col-12 my-1"><b>Battery temp</b> : '+numeral(headexcelRows[i].battery_temp).format("0.0")+' °C</div>'+
                            '<div class="col-xl-4 col-12 my-1"><b>Float DC voltage</b> : '+headexcelRows[i].float_dc_voltage+' Vdc</div>'+
                            '<div class="col-xl-4 col-12 my-1"><b>Float DC current</b> : '+headexcelRows[i].float_dc_current+' Adc</div>'+
                            '<div class="col-xl-4 col-12 my-1"><b>Float AC voltage</b> : '+headexcelRows[i].float_ac_voltage+' Vac</div>'+
                            '<div class="col-xl-4 col-12 my-1"><b>Float AC current</b> : '+headexcelRows[i].float_ac_current+' Aac</div>'+
                            '<div class="col-xl-4 col-12 my-1"><b>Service_life(Y:M)</b> : '+headexcelRows[i]['service_life(Y:M)']+'</div>'+
                            '<div class="col-12 my-1"><b>Device conductance</b> : '+headexcelRows[i].device_conductance+'</div>'+
                            '<div class="col-12 my-1"><b>Device resistance</b> : '+headexcelRows[i].device_resistance+'</div>'
                        )
                        systemList.push({site:siteName,
                                            room:roomName,
                                            system:systemName,
                                            string:headexcelRows[i].string,
                                            Date:headexcelRows[i]['dd-mm-yy'],
                                            Group:timestamp,
                                            Ambient_temp:headexcelRows[i].ambient_temp,
                                            Battery_temp:headexcelRows[i].battery_temp,
                                            Float_DC_voltage:headexcelRows[i].float_dc_voltage,
                                            Float_DC_current:headexcelRows[i].float_dc_current,
                                            Float_AC_voltage:headexcelRows[i].float_ac_voltage,
                                            Float_AC_current:headexcelRows[i].float_ac_current,
                                            Service_life:headexcelRows[i]['service_life(Y:M)'],
                                            D_conductance:headexcelRows[i].device_conductance,
                                            D_resistance:headexcelRows[i].device_resistance
                                            })
                        $('#data').append('<table class="table table-striped mt-2 mb-5 ">'+
                            '<thead class="text-center sticky-top bg-white">'+
                                '<tr>'+
                                    '<th>Barcode</th>'+
                                    '<th>blk no</th>'+
                                    '<th>float voltage(V)</th>'+
                                    '<th>internal conductance(G)</th>'+
                                    '<th>internal resistance(mΩ)</th>'+
                                    '<th>temp(°C)</th>'+
                                    '<th>visual inspection</th>'+
                                    '<th>remarks</th>'+
                                '</tr>'+
                            '</thead>'+
                            '<tbody id="table'+(i+1)+'" class="">'+
                            '</tbody>'+
                        '</table>')
                    }
                    for (let i = 0; i < roomCount; i++) {
                        // for(let j = 0 ; j < workbook.SheetNames.length; j++){
                            var SheetName = workbook.SheetNames[i+1];
                            var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[SheetName]);
                            
                            for (let k = 0; k < excelRows.length; k++) {
                                
                                projectFirestore.collection("Batteries").where("barcode", '==', excelRows[k].barcode).get().then((barcodes) => {
                                    barcodes.forEach((barcode) => {
                                        barcodeList.push({id:barcode.id,barcode:excelRows[k].barcode,model:barcode.data().series})
                                    })
                                })
                                
                                batteryList.push({temp:excelRows[k]['temperature(C)'],barcode:excelRows[k].barcode,blockNo:excelRows[k].blocks_no,Group:timestamp,floatVoltage:excelRows[k]['float_voltage(V)'],g:excelRows[k]['internal_conductance(G)'],r:excelRows[k]['internal_resistance(mΩ)'],system:systemName,room:roomName,site:siteName,stringNo:(i+1)})
                                
                                $('#table'+(i+1)+'').append(
                                        "<tr>" +
                                            '<td class=" border-top-0 text-center border-right" >' +
                                            excelRows[k].barcode +
                                            "</td>" +
                                            '<td class=" border-top-0 text-center border-right" >' +
                                            excelRows[k].blocks_no +
                                            "</td>" +
                                            '<td id="voltage'+i+k+'" class="border-top-0  text-center border-right" >' +
                                            numeral(excelRows[k]['float_voltage(V)']).format("0.00") +
                                            "</td>" +

                                            '<td id="conductance'+i+k+'" class="border-top-0  text-center border-right" >' +
                                            excelRows[k]['internal_conductance(G)'] +
                                            "</td>" +

                                            '<td id="resistance'+i+k+'" class=" border-top-0  text-center border-right" >' +
                                            numeral(excelRows[k]['internal_resistance(mΩ)']).format("0.000") +
                                            "</td>" +
                                            '<td class=" border-top-0  text-center border-right" >' +
                                            numeral(excelRows[k]['temperature(C)']).format("0.0") +
                                            "</td>" +
                                            '<td class=" border-top-0  text-center border-right" >' +
                                            excelRows[k].visual_inspection +
                                            "</td>" +
                                            '<td class=" border-top-0  text-center border-right" >' +
                                            excelRows[k].remarks +
                                            "</td>" +
                                        "</tr>")
                                        // numeral(product.data().price).format("0,00.00") +


                                if(excelRows[k]['float_voltage(V)'] > voltageHigh || excelRows[k]['float_voltage(V)'] < voltageLow){
                                    $('#voltage'+i+k).addClass('bg-danger text-white')
                                    console.log('voltage')
                                    errdata.push({barcode:excelRows[k].barcode,error:"ค่า float voltage ไม่ถูกต้อง"})
                                }
                                if(excelRows[k]['internal_conductance(G)'] > conductanceHigh || excelRows[k]['internal_conductance(G)'] < conductanceLow){
                                    $('#conductance'+i+k).addClass('bg-danger text-white')
                                    console.log('conductance')
                                    errdata.push({barcode:excelRows[k].barcode,error:"ค่า internal conductance ไม่ถูกต้อง"})

                                }
                                if(excelRows[k]['internal_resistance(mΩ)'] > resistanceHigh || excelRows[k]['internal_resistance(mΩ)'] < resistanceLow){
                                    $('#resistance'+i+k).addClass('bg-danger text-white')
                                    console.log('resistance')
                                    errdata.push({barcode:excelRows[k].barcode,error:"ค่า internal resistance ไม่ถูกต้อง"})
                                }
                            }
                        // }
                    }
                    
                })
            })
            
            
            

        };

        $('#upload').on('click',function(){
            $('#dataerror').html('')
            for(let i = 0; i < errdata.length; i++){
                $('#dataerror').append('<div class="">'+errdata[i].barcode+' : '+errdata[i].error+'</div>')
            }
        })

        $('#submitmodel').on('click',function(){
            console.log('save')
            console.log(systemList)
            console.log(barcodeList)
            console.log('batteryList : ',batteryList)

            function save() {

                for(let i = 0 ; i < systemList.length; i++){
                    projectFirestore.collection('SystemMeasurements').add(
                        systemList[i]
                    )
                    console.log('update SystemMeasurements : ',(i+1),' / ',systemList.length)
                }

                for(let j = 0 ; j < barcodeList.length; j++){
                    
                    projectFirestore.collection('Batteries').doc(barcodeList[j].id).update({
                        group:timestamp
                    })
                    console.log('update Batteries : ',(j+1),' / ',barcodeList.length)
                }

                for(let k = 0 ; k < batteryList.length; k++){
                    
                    projectFirestore.collection('Measurements').add(
                        batteryList[k]
                    )
                    console.log('update Measurements : ',(k+1),' / ',batteryList.length)
                }

            }

            function reload() {
                $('#modalclose').click()
                alert("บันทึกข้อมูลสำเร็จ");
            }
            save()
            reload()
        })
    },
    data() {
        return {
        option: 1,
        totalItem: 1,
        };
    },
    methods: {
        
    },
}
</script>