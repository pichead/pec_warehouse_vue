<template>
<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
        <div class="h3 mt-5 font-weight-bold">บำรุงรักษาแบตเตอรี่(คลัง)</div>
        
        <div class="my-5 p-4 border">
            <div class="row">

                <div class="col-6 mb-4">
                    <div class="row">
                        <div class="col pl-5 col-form-label font-weight-bold">Model</div>
                        <div class="col">
                            <select class="form-control" id="model_option">
                                <option value="ทั้งหมด">ทั้งหมด</option>
                                
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
                                <option value="Charge">Charge</option>
                                <option value="Measurement">Measurement</option>
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
                        <th>LastDate</th>
                        <th>Wait for Action</th>
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
                            <td style="background-color:#B8E1F7;border:solid 1px;">OCV(V)</td>
                            <td style="background-color:#B8E1F7;border:solid 1px;">Mhos(Siemen)</td>
                            <td style="background-color:#B8E1F7;border:solid 1px;">Mhos%</td>
                            <td style="background-color:#B8E1F7;border:solid 1px;">C / M</td>
                            <td style="background-color:#B8E1F7;border:solid 1px;">Batt Temp(°C)</td>
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
        
        headload()

        preload()
        var batt = []
        var batt_model = []
        var batt_scheduler = []
        
        async function headload(){
            const get_all_model = await projectFirestore.collection("BatterySpecifications").where('visible','==',true).orderBy('series','asc').get()
            
            get_all_model.forEach((model_batt)=>{
                $('#model_option').append(
                    '<option value="'+model_batt.data().series+'">'+model_batt.data().series+'</option>'
                )
            })

            
        }


        async function preload(){
            const get_batt_model = await projectFirestore.collection("BatterySpecifications").where('visible','==',true).get()
            const get_batt = await projectFirestore.collection("Batteries_beta").where('measurements','!=',[]).get()
            const get_scheduler = await projectFirestore.collection("BatteryMaintenanceScheduler").get()
            batt = []
            batt_model = []
            batt_scheduler = []
            var start_num_row = 1
            await getmodel()
            await getscheduler()
            await renderbatt()
            
            function getmodel(){
                get_batt_model.forEach((model_data)=>{
                    batt_model.push(model_data.data())
                })
            }
            function getscheduler(){
                get_scheduler.forEach((scheduler_batt)=>{
                    batt_scheduler.push(scheduler_batt.data())
                })
            }
            function renderbatt(){
                $('#data').html('')
                get_batt.forEach((batt_data)=>{
                    batt.push(batt_data.data())
                    const last_c = get_last_c()
                    const last_m = get_last_m()

                    function get_last_c(){
                        for(let i = batt_data.data().measurements.length-1; i > -1; i--){
                            if(batt_data.data().measurements[i].type == 'Charge'){
                                return i
                            }
                            else{
                                if(i == 0){
                                    return 'No data'
                                }
                            }
                        }
                    }
                    function get_last_m(){
                        for(let i = batt_data.data().measurements.length-1; i > -1; i--){
                            if(batt_data.data().measurements[i].type == 'Measurement'){
                                return i
                            }
                            else{
                                if(i == 0){
                                    return 'No data'
                                }
                            }
                        }
                    }

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
                    
                    const brand_from_model = batt_model.find(x => x.series === batt_data.data().series).brand
                    const batt_charge_cycle = batt_scheduler.find(x => x.model === batt_data.data().series).charge_cycle
                    const batt_measurement_cycle = batt_scheduler.find(x => x.model === batt_data.data().series).measurement_cycle

                    const cm_status = get_wait_cm()                    
                    function get_wait_cm(){
            
                        if(last_c != 'No data'){
                            var count_c_date = (Date.now()/1000) - batt_data.data().measurements[last_c].Date
                            if(count_c_date > batt_charge_cycle){
                                return 'Charge'
                            }
                            else{
                                if(count_c_date > batt_measurement_cycle){
                                    return 'Measurement'
                                }
                                else{
                                    return 'No Data'
                                }
                            }
                        }
                        else{
                            return 'Charge'
                        }


                    }
                    console.log(cm_status)
                    if(cm_status != 'No Data'){
                        $('#data').append(
                            '<tr id="row_'+start_num_row+'" class="table_row" data-model="'+batt_data.data().series+'" data-location="'+batt_data.data().measurements[last_cm].Location+'" data-cm="'+cm_status+'">'+
                                '<td class="num_row">'+start_num_row+'</td>'+
                                '<td>'+batt_data.data().barcode+'</td>'+
                                '<td class="model_row">'+batt_data.data().series+'</td>'+
                                '<td class="location_row">'+batt_data.data().measurements[last_cm].Location+'</td>'+
                                '<td>'+new_date+'</td>'+
                                '<td class="cm_row">'+cm_status+'</td>'+
                                '<td>'+
                                    '<input data-cm="'+cm_status+'" data-barcode="'+batt_data.data().barcode+'" data-brand="'+brand_from_model+'" data-model="'+batt_data.data().series+'" data-ref="" data-mfg="" data-jobno="'+batt_data.data().jobNo+'" data-location="'+batt_data.data().measurements[last_cm].Location+'" class="checkbox_child" type="checkbox">'+
                                '</td>'+
                            '</tr>'
                        )
                        start_num_row++
                    }


                    

                })
            }
            
        }

        $('#export_btn').on('click',function(){
            // const table_id = "data_table"
            const table_id = "excel_data"
            
            
            const file_name = "maintenance"
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

        $('#chekbox_all').on('change',async function(){
            
            
            await check_all()
            await getdata_for_excel()
            function check_all(){
                if($(this).is(':checked')){
                    $('.checkbox_child').prop('checked', true);
                }
                else{
                    $('.checkbox_child').prop('checked', false);
                }
            }
        })

 

        $('#data').on('change','.checkbox_child',function(){
            getdata_for_excel()
            
        })

        async function getdata_for_excel(){
            var checkbox_data = []
            const checkbox_input = $('.checkbox_child')
            await get_checkbox_data()
            await render_table_export_excel(checkbox_data)

            function get_checkbox_data(){
                for(let i = 0; i < checkbox_input.length; i++ ){
                    if($(checkbox_input[i]).is(':checked')){
                        checkbox_data.push({
                            brand:$(checkbox_input[i]).data('brand'),
                            model:$(checkbox_input[i]).data('model'),
                            barcode:$(checkbox_input[i]).data('barcode'),
                            jobno:$(checkbox_input[i]).data('jobno'),
                            location:$(checkbox_input[i]).data('location'),
                            cm:$(checkbox_input[i]).data('cm')
                        })
                    }

                }
            
            }
        }



        function render_table_export_excel(checkbox_data){
            $('#excel_data_row').html('')
            var running_number_export = 0
            console.log('render : ',checkbox_data)
            for(let i = 0; i < checkbox_data.length; i++){
                
                running_number_export++
                $('#excel_data_row').append(
                    '<tr  style="text-align: center; height:41px;vertical-align: middle;">'+
                        '<td>'+
                            running_number_export+
                        '</td>'+
                        '<td>'+
                            checkbox_data[i].brand+
                        '</td>'+
                        '<td>'+
                            checkbox_data[i].model+
                        '</td>'+
                        '<td>'+
                            //Ref
                        '</td>'+
                        '<td>'+
                            checkbox_data[i].barcode+
                        '</td>'+
                        '<td>'+
                            //MFG Code
                        '</td>'+
                        '<td>'+
                            checkbox_data[i].jobno+
                        '</td>'+
                        '<td>'+
                            checkbox_data[i].location+
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
                            checkbox_data[i].cm+
                        '</td>'+
                        '<td>'+
                            // batt temp
                        '</td>'+
                    '</tr>'
                )

                
            }
            
        }   


       


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
                    console.log($(this).html())
                    $(this).remove()
                }
                if(location_select != 'ทั้งหมด' && location_select != $(this).data('location')){
                    console.log($(this).html())

                    $(this).remove()

                }
                if(cm_select != 'ทั้งหมด' && cm_select != $(this).data('cm')){
                    console.log($(this).data('cm'))
                    console.log($(this).html())
                    $(this).remove()

                }
                
            })

        }

    }
}
</script>