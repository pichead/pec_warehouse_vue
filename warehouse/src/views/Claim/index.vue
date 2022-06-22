<style>
    #claim_file {
        opacity: 0;
        width: 0;
        float: left; /* Reposition so the validation message shows over the label */
    }
    #report_file {
        opacity: 0;
        width: 0;
        float: left; /* Reposition so the validation message shows over the label */
    }

</style>

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
                
                <form id="addform" class="modal-dialog">

                    <div class="modal-content">

                        <div class="modal-body">
                            <div class="row">
                                <div class="col-10 mx-auto mt-4">
                                    <div class="h3">New Claim</div>
                                    <br>
                                    <div class="row">
                                        <div class="col-4 my-2 col-form-label">Job No.</div>
                                        <div class="col-8 my-2">
                                            <select id="job_newclaim" class="form-control" required>
                                            </select>
                                        </div>
                                        <div class="col-4 my-2 col-form-label">ใบเคลม</div>
                                        <div class="col-8 my-2">
                                            <input id="claim_file" type="file" name="claim_file"  required>
                                            <button id="claim_file_btn" class="col-8 btn btn-success" type="button">เลือกไฟล์</button>
                                        </div>
                                        <div class="col-4 my-2 col-form-label">รายงานปัญหา</div>
                                        <div class="col-8 my-2">
                                            <input id="report_file" type="file" name="report_file" required>
                                            <button id="report_file_btn" class="col-8 btn btn-success" type="button">เลือกไฟล์</button>
                                            
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="modalfooter_create" class="modal-footer">
                            <button class="btn red-btn col-3" data-dismiss="modal" type="button">Close</button>
                            <button class="btn blue-btn col-3" type="submit">Confirm</button>

                        </div>
                    </div>
                    
                </form>
            </div>

            <div class="modal" id="editModal" aria-hidden="true" style="display: none;">
                
                <form id="edit_form" class="modal-dialog">

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
                                        <div class="col-4 my-2 col-form-label">สถานะ</div>
                                        <div class="col-8 my-2">
                                            
                                            <select id="modal_status" class="form-control" required>
                                                <option value="" disabled selected>เลือกสถานะ</option>
                                                <option value="อัปโหลดข้อมูล">อัปโหลดข้อมูล</option>
                                                <option value="Mail to C&D">Mail to C&D</option>
                                                <option value="Approved">Approved by C&D</option>
                                                <option value="เสร็จสมบูรณ์">เสร็จสมบูรณ์</option>
                                                <option value="ยกเลิก">ยกเลิก</option>
                                            </select>
                                        </div>
                                        <div class="col-4 my-2 col-form-label">หลักฐานยืนยัน</div>
                                        <div class="col-8 my-2">
                                            <input id="modal_valid_file" class="" type="file" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="modalfooter_edit" class="modal-footer">
                            

                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
        </div>
</template>

