<template>
<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
            <div class="h3 my-5 font-weight-bold">Battery Booking Create</div>

            <div class="border rounded">
                <div class="row p-4">
                    <div class="col-6 my-2">
                        <div class="row">
                            <div class="col-4 col-form-label font-weight-bold">
                                ชนิดของการเบิก
                            </div>
                            <div class="col-8">
                                <select name="" class="form-control" id="">
                                    <option value="">ส่งงาน Job</option>
                                    <option value="">ยืม</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 my-2">
                        <div class="row">
                            <div class="col-4 col-form-label font-weight-bold pl-5">เลขที่ </div>
                            <div class="col-8">
                                <select name="" class="form-control" id="">
                                    <option value="">เลือก Job No.</option>
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
                        <table class="table my-2">
                            <colgroup>
                                <col span="1" style="width: 10%;">
                                <col span="1" style="width: 30%;">
                                <col span="1" style="width: 20%;">
                                <col span="1" style="width: 10%;">
                                <col span="1" style="width: 10%;">
                                <col span="1" style="width: 20%;">
                            </colgroup>
                            <thead class="thead-dark">
                                <tr class="text-center">
                                    <th>ลำดับ</th>
                                    <th>ชื่อวัสดุ/รายการ</th>
                                    <th>ยี่ห้อ</th>
                                    <th>เบิก</th>
                                    <th>หน่วย</th>
                                    <th>หมายเหตุ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th class="text-center" scope="row">1</th>
                                    <td>UPS12-320R MRX</td>
                                    <td>C&D</td>
                                    <td class="text-center">25</td>
                                    <td class="text-center">Block</td>
                                    <td class="text-center">
                                        <textarea name="" id="" cols="30" rows="1" class="form-control"></textarea>
                                    </td>

                                </tr>
                                <tr>
                                    <th class="text-center" scope="row">2</th>
                                    <td>UPS12-220 MRX</td>
                                    <td>C&D</td>
                                    <td class="text-center">90</td>
                                    <td class="text-center">Block</td>
                                    <td>
                                        <textarea name="" id="" cols="30" rows="1" class="form-control"></textarea>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                        <div class="col-4 mx-auto mt-4">
                            <div class="row">
                                <div class="col-6">
                                    <button class="btn btn-danger col-12" type="button">ยกเลิก</button>
                                </div>
                                <div class="col-6">
                                    <button class="btn btn-primary col-12" type="submit">สร้างใบเบิก</button>
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
import Sidebar from "../../components/Sidebar.vue";
import router from "@/router";
export default {
    components: { Sidebar },
    mounted() {

    }
}
</script>