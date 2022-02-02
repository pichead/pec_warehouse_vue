
<style>


</style>
<template>

<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
            
            <div class="border my-5 bg-white">
                <div class="row p-5">
                    <div class="col-6">
                        <div class="form-group row">
                            <label class="col-5 col-form-label">Site</label >
                            <div class="col-7">
                                <select id="siteoption" class="form-control form-control-sm">
                                    <option selected disabled>เลือก Site</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group row">
                            <label class="col-5 col-form-label">Building</label >
                            <div class="col-7">
                                <select id="sitebuilding" class="form-control form-control-sm" disabled>
                                    <option selected disabled>เลือก Building</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 mb-5 mt-4">
                        <div class="border-bottom border-secondary col-12"></div>
                    </div>
                    <div class="col-6">
                        <div class=" col pr-0" style="height:575px">
                            <div id="roomlist" class="border overflow-auto" style="height:575px">
                                <div id="defaultRoomtext" class="text-center" style="margin-top:287px">เลือก Building เพื่อดูข้อมูล</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="col py-2" style="background-color:#f4f4f4;height:575px">
                            <div id="defaultSystemtext" class="text-center" style="margin-top:287px;">เลือก System เพื่อดูข้อมูล</div>
                            <div id="systemdata" class="d-none">
                                <div class="form-group clearfix">
                                    <div class="float-right">
                                        <svg id="edit-system" xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" type="button" class="bi bi-lock-fill" viewBox="0 0 16 16">
                                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                                        </svg>
                                        <!-- <i class="bi bi-lock-fill" style="height:30px;width:30px"></i>
                                        <button id="edit-system" class="btn-sm btn-danger">-</button> -->
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-5 col-form-label pl-5">Job No.</label >
                                    <div class="col-7 pr-5">
                                        <input id="JobNoData" class="system-data form-control form-control-sm"  disabled/>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-5 col-form-label pl-5">BMS</label >
                                    <div class="col-7 pr-5" id="BmsData">
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="option0show" name="showoption0" value="true" class="system-data custom-control-input optionshow"  disabled/>
                                            <label class="custom-control-label" for="option0show">Yes</label>
                                        </div>
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="option0hidden" name="showoption0" class="system-data custom-control-input optionshow" value="false" checked="checked"  disabled/>
                                            <label class="custom-control-label" for="option0hidden">No</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-5 col-form-label pl-5">Midpoint</label >
                                    <div class="col-7 pr-5">
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="option1show" name="showoption1" value="true" class="system-data custom-control-input optionshow"  disabled/>
                                            <label class="custom-control-label" for="option1show">Yes</label>
                                        </div>
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="option1hidden" name="showoption1" class="system-data custom-control-input optionshow" value="false" checked="checked"  disabled/>
                                            <label class="custom-control-label" for="option1hidden">No</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="my-4">
                                    <div class="form-group row">
                                        <div class="pl-5 col-12 pr-5">
                                            <div class="border-bottom border-secondary"></div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="form-group row">
                                    <label class="col-5 col-form-label pl-5">UPS Name</label >
                                    <div class="col-7 pr-5">
                                        <input id="UpsNameData" class="system-data form-control form-control-sm"  disabled/>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-5 col-form-label pl-5">Model</label >
                                    <div class="col-7 pr-5">
                                        <input id="ModelData" class="system-data form-control form-control-sm"  disabled/>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-5 col-form-label pl-5">Total string</label >
                                    <div class="col-7 pr-5">
                                        <input id="TotalStringData" class="system-data form-control form-control-sm"  disabled/>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-5 col-form-label pl-5">Total blk per str</label >
                                    <div class="col-7 pr-5">
                                        <input id="TotalBlkData"  class="system-data form-control form-control-sm"  disabled/>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-5 col-form-label pl-5">Installation Date</label >
                                    <div class="col-7 pr-5">
                                        <input id="InstallationDateData" class="system-data form-control form-control-sm"  disabled/>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-5 col-form-label pl-5">Inspector</label >
                                    <div class="col-7 pr-5">
                                        <input id="InspectorData" class="system-data form-control form-control-sm"  disabled/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="row mt-5">
                            <div class="pl-5 col-6">
                                <div class="row">
                                    <div class="col-6">
                                        <button type="button" class="btn btn-outline-primary col-12 text-center p-2" data-toggle="modal" data-target="#exportmodal">Export</button>
                                    </div>
                                    <div class="col-6">
                                        <a type="button" class="btn btn-primary col-12 text-center p-2" href="/ImportExcel">Import</a>
                                        <!-- <button type="button" class="btn btn-primary col-12 text-center p-2">Import</button> -->
                                    </div>
                                </div>

                            </div>
                            <div class="col-6 px-3">
                                <button id="BatterySystem" type="button" class="btn btn-secondary col-12 text-center p-2 not-allowed" disabled>Batteries</button>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>

            <div class="modal" id="exportmodal" aria-hidden="true" style="display: none;">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                    <h5 class="text-center mt-4">กรุณาเลือก UPS ที่ต้องการ</h5>
                    <div class="modal-body" >
                        <input id="exportsearch" class="form-control form-control-sm mb-3" placeholder="Search">
                        <div class="col-12 overflow-auto" style="height:600px;">
                            <table id="tableexport" class="table text-center border">
                                <thead class="bg-primary text-light sticky-top">
                                    <tr>
                                        <td>Room</td>
                                        <td>UPS Name</td>
                                        <td><div class="my-auto"><input id="checkboxall" type="checkbox" class="" style="width: 20px; height: 20px;"></div></td>
                                    </tr>
                                </thead>
                                <tbody id="exporttabledata">

                                </tbody>
                            </table>
                        </div>
                        <div class="col-8 mx-auto row">
                            <div class="col-6">
                                <button id="exportexcel" type="button" class="btn btn-primary col-12 text-center p-1">Export</button>
                            </div>
                            <div class="col-6">
                                <div type="button" class="btn btn-danger col-12 text-center p-1">Cancel</div>
                            </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { projectFirestore, projectAuth } from "../../firebase/config";
