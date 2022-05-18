<template>
<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
        <div class="h3 mt-5 font-weight-bold">รายการเคลม</div>
        <div class="row mt-5 mb-4">
            <div class="col-8">
                <input class="form-control" placeholder="Search" style="background: #f4f4f4;"/>
            </div>
            <div class="col-2 pl-0">
                <button class="btn btn-primary col" type="button">Search</button>
            </div>
            <div class="col-2 pl-0">
                <button class="btn btn-primary col" data-toggle="modal" data-target="#addModal" type="button" >+ New Claim</button>
            </div>
        </div>

        <div class="border p-4">
            <table class="table table-striped">
                <thead>
                    <tr id="head" class="text-center">
                        <th>No.</th>
                        <th>Claim No.</th>
                        <th>Job No.</th>
                        <th>Mail to C&D</th>
                        <th>Approve</th>
                        <th>ของเคลมคืน</th>
                        <th>สถานะ</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="data">
                    <tr>
                        <td class="text-center">1</td>
                        <td class="text-center">Wrrt002/2022</td>
                        <td class="text-center">63/007</td>
                        <td class="text-center">-</td>
                        <td class="text-center">-</td>
                        <td class="text-center">-</td>
                        <td class="text-center">อัพโหลดข้อมูล</td>
                        <td class="text-center">
                            <div class="row">
                                <div class="col-6">
                                    <button class="col btn btn-success p-1">View</button>
                                </div>
                                <div class="col-6">
                                    <button class="col btn btn-warning text-white p-1">Edit</button>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-center">2</td>
                        <td class="text-center">Wrrt001/2022</td>
                        <td class="text-center">63/027</td>
                        <td class="text-center">10/02/2022</td>
                        <td class="text-center">-</td>
                        <td class="text-center">-</td>
                        <td class="text-center">Mail to C&D</td>
                        <td class="text-center">
                            <div class="row">
                                <div class="col-6">
                                    <button class="col btn btn-success p-1">View</button>
                                </div>
                                <div class="col-6">
                                    <button class="col btn btn-warning text-white p-1">Edit</button>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-center">3</td>
                        <td class="text-center">Wrrt004/2022</td>
                        <td class="text-center">62/053</td>
                        <td class="text-center">10/10/2021</td>
                        <td class="text-center">Approved</td>
                        <td class="text-center">2 Batteries</td>
                        <td class="text-center">เสร็จสมบูรณ์</td>
                        <td class="text-center">
                            <div class="row">
                                <div class="col-6">
                                    <button class="col btn btn-success p-1">View</button>
                                </div>
                                <div class="col-6">
                                    <button class="col btn btn-warning text-white p-1">Edit</button>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        


        <div class="modal" id="addModal" aria-hidden="true" style="display: none;">
            
            <div class="modal-dialog">

                <div class="modal-content">

                    <div class="modal-body">
                        <div class="row">
                            <div class="col-10 mx-auto mt-4">
                                <div class="h3">New Claim</div>
                                <br>
                                <div class="row">
                                    <div class="col-4 my-2 col-form-label">Job No.</div>
                                    <div class="col-8 my-2">
                                        <select id="" class="form-control">
                                            <option value="">65/031</option>
                                        </select>
                                    </div>
                                    <div class="col-4 my-2 col-form-label">ใบเคลม</div>
                                    <div class="col-8 my-2">
                                        <input type="file" class="d-none">
                                        <button class="col-8 btn btn-success">เลือกไฟล์ (.xls)</button>
                                    </div>
                                    <div class="col-4 my-2 col-form-label">รายงานปัญหา</div>
                                    <div class="col-8 my-2">
                                        <input type="file" class="d-none">
                                        <button class="col-8 btn btn-success">เลือกไฟล์</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="modalfooter" class="modal-footer">
                        <button class="btn red-btn col-3" data-dismiss="modal">Close</button>
                        <button class="btn blue-btn col-3" type="button">Confirm</button>

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