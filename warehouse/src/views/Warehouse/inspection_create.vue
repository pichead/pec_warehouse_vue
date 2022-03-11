<style>

</style>
<template>
<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
            <div class="h3 mt-5 font-weight-bold">Inspection Form</div>
            <form id="addform" class="border my-5 bg-white p-5">
                <div class="row">
                    <div class="col-6 my-1">
                        <div class="row">
                            <div class="col-6 col-form-label">Shipper/Exporter</div>
                            <div class="col-6">
                                <input id="shipper_exporter" type="text" class="form-control head_data" required>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 my-1">
                        <div class="row">
                            <div class="col-6 col-form-label">Inspection No.</div>
                            <div class="col-6">
                                <input id="inspection_no" type="text" class="form-control head_data" required>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 my-1">
                        <div class="row">
                            <div class="col-6 col-form-label">Packing List</div>
                            <div class="col-6">
                                <input id="packing_list" type="text" class="form-control head_data" required>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 my-1">
                        <div class="row">
                            <div class="col-6 col-form-label">สถานที่รับสินค้า/คลังจัดเก็บสินค้า</div>
                            <div class="col-6">
                                <input id="warehouse_location" type="text" class="form-control head_data" required>
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
                        <col span="1" style="width: 87px;">
                        
                    </colgroup>
                    <thead>
                        <tr>
                            <td colspan="1"></td>
                            <td colspan="2">
                                <!-- <picture>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/warehouse-327518.appspot.com/o/imgs%2Flogo_pec.png?alt=media&token=299bbc3f-c90b-41f9-a546-3f9d333acae6" alt="Flowers" style="width:80px;height:50px">
                                </picture> -->
                            </td>
                            <td colspan="18" style="text-align: center;font-weight: bold;font-size: 26px;font-family:Angsana New;">Inspection Form</td>
                            <td colspan="3"></td>
                        </tr>

                        <tr>
                            <td colspan="24" style="text-align: center;font-weight: bold;font-size: 26px;font-family:Angsana New;">คำร้องขอตรวจสอบสินค้าต่างประเทศ</td>
                        </tr>

                        <tr>
                            <td colspan="2"></td>
                            <td colspan="3" style="text-align: right;font-size: 24px;font-family:Angsana New;">
                                Shipper/Exporter :
                            </td>
                            <td id="shipper_exporter_excel" colspan="7" style="text-align: center;border-bottom: 1px dotted;font-size: 24px;font-family:Angsana New;">
                            </td>
                            <td colspan="1"></td>
                            <td colspan="2" style="text-align: right;font-size: 24px;font-family:Angsana New;">
                                Inspection No. :
                            </td>
                            <td id="inspection_no_excel" colspan="5" style="text-align: center;border-bottom: 1px dotted;font-size: 24px;font-family:Angsana New;">
                            </td>
                            <td colspan="4"></td>
                        </tr>


                        <tr>
                            <td colspan="5" style="text-align: right;font-size: 20px;font-family:Angsana New;">
                                อ้างอิง Commercial Invoice / Packing List No. :
                            </td>
                            <td id="packing_list_excel" colspan="7" style="text-align: center;border-bottom: 1px dotted;font-size: 20px;font-family:Angsana New;">
                            </td>
                            <td colspan="2"></td>
                            <td colspan="1" style="text-align: right;font-size: 24px;font-family:Angsana New;">
                                วันที่ :
                            </td>
                            <td id="date_excel" colspan="5" style="text-align: center;border-bottom: 1px dotted;font-size: 24px;font-family:Angsana New;">
                            </td>
                            <td colspan="4"></td>
                        </tr>

                        <tr>
                            <td colspan="5" style="text-align: right;font-size: 24px;font-family:Angsana New;">
                                สถานที่รับสินค้า / คลังจัดเก็บสินค้า  :
                            </td>
                            <td id="warehouse_location_excel" colspan="7" style="text-align: center;border-bottom: 1px dotted;font-size: 24px;font-family:Angsana New;">
                            </td>
                            <td colspan="12"></td>
                        </tr>

                        <tr>
                            <td colspan="4" style="text-align: left;font-weight: bold;font-size: 24px;font-family:Angsana New;">
                                รายละเอียดการขนส่งสินค้า
                            </td>
                            <td colspan="20"></td>
                        </tr>

                        <tr>
                            <td colspan="3" style="text-align: right;font-size: 24px;font-family:Angsana New;">
                                จำนวนยานพาหนะ:
                            </td>
                            <td colspan="1"></td>
                            <td colspan="1" style="text-align: center;font-size: 24px;font-family:Angsana New;">คัน</td>
                            <td colspan="19"></td>
                        </tr>

                        <tr>
                            <td colspan="1" style="text-align: center;font-size: 26px;font-family:Angsana New;border-left: 1px solid;border-top: 1px solid;border-bottom: 1px solid;">1)</td>
                            <td colspan="2" style="font-size: 24px;font-family:Angsana New;border-top: 1px solid;border-bottom: 1px solid;">ประเภท</td>
                            <td colspan="1" style="text-align: center;font-size: 24px;font-family:Angsana New;border-top: 1px solid;border-bottom: 1px solid;">ล้อ</td>
                            <td colspan="2" style="text-align: center;font-size: 24px;font-family:Angsana New;border-top: 1px solid;border-bottom: 1px solid;">เลขทะเบียน</td>
                            <td colspan="2" style="border-top: 1px solid;border-bottom: 1px solid;border-right: 1px solid"></td>

                            <td colspan="1" style="text-align: center;font-size: 26px;font-family:Angsana New;border-left: 1px solid;border-top: 1px solid;border-bottom: 1px solid;">4)</td>
                            <td colspan="2" style="font-size: 24px;font-family:Angsana New;border-top: 1px solid;border-bottom: 1px solid;">ประเภท</td>
                            <td colspan="1" style="text-align: center;font-size: 24px;font-family:Angsana New;border-top: 1px solid;border-bottom: 1px solid;">ล้อ</td>
                            <td colspan="2" style="text-align: center;font-size: 24px;font-family:Angsana New;border-top: 1px solid;border-bottom: 1px solid;">เลขทะเบียน</td>
                            <td colspan="2" style="border-top: 1px solid;border-bottom: 1px solid;border-right: 1px solid"></td>

                            <td colspan="1" style="text-align: center;font-size: 26px;font-family:Angsana New;border-left: 1px solid;border-top: 1px solid;border-bottom: 1px solid;">7)</td>
                            <td colspan="2" style="font-size: 24px;font-family:Angsana New;border-top: 1px solid;border-bottom: 1px solid;">ประเภท</td>
                            <td colspan="1" style="text-align: center;font-size: 24px;font-family:Angsana New;border-top: 1px solid;border-bottom: 1px solid;">ล้อ</td>
                            <td colspan="2" style="text-align: center;font-size: 24px;font-family:Angsana New;border-top: 1px solid;border-bottom: 1px solid;">เลขทะเบียน</td>
                            <td colspan="2" style="border-top: 1px solid;border-bottom: 1px solid;border-right: 1px solid"></td>
                        </tr>
                        <tr>
                            <td colspan="1" style="text-align: center;font-size: 26px;font-family:Angsana New;border-left: 1px solid;border-top: 1px solid;border-bottom: 1px solid;">2)</td>
                            <td colspan="2" style="font-size: 24px;font-family:Angsana New;border-top: 1px solid;border-bottom: 1px solid;">ประเภท</td>
                            <td colspan="1" style="text-align: center;font-size: 24px;font-family:Angsana New;border-top: 1px solid;border-bottom: 1px solid;">ล้อ</td>
                            <td colspan="2" style="text-align: center;font-size: 24px;font-family:Angsana New;border-top: 1px solid;border-bottom: 1px solid;">เลขทะเบียน</td>
                            <td colspan="2" style="border-top: 1px solid;border-bottom: 1px solid;border-right: 1px solid"></td>

                            <td colspan="1" style="text-align: center;font-size: 26px;font-family:Angsana New;border-left: 1px solid;border-top: 1px solid;border-bottom: 1px solid;">5)</td>
                            <td colspan="2" style="font-size: 24px;font-family:Angsana New;border-top: 1px solid;border-bottom: 1px solid;">ประเภท</td>
                            <td colspan="1" style="text-align: center;font-size: 24px;font-family:Angsana New;border-top: 1px solid;border-bottom: 1px solid;">ล้อ</td>
                            <td colspan="2" style="text-align: center;font-size: 24px;font-family:Angsana New;border-top: 1px solid;border-bottom: 1px solid;">เลขทะเบียน</td>
                            <td colspan="2" style="border-top: 1px solid;border-bottom: 1px solid;border-right: 1px solid"></td>

                            <td colspan="1" style="text-align: center;font-size: 26px;font-family:Angsana New;border-left: 1px solid;border-top: 1px solid;border-bottom: 1px solid;">8)</td>
                            <td colspan="2" style="font-size: 24px;font-family:Angsana New;border-top: 1px solid;border-bottom: 1px solid;">ประเภท</td>
                            <td colspan="1" style="text-align: center;font-size: 24px;font-family:Angsana New;border-top: 1px solid;border-bottom: 1px solid;">ล้อ</td>
                            <td colspan="2" style="text-align: center;font-size: 24px;font-family:Angsana New;border-top: 1px solid;border-bottom: 1px solid;">เลขทะเบียน</td>
                            <td colspan="2" style="border-top: 1px solid;border-bottom: 1px solid;border-right: 1px solid"></td>
                        </tr>
                        <tr>
                            <td colspan="1" style="text-align: center;font-size: 26px;font-family:Angsana New;border-left: 1px solid;border-top: 1px solid;border-bottom: 1px solid;">3)</td>
                            <td colspan="2" style="font-size: 24px;font-family:Angsana New;border-top: 1px solid;border-bottom: 1px solid;">ประเภท</td>
                            <td colspan="1" style="text-align: center;font-size: 24px;font-family:Angsana New;border-top: 1px solid;border-bottom: 1px solid;">ล้อ</td>
                            <td colspan="2" style="text-align: center;font-size: 24px;font-family:Angsana New;border-top: 1px solid;border-bottom: 1px solid;">เลขทะเบียน</td>
                            <td colspan="2" style="border-top: 1px solid;border-bottom: 1px solid;border-right: 1px solid"></td>

                            <td colspan="1" style="text-align: center;font-size: 26px;font-family:Angsana New;border-left: 1px solid;border-top: 1px solid;border-bottom: 1px solid;">6)</td>
                            <td colspan="2" style="font-size: 24px;font-family:Angsana New;border-top: 1px solid;border-bottom: 1px solid;">ประเภท</td>
                            <td colspan="1" style="text-align: center;font-size: 24px;font-family:Angsana New;border-top: 1px solid;border-bottom: 1px solid;">ล้อ</td>
                            <td colspan="2" style="text-align: center;font-size: 24px;font-family:Angsana New;border-top: 1px solid;border-bottom: 1px solid;">เลขทะเบียน</td>
                            <td colspan="2" style="border-top: 1px solid;border-bottom: 1px solid;border-right: 1px solid"></td>

                            <td colspan="1" style="text-align: center;font-size: 26px;font-family:Angsana New;border-left: 1px solid;border-top: 1px solid;border-bottom: 1px solid;">9)</td>
                            <td colspan="2" style="font-size: 24px;font-family:Angsana New;border-top: 1px solid;border-bottom: 1px solid;">ประเภท</td>
                            <td colspan="1" style="text-align: center;font-size: 24px;font-family:Angsana New;border-top: 1px solid;border-bottom: 1px solid;">ล้อ</td>
                            <td colspan="2" style="text-align: center;font-size: 24px;font-family:Angsana New;border-top: 1px solid;border-bottom: 1px solid;">เลขทะเบียน</td>
                            <td colspan="2" style="border-top: 1px solid;border-bottom: 1px solid;border-right: 1px solid"></td>
                        </tr>
                        <tr>
                            <td colspan="24"></td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="2" style="vertical-align: middle;text-align: center;font-size: 24px;font-family:Angsana New;font-weight: bold;border-left: 1px solid;border-top: 1px solid;border-bottom: 1px solid;">
                                ลำดับ
                            </td>
                            <td colspan="2" rowspan="2" style="vertical-align: middle;text-align: center;font-size: 24px;font-family:Angsana New;font-weight: bold;border-left: 1px solid;border-top: 1px solid;border-bottom: 1px solid;">
                                PO NO.
                            </td>
                            <td colspan="2" rowspan="2" style="vertical-align: middle;text-align: center;font-size: 24px;font-family:Angsana New;font-weight: bold;border-left: 1px solid;border-top: 1px solid;border-bottom: 1px solid;">
                                JOB NO.
                            </td>
                            <td colspan="2" rowspan="2" style="vertical-align: middle;text-align: center;font-size: 24px;font-family:Angsana New;font-weight: bold;border-left: 1px solid;border-top: 1px solid;border-bottom: 1px solid;">
                                Warranty
                            </td>
                            <td colspan="5" rowspan="2" style="vertical-align: middle;text-align: center;font-size: 24px;font-family:Angsana New;font-weight: bold;border-left: 1px solid;border-top: 1px solid;border-bottom: 1px solid;">
                                รายการ
                            </td>
                            <td colspan="2" rowspan="1" style="text-align: center;font-size: 24px;font-family:Angsana New;font-weight: bold;border-left: 1px solid;border-top: 1px solid;border-bottom: 1px solid;">
                                จำนวน
                            </td>
                            <td colspan="2" rowspan="1" style="text-align: center;font-size: 24px;font-family:Angsana New;font-weight: bold;border-left: 1px solid;border-top: 1px solid;border-bottom: 1px solid;">
                                การตรวจนับ
                            </td>
                            <td colspan="2" rowspan="1" style="text-align: center;font-size: 24px;font-family:Angsana New;font-weight: bold;border-left: 1px solid;border-top: 1px solid;border-bottom: 1px solid;">
                                สภาพสินค้า
                            </td>
                            <td colspan="3" rowspan="2" style="vertical-align: middle;text-align: center;font-size: 24px;font-family:Angsana New;font-weight: bold;border-left: 1px solid;border-top: 1px solid;border-bottom: 1px solid;">
                                ปัญหาที่พบ
                            </td>
                            <td colspan="3" rowspan="2" style="vertical-align: middle;text-align: center;font-size: 24px;font-family:Angsana New;font-weight: bold;border-left: 1px solid;border-top: 1px solid;border-bottom: 1px solid;border-right: 1px solid;">
                                หมายเหตุ
                            </td>
                        </tr>
                        <tr>
                            <td colspan="1" rowspan="1" style="text-align: center;font-size: 24px;font-family:Angsana New;font-weight: bold;border-left: 1px solid;border-top: 1px solid;border-bottom: 1px solid;">
                                ลูก
                            </td>
                            <td colspan="1" rowspan="1" style="text-align: center;font-size: 24px;font-family:Angsana New;font-weight: bold;border-left: 1px solid;border-top: 1px solid;border-bottom: 1px solid;">
                                พาเลท
                            </td>
                            <td colspan="1" rowspan="1" style="text-align: center;font-size: 24px;font-family:Angsana New;font-weight: bold;border-left: 1px solid;border-top: 1px solid;border-bottom: 1px solid;">
                                ครบ
                            </td>
                            <td colspan="1" rowspan="1" style="text-align: center;font-size: 24px;font-family:Angsana New;font-weight: bold;border-left: 1px solid;border-top: 1px solid;border-bottom: 1px solid;">
                                ไม่ครบ
                            </td>
                            <td colspan="1" rowspan="1" style="text-align: center;font-size: 24px;font-family:Angsana New;font-weight: bold;border-left: 1px solid;border-top: 1px solid;border-bottom: 1px solid;">
                                สมบูรณ์
                            </td>
                            <td colspan="1" rowspan="1" style="text-align: center;font-size: 24px;font-family:Angsana New;font-weight: bold;border-left: 1px solid;border-top: 1px solid;border-bottom: 1px solid;border-right: 1px solid;">
                                เสียหาย
                            </td>
                        </tr>
                    </thead>
                    <tbody id="excel_data_row">

                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="24"></td>
                        </tr>
                        <tr>
                            <td colspan="2"></td>
                            <td colspan="2" style="text-align: center;font-size: 24px;font-family:Angsana New;">ผู้ยื่นคำร้อง :</td>
                            <td colspan="4" style="border-bottom: 1px dotted"></td>
                            <td colspan="6"></td>
                            <td colspan="2" style="text-align: center;font-size: 24px;font-family:Angsana New;">ผู้ตรวจสอบ :</td>
                            <td colspan="4" style="border-bottom: 1px dotted"></td>
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
                    </tfoot>
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
        var d = new Date();

        var month = d.getMonth()+1;
        var day = d.getDate();

        var output = (day<10 ? '0' : '') + day  + ' / ' +
                    (month<10 ? '0' : '') + month + ' / ' +
                     d.getFullYear()
        $('#date_excel').html(output)
        

        $('#addform').on('change','.head_data',function(){
            get_head_excel()
        })

        function get_head_excel(){
            $('#shipper_exporter_excel').html($('#shipper_exporter').val())
            $('#inspection_no_excel').html($('#inspection_no').val())
            $('#packing_list_excel').html($('#packing_list').val())
            $('#warehouse_location_excel').html($('#warehouse_location').val())
        }

        async function predata(){
            const Predata_po = await projectFirestore.collection('Po').get()
            $('#Po_select').html('<option disabled value="" selected >Choose PEC PO</option>')
            Predata_po.forEach((pec_po)=>{
                $('#Po_select').append(
                    '<option value="'+pec_po.id+'">PEC'+pec_po.data().pecpo_no+'/'+pec_po.data().pecpo_year+'</option>'
                )
            })
        }
        predata()

        $('#modal_add_po').on('click',async function(){
            const model_po_select_val = $('#Po_select').val()
            const po_select_data = await projectFirestore.collection('Po').doc(model_po_select_val).get()
            await add_po_to_table()
            await get_head_excel()
            function add_po_to_table(){
                console.log(po_select_data.data())
                for(let i = 0; i < po_select_data.data().battorder.length; i++){
                    for(let j = 0; j < po_select_data.data().battorder[i].ordersheet.length; j++){
                        for(let k = 0;k < po_select_data.data().battorder[i].ordersheet[j].battery.length; k++){
                            $('#row_'+po_select_data.data().battorder[i].ordersheet[j].battery[k].batt_no).remove()
                            $('#data').append(
                                '<tr id="row_'+po_select_data.data().battorder[i].ordersheet[j].battery[k].batt_no+'">'+
                                    '<td><div class="col-form-label running_num"></div></td>'+
                                    '<td><div id="podata_'+po_select_data.data().battorder[i].ordersheet[j].battery[k].batt_no+'" class="col-form-label ">PEC'+po_select_data.data().pecpo_no+'/'+po_select_data.data().pecpo_year+'</div></td>'+
                                    '<td><div id="jobdata_'+po_select_data.data().battorder[i].ordersheet[j].battery[k].batt_no+'" class="col-form-label ">'+po_select_data.data().battorder[i].project_first+'/'+po_select_data.data().battorder[i].project_second+'</div></td>'+
                                    '<td><div id="ordersheetdata_'+po_select_data.data().battorder[i].ordersheet[j].battery[k].batt_no+'" class="col-form-label ">'+po_select_data.data().battorder[i].project_first+'/'+po_select_data.data().battorder[i].project_second+'/'+po_select_data.data().battorder[i].ordersheet[j].ordersheet+'</div></td>'+
                                    '<td><div id="modeldata_'+po_select_data.data().battorder[i].ordersheet[j].battery[k].batt_no+'" class="col-form-label ">'+po_select_data.data().battorder[i].ordersheet[j].battery[k].series+'</div></td>'+
                                    '<td class="text-center"><div id="warrantydata_'+po_select_data.data().battorder[i].ordersheet[j].battery[k].batt_no+'" class="col-form-label ">'+(parseInt(po_select_data.data().warranty)/12)+'</div></td>'+
                                    '<td>'+
                                        '<input id="qtydata_'+po_select_data.data().battorder[i].ordersheet[j].battery[k].batt_no+'" class="col-12 form-control qtydata" type="number" step="1" value="'+po_select_data.data().battorder[i].ordersheet[j].battery[k].order_amount+'" />'+
                                    '</td>'+
                                    '<td class="text-center align-bottom">'+
                                        // '<button class="del_row_btn btn p-0 px-2 btn-danger" value="'+po_select_data.data().battorder[i].ordersheet[j].battery[k].batt_no+'" type="button">ลบ</button>'+
                                        '<input value="'+po_select_data.data().battorder[i].ordersheet[j].battery[k].batt_no+'"  data-poid="'+po_select_data.id+'" data-jobid="'+po_select_data.data().battorder[i].job+'"  type="checkbox" class="checkbox-model" style="height: 20px; width: 20px;"/>'+
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
                x = 0
                get_battery_row(x)
                render_row()
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
                            job_id:$(this).data('jobid'),
                            batt_no:$(this).val(),
                            qty:$('#qtydata_'+$(this).val()).val()
                        })
                    }
                })
            }

            function save_data(){
                projectFirestore.collection('InspectionForm').add({
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
        var x = 0
        $('#data_table').on('change','.checkbox-model',async function() {
            x = 0
            await get_battery_row(x)
            await render_row()
        })

        $('#check_all').on('change',async function(){
            await check_box()
            await get_battery_row(x)
            await render_row()
            function check_box(){
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
            }
            
        })

        function get_battery_row(x){
                $('#excel_data_row').html('')
                
                $(".checkbox-model").each(function() {
                    if($(this).prop("checked")){
                        x = x+1
                        $('#excel_data_row').append(
                            '<tr class="data_row">'+
                                '<td colspan="1" style="text-align: center;font-size: 24px;font-family:Angsana New;border:1px solid;">'+
                                x+
                                '</td>'+

                                '<td colspan="2" style="text-align: center;font-size: 24px;font-family:Angsana New;border:1px solid;">'+
                                $('#podata_'+$(this).val()).html()+
                                '</td>'+

                                '<td colspan="2" style="text-align: center;font-size: 24px;font-family:Angsana New;border:1px solid;">'+
                                $('#jobdata_'+$(this).val()).html()+
                                '</td>'+

                                '<td colspan="2" style="text-align: center;font-size: 24px;font-family:Angsana New;border:1px solid;">'+
                                $('#warrantydata_'+$(this).val()).html()+
                                '</td>'+

                                '<td colspan="5" style="text-align: center;font-size: 24px;font-family:Angsana New;border:1px solid;">'+
                                $('#modeldata_'+$(this).val()).html()+
                                '</td>'+

                                '<td colspan="1" style="text-align: center;font-size: 24px;font-family:Angsana New;border:1px solid;">'+
                                $('#qtydata_'+$(this).val()).val()+
                                '</td>'+

                                '<td colspan="1" style="text-align: center;font-size: 24px;font-family:Angsana New;border:1px solid;">'+
                                '</td>'+

                                '<td colspan="1" style="text-align: center;font-size: 24px;font-family:Angsana New;border:1px solid;">'+
                                '</td>'+

                                '<td colspan="1" style="text-align: center;font-size: 24px;font-family:Angsana New;border:1px solid;">'+
                                '</td>'+

                                '<td colspan="1" style="text-align: center;font-size: 24px;font-family:Angsana New;border:1px solid;">'+
                                '</td>'+

                                '<td colspan="1" style="text-align: center;font-size: 24px;font-family:Angsana New;border:1px solid;">'+
                                '</td>'+

                                '<td colspan="3" style="text-align: center;font-size: 24px;font-family:Angsana New;border:1px solid;">'+
                                '</td>'+

                                '<td colspan="3" style="text-align: center;font-size: 24px;font-family:Angsana New;border:1px solid;">'+
                                '</td>'+
                            '</tr>'
                        )
                    
                    }
                })
        }

        function render_row(){
            for(let i = 0; i < (12-$('.data_row').length); i++){
                
                $('#excel_data_row').append(
                    '<tr>'+
                        '<td colspan="1" style="text-align: center;font-size: 24px;font-family:Angsana New;border:1px solid;">'+
                        '</td>'+

                        '<td colspan="2" style="text-align: center;font-size: 24px;font-family:Angsana New;border:1px solid;">'+
                        '</td>'+

                        '<td colspan="2" style="text-align: center;font-size: 24px;font-family:Angsana New;border:1px solid;">'+
                        '</td>'+

                        '<td colspan="2" style="text-align: center;font-size: 24px;font-family:Angsana New;border:1px solid;">'+
                        '</td>'+

                        '<td colspan="5" style="text-align: center;font-size: 24px;font-family:Angsana New;border:1px solid;">'+
                        '</td>'+

                        '<td colspan="1" style="text-align: center;font-size: 24px;font-family:Angsana New;border:1px solid;">'+
                        '</td>'+

                        '<td colspan="1" style="text-align: center;font-size: 24px;font-family:Angsana New;border:1px solid;">'+
                        '</td>'+

                        '<td colspan="1" style="text-align: center;font-size: 24px;font-family:Angsana New;border:1px solid;">'+
                        '</td>'+

                        '<td colspan="1" style="text-align: center;font-size: 24px;font-family:Angsana New;border:1px solid;">'+
                        '</td>'+

                        '<td colspan="1" style="text-align: center;font-size: 24px;font-family:Angsana New;border:1px solid;">'+
                        '</td>'+

                        '<td colspan="1" style="text-align: center;font-size: 24px;font-family:Angsana New;border:1px solid;">'+
                        '</td>'+

                        '<td colspan="3" style="text-align: center;font-size: 24px;font-family:Angsana New;border:1px solid;">'+
                        '</td>'+

                        '<td colspan="3" style="text-align: center;font-size: 24px;font-family:Angsana New;border:1px solid;">'+
                        '</td>'+
                    '</tr>'
                )
            }
        }
        

    
    }

    
}
</script>