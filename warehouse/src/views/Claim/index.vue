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
                    <button class="btn blue-btn col" type="button">Search</button>
                </div>
                <div class="col-2 pl-0">
                    <button class="btn blue-btn col" data-toggle="modal" data-target="#addModal" type="button" >+ New Claim</button>
                </div>
            </div>

            <div class="border p-4">
                <table class="table">
                    <colgroup>
                        <col span="1" style="width: 50px;">
                        <col span="1" style="width: 140px;">
                        <col span="1" style="width: 110px;">
                        <col span="1" style="width: 160px;">
                        <col span="1" style="width: 160px;">
                        <col span="1" style="width: 160px;">
                        <col span="1" style="width: 160px;">
                        <col span="1" style="width: 15%;">
                    </colgroup>
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
                            <td class="text-center ">
                                <div class="col-form-label">1</div>
                            </td>
                            <td class="text-center col-form-label">
                                <div class="col-form-label">Wrrt002/2022</div>
                            </td>
                            <td class="text-center col-form-label">
                                <div class="col-form-label">63/007</div>
                            </td>
                            <td class="text-center">
                                <div id="show_mail_1" class="col-form-label">-</div>
                                <div id="input_mail_1" class="d-none">
                                    <input id="mail_1" type="date" class="form-control file_input">
                                </div>
                            </td>
                            <td class="text-center">
                                <div id="show_approved_1" class="col-form-label">-</div>
                                <div id="input_approved_1" class=" d-none">
                                    <select id="approve_option_1" class="form-control  col-form-label">
                                        <option value="Not Approved">Not Approved</option>
                                        <option value="Approved">Approved</option>
                                    </select>
                                </div>
                            </td>
                            <td class="text-center">
                                <div id="show_claim_1" class="col-form-label">-</div>
                                <div id="input_claim_1" class=" d-none">
                                    <select id="claim_option_1" class="form-control">
                                        <option value="Batteries">Batteries</option>
                                        <option value="Credit Note">Credit Note</option>
                                    </select>
                                </div>
                            </td>
                            <td class="text-center">
                                <div id="show_status_1" class="col-form-label">-</div>
                                <div id="input_status_1" class="d-none">
                                    <select id="status_option_1" class="form-control status-option" data-row="1">
                                        <option value="อัปโหลดข้อมูล">อัปโหลดข้อมูล</option>
                                        <option value="Mail to C&D">Mail to C&D</option>
                                        <option value="Approved">Approved</option>
                                        <option value="เสร็จสมบูรณ์">เสร็จสมบูรณ์</option>
                                        <option value="ยกเลิก">ยกเลิก</option>
                                    </select>
                                    <input id="status_file_1" type="file" class="d-none"/>
                                </div>
                            </td>
                            <td class="text-center">
                                <div class="row">
                                    <div class="col-6">
                                        <button class="col-12 btn btn-success view_btn_1 view_btn p-1" data-row="1">View</button>
                                        <button class="col-12 btn red-btn d-none close_btn_1 close_btn p-1" data-row="1">Close</button>
                                    </div>
                                    <div class="col-6">
                                        <button class="col-12 btn yellow-btn p-1 edit_btn_1 edit-btn" data-row="1">Edit</button>
                                        <button class="col-12 btn blue-btn d-none text-white p-1 save_btn_1 save-btn" data-row="1">Confirm</button>
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

        preload()

        async function preload(){

        }



        $('#data').on('click','.edit-btn',function(){
            const edit_row = $(this).data('row')

            $('#input_mail_'+edit_row).removeClass('d-none')
            $('#show_mail_'+edit_row).addClass('d-none')
            $('#input_approved_'+edit_row).removeClass('d-none')
            $('#show_approved_'+edit_row).addClass('d-none')
            $('#input_claim_'+edit_row).removeClass('d-none')
            $('#show_claim_'+edit_row).addClass('d-none')
            $('#input_status_'+edit_row).removeClass('d-none')
            $('#show_status_'+edit_row).addClass('d-none')
            $('.view_btn_'+edit_row).addClass('d-none')
            $('.edit_btn_'+edit_row).addClass('d-none')
            $('.close_btn_'+edit_row).removeClass('d-none')
            $('.save_btn_'+edit_row).removeClass('d-none')
        })

        $('#data').on('click','.close_btn',function(){
            const close_row = $(this).data('row')
            $('#input_mail_'+close_row).addClass('d-none')
            $('#show_mail_'+close_row).removeClass('d-none')
            $('#input_approved_'+close_row).addClass('d-none')
            $('#show_approved_'+close_row).removeClass('d-none')
            $('#input_claim_'+close_row).addClass('d-none')
            $('#show_claim_'+close_row).removeClass('d-none')
            $('#input_status_'+close_row).addClass('d-none')
            $('#show_status_'+close_row).removeClass('d-none')
            $('.view_btn_'+close_row).removeClass('d-none')
            $('.edit_btn_'+close_row).removeClass('d-none')
            $('.close_btn_'+close_row).addClass('d-none')
            $('.save_btn_'+close_row).addClass('d-none')

        })

        $('#data').on('change','.status-option',function(){
            const status_option_row = $(this).data('row')
            console.log($('#status_option_'+status_option_row).val())
            if($('#status_option_'+status_option_row).val() == 'เสร็จสมบูรณ์'){
                
                getfile()

                async function getfile(){
                    await fileclick()
                    // await filecheck()

                    function fileclick(){
                        $('#status_file_'+status_option_row).click(function(){
                            initialize()
                        })
                    }
                    
                }
            }
        })

        $('data').on('clcik','.file_input',function(){
            console.log('file click')
        })
        function initialize() {
            document.body.onfocus = checkIt;
            console.log('initializing');
        }
        function checkIt() {
            
                        // Check if the number of files
                        // is not zero
                        if (theFile.value.length) {
                            alert('Files Loaded');
                        }
                        
                        // Alert the user if the number
                        // of file is zero
                        else {
                            alert('Cancel clicked');
                        }
                        document.body.onfocus = null;
                        console.log('checked');
                    }   

    }
}
</script>