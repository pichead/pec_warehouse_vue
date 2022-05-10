<template>
<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
        <div class="h3 mt-5 font-weight-bold">บำรุงรักษาแบตเตอรี่</div>
        
        <div class="my-5 p-4 border">
            <div class="row">

                <div class="col-6 mb-4">
                    <div class="row">
                        <div class="col pl-5 col-form-label font-weight-bold">Model</div>
                        <div class="col">
                            <select class="form-control" id="model_option">
                                <option value="ทั้งหมด">ทั้งหมด</option>
                                <option value="UPS12-150MRX">UPS12-150MRX</option>
                                <option value="UPS12-320MRX">UPS12-320MRX</option>
                                <option value="UPS12-320R MRX">UPS12-320R MRX</option>
                                <option value="UPS12-37MRX">UPS12-37MRX</option>

                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-6 mb-4">
                    <div class="row">
                        <div class="col-5 pl-5 col-form-label font-weight-bold">Location</div>
                        <div class="col-7">
                            <select class="form-control" id="location_option">
                                <option value="ทั้งหมด">ทั้งหมด</option>
                                <option value="โกดัง PEC">โกดัง PEC</option>
                                <option value="โกดัง พระราม2">โกดัง พระราม2</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-6 mb-4">
                    <div class="row">
                        <div class="col pl-5 col-form-label font-weight-bold">Charge / Measurement</div>
                        <div class="col">
                            <select class="form-control" id="cm_option">
                                <option value="ทั้งหมด">ทั้งหมด</option>
                                <option value="Charge">C "Charge"</option>
                                <option value="Measurement">M "Measurement"</option>
                            </select>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="p-4 border">
            <table class="col table table-striped">
                <colgroup>
                    <col span="1" style="width: 5%;">
                    <col span="1" style="width: 15%;">
                    <col span="1" style="width: 20%;">
                    <col span="1" style="width: 20%;">
                    <col span="1" style="width: 15%;">
                    <col span="1" style="width: 15%;">
                    <col span="1" style="width: 10%;">
                </colgroup>
                <thead class="text-center">
                    <tr class="">
                        <th>No.</th>
                        <th>Barcode</th>
                        <th>Model</th>
                        <th>Location</th>
                        <th>วันที่ชาร์จ</th>
                        <th>C / M</th>
                        <th>
                            <input id="chekbox_all" type="checkbox">
                        </th>
                    </tr>
                </thead>
                <tbody id="data" class="text-center">
                    
                </tbody>
            </table>
        </div>
        <div class="row my-4">
            <div class="col-10"></div>
            <div class="col-2">
                <button id="export_btn" type="button" class="col-12 btn btn-primary">Download(.xlsx)</button>
            </div>
        </div>

        <div id="preview_excel" class="col-11 mx-auto px-0 d-none">
                <table id="excel_data" class="col-12 table-bordered" style="padding: 0px;">
                    <colgroup>
                        <col span="1" style="width: 75px;">
                        <col span="1" style="width: 119px;">
                        <col span="1" style="width: 181px;">
                        <col span="1" style="width: 119px;">
                        <col span="1" style="width: 204px;">
                        <col span="1" style="width: 145px;">
                        <col span="1" style="width: 145px;">
                        <col span="1" style="width: 145px;">
                        <col span="1" style="width: 145px;">
                        <col span="1" style="width: 145px;">
                        <col span="1" style="width: 145px;">
                        <col span="1" style="width: 145px;">
                        <col span="1" style="width: 145px;">
                        <col span="1" style="width: 145px;">

                    </colgroup>
                    <thead>


                        <tr>
                            <td colspan="3" style="height:41px;vertical-align: middle;background-color:#F7EBB8;border:solid 1px;">รายงานการตรวจแบตเตอรี่รายเดือน :</td>
                            <td colspan="11" style="height:41px;vertical-align: middle;background-color:#F7EBB8;border:solid 1px;"></td>
                        </tr>
                        <tr style="text-align: center;height:41px;vertical-align: middle;">
                            <td style="background-color:#B8E1F7;border:solid 1px;">No.</td>
                            <td style="background-color:#B8E1F7;border:solid 1px;">Brand</td>
                            <td style="background-color:#B8E1F7;border:solid 1px;">Model</td>
                            <td style="background-color:#B8E1F7;border:solid 1px;">Ref</td>
                            <td style="background-color:#B8E1F7;border:solid 1px;">Barcode</td>
                            <td style="background-color:#B8E1F7;border:solid 1px;">MFG Code</td>
                            <td style="background-color:#B8E1F7;border:solid 1px;">Job No.</td>
                            <td style="background-color:#B8E1F7;border:solid 1px;">Location</td>
                            <td style="background-color:#B8E1F7;border:solid 1px;">Date</td>
                            <td style="background-color:#B8E1F7;border:solid 1px;">OCV</td>
                            <td style="background-color:#B8E1F7;border:solid 1px;">Mhos</td>
                            <td style="background-color:#B8E1F7;border:solid 1px;">Mhos%</td>
                            <td style="background-color:#B8E1F7;border:solid 1px;">C / M</td>
                            <td style="background-color:#B8E1F7;border:solid 1px;">Batt Temp</td>
                        </tr>
                    </thead>
                    <tbody id="excel_data_row">

                    </tbody>
                    <tfoot>

                    </tfoot>
                </table>
        </div>

        </div>
    </div>
