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
                        <!-- <tr>
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
                                <div class="col-form-label">-</div>
                                <div class="d-none">
                                    <input  type="date" class="form-control">
                                </div>
                            </td>
                            <td class="text-center">
                                <div class="col-form-label">-</div>
                                <div  class=" d-none">
                                    <select  class="form-control  col-form-label">
                                        <option value="Not Approved">Not Approved</option>
                                        <option value="Approved">Approved</option>
                                    </select>
                                </div>
                            </td>
                            <td class="text-center">
                                <div  class="col-form-label">-</div>
                                <div  class=" d-none">
                                    <select class="form-control">
                                        <option value="Batteries">Batteries</option>
                                        <option value="Credit Note">Credit Note</option>
                                    </select>
                                </div>
                            </td>
                            <td class="text-center">
                                <div class="col-form-label">-</div>
                                <div class="d-none">
                                    <select class="form-control">
                                        <option value="อัปโหลดข้อมูล">อัปโหลดข้อมูล</option>
                                        <option value="Mail to C&D">Mail to C&D</option>
                                        <option value="Approved">Approved</option>
                                        <option value="เสร็จสมบูรณ์">เสร็จสมบูรณ์</option>
                                        <option value="ยกเลิก">ยกเลิก</option>
                                    </select>
                                </div>
                            </td>
                            <td class="text-center">
                                <div class="row">
                                    <div class="col-6">
                                        <button class="col-12 btn btn-success  view_btn p-1" data-row="1">View</button>
                                    </div>
                                    <div class="col-6">
                                        <button class="col-12 btn yellow-btn p-1  edit-btn" data-row="1">Edit</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                         -->
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

            <div class="modal" id="editModal" aria-hidden="true" style="display: none;">
                
                <div class="modal-dialog">

                    <div class="modal-content">

                        <div class="modal-body">
                            <div class="row">
                                <div class="col-10 mx-auto mt-4">
                                    <div class="h3">Edit Claim</div>
                                    <br>
                                    <div class="row">
                                        <div class="col-4 my-2 col-form-label">Mail Date</div>
                                        <div id="modal_mail" class="col-8 my-2">
                                            
                                        </div>
                                        <div class="col-4 my-2 col-form-label">Approved</div>
                                        <div class="col-8 my-2">
                                            <select id="modal_approved" class="form-control"></select>
                                        </div>
                                        <div class="col-4 my-2 col-form-label">ของเคลมคืน</div>
                                        <div class="col-8 my-2">
                                            <select id="modal_claim_type" class="form-control"></select>
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
            const load_claim = await projectFirestore.collection("Claim").get()

            await render_claim()

            function render_claim(){
                $('#data').html('')
                var running_number = 1
                load_claim.forEach((claim)=>{
                    var mail = getmail()
                    var Approved = getapproved()
                    var claim_type = getclaim()

                    function getmail(){
                        if(claim.data().mail_date == ''){
                            return '-'
                        }
                        else{
                            return claim.data().mail_date
                        }
                    }

                    function getapproved(){
                        if(claim.data().approve == false){
                            return '-'
                        }
                        else{
                            return 'Approved'
                        }
                    }

                    function getclaim(){
                        if(claim.data().claim_type == ''){
                            return '-'
                        }
                        else{
                            return claim.data().claim_type
                        }
                    }


                    $('#data').append(
                        '<tr>'+
                            '<td class="text-center ">'+
                                '<div class="col-form-label">'+running_number+'</div>'+
                            '</td>'+
                            '<td class="text-center col-form-label">'+
                                '<div class="col-form-label">'+claim.data().ClaimNo+'</div>'+
                            '</td>'+
                            '<td class="text-center col-form-label">'+
                                '<div class="col-form-label">'+claim.data().JobNo+'</div>'+
                            '</td>'+
                            '<td class="text-center">'+
                                '<div class="col-form-label">'+mail+'</div>'+
                            '</td>'+
                            '<td class="text-center">'+
                                '<div class="col-form-label">'+Approved+'</div>'+
                            '</td>'+
                            '<td class="text-center">'+
                                '<div  class="col-form-label">'+claim_type+'</div>'+
                            '</td>'+
                            '<td class="text-center">'+
                                '<div class="col-form-label">'+claim.data().status+'</div>'+
                            '</td>'+
                            '<td class="text-center">'+
                                '<div class="row">'+
                                    '<div class="col-6">'+
                                        '<button class="col-12 btn btn-success  view_btn p-1" data-docid="'+claim.id+'">View</button>'+
                                    '</div>'+
                                    '<div class="col-6">'+
                                        '<button class="col-12 btn yellow-btn p-1  edit-btn" data-toggle="modal" data-target="#editModal" data-docid="'+claim.id+'">Edit</button>'+
                                    '</div>'+
                               '</div>'+
                            '</td>'+
                        '</tr>'
                        
                    )
                    running_number++
                })
            }
        }

        $('#data').on('click','.edit-btn',async function(){
            const edit_id = $(this).data('docid')
            $('#modal_mail').html('')
            $('#modal_approved').html('')

            const model_claim = await projectFirestore.collection("Claim").doc(edit_id).get()
            
            
            const modal_mail = get_modal_mail()
            const modal_approved = get_modal_approved()
            const modal_claim_type = get_modal_claim_type()
            function get_modal_mail(){
                if(model_claim.data().mail_date == ''){
                    return '<input id="modal_mail" type="date" class="form-control" value="" />'
                }
                else{
                    return '<input id="modal_mail" type="date" class="form-control" value="'+model_claim.data().mail_date+'" />'
                }
            }
            function get_modal_approved(){
                if(model_claim.data().approve == false){
                    let approve_status = '<option value="false" selected>Not Approve</>'+
                                        '<option value="true" >Approve</>'
                    return  approve_status         

                }
                else{
                    let approve_status = '<option value="false" >Not Approve</>'+
                                        '<option value="true" selected>Approve</>'
                    return  approve_status    
                }
            }

            function get_modal_claim_type(){
                if(model_claim.data().claim_type == ''){
                    let claim_option =  '<option value="false" selected>เลือกการเคลม</>'+
                                        '<option value="Batteries">Batteries</>'+
                                        '<option value="Credit Note" >Credit Note</>'
                    return  claim_option         

                }
                else{

                    if(model_claim.data().claim_type == 'Batteries'){
                        let claim_option =  '<option value="false" >เลือกการเคลม</>'+
                                        '<option value="Batteries" selected>Batteries</>'+
                                        '<option value="Credit Note" >Credit Note</>'
                        return  claim_option         
                    }
                    else{
                        let claim_option =  '<option value="false" >เลือกการเคลม</>'+
                                        '<option value="Batteries">Batteries</>'+
                                        '<option value="Credit Note" selected>Credit Note</>'
                         return  claim_option         
                    }

                }
            }

            await render_modal()

            function render_modal(){
                $('#modal_mail').html(modal_mail)
                $('#modal_approved').html(modal_approved)
                $('#modal_claim_type').html(modal_claim_type)


            }


        })

        $('#data').on('click','.view_btn',function(){
            const claim_view_id = $(this).data('docid')
            router.push({ path: `/Claim/view/${claim_view_id}` });
        })

    }
}
</script>