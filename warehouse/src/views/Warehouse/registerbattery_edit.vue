<style>

</style>
<template>
<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="col-11 mx-auto">
            <div class="h3 mt-5 font-weight-bold">Register Battery</div>
            <form id="addform" class="border my-5 bg-white p-2">
                <div class="row">
                    <div class="col-12 my-3">
                        <div class="row">
                            <div class="col-2 col-form-label font-weight-bold">Inspection No.</div>
                            <div id="inspec_no" class="col-10 col-form-label">
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <table id="data_table" class="table">
                            <colgroup>
                                <col span="1" style="width: 100px;">
                                <col span="1" style="width: 80px;">
                                <col span="1" style="width: 120px;">
                                <col span="1" style="width: 180px;">
                                <col span="1" style="width: 50px;">
                                <col span="1" style="width: 60px;">
                                <col span="1" style="width: 160px;">
                                <col span="1" style="width: 190px;">

                            </colgroup>
                            <thead class="thead-dark">
                                <tr class="text-center">
                                    <th>PEC PO</th>
                                    <th>Job No</th>
                                    <th>OrderSheet</th>
                                    <th>Model</th>
                                    <th>Warranty</th>
                                    <th>Qty</th>
                                    <th>การตรวจนับ</th>
                                    <th>สภาพสินค้า</th>
                                    <th>ปัญหาที่พบ</th>
                                    <th>หมายเหตุ</th>
                                </tr>
                            </thead>
                            <tbody id="data">
                                
                            </tbody>
                        </table>
                     
                    </div>
                    <div class="col-12">
                        <div class="d-flex flex-row-reverse row-hl my-5">

                            <button id="save_btn" class="btn btn-primary col-2 mx-1" type="submit">Save</button>
 
                        </div>
                    </div>
                    
                    

                </div>
            </form>



            
            
        </div>


    </div>
</template>

<script>
import { projectFirestore, projectAuth } from "../../firebase/config";
import Sidebar from "../../components/Sidebar.vue";
import router from "@/router";
import numeral from "numeral";
// import tableExport from "tableexport"