import pagination from '../../assets/pagination'

import Sidebar from "../../components/Sidebar.vue";
import router from "@/router";
export default {
    components: { Sidebar },
    mounted() {
        var url = window.location.pathname;
        var id = url.substring(url.lastIndexOf('/') + 1);
        // var productId = this.$route.params.productId
        var dataid = id

        var system
        var room
        var siteid
        var buildingNo
        var order_room_list
        projectFirestore.collection("Sites").get().then((Sites) => {
            Sites.forEach((Site) => {
                showdata(Site)
            })
        }).then(()=>{
            $('#siteoption').addClass('selectpicker')
            $('#siteoption').attr('data-live-search',true)
            $('.selectpicker').selectpicker();
            $('.btn-light').addClass('border')
        })
        
        function showdata (Site){
            $('#siteoption').append('<option value="'+Site.id+'">'+Site.data().name+'</option>')
            
        }
            
        $(document).ready(function(){
            $("#exportsearch").on("keyup", function() {
                var value = $(this).val().toLowerCase();
                $("#exporttabledata tr").filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                });
            });
        });

        $('#siteoption').on('change',function(){
            
            $('#BatterySystem').attr('disabled',true)
            $('#BatterySystem').addClass('not-allowed')

            siteid = $('#siteoption option:selected').val()
            projectFirestore.collection("Sites").doc(siteid).get().then((sitebuilding) => {
                
                const buildinglength = sitebuilding.data().buildings.length
                // const order_building = _.orderBy(sitebuilding.data(), ['name'], ['asc']);
                $('#sitebuilding').html('')
                $('#sitebuilding').append('<option selected disabled>เลือก Building</option>')
                for(let i = 0; i < buildinglength; i++){
                    $('#sitebuilding').append('<option value="'+i+'">'+sitebuilding.data().buildings[i].name+'</option>')
                    if(i == (buildinglength-1)){
                        $('#sitebuilding').attr('disabled',false)
                        $('#sitebuilding').addClass('selectpicker')
                        $('#sitebuilding').attr('data-live-search',true)
                        $('.selectpicker').selectpicker();
                        $('.btn-light').addClass('border')
                        $('.btn-light').addClass('bg-white')

                    }
                }
            
                $('#sitebuilding').on('change',function(){
                    $('#BatterySystem').attr('disabled',true)
                    $('#BatterySystem').addClass('not-allowed')
                    $('#defaultSystemtext').removeClass('d-none');
                    $('#systemdata').addClass('d-none')
                    buildingNo = $('#sitebuilding option:selected').val()
                    const roomlength = sitebuilding.data().buildings[buildingNo].rooms.length
                    const room_list = sitebuilding.data().buildings[buildingNo].rooms

                    order_room_list = _.orderBy(room_list, ['name'], ['asc']);

                    
                    $('#roomlist').html('')
                    $('#exporttabledata').html('')
                    
                    for(let i = 0; i < roomlength; i++){
                        async function showrooms (){

                            function roomname (){
                                $('#roomlist').append(
                                        '<div class="col-12 border p-1 pl-3 roomlist" style="background-color:#fff0b5" data-toggle="collapse" data-roomlist="'+i+'" data-show="'+false+'" data-target="#room'+i+'" aria-expanded="false" aria-controls="room'+i+'">● Room : '
                                        +order_room_list[i].name+
                                        '<div class="float-right">'+
                                            '<i id="systemshow'+i+'" class="bi bi-caret-down-fill d-none"></i>'+
                                            '<i id="systemdontshow'+i+'" class="bi bi-caret-left-fill"></i>'+
                                        '</div>'+
                                        '</div>'+
                                        '<div class="col-12 p-0 collapse multi-collapse" id="room'+i+'"></div>'
                                )

                                $('#exporttabledata').append(
                                    '<tr>'+
                                        '<td>'+order_room_list[i].name+'</td>'+
                                        '<td id="modalroom'+i+'"></td>'+
                                        '<td id="modalcheckbox'+i+'"></td>'+
                                    '</tr>'
                                )

                            }
                            
                            function systemname(){
                                const systemlength =  order_room_list[i].systems.length
                                for(let j = 0; j < systemlength; j++){
                                    $('#room'+i).append(
                                        '<div class="system border p-1 pl-5" style="background-color:#efefef;" data-systemname="'+order_room_list[i].systems[j].name+'"  data-system="'+j+'" data-room="'+i+'">System : '+order_room_list[i].systems[j].name+'</div>'
                                    )
                                    $('#modalroom'+i).append(
                                        '<div class="py-2">'+order_room_list[i].systems[j].name+'</div>'
                                    )
                                    $('#modalcheckbox'+i).append(
                                        '<div class="py-2"><input type="checkbox" class="chacklist" data-string="'+order_room_list[i].systems[j].totalStrings+'" data-string="'+j+'" data-room="'+i+'" data-systems="'+j+'" style="width: 20px; height: 20px;"></div>'
                                    )
                                }
                            }
                            

                            await roomname()
                            await systemname()
                        }
                        showrooms(i)
                       
                    }

                    $('#roomlist').on('click', '.roomlist', function() {
                        var roomlist = $(this).data('roomlist')
                        var showing = $(this).data('show')
     

                        if(showing == false){
                            $(this).data('show',true)
                            $('#systemshow'+roomlist).removeClass('d-none')
                            $('#systemdontshow'+roomlist).addClass('d-none')
                        }
                        else{
                            $(this).data('show',false)
                            $('#systemdontshow'+roomlist).removeClass('d-none')
                            $('#systemshow'+roomlist).addClass('d-none')
                        }
                        

                    })


                    $('#roomlist').on('click', '.system', function() {
                        $('#BatterySystem').attr('disabled',false)
                        $('#BatterySystem').removeClass('not-allowed')

                        $(".system-data").prop('disabled', true);
                        $('#defaultSystemtext').addClass('d-none');
                        $('#systemdata').removeClass('d-none')
                        system = $(this).data('system')
                        room = $(this).data('room')
                        var text_click = $(this).text()
                        $('.bi-check-lg').remove()
                        $(this).html('<i class="bi bi-check-lg"></i> '+text_click)
                        // $('<i class="bi bi-check2"></i>').insertBefore($(this).text())
                        const slectsystemname = $(this).data('systemname')
                        var InstallationDate = new Date(order_room_list[room].systems[system].installationDate.seconds*1000)
                        var localDate = InstallationDate.toLocaleDateString("th-TH")
                        var hours = InstallationDate.getHours();
                        var minutes = "0" + InstallationDate.getMinutes();
                        var seconds = "0" + InstallationDate.getSeconds();
                        var formattedTime = hours + ':' + minutes.substr(-2);
                        var model
                        const getbatterys = projectFirestore.collection("Batteries").where("system", "==", slectsystemname).limit(1).get().then((getbatterys) => {
                            getbatterys.forEach((getbattery) => {
                                model = getbattery.data().series
                                $('#ModelData').val(getbattery.data().series)
                            })
                        })
                        
                        $('#JobNoData').val(order_room_list[room].systems[system].job)
                        

                        // $('#ModelData').val(sitebuilding.data().buildings[buildingNo].rooms[room].systems[system].job)
                        // $('#BrandData').val(sitebuilding.data().buildings[buildingNo].rooms[room].systems[system].job)
                        // $('#TypeData').val(sitebuilding.data().buildings[buildingNo].rooms[room].systems[system].job)
                        $('#UpsNameData').val(order_room_list[room].systems[system].name)
                        $('#TotalStringData').val(order_room_list[room].systems[system].totalStrings)
                        $('#TotalBlkData').val(order_room_list[room].systems[system].blockPerString)
                        $('#InstallationDateData').val(localDate)
                        $('#InspectorData').val(order_room_list[room].systems[system].inspector)

                        if(order_room_list[room].systems[system].isBMS == true){
                            $('#BmsData').html(
                                '<div class="custom-control custom-radio custom-control-inline">'+
                                    '<input type="radio" id="bmsshow" name="bmsshow" value="true" class="system-data custom-control-input optionshow" checked="checked"  disabled>'+
                                    '<label class="custom-control-label" for="bmsshow">Yes</label>'+
                                '</div>'+
                                '<div class="custom-control custom-radio custom-control-inline">'+
                                    '<input type="radio" id="bmshidden" name="bmsshow" class="system-data custom-control-input optionshow" value="false"  disabled>'+
                                    '<label class="custom-control-label" for="bmshidden">No</label>'+
                                '</div>'
                            )
                            
                        }else{
                            $('#BmsData').html(
                                '<div class="custom-control custom-radio custom-control-inline">'+
                                    '<input type="radio" id="bmsshow" name="bmsshow" value="true" class="system-data custom-control-input optionshow"  disabled>'+
                                    '<label class="custom-control-label" for="bmsshow">Yes</label>'+
                                '</div>'+
                                '<div class="custom-control custom-radio custom-control-inline">'+
                                    '<input type="radio" id="bmshidden" name="bmsshow" class="system-data custom-control-input optionshow" value="false" checked="checked"  disabled>'+
                                    '<label class="custom-control-label" for="bmshidden">No</label>'+
                                '</div>'
                            )
                        }
                        if(order_room_list[room].systems[system].isMidpoint == true){
                            $('#MidpointData').html(
                                '<div class="custom-control custom-radio custom-control-inline">'+
                                    '<input type="radio" id="Midpointshow" name="Midpointshow" value="true" class="system-data custom-control-input optionshow" checked="checked"  disabled>'+
                                    '<label class="custom-control-label" for="Midpointshow">Yes</label>'+
                                '</div>'+
                                '<div class="custom-control custom-radio custom-control-inline">'+
                                    '<input type="radio" id="Midpointhidden" name="Midpointshow" class="system-data custom-control-input optionshow" value="false"  disabled>'+
                                    '<label class="custom-control-label" for="Midpointhidden">No</label>'+
                                '</div>'
                            )
                            
                        }else{
                            $('#MidpointData').html(
                                '<div class="custom-control custom-radio custom-control-inline">'+
                                    '<input type="radio" id="Midpointshow" name="Midpointshow" value="true" class="system-data custom-control-input optionshow"  disabled>'+
                                    '<label class="custom-control-label" for="Midpointshow">Yes</label>'+
                                '</div>'+
                                '<div class="custom-control custom-radio custom-control-inline">'+
                                    '<input type="radio" id="Midpointhidden" name="Midpointshow" class="system-data custom-control-input optionshow" value="false" checked="checked"  disabled>'+
                                    '<label class="custom-control-label" for="Midpointhidden">No</label>'+
                                '</div>'
                            )
                        }
                        $('#BatterySystem').on('click', function() {

                            router.push({ path: `/system/${siteid}/${buildingNo}/${room}/${system}/` });
                        })

                    })

                    $('#checkboxall').on('change',function(){
                        if ($(this).is(':checked')) {
                            $('.chacklist').prop('checked', true)

                        }
                        else{
                            $('.chacklist').prop('checked', false)
                        }

                    })


                })



            })
        })

        $('#edit-system').on('click',function(){
            $(".system-data").prop('disabled', function(i, v) { return !v; });
        })

        $('#exportexcel').on('click', function(){
            $('.chacklist').each(function(){
            if($(this).is(':checked')){
                console.log('click')
                const excelroom = $(this).data('room')
                const excelsystems = $(this).data('systems')
                const excelstring = $(this).data('string')

                var sheetdata = [{sheetid:"system",header:true}]
                var exceldata = []
                var sitename
                var buildingname
                var roomname
                var systemname
                var totalString
                var blockPerString
                var totalBattery
                var rawdata = []
                var arrayRoom = []
                var arrayRoomName = []
                var roomlist = []
                
                arrayRoom =[{room:excelroom,system:excelsystems,string:excelstring}]
            }


            async function taskOne(){

            // $('.chacklist').each(function(){
            //     if($(this).is(':checked')){
            //         const excelroom = $(this).data('room')
            //         const excelsystems = $(this).data('systems')
            //         const excelstring = $(this).data('string')
            //         arrayRoom.push({room:excelroom,system:excelsystems,string:excelstring})
            //     }
            // })
                
                const Site = await projectFirestore.collection("Sites").doc(siteid).get()

                for(let k = 0 ; k < arrayRoom.length; k++){
                    sitename = Site.data().name
                    buildingname = Site.data().buildings[buildingNo].name
                    roomname = order_room_list[arrayRoom[k].room].name
                    systemname = order_room_list[arrayRoom[k].room].systems[arrayRoom[k].system].name
                    totalString = order_room_list[arrayRoom[k].room].systems[arrayRoom[k].system].totalStrings
                    blockPerString = order_room_list[arrayRoom[k].room].systems[arrayRoom[k].system].blockPerString
                    totalBattery = blockPerString*totalString
                    for(let i = 0 ; i < totalString; i++){
                        const systemname_string = systemname + '_string_' + (i+1)
                        sheetdata.push({sheetid:systemname_string,header:true})
                    }
                    arrayRoomName.push({site:sitename,building:buildingname,room:roomname,system:systemname,totalString:totalString})
                    roomlist.push(roomname)
                }
                
                for(let k = 0 ; k < arrayRoomName.length ; k++){
                    for(let i=0 ;i < totalString;i++ ){
                        // for(let j = 0 ; j < blockPerString;j++ ){
                            const Batterys = await projectFirestore.collection("Batteries")
                                .where("site", "==", arrayRoomName[k].site)
                                .where("building", "==", arrayRoomName[k].building)
                                .where("room", "==", arrayRoomName[k].room)
                                .where("system", "==", arrayRoomName[k].system)
                                .where("stringNo", "==", (i+1))
                                // .where("blockNo", "==", (j+1))
                                .get()
                            Batterys.forEach((Battery) => {
                                const batdata = {room:arrayRoomName[k].room,
                                                ups_name:Battery.data().system,
                                                barcode:Battery.data().barcode,
                                                string:Battery.data().stringNo,
                                                blocks_no:Battery.data().blockNo,
                                                'float_voltage(V)':"",
                                                'internal_conductance(G)':"",
                                                'internal_resistance(mΩ)':"",
                                                'temperature(C)':"",
                                                visual_inspection:"",
                                                remarks:""
                                                }
                                rawdata.push(batdata)

                            })
                        // }
                    }
                    
                }

                function onlyUnique(value, index, self) {
                    return self.indexOf(value) === index;
                }
                var uniqueroom = roomlist.filter(onlyUnique);


                for(let x = 0 ; x < arrayRoomName.length; x++){
                    for(let k = 0; k < arrayRoomName[x].totalString; k++){
                        var arrayrawExcel = []
                        for(let i = 0; i < rawdata.length; i++){
                            if(((k+1) == rawdata[i].string) && (rawdata[i].ups_name == arrayRoomName[x].system)){
                                arrayrawExcel.push(rawdata[i])
                            }
                            if(i == (rawdata.length-1)){
                                const order_arrayrawExcel = _.orderBy(arrayrawExcel, ['blocks_no'], ['asc']);
                                exceldata.push(order_arrayrawExcel)
                            }
                        }
                    }

                }
                
            }

            function exportexcel(){
                setTimeout(
                function(){
                    console.log('export')
                    console.log(sheetdata)
                    console.log(exceldata)
                    
                    var systemSheet = []
                    for(let i = 0; i < totalString; i++){
                        systemSheet.push({site:$('#siteoption option:selected').text(),room:roomname,ups_name:systemname,string:(i+1),'dd-mm-yy':"",status:"",ambient_temp:"",battery_temp:"",float_dc_voltage:"",float_dc_current:"",float_ac_voltage:"",float_ac_current:"",'service_life(Y:M)':"",device_conductance:"",device_resistance:""})
                    }
                    exceldata.unshift(systemSheet)
                    projectFirestore.collection("Sites").doc(siteid).get().then((Site) => {
                            buildingname = systemname
                            buildingname = buildingname.replace(/\s+/g, '_');
                            window.saveFile = alasql('SELECT INTO XLSX("'+buildingname+'.xlsx",?) FROM ?',
                                    [sheetdata,exceldata]);
                    })
                }, 1000);
            }
            
            async function main() {
                await taskOne();
                await exportexcel();
            }
            main();

            })

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