<style>

</style>
<template>
<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
            <div class="h3 mt-5 font-weight-bold">InspectionForm</div>
            <form id="addform" class="border my-5 bg-white p-5">
                <div class="row">
                    <div class="col-6 my-1">
                        <div class="row">
                            <div class="col-6 col-form-label">Shipper/Exporter</div>
                            <div class="col-6">
                                <input id="shipper_exporter" type="text" class="form-control" required>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 my-1">
                        <div class="row">
                            <div class="col-6 col-form-label">Inspection No.</div>
                            <div class="col-6">
                                <input id="inspection_no" type="text" class="form-control" required>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 my-1">
                        <div class="row">
                            <div class="col-6 col-form-label">Packing List</div>
                            <div class="col-6">
                                <input id="packing_list" type="text" class="form-control" required>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 my-1">
                        <div class="row">
                            <div class="col-6 col-form-label">สถานที่รับสินค้า/คลังจัดเก็บสินค้า</div>
                            <div class="col-6">
                                <input id="warehouse_location" type="text" class="form-control" required>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 my-3">
                        <button class="btn btn-primary col-12"  data-toggle="modal" data-target="#AddPO" type="button">Add PEC PO</button>
                    </div>
                    <div class="col-12">
                        <table id="data_table" class="table">
                            <colgroup>
                                <col span="1" style="width: 50px;">
                                <col span="1" style="width: 120px;">
                                <col span="1" style="width: 150px;">
                                <col span="1" style="width: 120px;">
                                <col span="1" style="width: 200px;">
                                <col span="1" style="width: 170px;">
                                <col span="1" style="width: 120px;">
                            </colgroup>
                            <thead class="thead-dark">
                                <tr class="text-center">
                                    <th>No.</th>
                                    <th>PEC PO</th>
                                    <th>Job No</th>
                                    <th>OrderSheet</th>
                                    <th>Model</th>
                                    <th>Warranty(Year)</th>
                                    <th>Qty</th>
                                    <!-- <th>pallet</th> -->
                                    <th>
                                        <input id="check_all" type="checkbox" class="align-bottom" style="height: 20px; width: 20px;"/>
                                    </th>
                                </tr>
                            </thead>
                            <tbody id="data">
                                
                            </tbody>
                        </table>
                     
                    </div>
                    <div class="col-12">
                        <div class="d-flex flex-row-reverse row-hl my-5">
                            <button id="export_btn" class="btn btn-info col-2" type="button">Export</button>

                            <button id="save_btn" class="btn btn-primary col-2 mx-1" type="submit">Save</button>

 
                        </div>
                    </div>
                    
                    

                </div>
            </form>

            <div class="modal" id="AddPO">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">PEC PO Select</h5>
                        <button class="close" data-dismiss="modal">×</button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="username">PEC PO</label>
                                <select id="Po_select" class="form-control">

                                </select>
                            </div>
                        </form>
                    </div>
                        <div class="modal-footer">
                            <button class="btn btn-danger" data-dismiss="modal">Close</button>
                            <button id="modal_add_po" class="btn btn-primary" data-dismiss="modal">Add</button>
                        </div>
                    </div>
                </div>
            </div>

            
            
        </div>
        <div id="preview_excel" class="col-11 mx-auto px-0 d-none">
                <table id="excel_data" class="col-12 table-bordered" style="padding: 0px;ห">
                    <colgroup>
                        <col span="1" style="width: 58px;">
                        <col span="1" style="width: 58px;">
                        <col span="1" style="width: 58px;">
                        <col span="1" style="width: 58px;">
                        <col span="1" style="width: 58px;">
                        <col span="1" style="width: 58px;">
                        <col span="1" style="width: 58px;">
                        <col span="1" style="width: 58px;">
                        <col span="1" style="width: 58px;">
                        <col span="1" style="width: 58px;">

                        <col span="1" style="width: 58px;">
                        <col span="1" style="width: 58px;">
                        <col span="1" style="width: 58px;">
                        <col span="1" style="width: 58px;">
                        <col span="1" style="width: 58px;">
                        <col span="1" style="width: 58px;">
                        <col span="1" style="width: 58px;">
                        <col span="1" style="width: 58px;">
                        <col span="1" style="width: 58px;">
                        <col span="1" style="width: 58px;">

                        <col span="1" style="width: 58px;">
                        <col span="1" style="width: 58px;">
                        <col span="1" style="width: 58px;">
                        <col span="1" style="width: 84px;">
                        
                    </colgroup>
                    <tr>
                        <td colspan="1"></td>
                        <td colspan="2">
                            <!-- <picture>
                                <img src="https://firebasestorage.googleapis.com/v0/b/warehouse-327518.appspot.com/o/imgs%2Flogo_pec.png?alt=media&token=299bbc3f-c90b-41f9-a546-3f9d333acae6" alt="Flowers" style="width:80px;height:50px">
                            </picture> -->
                        </td>
                        <td colspan="18" style="text-align: center;font-weight: bold;font-size: 16px;">Inspection Form</td>
                        <td colspan="3"></td>
                    </tr>

                    <tr>
                        <td colspan="24" style="text-align: center;font-weight: bold;font-size: 16px;">คำร้องขอตรวจสอบสินค้าต่างประเทศ</td>
                    </tr>

                    <tr>
                        <td colspan="2"></td>
                        <td colspan="3" style="text-align: right;font-family:Angsana New;font-size: 14px;">
                            Shipper/Exporter :
                        </td>
                        <td colspan="7" style="font-size: 10px;border-bottom: 1px solid;">
                        </td>
                        <td colspan="1"></td>
                        <td colspan="2" style="text-align: right;font-size: 14px ;">
                            Inspection No. :
                        </td>
                        <td colspan="5" style="font-size: 10px;border-bottom: 1px solid;">
                        </td>
                        <td colspan="4"></td>
                    </tr>


                    <tr>
                        <td colspan="5" style="text-align: right;font-size: 12px;">
                            อ้างอิง Commercial Invoice / Packing List No. :
                        </td>
                        <td colspan="7" style="font-size: 10px;border-bottom: 1px solid;">
                        </td>
                        <td colspan="2"></td>
                        <td colspan="1" style="text-align: right;font-size: 14px ;">
                            วันที่ :
                        </td>
                        <td colspan="5" style="font-size: 10px;border-bottom: 1px solid;">
                        </td>
                        <td colspan="4"></td>
                    </tr>

                    <tr>
                        <td colspan="5" style="text-align: right;font-size: 14px;">
                            สถานที่รับสินค้า / คลังจัดเก็บสินค้า  :
                        </td>
                        <td colspan="7" style="font-size: 10px;border-bottom: 1px solid;">
                        </td>
                        <td colspan="12"></td>
                    </tr>

                    <tr>
                        <td colspan="3" style="text-align: left;font-size: 14px;font-weight: bold;">
                            รายละเอียดการขนส่งสินค้า
                        </td>
                        <td colspan="21"></td>
                    </tr>

                    <tr>
                        <td colspan="3" style="text-align: right;font-size: 14px;">
                            จำนวนยานพาหนะ:
                        </td>
                        <td colspan="1"></td>
                        <td colspan="1" style="text-align: center;font-size: 14px;">คัน</td>
                        <td colspan="19"></td>
                    </tr>

                    <tr>
                        <td colspan="1" style="text-align: center;font-size: 16px;">1)</td>
                        <td colspan="2" style="font-size: 14px;">ประเภท</td>
                        <td colspan="1" style="text-align: center;font-size: 14px;">ล้อ</td>
                        <td colspan="2" style="text-align: center;font-size: 14px;">เลขทะเบียน</td>
                        <td colspan="2"></td>

                        <td colspan="1" style="text-align: center;font-size: 16px;">4)</td>
                        <td colspan="2" style="font-size: 14px;">ประเภท</td>
                        <td colspan="1" style="text-align: center;font-size: 14px;">ล้อ</td>
                        <td colspan="2" style="text-align: center;font-size: 14px;">เลขทะเบียน</td>
                        <td colspan="2"></td>

                        <td colspan="1" style="text-align: center;font-size: 16px;">7)</td>
                        <td colspan="2" style="font-size: 14px;">ประเภท</td>
                        <td colspan="1" style="text-align: center;font-size: 14px;">ล้อ</td>
                        <td colspan="2" style="text-align: center;font-size: 14px;">เลขทะเบียน</td>
                        <td colspan="2"></td>
                    </tr>
                    <tr>
                        <td colspan="1" style="text-align: center;font-size: 16px;">2)</td>
                        <td colspan="2" style="font-size: 14px;">ประเภท</td>
                        <td colspan="1" style="text-align: center;font-size: 14px;">ล้อ</td>
                        <td colspan="2" style="text-align: center;font-size: 14px;">เลขทะเบียน</td>
                        <td colspan="2"></td>

                        <td colspan="1" style="text-align: center;font-size: 16px;">5)</td>
                        <td colspan="2" style="font-size: 14px;">ประเภท</td>
                        <td colspan="1" style="text-align: center;font-size: 14px;">ล้อ</td>
                        <td colspan="2" style="text-align: center;font-size: 14px;">เลขทะเบียน</td>
                        <td colspan="2"></td>

                        <td colspan="1" style="text-align: center;font-size: 16px;">8)</td>
                        <td colspan="2" style="font-size: 14px;">ประเภท</td>
                        <td colspan="1" style="text-align: center;font-size: 14px;">ล้อ</td>
                        <td colspan="2" style="text-align: center;font-size: 14px;">เลขทะเบียน</td>
                        <td colspan="2"></td>
                    </tr>
                    <tr>
                        <td colspan="1" style="text-align: center;font-size: 16px;">3)</td>
                        <td colspan="2" style="font-size: 14px;">ประเภท</td>
                        <td colspan="1" style="text-align: center;font-size: 14px;">ล้อ</td>
                        <td colspan="2" style="text-align: center;font-size: 14px;">เลขทะเบียน</td>
                        <td colspan="2"></td>

                        <td colspan="1" style="text-align: center;font-size: 16px;">6)</td>
                        <td colspan="2" style="font-size: 14px;">ประเภท</td>
                        <td colspan="1" style="text-align: center;font-size: 14px;">ล้อ</td>
                        <td colspan="2" style="text-align: center;font-size: 14px;">เลขทะเบียน</td>
                        <td colspan="2"></td>

                        <td colspan="1" style="text-align: center;font-size: 16px;">9)</td>
                        <td colspan="2" style="font-size: 14px;">ประเภท</td>
                        <td colspan="1" style="text-align: center;font-size: 14px;">ล้อ</td>
                        <td colspan="2" style="text-align: center;font-size: 14px;">เลขทะเบียน</td>
                        <td colspan="2"></td>
                    </tr>
                    <tr>
                        <td colspan="24"></td>
                    </tr>
                    <tr>
                        <td colspan="1" rowspan="2" style="text-align: center;font-size: 14px;font-weight: bold;">
                            ลำดับ
                        </td>
                        <td colspan="2" rowspan="2" style="text-align: center;font-size: 14px;font-weight: bold;">
                            PO NO.
                        </td>
                        <td colspan="2" rowspan="2" style="text-align: center;font-size: 14px;font-weight: bold;">
                            JOB NO.
                        </td>
                        <td colspan="2" rowspan="2" style="text-align: center;font-size: 14px;font-weight: bold;">
                            Warranty
                        </td>
                        <td colspan="5" rowspan="2" style="text-align: center;font-size: 14px;font-weight: bold;">
                            รายการ
                        </td>
                        <td colspan="2" rowspan="1" style="text-align: center;font-size: 14px;font-weight: bold;">
                            จำนวน
                        </td>
                        <td colspan="2" rowspan="1" style="text-align: center;font-size: 14px;font-weight: bold;">
                            การตรวจนับ
                        </td>
                        <td colspan="2" rowspan="1" style="text-align: center;font-size: 14px;font-weight: bold;">
                            สภาพสินค้า
                        </td>
                        <td colspan="3" rowspan="2" style="text-align: center;font-size: 14px;font-weight: bold;">
                            ปัญหาที่พบ
                        </td>
                        <td colspan="3" rowspan="2" style="text-align: center;font-size: 14px;font-weight: bold;">
                            หมายเหตุ
                        </td>
                    </tr>
                    <tr>
                        <td colspan="1" rowspan="1" style="text-align: center;font-size: 14px;font-weight: bold;">
                            ลูก
                        </td>
                        <td colspan="1" rowspan="1" style="text-align: center;font-size: 14px;font-weight: bold;">
                            พาเลท
                        </td>
                        <td colspan="1" rowspan="1" style="text-align: center;font-size: 14px;font-weight: bold;">
                            ครบ
                        </td>
                        <td colspan="1" rowspan="1" style="text-align: center;font-size: 14px;font-weight: bold;">
                            ไม่ครบ
                        </td>
                        <td colspan="1" rowspan="1" style="text-align: center;font-size: 14px;font-weight: bold;">
                            สมบูรณ์
                        </td>
                        <td colspan="1" rowspan="1" style="text-align: center;font-size: 14px;font-weight: bold;">
                            เสียหาย
                        </td>
                    </tr>


                    <tr>
                        <td colspan="2"></td>
                        <td colspan="2" style="text-align: center;font-size: 14px;">ผู้ยื่นคำร้อง :</td>
                        <td colspan="4">__________________________</td>
                        <td colspan="6"></td>
                        <td colspan="2" style="text-align: center;font-size: 14px;">ผู้ตรวจสอบ :</td>
                        <td colspan="4">__________________________</td>
                        <td colspan="4"></td>
                    </tr>
                    <tr>
                        <td colspan="4"></td>
                        <td colspan="4" style="text-align: center;font-size: 14px;">ฝ่ายจัดซื้อต่างประเทศ</td>
                        <td colspan="8"></td>
                        <td colspan="4" style="text-align: center;font-size: 14px;">ฝ่ายคลังสินค้า</td>
                        <td colspan="4"></td>
                    </tr>
                    <tr>
                        <td colspan="4"></td>
                        <td colspan="4" style="text-align: center;font-size: 14px;">(…......./…......./….......)</td>
                        <td colspan="8"></td>
                        <td colspan="4" style="text-align: center;font-size: 14px;">(…......./…......./….......)</td>
                        <td colspan="4"></td>
                    </tr>
                </table>
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
        async function predata(){
            const Predata_po = await projectFirestore.collection('Po').get()
            $('#Po_select').html('<option disabled value="" selected >Choose PEC PO</option>')
            Predata_po.forEach((pec_po)=>{
                $('#Po_select').append(
                    '<option value="'+pec_po.id+'">PEC'+pec_po.data().pecpo_no+'/'+pec_po.data().pecpo_year+'</option>'
                )
            })

            const inspection_data = await projectFirestore.collection('InspectionForm').doc(id).get()

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
                                    '<tr id="row_'+po_select_data.data().battorder[i].ordersheet[j].battery[k].batt_no+'">'+
                                        '<td><div class="col-form-label running_num"></div></td>'+
                                        '<td><div class="col-form-label">PEC'+po_select_data.data().pecpo_no+'/'+po_select_data.data().pecpo_year+'</div></td>'+
                                        '<td><div class="col-form-label">'+po_select_data.data().battorder[i].project_first+'/'+po_select_data.data().battorder[i].project_second+'</div></td>'+
                                        '<td><div class="col-form-label">'+po_select_data.data().battorder[i].project_first+'/'+po_select_data.data().battorder[i].project_second+'/'+po_select_data.data().battorder[i].ordersheet[j].ordersheet+'</div></td>'+
                                        '<td><div class="col-form-label">'+po_select_data.data().battorder[i].ordersheet[j].battery[k].series+'</div></td>'+
                                        '<td class="text-center"><div class="col-form-label">'+(parseInt(po_select_data.data().warranty)/12)+'</div></td>'+
                                        '<td>'+
                                            '<input id="qty_'+po_select_data.data().battorder[i].ordersheet[j].battery[k].batt_no+'" class="col-12 form-control" type="number" step="1" value="'+inspection_data.data().battery[x].qty+'" />'+
                                        '</td>'+
                                        '<td class="text-center align-bottom">'+
                                            // '<button class="del_row_btn btn p-0 px-2 btn-danger" value="'+po_select_data.data().battorder[i].ordersheet[j].battery[k].batt_no+'" type="button">ลบ</button>'+
                                            '<input value="'+po_select_data.data().battorder[i].ordersheet[j].battery[k].batt_no+'" data-poid="'+po_select_data.id+'"  type="checkbox" class="checkbox-model" style="height: 20px; width: 20px;" checked/>'+
                                        '</td>'+
                                    '</tr>'
                                )

                                }
                            }
                        }
                    }
                    gen_running_num()

                    
                }
            }


        }
        predata()

        $('#modal_add_po').on('click',async function(){
            const model_po_select_val = $('#Po_select').val()
            let po_select_data = await projectFirestore.collection('Po').doc(model_po_select_val).get()
            await add_po_to_table()

            function add_po_to_table(){
                console.log(po_select_data.data())
                for(let i = 0; i < po_select_data.data().battorder.length; i++){
                    for(let j = 0; j < po_select_data.data().battorder[i].ordersheet.length; j++){
                        for(let k = 0;k < po_select_data.data().battorder[i].ordersheet[j].battery.length; k++){
                            $('#row_'+po_select_data.data().battorder[i].ordersheet[j].battery[k].batt_no).remove()
                            $('#data').append(
                                '<tr id="row_'+po_select_data.data().battorder[i].ordersheet[j].battery[k].batt_no+'">'+
                                    '<td><div class="col-form-label running_num"></div></td>'+
                                    '<td><div class="col-form-label">PEC'+po_select_data.data().pecpo_no+'/'+po_select_data.data().pecpo_year+'</div></td>'+
                                    '<td><div class="col-form-label">'+po_select_data.data().battorder[i].project_first+'/'+po_select_data.data().battorder[i].project_second+'</div></td>'+
                                    '<td><div class="col-form-label">'+po_select_data.data().battorder[i].project_first+'/'+po_select_data.data().battorder[i].project_second+'/'+po_select_data.data().battorder[i].ordersheet[j].ordersheet+'</div></td>'+
                                    '<td><div class="col-form-label">'+po_select_data.data().battorder[i].ordersheet[j].battery[k].series+'</div></td>'+
                                    '<td class="text-center"><div class="col-form-label">'+(parseInt(po_select_data.data().warranty)/12)+'</div></td>'+
                                    '<td>'+
                                        '<input id="qty_'+po_select_data.data().battorder[i].ordersheet[j].battery[k].batt_no+'" class="col-12 form-control" type="number" step="1" value="'+po_select_data.data().battorder[i].ordersheet[j].battery[k].order_amount+'" />'+
                                    '</td>'+
                                    '<td class="text-center align-bottom">'+
                                        // '<button class="del_row_btn btn p-0 px-2 btn-danger" value="'+po_select_data.data().battorder[i].ordersheet[j].battery[k].batt_no+'" type="button">ลบ</button>'+
                                        '<input value="'+po_select_data.data().battorder[i].ordersheet[j].battery[k].batt_no+'" data-poid="'+po_select_data.id+'"  type="checkbox" class="checkbox-model" style="height: 20px; width: 20px;"/>'+
                                    '</td>'+
                                '</tr>'
                            )
                        }
                    }
                }
                gen_running_num()

                
            }
        })


        $('#data').on('click','.del_row_btn',function(){
            const del_row_val = $(this).val()
            $('#row_'+del_row_val).remove()
            gen_running_num()
        })

        function gen_running_num(){
            const table_row_count = $('.running_num').length
            for(let i = 0; i < table_row_count; i++){
                $($('.running_num')[i]).html(i+1)
            }
        }

        $("#data_table tbody").sortable({
            cursor: "move",
            placeholder: "sortable-placeholder",
            helper: function(e, tr)
            {
                var $originals = tr.children();
                var $helper = tr.clone();
                $helper.children().each(function(index)
                {
                // Set helper cell sizes to match the original sizes
                $(this).width($originals.eq(index).width());
                });
                return $helper;                
            },
            stop: function( event, ui ) {
                gen_running_num()
            }
        })

        

        $('#check_all').on('change',()=>{
            if($('#check_all').prop("checked")){
                $(".checkbox-model").each(function() {
                    $(this).prop("checked",true)
                });
            }
            else{
                $(".checkbox-model").each(function() {
                    $(this).prop("checked",false)
                });
            }
        })
    
        $('#export_btn').on('click',function(){
            // const table_id = "data_table"
            const table_id = "excel_data"

            
            const file_name = "Inspection Form_2022"
            tableToExcel(table_id,file_name)
            console.log('export')
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

        const addform = document.querySelector('#addform');
        addform.addEventListener('submit', async function(e){
            e.preventDefault();
            console.log('save')
            const shipper_exporter = $('#shipper_exporter').val()
            const inspection_no = $('#inspection_no').val()
            const packing_list = $('#packing_list').val()
            const warehouse_location = $('#warehouse_location').val()
            var battery = [] 
            await get_battery_data()
            await save_data()
            function get_battery_data(){
                $(".checkbox-model").each(function() {
                    if($(this).prop("checked")){
                        battery.push({
                            po_id:$(this).data('poid'),
                            batt_no:$(this).val(),
                            qty:$('#qty_'+$(this).val()).val()
                        })
                    }
                })
            }

            function save_data(){
                projectFirestore.collection('InspectionForm').doc(id).update({
                    shipper_exporter:shipper_exporter,
                    inspection_no:inspection_no,
                    packing_list:packing_list,
                    warehouse_location:warehouse_location,
                    battery:battery
                }).then(()=>{
                    router.push({ 
                        name: 'InspectionIndex',
                        params: { mserror: true} 
                    })
                })
            }

            
        })
        

    
    }

    
}
</script>