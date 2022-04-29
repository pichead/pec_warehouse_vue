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
                <div class="col-12">
                    <div class="row">
                        <div class="col-8"></div>
                        <div class="col-4">
                            <div class="row">
                                <div class="col">
                                    <button class="btn btn-danger col" type="button">Reset</button>
                                </div>
                                <div class="col">
                                    <button class="btn btn-primary col" type="button">Search</button>
                                </div>
                            </div>
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
                <button type="button" class="col-12 btn btn-primary">Download(.xlsx)</button>
            </div>
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

        function page_setup(){
            $('#inspection_option').html(
                '<option value="0" class="ins_option" selected>ทั้งหมด</option>'
            )
            $('#po_option').html(
                '<option value="0" class="po_option" selected>ทั้งหมด</option>'
            )
            preload()
        }
        
        
        async function preload(){
            var batt_data = []
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
                    // console.log($('.ins_option').length)
                    if($('.ins_option').length < inspection_data.length+1){
                        $('#inspection_option').append(
                            '<option class="ins_option" value="'+inspection_data[i].inspection_no+'">'+inspection_data[i].inspection_no+'</option>'
                        )
                    }
                    
                    for(let j = 0; j < inspection_data[i].gen_barcode_data.length; j++ ){
                        const key_batt = inspection_data[i].gen_barcode_data[j].ordersheetBatt
                        
                        row_model_count[key_batt] = 0;
                          if($('.po_option').length < inspection_data[i].gen_barcode_data.length+1){

                            $('#po_option').append(
                                '<option class="po_option" value="PEC'+inspection_data[i].gen_barcode_data[j].poNo+'">PEC'+inspection_data[i].gen_barcode_data[j].poNo+'</option>'
                            )
                        }

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
                                    '<input id="row_check_'+inspection_data[i].gen_barcode_data[j].ordersheetBatt+'" type="number" class="col" value="0">'+
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
        })
        $('#po_option').on('change', async function(){
            await preload()
            await load_newdata()
            await running_number()
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
    }
}
</script>