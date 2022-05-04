<template>
<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
        <div class="h3 mt-5 font-weight-bold">แบตเตอรี่เข้าใหม่</div>
        
        <div class="my-5 p-4 border">
            <div class="row">
                <div class="col-6 mb-4">
                    <div class="row">
                        <div class="col-4 col-form-label font-weight-bold">Inspection No.</div>
                        <div class="col">
                            <select class="form-control" id="inspection_option"></select>
                        </div>
                    </div>
                </div>
                <div class="col-6 mb-4">
                    <div class="row">
                        <div class="col-4 pl-5 col-form-label font-weight-bold">Po No.</div>
                        <div class="col">
                            <select class="form-control" id="po_option" disabled></select>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="p-4 border">
            <table id="data_table" class="col table">
                <colgroup>
                    <col span="1" style="width: 5%;">
                    <col span="1" style="width: 15%;">
                    <col span="1" style="width: 15%;">
                    <col span="1" style="width: 10%;">
                    <col span="1" style="width: 20%;">
                    <col span="1" style="width: 15%;">
                    <col span="1" style="width: 10%;">
                    <col span="1" style="width: 10%;">
                </colgroup>
                <thead class="text-center thead-dark">
                    <tr class="">
                        <th>No.</th>
                        <th>Inspection</th>
                        <th>PO No.</th>
                        <th>Job No.</th>
                        <th>Model</th>
                        <th>Location</th>
                        <th>จำนวน</th>
                        <th>จำนวนExport</th>
                    </tr>
                </thead>
                <tbody id="data" class="text-center">
                    <!-- <tr>
                        <td >1</td>
                        <td>IF_30/2022</td>
                        <td>PEC056/22</td>
                        <td>65/035</td>
                        <td>UPS12-370MRX</td>
                        <td>โกดัง PEC</td>
                        <td>60</td>
                        <td>
                            <input type="number" class="col" value="0">
                        </td>
                    </tr>
       -->
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
                        <!-- <col span="1" style="width: 58px;">
                        <col span="1" style="width: 58px;">
                        <col span="1" style="width: 58px;">
                        <col span="1" style="width: 58px;">
                        <col span="1" style="width: 58px;">
                        <col span="1" style="width: 58px;">
                        <col span="1" style="width: 58px;"> -->

                    </colgroup>
                    <thead>


                        <tr>
                            <td colspan="3">รายงานการตรวจแบตเตอรี่รายเดือน :</td>
                            <td colspan="11"></td>
                        </tr>
                        <tr>
                            <td>No.</td>
                            <td>Brand</td>
                            <td>Model</td>
                            <td>Ref</td>
                            <td>Barcode</td>
                            <td>MFG Code</td>
                            <td>Job No.</td>
                            <td>Location</td>
                            <td>Date</td>
                            <td>OCV</td>
                            <td>Mhos</td>
                            <td>Mhos%</td>
                            <td>C / M</td>
                            <td>Batt Temp</td>
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
        
        page_setup()
        var batt_data = []
        async function page_setup(){
            $('#inspection_option').html(
                '<option value="0" class="ins_option" selected>ทั้งหมด</option>'
            )
            $('#po_option').html(
                '<option value="0" class="po_option" selected>ทั้งหมด</option>'
            )
            await preload()
            await running_number()
        }
        
        async function preload(){
            batt_data = []
            var inspection = []
            var inspection_data = []
            var row_model_count = {}

            const batt = await projectFirestore.collection("Batteries_beta").where('measurements','==',[]).get()
            
            await setup()
            await uniq_inspection()
            await get_PO()
            await render_predata()
            await render_predata2()
            await render_predata3()

            function setup(){
                batt.forEach((data)=>{
                    batt_data.push(data.data())
                    inspection.push(data.data().inspectionId)
                })
            }
            
            function uniq_inspection(){
                inspection = Array.from(new Set(inspection))
            }

            async function get_PO(){
                for(let i = 0; i < inspection.length; i++ ){
                    const ins = await projectFirestore.collection("InspectionForm").doc(inspection[i]).get()
                    inspection_data.push(ins.data())
                }
            }

            function render_predata(){
                 $('#data').html('')
                for(let i = 0; i < inspection_data.length; i++){
                    
                    if($('.ins_option').length < inspection_data.length+1){
                        
                        $('#inspection_option').append(
                            '<option class="ins_option" value="'+inspection_data[i].inspection_no+'">'+inspection_data[i].inspection_no+'</option>'
                        )
                    }
                    
                    for(let j = 0; j < inspection_data[i].gen_barcode_data.length; j++ ){
                        const key_batt = inspection_data[i].gen_barcode_data[j].ordersheetBatt
                        var po_arr = []
                        row_model_count[key_batt] = 0;
                        if($('.po_option').length < inspection_data[i].gen_barcode_data.length+1){

                            if(po_arr.includes('PEC'+inspection_data[i].gen_barcode_data[j].poNo)){
                                
                            }
                            else{
                                po_arr.push('PEC'+inspection_data[i].gen_barcode_data[j].poNo)
                                po_arr = po_arr
                                $('#po_option').append(
                                    '<option class="po_option" value="PEC'+inspection_data[i].gen_barcode_data[j].poNo+'">PEC'+inspection_data[i].gen_barcode_data[j].poNo+'</option>'
                                )
                            }
                            
                        }
                        console.log(inspection_data[i])
                        // row_model_count.push('{row:row_model_count,count:0}')
                        $('#data').append(
                            '<tr class="table_data" data-ins="'+inspection_data[i].inspection_no+'" data-po="PEC'+inspection_data[i].gen_barcode_data[j].poNo+'">'+
                                '<td class="row_number"></td>'+
                                '<td>'+inspection_data[i].inspection_no+'</td>'+
                                '<td>PEC'+inspection_data[i].gen_barcode_data[j].poNo+'</td>'+
                                '<td>'+inspection_data[i].gen_barcode_data[j].jobNo+'</td>'+
                                '<td>'+inspection_data[i].gen_barcode_data[j].series+'</td>'+
                                '<td>'+inspection_data[i].warehouse_location+'</td>'+
                                '<td id="row_amount_'+inspection_data[i].gen_barcode_data[j].ordersheetBatt+'"></td>'+
                                '<td>'+
                                    '<input id="row_check_'+inspection_data[i].gen_barcode_data[j].ordersheetBatt+'" data-model="'+inspection_data[i].gen_barcode_data[j].series+'" data-ins="'+inspection_data[i].inspection_no+'" data-po="'+inspection_data[i].gen_barcode_data[j].poNo+'" type="number" class="col batt_input" value="0">'+
                                '</td>'+
                            '<tr>'

                        )

                    }
                }
                
            }
            function render_predata2(){
                for(let i = 0; i < batt_data.length; i++){
                    row_model_count[batt_data[i].ordersheetBatt] = row_model_count[batt_data[i].ordersheetBatt]+1
                }
            }
            function render_predata3(){
                $.each(row_model_count, function (key, val) {
                    $('#row_amount_'+key).html(val)
                });
            }
            
        }

        function running_number(){
            let row_number = $('.row_number').length

            
            for(let i = 0; i < row_number; i++){
                $($('.row_number')[i]).html(i+1)
            }

        }

        $('#inspection_option').on('change', async function(){
            await preload()
            await load_newdata()
            await running_number()
            await get_batt_excel()

        })
        $('#po_option').on('change', async function(){
            await preload()
            await load_newdata()
            await running_number()
            await get_batt_excel()
        })

        function load_newdata(){
            const ins_select = $('#inspection_option').val()
            const po_select = $('#po_option').val()

            if(ins_select == 0){
                $('#po_option').html(
                    '<option value="0" class="po_option" selected>ทั้งหมด</option>'
                )
                $('#po_option').attr('disabled',true)
                
            }
            else{
                console.log('ins change')
                $('#po_option').attr('disabled',false)

                $('.table_data').each(function(index){
                    if(ins_select != $(this).data('ins')){
                        $(this).remove()
                    }
                })
            }
            if(po_select == 0){

            }
            else{
                $('.table_data').each(function(index){
                    console.log('po change')
                    if(po_select != $(this).data('po')){
                        $(this).remove()
                    }
                })
            }

            
        }



        $('#export_btn').on('click',function(){
            // const table_id = "data_table"
            const table_id = "excel_data"
            get_batt_excel()
            
            // const file_name = "Inspection Form_2022"
            // tableToExcel(table_id,file_name)
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
                            amount: parseInt($($('.batt_input')[i]).val()) 
                        })

                    }
                }
            }

            function render_table_export_excel(){
                console.log('batt_data : ',batt_data)
                for(let i = 0; i < amount_batt.length; i++){
                    for(let j = 0; j < batt_data.length; j++){
                        // if(amount_batt[i].model == batt_data.)
                    }
                }
                
            }   

        }   


        function render_excel_table(){

        }

    }
}
</script>