export default {
    components: { Sidebar },
    mounted() {
        var url = window.location.pathname;
        var id = url.substring(url.lastIndexOf('/') + 1);
        var gen_barcode_data = []
        var barcode_year
        var year_batt_count
        async function predata(){
            const Predata_po = await projectFirestore.collection('Po').get()
            await year_check()
            $('#Po_select').html('<option disabled value="" selected >Choose PEC PO</option>')
            Predata_po.forEach((pec_po)=>{
                $('#Po_select').append(
                    '<option value="'+pec_po.id+'">PEC'+pec_po.data().pecpo_no+'/'+pec_po.data().pecpo_year+'</option>'
                )
            })

            const inspection_data = await projectFirestore.collection('InspectionForm').doc(id).get()
            $('#inspec_no').html(inspection_data.data().inspection_no)
            for(let x = 0; x < inspection_data.data().battery.length; x++){
                let po_select_data = await projectFirestore.collection('Po').doc(inspection_data.data().battery[x].po_id).get()
                await add_po_to_table()

                function add_po_to_table(){
                    $('#shipper_exporter').val(inspection_data.data().shipper_exporter)
                    $('#inspection_no').val(inspection_data.data().inspection_no)
                    $('#packing_list').val(inspection_data.data().packing_list)
                    $('#warehouse_location').val(inspection_data.data().warehouse_location)            
                    for(let i = 0; i < po_select_data.data().battorder.length; i++){
                        for(let j = 0; j < po_select_data.data().battorder[i].ordersheet.length; j++){
                            for(let k = 0;k < po_select_data.data().battorder[i].ordersheet[j].battery.length; k++){
                                if(po_select_data.data().battorder[i].ordersheet[j].battery[k].batt_no == inspection_data.data().battery[x].batt_no){

                                
                                $('#row_'+po_select_data.data().battorder[i].ordersheet[j].battery[k].batt_no).remove()
                                $('#data').append(
                                    '<tr id="row_'+po_select_data.data().battorder[i].ordersheet[j].battery[k].batt_no+'" class="load-data" data-row="'+po_select_data.data().battorder[i].ordersheet[j].battery[k].batt_no+'" data-poid="'+inspection_data.data().battery[x].po_id+'" data-jobid="'+inspection_data.data().battery[x].job_id+'" data-qty="'+inspection_data.data().battery[x].qty+'">'+
                                        // '<td><div class="col-form-label running_num"></div></td>'+
                                        '<td><div class="col-form-label">PEC'+po_select_data.data().pecpo_no+'/'+po_select_data.data().pecpo_year+'</div></td>'+
                                        '<td><div class="col-form-label">'+po_select_data.data().battorder[i].project_first+'/'+po_select_data.data().battorder[i].project_second+'</div></td>'+
                                        '<td><div class="col-form-label">'+po_select_data.data().battorder[i].project_first+'/'+po_select_data.data().battorder[i].project_second+'/'+po_select_data.data().battorder[i].ordersheet[j].ordersheet+'</div></td>'+
                                        '<td><div class="col-form-label">'+po_select_data.data().battorder[i].ordersheet[j].battery[k].series+'</div></td>'+
                                        '<td class="text-center"><div class="col-form-label">'+(parseInt(po_select_data.data().warranty)/12)+'</div></td>'+
                                        '<td class="text-center"><div class="col-form-label">'+
                                            inspection_data.data().battery[x].qty+
                                        '</div></td>'+
                                        '<td class="text-center"><div class="col-form-label">'+
                                            '<div class="form-check form-check-inline">'+
                                                '<input class="form-check-input" type="radio" name="check_1_'+po_select_data.data().battorder[i].ordersheet[j].battery[k].batt_no+'"  value="true" checked>'+
                                                '<label class="form-check-label">ครบ</label>'+
                                            '</div>'+
                                            '<div class="form-check form-check-inline">'+
                                                '<input class="form-check-input" type="radio" name="check_1_'+po_select_data.data().battorder[i].ordersheet[j].battery[k].batt_no+'"  value="false">'+
                                                '<label class="form-check-label">ไม่ครบ</label>'+
                                            '</div>'+
                                        '</div></td>'+
                                        '<td class="text-center"><div class="col-form-label">'+
                                            '<div class="form-check form-check-inline">'+
                                                '<input class="form-check-input" type="radio" name="check_2_'+po_select_data.data().battorder[i].ordersheet[j].battery[k].batt_no+'"  value="true" checked>'+
                                                '<label class="form-check-label">สมบูรณ์</label>'+
                                            '</div>'+
                                            '<div class="form-check form-check-inline">'+
                                                '<input class="form-check-input" type="radio" name="check_2_'+po_select_data.data().battorder[i].ordersheet[j].battery[k].batt_no+'"  value="false">'+
                                                '<label class="form-check-label">เสียหาย</label>'+
                                            '</div>'+
                                        '</div></td>'+
                                        '<td>'+
                                            '<textarea id="problem_'+po_select_data.data().battorder[i].ordersheet[j].battery[k].batt_no+'" class="form-control" rows="1"></textarea>'+
                                        '</td>'+
                                        '<td>'+
                                            '<textarea id="comment_'+po_select_data.data().battorder[i].ordersheet[j].battery[k].batt_no+'" class="form-control" rows="1"></textarea>'+
                                        '</td>'+
                                    '</tr>'
                                )
                                gen_barcode_data.push({
                                    series:po_select_data.data().battorder[i].ordersheet[j].battery[k].series,
                                    jobNo:po_select_data.data().battorder[i].project_first+'/'+po_select_data.data().battorder[i].project_second,
                                    poNo:po_select_data.data().pecpo_no+'/'+po_select_data.data().pecpo_year,
                                    jobId:inspection_data.data().battery[x].job_id,
                                    poId:inspection_data.data().battery[x].po_id,
                                    qty:parseInt(inspection_data.data().battery[x].qty),
                                    ordersheetBatt:po_select_data.data().battorder[i].ordersheet[j].battery[k].batt_no,
                                    inspectionId:id,
                                    warranty:parseInt(po_select_data.data().warranty)
                                })

                                }
                            }
                        }
                    }

                    
                }
            }

            async function year_check(){
                const year_now = new Date().getFullYear().toString().substr(-2)
                const year = await projectFirestore.collection("BarcodeYears").doc(year_now).get()
                barcode_year = year_now
                await valid_uniq()

                function valid_uniq(){
                    if(year && year.exists){
                        
                        year_batt_count = year.data().total
                    }
                    else{
                        year_batt_count = 0
                        projectFirestore.collection("BarcodeYears").doc(year_now).set({
                            total:0
                        })
                    }
                }
            }

        }
        predata()

        const addform = document.querySelector('#addform');
        addform.addEventListener('submit', async function(e){
            e.preventDefault();
            console.log('save')

            var battery = [] 
            await get_battery_data()
            await save_data()
            function get_battery_data(){
                $(".load-data").each(function() {
                    const batt_id = $(this).data('row')
                    const counting = counting_result(batt_id)
                    const check_status = check_status_result(batt_id)
                    function counting_result(){
                        if($('input[name=check_1_'+batt_id+']:checked', '#addform').val() == 'true'){
                            return true
                        }
                        else{
                            return false
                        }
                    }
                    function check_status_result(){
                        if($('input[name=check_2_'+batt_id+']:checked', '#addform').val() == 'true'){
                            return true
                        }
                        else{
                            return false
                        }
                    }

                    battery.push({
                        po_id:$(this).data('poid'),
                        batt_no:$(this).data('row'),
                        job_id:$(this).data('jobid'),
                        qty:$(this).data('qty'),
                        counting:counting,
                        check_status:check_status,
                        problem:$("#problem_"+batt_id).val(),
                        comment:$("#comment_"+batt_id).val()
                    })
                })
            }

            async function save_data(){
                console.log(battery)
                console.log(gen_barcode_data)
                console.log(year_batt_count)
                console.log(barcode_year)
                var total_gen = 0
                await gen_barcode()
                await save_data()
                await back_index_page()
                function gen_barcode(){
                    
                    for(let i = 0; i < gen_barcode_data.length; i++){
                        var warranty_barcode = get_warranty_barcode()
                        function get_warranty_barcode(){
                            if(gen_barcode_data[i].warranty/12 == 3){
                                return "A"
                            }
                            else{
                                return "B"
                            }
                        }
                        for(let j = 0; j < gen_barcode_data[i].qty; j++){
                            total_gen = total_gen + 1
                            var running_code = numeral(year_batt_count + total_gen).format('00000')
                            var code = 'PEC-'+warranty_barcode+barcode_year
                            var final_barcode = code+running_code
                            console.log(final_barcode)
                            console.log(total_gen)
                            projectFirestore.collection('Batteries_beta').add({
                                barcode:final_barcode,
                                series:gen_barcode_data[i].series,
                                jobNo:gen_barcode_data[i].jobNo,
                                poNo:gen_barcode_data[i].poNo,
                                jobId:gen_barcode_data[i].jobId,
                                poId:gen_barcode_data[i].poId,
                                ordersheetBatt:gen_barcode_data[i].ordersheetBatt,
                                inspectionId:gen_barcode_data[i].inspectionId,
                                warranty:gen_barcode_data[i].warranty
                            })
                        }
                    }
                }

                function save_data(){
                    projectFirestore.collection('BarcodeYears').doc(barcode_year).update({
                       total:total_gen
                    })
                    projectFirestore.collection('InspectionForm').doc(id).update({
                        battery:battery,
                        gen_barcode:true
                    })
                }

                function back_index_page(){
                    router.push({ 
                        name: 'RegisterBatteryIndex',
                        params: { mserror: true} 
                    })
                }

            }

            
        })
        

    
    }

    
}
</script>