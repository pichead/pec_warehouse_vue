<style>
    .tablehead-color {
        background-color:#707070;
        color: #FAFAFA;
    }
</style>
<template>
    <Sidebar />
    <div id="content" style="margin-left: 250px">
        <form id="addform">
            <div class="container">
                <div class="h3 mt-3 font-weight-bold">ลงทะเบียน PEC PO</div>
                <div  class="border mt-3 mb-2 p-3 bg-white">
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">Company</label >
                                <div class="col-8">
                                    <select id="company" class="form-control  series-option"  required>
                                        <option selected disabled value="">choose company</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">Term of payment</label >
                                <div class="col-4">
                                    <input id="Tpayment" class="form-control" type="number" min="0" required/>
                                </div>
                                <div class="col-4 col-form-label">days</div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">PEC PO</label >
                                <div class="col">
                                    <input id="pecpono" class="form-control pecpo" placeholder="000" type="number" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" minlength="3" maxlength="3" required/>
                                </div>
                                <div class="col-1 h2">/</div>
                                <div class="col">
                                    <input id="pecpoyear" class="form-control pecpo" placeholder="0000" type="number" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" minlength="4" maxlength="4" required/>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">Delivery date</label >
                                <div class="col-4">
                                    <input id="delivery_date" class="form-control" type="number" required/>
                                </div>
                                <div class="col-4 col-form-label">days</div>
                                
                            </div>
                        </div>

     
                        <div class="col-12">
                            <div class="form-group row mb-0">
                                <label class="col-2 col-form-label font-weight-bold">Remark</label >
                                <div class="col-10">
                                    <textarea  id="comment" class="form-control" rows="3" placeholder="note..."></textarea>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>

                <br>
                <div id="data" class="overflow-auto border p-3" style="height: 350px;">
                    

                    
                </div>
                <br>
                <div class="d-flex justify-content-end row-hl">
                    <button class="col-2 item-hl btn btn-secondary" type="button">Cancel</button>
                    <button id="save" class="col-2 ml-3 item-hl btn btn-primary" type="submit">Save</button>
                </div>

                <div class="modal" id="batt_modal" aria-hidden="true" style="display: none;">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 id="modal_head" class="modal-title"></h5>
                            <button class="close" data-dismiss="modal">×</button>
                        </div>
                        <div class="modal-body">
                            <div class="col-10 mx-auto">
                                <div id="modal_data" class="row">
                                    
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>

                <button id="btn_alert_modal" type="button" class="btn btn-primary d-none" data-toggle="modal" data-target="#alert_modal"></button>

                <div class="modal" id="alert_modal" aria-hidden="true" style="display: none;">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">ข้อผิดพลาด</h5>
                            <button class="close" data-dismiss="modal">×</button>
                        </div>
                        <div class="modal-body">
                            <div class="col-10 mx-auto">
                                <div id="alert_modal_data" class="row">
                                    <p>ข้อมูลไม่ถูกต้อง</p>
                                    <p>กรุณากรอกข้อมูลใหม่ให้ถูกต้อง</p>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </form>
    </div>
    
</template>

<script>