<script>
import { projectFirestore,storage, projectAuth } from "../../firebase/config";
import Sidebar from "../../components/Sidebar.vue";
import router from "@/router";
export default {
    components: { Sidebar },
    mounted() {
        const storageRef = storage.ref();
        const timestamp = Math.round(new Date().getTime() / 1000);
        var claim_batt = []
        var claim_job = []
        var uniq_claim_job = []
        var job = []
        var login_user
        
        projectAuth.onAuthStateChanged((user) => {
            projectFirestore.collection("Users").get().then((Users) => {
                Users.forEach((currentuser)=>{
                    if(currentuser.data().email == user.email){
                        login_user = currentuser.data().name
                    }
                })
            })
            
        });

        preload()
        render_new_claim_modal()

        async function render_new_claim_modal(){

            
            const load_batt_claim = await projectFirestore.collection("Batteries_beta").where('status','==','รอเคลม').get()
            const load_job = await projectFirestore.collection("Projects").where('visible','==',true).get()
            await get_all_claim_batt()
            await get_all_claim_job()
            await get_uniq_job_claim()
            await count_batt_in_job()
            await render_modal_job()

            function get_all_claim_batt(){
                load_batt_claim.forEach((batt_claim)=>{
                    claim_batt.push({
                        id:batt_claim.id,
                        data:batt_claim.data()
                    })
                })
                load_job.forEach((load_job_data)=>{
                    job.push({
                        id:load_job_data.id,
                        data:load_job_data.data()
                    })
                })
            }
            
            function get_all_claim_job(){
                
                for(let i = 0; i < claim_batt.length; i++){
                    claim_job.push(claim_batt[i].data.jobId)
                }
            }

            function get_uniq_job_claim(){
                var unique = claim_job.filter(function(itm, i, a) {
                    return i == claim_job.indexOf(itm);
                });
                for(let i = 0; i < unique.length; i++){
                    uniq_claim_job.push({
                        id:unique[i],
                        count:0
                    })
                }
            }

            function count_batt_in_job(){
                // console.log('claim_batt : ',claim_batt)
                for(let i = 0; i < claim_batt.length; i++){
                    for(let j = 0; j < uniq_claim_job.length; j++){
                        if(uniq_claim_job[j].id == claim_batt[i].data.jobId){
                            uniq_claim_job[j].count = uniq_claim_job[j].count + 1 
                        }
                    }
                }
            }

            function render_modal_job(){
                $('#job_newclaim').html('<option value="" disabled selected>เลือก Job No.</option>')
                for( let i = 0; i < uniq_claim_job.length; i++){
                    const get_job_claim = job.find(x => x.id === uniq_claim_job[i].id);
                    $('#job_newclaim').append(
                        '<option value="'+get_job_claim.id+'">Job No. '+get_job_claim.data.JobNoFirst+'/'+get_job_claim.data.JobNoSecond+' : Qty '+uniq_claim_job[i].count+'</option>'
                    )
                }
            }

        }

        

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
                    const toTimestamp=(strDate)=>{
                        var datum = Date.parse(strDate);
                        return datum/1000;
                    }

                    const mail_alert = get_mail_alert()
                    function get_mail_alert(){
                        if(toTimestamp(claim.data().mail_date) + 604800 < timestamp && claim.data().approve == false){

                            return '<i class="ml-2 text-danger bi bi-exclamation-circle" data-toggle="tooltip" data-placement="top" title="ขณะนี้รอการ Approve มากกว่า 7 วันแล้ว &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*กรุณาติดตามสถานะการเคลมนี้" data-original-title=""></i>'
                        }   
                        else{

                            return '<div></dliv>'

                        }
                    }
                    $('[data-toggle="tooltip"]').tooltip();

                    
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
                            
                            if(claim.data().claim_type == 'Batteries'){
                                return claim.data().batt_claim.length + ' Batteries'
                            }
                            else{
                                return claim.data().claim_type
                            }
                            
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
                                '<div class="col-form-label">'+mail+mail_alert+'</div>'+
                            '</td>'+
                            '<td class="text-center">'+
                                '<div class="col-form-label">'+Approved+'</div>'+
                            '</td>'+
                            '<td class="text-center">'+
                                '<div  class="col-form-label">'+claim_type+'</div>'+
                            '</td>'+
                            '<td class="text-center">'+
                                '<div class="col-form-label">'+claim.data().status[claim.data().status.length - 1].status+'</div>'+
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
            $('#modalfooter_edit').html(
                '<button class="btn red-btn col-3" data-dismiss="modal" type="button">Close</button>'+
                '<button id="edit_save_btn" class="btn blue-btn col-3" type="submit" value="'+edit_id+'">Confirm</button>'
            )
            const model_claim = await projectFirestore.collection("Claim").doc(edit_id).get()
            
            
            const modal_mail = get_modal_mail()
            const modal_approved = get_modal_approved()
            const modal_claim_type = get_modal_claim_type()
            function get_modal_mail(){
                if(model_claim.data().mail_date == ''){
                    return '<input id="modal_mail_date" type="date" class="form-control" />'
                }
                else{
                    return '<input id="modal_mail_date" type="date" class="form-control" value="'+model_claim.data().mail_date+'" />'
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

        var file = 0
        $('#modal_valid_file').on("change", function(){
            var files = !!this.files ? this.files : [];
            file = files[0]
        })


        $('#claim_file_btn').on('click',()=>{
            $('#claim_file').click()
        })
        $('#report_file_btn').on('click',()=>{
            $('#report_file').click()
        })


        const add_form = document.querySelector('#addform');
        add_form.addEventListener('submit', async function(e){
            e.preventDefault();
            console.log('Create New')
            const count_claim = await projectFirestore.collection("Claim").get()
            const claim_no = await get_claim_no()
            const claim_new_id = 'Wrrt'+claim_no+'/'+new Date().getFullYear();
            const job_id_select = $('#job_newclaim').val()
            const create_claim_status = 'อัปโหลดข้อมูล'
            
            var battery_id = []
            var job_no = job.find(x => x.id === job_id_select)

            const claim_file = await get_claim_file()
            const report_file = await get_report_file()

            async function get_claim_file(){

                const get_claim_file =  $('#claim_file')[0].files[0]
                var claim_filename =  timestamp + '_' + get_claim_file.name.replace(/\s/g, '_')
                var claim_fileref = storageRef.child(`Files//${claim_filename}`);
                const claim_file_snapshot = await claim_fileref.put(get_claim_file);
                const claim_file_src = await claim_file_snapshot.ref.getDownloadURL();
                return {name: claim_filename, src :  claim_file_src};
            }
            async function get_report_file(){
                const get_report_file =  $('#report_file')[0].files[0]
                var report_filename =  timestamp + '_' + get_report_file.name.replace(/\s/g, '_')
                var report_fileref = storageRef.child(`Files//${report_filename}`);
                const report_file_snapshot = await report_fileref.put(get_claim_file);
                const report_file_src = await report_file_snapshot.ref.getDownloadURL();
                return {name: report_filename, src :  report_file_src};
            }
        

            await get_batt_id_claim()
            await create_save()

            function get_claim_no(){
                if(count_claim.size < 100){
                    if(count_claim.size < 10){
                        return '00'+  (count_claim.size + 1).toString()
                    }
                    else{
                        return '0'+(count_claim.size + 1).toString()
                    }
                }
                else{
                    return (count_claim.size + 1).toString()
                }
            }

            function get_batt_id_claim(){
                for(let i = 0; i < claim_batt.length; i++){
                    if(claim_batt[i].data.history[claim_batt[i].data.history.length -1].job_id == job_id_select){
                        battery_id.push(claim_batt[i].id)
                    }
                }
            }

            function create_save(){
                projectFirestore.collection('Claim').add({
                    ClaimNo:claim_new_id,
                    JobNo:job_no.data.JobNoFirst+'/'+job_no.data.JobNoSecond,
                    job_id:job_id_select,
                    approve:false,
                    claim_type:'',
                    mail_date:'',
                    status:[{status:create_claim_status,timestamp:timestamp,create_user:login_user}],
                    create_date:timestamp,
                    batt_claim:battery_id,
                    claim_file:[claim_file],
                    report_file:[report_file],
                    valid_file:[],
                    invoice:'',
                    user_name:'',
                    mfg_code:''
                }).then(()=>{
                    location.reload()
                })
            }

        })

        const edit_form = document.querySelector('#edit_form');
        edit_form.addEventListener('submit', async function(e){
            e.preventDefault();

            const edit_id_save = $('#edit_save_btn').val()
            const edit_mail_date = await get_mail_date()
            const edit_approve_save = await get_approve_model()
            const edit_claim_type_save = await get_claim_type() 
            const edit_status_save = $('#modal_status').val()
            const get_edit_claim_id = await projectFirestore.collection("Claim").doc(edit_id_save).get()
            const new_status_update = await get_edit_new_status()
            var valid_file = await filesave()
            const new_valid_update = await new_valid_file()
            async function filesave(){
                if(file == 0){
                    return 'nofile'
                }
                else{
                    var filename =  timestamp + '_' + file.name.replace(/\s/g, '_')
                    var fileref = storageRef.child(`Files//${filename}`);
                    const snapshot = await fileref.put(file);
                    const y = await snapshot.ref.getDownloadURL();
                    console.log('my main image',y);
                    return {name: filename, src :  y};
                }
                
            }

            function get_mail_date(){
                if($('#modal_mail_date').val() == ''){
                    return ''
                }
                else{
                    return $('#modal_mail_date').val()
                }
            }

            function get_approve_model(){
                if( $('#modal_approved').val() == 'false'){
                    return false
                }
                else{
                    return true
                }
            }

            function get_claim_type(){
                if($('#modal_claim_type').val() == 'false'){
                    return ''
                }
                else{
                    return $('#modal_claim_type').val()
                }
            }

            function get_edit_new_status(){
                var new_status = get_edit_claim_id.data().status
                new_status.push({
                    status:edit_status_save,
                    timestamp:timestamp,
                    create_user:login_user
                })
                return new_status
            }

            function new_valid_file(){                

                var new_valid = get_edit_claim_id.data().valid_file

                if(valid_file == 'nofile'){
                    return new_valid
                }
                else{
                    new_valid.push(valid_file)
                    return new_valid
                }
                
            }

            await edit_save()

            function edit_save(){
                projectFirestore.collection('Claim').doc(edit_id_save).update({
                    mail_date:edit_mail_date,
                    approve:edit_approve_save,
                    claim_type:edit_claim_type_save,
                    status:new_status_update,
                    valid_file:new_valid_update
                }).then(()=>{
                    location.reload()
                })

            }



        })

    }
}
</script>