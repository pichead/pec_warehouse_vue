<template>
<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
            <div class="h3 my-5 font-weight-bold">Requisition Create</div>

            <div class="border rounded">
                <div class="row p-4">
                    <div class="col-6 my-2">
                        <div class="row">
                            <div class="col-4 col-form-label font-weight-bold">
                                ชนิดของการเบิก
                            </div>
                            <div class="col-8">
                                <select name="" class="form-control" id="request_type">
                                    <option value="" disabled selected>เลือกขนิด</option>
                                    <option value="job">ส่งงาน Job</option>
                                    <option value="lend">ยืม</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 my-2">
                        <div class="row">
                            <div class="col-4 col-form-label font-weight-bold pl-5">เลขที่ </div>
                            <div class="col-8">
                                <select name="" class="form-control" id="job_select" disabled>
                                    
                                </select>
                            </div>
                        </div>
                    </div>


                    <div class="col-6 my-2">
                        <div class="row">
                            <div class="col-4 col-form-label font-weight-bold">งานที่ปฏิบัติ</div>
                            <div class="col-8">
                                <input type="text" class="form-control" placeholder="" />
                            </div>
                        </div>
                    </div>
                    <div class="col-6 my-2">
                        <div class="row">
                            <div class="col-4 col-form-label font-weight-bold pl-5">
                                ผู้ขอเบิก
                            </div>
                            <div class="col-8">
                                <div class="font-weight-bold col-form-label">พิเชษฐ์ มณีรัตน์</div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 font-weight-bold mt-5">
                        รายการเบิก
                    </div>
                    <div class="col-12">
                        <table class="table my-2 ">
                            <colgroup>
                                <col span="1" style="width: 10%;">
                                <col span="1" style="width: 15%;">
                                <col span="1" style="width: 20%;">
                                <col span="1" style="width: 10%;">
                                <col span="1" style="width: 10%;">
                                <col span="1" style="width: 10%;">
                                <col span="1" style="width: 15%;">
                                <col span="1" style="width: 10%;">
                            </colgroup>
                            <thead class="thead-dark">
                                <tr class="text-center">
                                    <th>ลำดับ</th>
                                    <th>OrderSheet</th>
                                    <th>รายการ</th>
                                    <th>ยี่ห้อ</th>
                                    <th>เบิก</th>
                                    <th>หน่วย</th>
                                    <th>หมายเหตุ</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody id="data_table">


                            </tbody>
                            <tfoot id="foot_table" class="d-none">
                                <tr>
                                    <td colspan="7" class="p-0">
                                        <button type="button" class="btn btn-success col-12">เพิ่มรายการ</button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                        <div class="col-4 mx-auto mt-4">
                            <div class="row">
                                <div class="col-6">
                                    <button class="btn btn-danger col-12" type="button">ยกเลิก</button>
                                </div>
                                <div class="col-6">
                                    <button id="submit_btn" class="btn btn-primary col-12" type="button">สร้างใบเบิก</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>

            <div id="report" class="mt-5 d-none">
                <div class="p-3 border rounded">
                    <div class="row">
                        <div class="col-12 my-1">
                            <p>เลขที่....................../............................</p>
                        </div>
                        
                        <div class="col-12 text-center my-1">
                            <p>ใบเบิก / สินค้า / วัสดุ / อุปกรณ์ / เครื่องมือในการติดตั้ง</p>
                        </div>
                        <div class="col-7 my-1">
                            <p>ชื่อ - นามสกุล .......................................................................................................................................</p>
                        </div>
                        <div class="col-5 my-1">
                            <p>วันที่ ...........................................................................................................................</p>
                        </div>
                        <div class="col-7 my-1">
                            <p>งานที่ปฏิบัติ ............................................................................................................................................</p>
                        </div>
                        <div class="col-5 my-1">
                            <p>เบอร์โทร ..................................................................................................................</p>
                        </div>
                        <div class="col-12 my-1">
                            <table class="col-12 px-0 table table-bordered">
                                <thead>
                                    <tr>
                                        <td class="text-center">ลำดับ</td>
                                        <td class="text-center">ชื่อ</td>
                                        <td class="text-center">ยี่ห้อ</td>
                                        <td class="text-center">รุ่น</td>
                                        <td class="text-center">รหัสเครื่องมือ</td>
                                        <td class="text-center">จำนวน</td>
                                        <td class="text-center">หมายเหตุ</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div class="col-6 text-center my-1">
                            <p>ลงชื่อ ..................................................... ผู้ขอเบิก</p>
                        </div>
                        <div class="col-6 text-center my-1">
                            <p>ลงชื่อ ..................................................... ผู้จ่ายวัสดุ</p>
                        </div>
                        <div class="col-6 text-center my-1">
                            <p>................/.........../...............</p>
                        </div>
                        <div class="col-6 text-center my-1">
                            <p>................/.........../...............</p>
                        </div>
                        <div class="col-12 my-1">
                            <p>ต้นฉบับ : ผู้จ่ายวัสดุ/อุปกรณ์/เครื่องสำเนา : ผู้ขอเบิก (ใช้เป็นหลักฐานการคืนวัสดุกรณีเบิกยืม)</p>
                        </div>
                    </div>
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
        $('#request_type').on('change',function(){
            const request_type = $(this).val()
            $('#job_select').html(
                '<option value="" selected disabled>เลือก Job No.</option>'+
                '<option value="job">65/001</option>'
            )
            $('#data_table').html('')
            if(request_type == 'job'){
                $('#job_select').prop( "disabled", false )
                $('#foot_table').addClass('d-none')
            }
            else{
                $('#job_select').prop( "disabled", true )
                $('#foot_table').removeClass('d-none')
                $('#data_table').html(
                    '<tr>'+
                        '<th class="text-center" scope="row">1</th>'+
                        '<td><select class="form-control"><option value="" selected disabled>เลือกสินค้า</option></select></td>'+
                        '<td class="text-center"></td>'+
                        '<td class="text-center"></td>'+
                        '<td class="text-center"><input type="number" value="0" class="form-control"></td>'+
                        '<td class="text-center">'+
                            '<textarea name="" id="" cols="30" rows="1" class="form-control"></textarea>'+
                        '</td>'+
                        '<td><button type="buttonn" class="btn btn-danger py-0">ลบ</button></td>'+
                    '</tr>'
                )
            }

        })

        $('#job_select').on('change',function(){
            const job_select = $(this).val()

            console.log(job_select)
            if(job_select == 'job'){
                
                $('#data_table').html(
                    '<tr id="row-1">'+
                        '<th class="text-center" scope="row">1</th>'+
                        '<td>65/001/1</td>'+
                        '<td>UPS12-320R MRX</td>'+
                        '<td class="text-center">C&D</td>'+
                        '<td class="text-center"><input type="number" value="25" class="form-control"></td>'+
                        '<td class="text-center">Block</td>'+
                        '<td class="text-center">'+
                            '<textarea name="" id="" cols="30" rows="1" class="form-control"></textarea>'+
                        '</td>'+
                        '<td><button type="buttonn" data-row="1" class="btn btn-danger removeBtn py-0">ลบ</button></td>'+
                    '</tr>'+
                    '<tr id="row-2">'+
                        '<th class="text-center" scope="row">2</th>'+
                        '<td>65/001/2</td>'+
                        '<td>UPS12-220 MRX</td>'+
                        '<td class="text-center">C&D</td>'+
                        '<td class="text-center"><input type="number" value="90" class="form-control"></td>'+
                        '<td class="text-center">Block</td>'+
                        '<td>'+
                            '<textarea name="" id="" cols="30" rows="1" class="form-control"></textarea>'+
                        '</td>'+
                        '<td><button type="buttonn" data-row="2" class="btn btn-danger removeBtn py-0">ลบ</button></td>'+
                    '</tr>'
                )
            }
        })


        $('#submit_btn').on('click',function(){
            $('#report').removeClass('d-none')
        })

        $('#data_table').on('click','.removeBtn',function(){
            const rowId = $(this).data('row');
            $('#row-'+rowId).remove();
            console.log(rowId)
        
        })
    }
}
</script>