import Sidebar from "../../components/Sidebar.vue";
import { projectFirestore, projectAuth } from "../../firebase/config";
import router from "@/router";
export default {
    components: { Sidebar },
    mounted() {
        const timestamp = Math.round(new Date().getTime() / 1000);
        var project
        var con_origin = ""
        var con_warranty = ""
        var con_delivery = ""
        var uniq_condition_arr
        var job = []
        var battorder = []
        var final_battorder = []
        
        projectFirestore.collection("ContactCompany").where('visible','==',true).get().then((compdata)=>{
            compdata.forEach((data)=>{
                $('#company').append(
                    '<option value="'+data.id+'">'+data.data().CompanyName+'</option>'
                )
            })

        })

        predata()

        
        async function predata(){
            var job_arr = []
            var all_condition_arr = []
            uniq_condition_arr = []
            var ordersheet_arr = []
            const get_ordersheet = await projectFirestore.collection("Projects").where('inter_validate','==',true).get()
            
            get_ordersheet.forEach((ordersheet)=>{
                job_arr.push(ordersheet.data())
                job.push({
                    id:ordersheet.id,
                    data:ordersheet.data()
                })
            })

            await get_all_con()
            await get_uni_con()
            await render_con_box()
            await render_job()
            function get_all_con(){
                for(let i = 0; i < job_arr.length; i++){
                    for(let j = 0; j < job_arr[i].orderSheet.length; j++){
                        if(job_arr[i].orderSheet[j].po == false){
                            all_condition_arr.push({
                                warranty:job_arr[i].orderSheet[j].warranty,
                                deliverydate:job_arr[i].orderSheet[j].deliverydate,
                                origin:job_arr[i].orderSheet[j].origin
                            })
                        }
                    }
                }
            }

            function get_uni_con(){
                for(let i = 0; i < all_condition_arr.length; i++){
                    
                    if(uniq_condition_arr.length == 0){
                        uniq_condition_arr.push({
                                no:i,
                                warranty:all_condition_arr[i].warranty,
                                deliverydate:all_condition_arr[i].deliverydate,
                                origin:all_condition_arr[i].origin
                            }
                        )
                    }
                    else{
                        const count = check()
                        function check(){
                            for(let j = 0; j < uniq_condition_arr.length; j++){
                                if(uniq_condition_arr[j].warranty == all_condition_arr[i].warranty && uniq_condition_arr[j].deliverydate == all_condition_arr[i].deliverydate && uniq_condition_arr[j].origin == all_condition_arr[i].origin){
                                    return false
                                }
                                if(j == uniq_condition_arr.length - 1){
                                    if(uniq_condition_arr[j].warranty == all_condition_arr[i].warranty && uniq_condition_arr[j].deliverydate == all_condition_arr[i].deliverydate && uniq_condition_arr[j].origin == all_condition_arr[i].origin){
                                        return false
                                    }
                                    else{
                                        return true
                                    }  
                                }
                            }
                        }
                        if(count == true){
                            // console.log(all_condition_arr[i].)
                            uniq_condition_arr.push({
                                    no:i,
                                    warranty:all_condition_arr[i].warranty,
                                    deliverydate:all_condition_arr[i].deliverydate,
                                    origin:all_condition_arr[i].origin
                                }
                                    
                            )
                        }

                    }
                }
            }


            function render_con_box(){

                for(let i = 0; i < uniq_condition_arr.length; i++){
                    var cdate = new Date(uniq_condition_arr[i].deliverydate);
                    var cday = cdate.getDate();
                    var cmonth = cdate.getMonth() + 1;
                    var cyear = cdate.getFullYear();
                    if (cday < 10) {
                        cday = "0" + cday;
                    }
                    if (cmonth < 10) {
                        cmonth = "0" + cmonth;
                    }
                    var cnew_date = cday + "-" + cmonth + "-" + cyear;
                    $('#data').append(
                        '<div class="col-12 border rounded p-4 my-2">'+
                            '<div class="row">'+
                                '<div class="col-4 border-right">'+
                                    '<div class="font-weight-bold">Origin : '+uniq_condition_arr[i].origin+'</div>'+
                                    '<div class="font-weight-bold">Warranty : '+uniq_condition_arr[i].warranty+' Month</div>'+
                                    '<div class="font-weight-bold">Delivery Date : '+cnew_date+'</div>'+
                                '</div>'+
                                '<div id="con_no_'+uniq_condition_arr[i].no+'" class="col-8">'+

                                '</div>'+
                            '</div>'+
                        '</div>'
                    )
                }
               
            }

            function render_job(){
                get_ordersheet.forEach((ordersheet)=>{
                    job_arr.push(ordersheet.data())
                    for(let i = 0; i < ordersheet.data().orderSheet.length; i++){
                        if(ordersheet.data().orderSheet[i].po == false){
                            
                            for(let j = 0; j < uniq_condition_arr.length; j++){
                                if(ordersheet.data().orderSheet[i].warranty == uniq_condition_arr[j].warranty &&
                                     ordersheet.data().orderSheet[i].deliverydate == uniq_condition_arr[j].deliverydate &&
                                      ordersheet.data().orderSheet[i].origin == uniq_condition_arr[j].origin)
                                    {   

                                        if($('#con_'+uniq_condition_arr[j].no+'_job'+ordersheet.id).length == 0){
                                            
                                            $('#con_no_'+uniq_condition_arr[j].no).append(
                                                '<div id="con_'+uniq_condition_arr[j].no+'_job'+ordersheet.id+'" class="row my-3">'+
                                                    '<div class="col-5 border-right">'+
                                                            '<input class="maincheck" data-con="'+uniq_condition_arr[j].no+'" data-jobid="'+ordersheet.id+'" type="checkbox" style="width:15px;height:15px;">'+
                                                            '<span class="pl-4 font-weight-bold">Job No : '+ordersheet.data().JobNoFirst+'/'+ordersheet.data().JobNoSecond+'</span>'+
                                                            '<div class="font-weight-bold">Project : '+ordersheet.data().ProjectName+'</div>'+
                                                    '</div>'+
                                                    '<div class="col-7">'+
                                                        '<div id="sheet_con_'+uniq_condition_arr[j].no+'_job'+ordersheet.id+'" class="row">'+
                                                            '<div class="col-12">'+
                                                                '<input id="" data-con="'+uniq_condition_arr[j].no+'"  data-jobid="'+ordersheet.id+'" data-ordersheet="'+ordersheet.data().orderSheet[i].no+'" class="childcheck child_'+uniq_condition_arr[j].no+'_'+ordersheet.id+'" disabled type="checkbox" style="width:15px;height:15px;">'+
                                                                '<span class="pl-4 font-weight-bold">OrderSheet : '+ordersheet.data().JobNoFirst+'/'+ordersheet.data().JobNoSecond+'/'+ordersheet.data().orderSheet[i].no+'</span>'+
                                                                '<span class="pl-4"><i class="bi bi-question-circle batt-modal" type="button" data-toggle="modal" data-target="#batt_modal" data-id="'+ordersheet.id+'" data-ordersheet="'+ordersheet.data().orderSheet[i].no+'"></i></span>'+
                                                            '</div>'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</div>'
                                            )

                                        }
                                        else{
                                            $('#sheet_con_'+uniq_condition_arr[j].no+'_job'+ordersheet.id).append(
                                                '<div class="col-12">'+
                                                    '<input id="" data-con="'+uniq_condition_arr[j].no+'"  data-jobid="'+ordersheet.id+'" data-ordersheet="'+ordersheet.data().orderSheet[i].no+'" class="childcheck child_'+uniq_condition_arr[j].no+'_'+ordersheet.id+'" disabled type="checkbox" style="width:15px;height:15px;">'+
                                                    '<span class="pl-4 font-weight-bold">OrderSheet : '+ordersheet.data().JobNoFirst+'/'+ordersheet.data().JobNoSecond+'/'+ordersheet.data().orderSheet[i].no+'</span>'+
                                                    '<span class="pl-4"><i class="bi bi-question-circle batt-modal" type="button" data-toggle="modal" data-target="#batt_modal" data-id="'+ordersheet.id+'" data-ordersheet="'+ordersheet.data().orderSheet[i].no+'"></i></span>'+
                                                '</div>'
                                            )
                                        }

                                    }
                            }

                        }
                    }
                })

            }
        }


        $('#data').on('click','.batt-modal',async function(){
            const batt_jobid = $(this).data('id')
            const batt_ordersheet = $(this).data('ordersheet')
            const get_modal_ordersheet = await projectFirestore.collection("Projects").doc(batt_jobid).get()
            $('#modal_data').html('')
            for(let i = 0; i < get_modal_ordersheet.data().orderSheet.length; i++){
                
                if(batt_ordersheet == get_modal_ordersheet.data().orderSheet[i].no){
                    $('#modal_head').html(
                        'OrderSheet : '+get_modal_ordersheet.data().JobNoFirst+'/'+get_modal_ordersheet.data().JobNoSecond+'/'+get_modal_ordersheet.data().orderSheet[i].no
                    )

                    for(let j = 0; j < get_modal_ordersheet.data().orderSheet[i].battery.length; j++){
                        $('#modal_data').append(
                            '<div class="col-8">Model : '+get_modal_ordersheet.data().orderSheet[i].battery[j].series+'</div>'+
                            '<div class="col-4">'+get_modal_ordersheet.data().orderSheet[i].battery[j].order_amount+' ลูก</div>'
                        )
                    }
                }

            }

        })


        $('#data').on('click','.maincheck',async function(){
            const check_con = $(this).data('con')
            const check_jobid = $(this).data('jobid')
            let maincheck_lenghtth = $('.maincheck').length
            let childcheck_length = $(".childcheck").length
            if($(this).prop('checked') == true){
                for(let i = 0; i < maincheck_lenghtth; i++){
                    if($($('.maincheck')[i]).data('con') != check_con){
                        $($('.maincheck')[i]).prop('checked', false)
                    }
                }
                
                for(let i = 0; i < childcheck_length; i++){
                    if($($(".childcheck")[i]).data('con') == check_con){
                        $($(".childcheck")[i]).prop('disabled', false)
                    }
                    else{
                        $($(".childcheck")[i]).prop('checked', false)
                        $($(".childcheck")[i]).prop('disabled', true)
                    }
                }
            }
            else{
                for(let i = 0; i < childcheck_length; i++){
                    if($($(".childcheck")[i]).data('jobid') == check_jobid){
                        $($(".childcheck")[i]).prop('checked', false)
                    }

                }
            }

        })

        const addform = document.querySelector('#addform');
        addform.addEventListener('submit', async function(e){
            e.preventDefault()
            battorder = []
            final_battorder = []
            const company = $('#company').val()
            const termPayment = $('#Tpayment').val()
            const poNo = $('#pecpono').val()
            const poYear = $('#pecpoyear').val()
            const deliveryDate = $('#delivery_date').val()
            const comment = $('#comment').val()
            var conCheck = []
            var count_job = 0
            var get_con
            console.log(company)
            console.log(termPayment)
            console.log(poNo)
            console.log(poYear)
            console.log(deliveryDate)
            console.log(comment)

            await check_data()
            if(conCheck.length != 0){
                await get_data()
                await valid_data()
                await create_new()
            }
            else{
                console.log('uncheck')
                $('#btn_alert_modal').click()
            }
            
            function check_data(){
                for(let i = 0; i < $('.maincheck').length; i++){
                    // console.log($($('.maincheck')[i]).prop('checked'))
                    if( $($('.maincheck')[i]).prop('checked') ){
                        
                        const checked_con = $($('.maincheck')[i]).data('con')
                        const checked_jobid = $($('.maincheck')[i]).data('jobid')
                        const classCheck = $('.child_'+checked_con+'_'+checked_jobid)
                        conCheck.push({
                            con:checked_con,
                            jobid:checked_jobid,
                            ordersheet:[]
                        })
                        count_job++
                        for(let j = 0; j < classCheck.length; j++){
                            if( $(classCheck[j]).prop('checked') ){

                                conCheck[count_job-1].ordersheet.push(
                                    $(classCheck[j]).data('ordersheet')
                                )
                            }
                        }

                    }
                }
            }
            
            async function get_data(){
                get_con = uniq_condition_arr.find(x => x.no === conCheck[0].con);
                
                for(let i = 0; i < conCheck.length; i++){
                    const find_job = job.find(x => x.id === conCheck[i].jobid)
                    const ordersheet = {
                        job: find_job.id,
                        project_first: find_job.data.JobNoFirst,
                        project_second: find_job.data.JobNoSecond,
                        projectname: find_job.data.ProjectName,
                        ordersheet:[]
                    }                                             
                    battorder.push(ordersheet)
                    for(let j = 0; j <  conCheck[i].ordersheet.length; j++){
                        const job_ordersheet = find_job.data.orderSheet
                        const find_ordersheet = job_ordersheet.find(x => x.no === (conCheck[i].ordersheet[j]).toString())
                        const ordersheet_data =({
                            ordersheet: (conCheck[i].ordersheet[j]).toString(),
                            battery:[]
                        })
                        battorder[i].ordersheet.push(ordersheet_data)
                        for(let k = 0; k < find_ordersheet.battery.length; k++){
       
                            battorder[i].ordersheet[j].battery.push({
                                batt_no: parseInt(find_ordersheet.battery[k].no),
                                batt_unit_price: '',
                                orderSheet: (battorder[i].ordersheet[j].ordersheet).toString(),
                                order_amount: parseInt(find_ordersheet.battery[k].order_amount),
                                project_id: find_job.id,
                                register_amount: 0,
                                register_barcode: [],
                                series: find_ordersheet.battery[k].series
                            })
                        }
                    }
                }


            }

            function valid_data(){
                console.log('battorder : ',battorder)
                

                for(let i = 0; i < battorder.length; i++){
                    if(battorder[i].ordersheet.length != 0){
                        final_battorder.push( battorder[i] )
                    }
                }
            }

            function create_new(){
                if(final_battorder.length != 0){
                    console.log('Create')
                    console.log('final_battorder : ',final_battorder)
                    create_new_po()
                }
                else{
                    $('#btn_alert_modal').click()
                }
                
            }
            
            
            // await create_new_po()
            function create_new_po(){
                projectFirestore.collection('Po').add({
                    pecpo_no:poNo,
                    pecpo_year:poYear,
                    company:company,
                    tpayment:termPayment,
                    delivery:deliveryDate,
                    comment:comment,
                    createdate:timestamp,
                    update_time:timestamp,

                    origin:get_con.origin,
                    warranty:get_con.warranty,
                    delivery_date:get_con.deliverydate,

                    visible:true,
                    approve_status:false,
                    manager_approve_status:false,
                    generalmanager_approve_status:false,
                    reject:false,
                    shipment:[],
                    msg:[],
                    battorder:final_battorder,
                    register_batt:false


                })
                .then( function(docRef){
                        router.push({ 
                            path: `/Battery/pecpoList`
                        })
                })
            }

        })



    }
}
</script>