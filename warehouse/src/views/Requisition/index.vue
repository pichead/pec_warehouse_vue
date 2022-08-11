<template>
<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
            <div class="h3 mt-5 font-weight-bold">Battery Requisition</div>
            <div class="row mt-5 mb-4">
                <div class="col-10">
                    <input id="searchbar" class="form-control" placeholder="Search" style="background: #f4f4f4;"/>
                </div>
                <div class="col-2 pl-0">
                    <a type="button" href="/Requisition/Create" class="btn col-12 btn-success">Create Requisition</a>
                </div>

            </div>

            <table id="table" class="table font-weight-bold">
                <thead class="thead-dark">
                    <tr id="head" class="text-center">
                        <th>Request ID</th>
                        <th>Job No</th>
                        <th>Request User</th>
                        <th>Confirm User</th>
                        <th>Request Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="data" class="text-center">
                    <tr>
                        <td>B_65/001</td>
                        <td>65/001</td>
                        <td>พิเชษฐ์ มณีรัตน์</td>
                        <td>มณีรัตน์ พิเชษฐ์</td>
                        <td>01/07/65</td>
                        <td>
                            <button type="button" class="btn btn-primary py-0 mx-1">View</button>
                            <button type="button" class="btn delBtn btn-danger py-0 mx-1" data-toggle="modal" data-target="#delModal">Delete</button>
                            <button type="button" class="btn fileBtn btn-info py-0 mx-1" data-toggle="modal" data-target="#fileModal">Files</button>
                        </td>
                    </tr>
                    <tr>
                        <td>B_65/002</td>
                        <td>65/002</td>
                        <td>พิเชษฐ์ มณีรัตน์</td>
                        <td>มณีรัตน์ พิเชษฐ์</td>
                        <td>02/07/65</td>
                        <td>
                            <button type="button" class="btn btn-primary py-0 mx-1">View</button>
                            <button type="button" class="btn btn-danger disabled py-0 mx-1">Delete</button>
                            <button type="button" class="btn fileBtn btn-info py-0 mx-1" data-toggle="modal" data-target="#fileModal">Files</button>
                        </td>
                    </tr>
                </tbody>

            </table>
            <div class="modal" id="fileModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Upload Files</h5>
                            <button class="close" data-dismiss="modal">×</button>
                        </div>
                        <div class="modal-body">
                            <div class="col-11 mx-auto p-3">
                                <p>แนบใบส่งของ</p>
                                <input type="file" class="mb-3" />
                                <p>ระบุวันเริ่มการรับประกัน</p>
                                <div class="row">
                                    <div class="col-6">
                                        <p>OrderSheet 65/001/1</p>
                                    </div>
                                    <div class="col-6">
                                        <input type="date" class="form-control" />
                                    </div>
                                    <div class="col-6">
                                        <p>OrderSheet 65/001/1</p>
                                    </div>
                                    <div class="col-6">
                                        <input type="date" class="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-secondary" data-dismiss="modal">ยกเลิก</button>
                            <button class="btn btn-primary" data-dismiss="modal">บันทึก</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal" id="delModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Delete Document</h5>
                            <button class="close" data-dismiss="modal">×</button>
                        </div>
                        <div class="modal-body">
                            ยืนยันการลบข้อมูลหรือไม่
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-secondary" data-dismiss="modal">ยกเลิก</button>
                            <button class="btn btn-danger" type="button">ลบรายการ</button>
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