</template>

<script>
import { projectFirestore, projectAuth } from "../../firebase/config";
import Sidebar from "../../components/Sidebar.vue";
import router from "@/router";
export default {
    components: { Sidebar },
    mounted() {

        preload()
        var batt = []
        async function preload(){
            
            const get_batt = await projectFirestore.collection("Batteries_beta").where('measurements','!=',[]).get()
            batt = []
            var start_num_row = 1 
            get_batt.forEach((batt_data)=>{
                batt.push(batt_data.data())
                console.log(batt_data.data())
                const last_cm = batt_data.data().measurements.length - 1
                var date = new Date(batt_data.data().measurements[last_cm].Date*1000);
                var day = date.getDate();
                var month = date.getMonth();
                var year = date.getFullYear();
                if (day < 10) {
                    day = "0" + day;
                }
                if (month < 10) {
                    month = "0" + month;
                }
                var new_date = day + "-" + month + "-" + year;
                $('#data').html('')
                $('#data').append(
                    '<tr id="row_'+start_num_row+'" class="table_row" data-model="'+batt_data.data().series+'" data-location="'+batt_data.data().measurements[last_cm].Location+'" data-cm="'+batt_data.data().measurements[last_cm].type+'">'+
                        '<td class="num_row">'+start_num_row+'</td>'+
                        '<td>'+batt_data.data().barcode+'</td>'+
                        '<td class="model_row">'+batt_data.data().series+'</td>'+
                        '<td class="location_row">'+batt_data.data().measurements[last_cm].Location+'</td>'+
                        '<td>'+new_date+'</td>'+
                        '<td class="cm_row">'+batt_data.data().measurements[last_cm].type+'</td>'+
                        '<td>'+
                            '<input data-id="'+batt_data.data().barcode+'" class="checkbox_child" type="checkbox">'+
                        '</td>'+
                    '</tr>'
                )
            })
            
        }

        $('#export_btn').on('click',function(){
            // const table_id = "data_table"
            const table_id = "excel_data"
            
            
            const file_name = "Inspection Form_2022"
            tableToExcel(table_id,file_name)
        })


        var tableToExcel = (function() {

            var uri = 'data:application/vnd.ms-excel;base64,'
                , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
                , base64 = function (s) { return window.btoa(unescape(encodeURIComponent(s))) }
                , format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }) }
            return function (table, name) {
                if (!table.nodeType) table = document.getElementById(table)
                var ctx = { worksheet: name || 'Worksheet', table: table.innerHTML }
                window.location.href = uri + base64(format(template, ctx))
            }
        })()

        async function get_batt_excel(){
            var amount_batt = []
            var export_batt_data = []
            const batt_input = $('.batt_input').length

            
            await get_amount_export()
            await render_table_export_excel()


            function get_amount_export(){
                for(let i = 0; i < batt_input; i++){
                    if($($('.batt_input')[i]).val() > 0){
                        amount_batt.push({
                            model:$($('.batt_input')[i]).data('model'),
                            inspection:$($('.batt_input')[i]).data('ins'),
                            po:$($('.batt_input')[i]).data('po'),
                            amount: parseInt($($('.batt_input')[i]).val()),
                            location:$($('.batt_input')[i]).data('location')
                        })

                    }
                }
            }

            function render_table_export_excel(){
                console.log('batt_data : ',batt_data)
                $('#excel_data_row').html('')
                var running_number_export = 0
                for(let i = 0; i < amount_batt.length; i++){
                    const total_batt_in_model = amount_batt[i].amount
                    var total_bat_get = 0
                    for(let j = 0; j < batt_data.length; j++){

                        if(amount_batt[i].model == batt_data[j].series && amount_batt[i].po == batt_data[j].poNo && total_batt_in_model > total_bat_get){
                            console.log('total_batt_in_model : ',total_batt_in_model,' total_bat_get : ',total_bat_get)
                            console.log(amount_batt[i].model)
                            running_number_export++
                            total_bat_get++
                            $('#excel_data_row').append(
                                '<tr  style="text-align: center; height:41px;vertical-align: middle;">'+
                                    '<td>'+
                                        running_number_export+
                                    '</td>'+
                                    '<td>'+
                                        // brand
                                    '</td>'+
                                    '<td>'+
                                        batt_data[j].series+
                                    '</td>'+
                                    '<td>'+
                                        //Ref
                                    '</td>'+
                                    '<td>'+
                                        batt_data[j].barcode+
                                    '</td>'+
                                    '<td>'+
                                        //MFG Code
                                    '</td>'+
                                    '<td>'+
                                        batt_data[j].jobNo+
                                    '</td>'+
                                    '<td>'+
                                        amount_batt[i].location+
                                    '</td>'+
                                    '<td>'+
                                        //date
                                    '</td>'+
                                    '<td>'+
                                        //OCV
                                    '</td>'+
                                    '<td>'+
                                        //Mhos
                                    '</td>'+
                                    '<td>'+
                                        //Mhos%
                                    '</td>'+
                                    '<td>'+
                                        // C/M
                                    '</td>'+
                                    '<td>'+
                                        // batt temp
                                    '</td>'+
                                '</tr>'
                            )
                        }
                    }
                }
                
            }   

        }   




        $('#chekbox_all').on('change',function(){
            
            if($(this).is(':checked')){
                $('.checkbox_child').prop('checked', true);
            }
            else{
                $('.checkbox_child').prop('checked', false);
            }
        })


        $('#model_option').on('change',async function(){
            filter()
        })
         $('#location_option').on('change',async function(){
            
            filter()
        })
        $('#cm_option').on('change',async function(){
            
            filter()
        })

        async function filter(){
            await preload()
            const model_select = $('#model_option').val()
            const location_select = $('#location_option').val()
            const cm_select = $('#cm_option').val()

            $('.table_row').each(function(index){
                if(model_select != 'ทั้งหมด' && model_select != $(this).data('model')){
                    $(this).remove()
                    console.log('del model ',$(this).data('model'))
                }
                if(location_select != 'ทั้งหมด' && location_select != $(this).data('location')){
                    $(this).remove()
                    console.log('del locatio  ',$(this).data('location'))

                }
                if(cm_select != 'ทั้งหมด' && cm_select != $(this).data('cm')){
                    $(this).remove()
                    console.log('del cm ',$(this).data('cm'))

                }
                
            })

        }

    }
}
</script>