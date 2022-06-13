<style>
    .tablehead-color {
        background-color:#707070;
        color: #FAFAFA;
    }
    .blue-btn{
        background-color:#779cff;
        color: #FAFAFA;
    }
    .blue-btn:hover {
        color: #FAFAFA;
    }
    .red-btn{
        background-color:#ff7777;
        color: #FAFAFA;
    }
    .red-btn:hover {
        color: #FAFAFA;
    }
    .yellow-btn{
        background-color:#ffb753;
        color: #FAFAFA;
    }
    .yellow-btn:hover {
        color: #FAFAFA;
    }
    
</style>
<template>
    <Sidebar />
    <div id="content" style="margin-left: 250px">
        <div>
            <div class="container">
                <div class="h3 mt-5 font-weight-bold">แก้ไข PEC PO</div>
                <form id="addform" class="border mt-5 mb-2 p-5 fwhite">
                    <div class="row">
                        
                        <div class="col-10">
                            <div id="danger-text" class="text-danger d-none h5">*Origin หรือ Warranty ถูกเปลี่ยน สามารถคลิก Save เพื่อบันทึก หรือคลิก Reset เพื่อคืนค่า</div>
                        </div>
                        <div class="col-2 text-right">
                            <i id="top-data-edit" class="bi bi-pencil-square mb-3" type="button" style="font-size:25px;color:grey;"></i>
                        </div>
                        
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">Company</label >
                                <div class="col-8">
                                    <select id="company" class="form-control  series-option top-data" disabled required>
                                        <option selected disabled>choose company</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">Term of payment</label >
                                <div class="col-4">
                                    <input id="Tpayment" class="form-control top-data" type="number" disabled required/>
                                </div>
                                <div class="col-4 col-form-label">days</div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">PEC PO</label >
                                <div class="col">
                                    <input id="pecpono" class="form-control pecpo top-data" placeholder="000" type="number" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" minlength="3" maxlength="3" disabled required/>
                                </div>
                                <div class="col-1 h2">/</div>
                                <div class="col">
                                    <input id="pecpoyear" class="form-control pecpo top-data" placeholder="0000" type="number" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" minlength="4" maxlength="4" disabled required/>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">Delivery date</label >
                                <div class="col-4">
                                    <input id="delivery_date" class="form-control top-data" type="number" disabled required/>
                                </div>
                                <div class="col-4 col-form-label">days</div>
                                
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">Origin</label >
                                <div class="col-8">
                                    <select id="select_origin" class="col-12 form-control" disabled required>
                                        <option selected disabled value="">Select Origin</option>
                                        
                                    </select> 
                                </div>

                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">Warranty</label >
                                <div class="col-4">
                                    <input id="warranty" class="form-control" type="number" disabled required/>
                                </div>
                                <div class="col-4 col-form-label">Months</div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 pr-0 col-form-label font-weight-bold">Order Delivery Date</label >
                                <div class="col-8">
                                    <input id="delivery" class="form-control" type="date" disabled required/>
                                </div>
                            </div>
                        </div>
                        
     
                        <div class="col-12">
                            <div class="form-group row mb-0">
                                <label class="col-2 col-form-label font-weight-bold">Remark</label >
                                <div class="col-10">
                                    <textarea  id="comment" class="form-control top-data" disabled rows="3" placeholder="note..."></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 mt-3">
                            <div class="row">
                                <div class="col">
                                    <div id="createdate">Create Date: - </div>
                                </div>
                                <div class="col">
                                    <div id="lastupdate">Last Update: - </div>
                                </div>
                                <div class="col-4">
                                    <div class="row">
                                        <div class="col-6">
                                            <button id="reset-btn" class="btn red-btn col-12 top-data" disabled type="button" >Reset</button>
                                        </div>
                                        <div class="col-6">
                                            <button id="save-btn" class="btn blue-btn col-12 top-data" disabled type="submit" >Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                
                <form id="ordersheet" >
                    <div class="col-12 border p-4">
        
                        <div class="col-12 text-right">
                            <i  id="low-data-edit" class="bi bi-pencil-square mb-3" type="button" style="font-size:25px;color:grey;"></i>
                        </div>
                        <div id="data" class="col-12" >

                        </div>
                        <div class="col-12 mb-4">
                            <button id="addjob" class="btn yellow-btn col-12 text-white low-data" type="button" data-row="0" >Add Job No</button>
                        </div>
                        <div id="shipment" class="col-12">
                            <div id="" class="row mb-4">
                                <div class="col-7">
                                    <div class="h2 font-weight-bold">Shipment</div>
                                </div>
                                <div class="col-5">
                                    <div class="row">
                                        <div class="col-6">
                                        </div>
                                        <div class="col-6">
                                            <button id="add-shipment" class="btn blue-btn col-12 low-data" data-row="1"  type="button">Add Shipment</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 mt-3">
                                    <div class="col-12 pb-2" style="border-bottom:solid 2px #707070">
                                        <div class="row py-2 text-center tablehead-color">
                                            <div class="col-2">Shipment</div>
                                            <div class="col-3">Description</div>
                                            <div class="col">Qty.</div>
                                            <div class="col">Unit</div>
                                            <div class="col-2">Unit Price (USD)</div>
                                            <div class="col-2">Amount (USD)</div>
                                        </div>
                                        <div id="data-shipment">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="sumprice-row" class="col-12 border p-4 mt-2">
                            <div class="col-12">
                                <div class="row">
        
                                    <div class="col-8"></div>
                                    <div class="col-2 col-form-label">Total Price</div>
                                    <div  id="totalprice" class="col-2 col-form-label text-right">0.00</div>
                                </div>
                            </div>

                        </div>
                        <!-- <div id="con-edit" class="col-12 border p-4 mt-2 d-none">
                            <div class="col-12">
                                <div class="row">
        
                                    <div class="col-8"></div>
                                    <div class="col-2 col-form-label">Total Price</div>
                                    <div class="col-2 col-form-label text-right">0.00</div>
                                </div>
                            </div>

                        </div> -->
                    </div>
                    

                    <div class="d-flex flex-row-reverse row-hl my-5">
                        <button class="btn btn-info col-2 " type="button" data-toggle="modal" data-target="#approve-modal">Approve</button>
                        <button class="btn blue-btn  col-2 low-data mr-2" type="submit">Save</button>
                        <a class="btn btn-secondary col-2 mr-2" type="button" href="/Battery/pecpoList">Cancel</a>
                        
                    </div>
                </form>
                <div class="modal" id="approve-modal" aria-hidden="true" style="display: none;">
                    <div class="modal-dialog modal-lg">
                        <form id="approve_form" class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Approve</h5>
                                <button class="close" data-dismiss="modal">×</button>
                            </div>
                            <div class="modal-body col-10 mx-auto">
                                <div class="font-weight-bol my-3 font-weight-bold">Approve</div>
                                <div id="approve-modal-body"></div>                                
                            </div>
                            <br>
                            <div class="col-10 mx-auto font-weight-bold">Massage</div>
                            <div class="col-10 mx-auto border round my-3 p-3">
                                <div id="msg-data" class="overflow-auto" style="height:200px">
                                    <div class="col-10 text-center mx-auto mt-4 pt-5">No Massage</div>
                                </div>
                                <textarea id="new_msg" class="form-control my-2" placeholder="Massage..."></textarea>
                            </div>
                            <div class="modal-footer">
                                <button class="btn red-btn" data-dismiss="modal">Close</button>
                                <button class="btn blue-btn" type="submit">Save</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>
    
</template>

<script>

import Sidebar from "../../components/Sidebar.vue";
import { projectFirestore, projectAuth } from "../../firebase/config";
import router from "@/router";
import numeral from "numeral";

export default {
    components: { Sidebar },
    mounted() {

        var url = window.location.pathname;
        var id = url.substring(url.lastIndexOf('/') + 1);
        var project_id = []
        var project_ordersheet = []
        var project_ordersheet_use = []
        var con_origin
        var con_warranty
        var con_delivery
        var msg = []
        var username
        var old_batt_data_arry = []
        const origin_option = ['China','Mexico']
        var shipmentprice = 0
        const shipment_list = ['Combined to CIF','Other']
        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }

        async function predata(){
            const Po = await projectFirestore.collection('Po').doc(id).get()
            const Companys = await projectFirestore.collection('ContactCompany').get()
            const ordersheet_list = Po.data().battorder
            const approve_status = Po.data().approve_status
            const auth = projectAuth;
            const user_email = auth.currentUser.email;
            const get_user_list = await projectFirestore.collection("Users").where("email", '==', user_email).get()
            username = await get_username(get_user_list)
            function get_username(){
                var name
                get_user_list.forEach((user)=>{
                    name = user.data().name
                })
                return name
            }
            if(approve_status == true){
                $('#approve-modal-body').html(
                    '<div class="form-check">'+
                        '<input class="form-check-input" type="radio" name="approve_status" id="approve1" value="true" checked>'+
                        '<label class="form-check-label" for="approve1">Approved</label>'+
                    '</div>'+
                    '<div class="form-check">'+
                        '<input class="form-check-input" type="radio" name="approve_status" id="approve2" value="false">'+
                        '<label class="form-check-label" for="approve2">Not Approved</label>'+
                    '</div>'
                )
            }
            else{
                $('#approve-modal-body').html(
                    '<div class="form-check">'+
                        '<input class="form-check-input" type="radio" name="approve_status" id="approve1" value="true">'+
                        '<label class="form-check-label" for="approve1">Approved</label>'+
                    '</div>'+
                    '<div class="form-check">'+
                        '<input class="form-check-input" type="radio" name="approve_status" id="approve2" value="false" checked>'+
                        '<label class="form-check-label" for="approve2">Not Approved</label>'+
                    '</div>'
                )
            }

            if(Po.data().msg.length > 0){
                msg = Po.data().msg
                $('#msg-data').html('')
                for(let i = 0; i < Po.data().msg.length; i++){
                    var dt=eval(Po.data().msg[i].date*1000);
                    var msg_date = (new Date(dt)).toLocaleString();
                    $('#msg-data').append(
                        '<div class="border border-round p-2 my-1">'+
                            '<div class="">'+Po.data().msg[i].name+' : '+msg_date+'</div>'+
                            '<div class="pl-3">'+Po.data().msg[i].msg+'</div>'+
                        '</div> '
                    )
                }
            }
            

            

            var cdate = new Date(Po.data().createdate*1000);
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

            var udate = new Date(Po.data().update_time*1000);
            var uday = udate.getDate();
            var umonth = udate.getMonth() + 1;
            var uyear = udate.getFullYear();
            if (uday < 10) {
                uday = "0" + uday;
            }
            if (umonth < 10) {
                umonth = "0" + umonth;
            }
            var unew_date = uday + "-" + umonth + "-" + uyear;
            await render()
            await getdata()
            await project_select()
            await project_select2()
            await project_select3()
            await get_ordersheet_data_project()
            await get_ordersheet_data_project_render_project()
            await render_price()

            function render(){
                $('company').html('<option selected disabled>choose company</option>')
                Companys.forEach((company)=>{
                    if(company.id == Po.data().company){
                        $('#company').append('<option value="'+company.id+'" selected>'+company.data().CompanyName+'</option>')
                    }
                    else{
                        $('#company').append('<option value="'+company.id+'">'+company.data().CompanyName+'</option>')
                    }
                })
                $('#pecpono').val(Po.data().pecpo_no)
                $('#pecpoyear').val(Po.data().pecpo_year)
                $('#Tpayment').val(Po.data().tpayment)
                for(let i = 0; i  < origin_option.length; i++){
                    if(origin_option[i] == Po.data().origin){
                        $('#select_origin').append(
                            '<option value="'+origin_option[i]+'" selected>'+origin_option[i]+'</option>'
                        )
                    }
                    else{
                         $('#select_origin').append(
                            '<option value="'+origin_option[i]+'">'+origin_option[i]+'</option>'
                        )
                    }
                    
                }
                $('#delivery_date').val(Po.data().delivery)
                $('#warranty').val(Po.data().warranty)
                $('#delivery').val(Po.data().delivery_date)

                $('#comment').val(Po.data().comment)
                $('#createdate').html('Create Date: '+cnew_date)
                $('#lastupdate').html('Last Update: '+unew_date)
                con_origin = Po.data().origin
                con_warranty = Po.data().warranty
                con_delivery = Po.data().delivery_date
                if(Po.data().shipment){
                    $('#add-shipment').data('row',(Po.data().shipment.length+1))
                    for(let i = 0 ;i < Po.data().shipment.length; i++){
                        $('#data-shipment').append(
                            '<div id="shipment-row-'+(i+1)+'" data-row="'+(i+1)+'" class="row py-2 shipment-row">'+
                                '<div class="col-2">'+
                                    '<div class="row">'+
                                        '<select id="shipment-option-'+(i+1)+'" class="form-control col-8 shipment-option low-data">'+
                                            '<option disabled selected>select shipment</option>'+
                                        '</select>'+
                                        '<div class="col-4 pt-1"><i type="button" class="bi bi-trash text-danger shipment-del low-data" data-row="'+(i+1)+'" style="font-size:25px;" ></i></div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="col-3">'+
                                    '<input id="shipment-des-'+(i+1)+'" class="form-control shipment-description low-data" type="text" value="'+Po.data().shipment[i].description+'" />'+
                                '</div>'+
                                '<div class="col">'+
                                    '<input id="shipment-amount-'+(i+1)+'" class="form-control shipmentdata low-data shipment-amount" data-row="'+(i+1)+'" type="number" value="'+parseInt(Po.data().shipment[i].amount)+'" />'+
                                '</div>'+
                                '<div class="col">'+
                                    '<input id="shipment-unit-'+(i+1)+'" class="form-control shipment-unit low-data" type="text" value="'+Po.data().shipment[i].unit+'" />'+
                                '</div>'+
                                '<div class="col-2">'+
                                    '<input id="shipment-price-'+(i+1)+'" class="form-control shipmentdata shipment-price low-data" data-row="'+(i+1)+'" value="'+parseFloat(Po.data().shipment[i].price)+'" type="number" />'+
                                '</div>'+
                                '<div  id="shipment-totalprice-'+(i+1)+'" class="col-2 shipment-totoal-price text-right" >'+
                                    parseFloat(Po.data().shipment[i].price) * parseInt(Po.data().shipment[i].amount) +
                                '</div>'+
                            '</div>'
                        )
                        

                    }
                }
                else{
                    $('#add-shipment').data('row',1)
                }
                


            }
            async function getdata(){
                if(Po.data().shipment){
                    for(let i = 0 ;i < Po.data().shipment.length; i++){
                        for(let j = 0; j  < shipment_list.length; j++){

                            if(shipment_list[j] == Po.data().shipment[i].shipment){
                                
                                if(Po.data().shipment[i].shipment == 'Combined to CIF'){
                                    $('#shipment-option-'+(i+1)).append(
                                        '<option value="Combined to CIF" selected>Combined to CIF</option>'
                                    )

                                }
                                else{
                                    $('#shipment-option-'+(i+1)).append(
                                        '<option value="Other" selected>Other</option>'
                                    )
                                }
                            }
                            else{
                                if(Po.data().shipment[i].shipment == 'Combined to CIF'){
                                $('#shipment-option-'+(i+1)).append(
                                        '<option value="Other" >Other</option>'
                                    )
                                }
                                else{
                                    
                                    $('#shipment-option-'+(i+1)).append(
                                        '<option value="Combined to CIF" >Combimed to CIF</option>'
                                    )
                                }
                            }
                        }
                    }
                }

                
                
                const allproject = await  projectFirestore.collection('Projects').get()
                allproject.forEach((project)=>{
                    for(let i = 0 ; i  < project.data().orderSheet.length; i++){
                        if(project.data().orderSheet[i].origin == con_origin && project.data().orderSheet[i].warranty == con_warranty && project.data().orderSheet[i].deliverydate == con_delivery){
                            project_id.push(project.id)
                        }
                    }
                })

            }

            function project_select(){
                project_id = project_id.filter(onlyUnique)
                
            }
            function project_select2(){
                for(let i = 0; i < project_id.length;i++){
                    project_ordersheet.push({project_id:project_id[i],ordersheet:[]})
                    project_ordersheet_use.push({project_id:project_id[i],ordersheet:[]})

                }
            }
            async function project_select3(){
                for(let i = 0; i < project_ordersheet.length; i++){
                    const project_data_con =  await projectFirestore.collection('Projects').doc(project_id[i]).get()
                    for(let l = 0 ; l < project_data_con.data().orderSheet.length; l++){
                        if(project_data_con.data().orderSheet[l].origin == con_origin && project_data_con.data().orderSheet[l].warranty == con_warranty && project_data_con.data().orderSheet[l].deliverydate == con_delivery){
                            project_ordersheet[i].ordersheet.push(project_data_con.data().orderSheet[l].no)
                        }

                    }
                }
            }

            function get_ordersheet_data_project(){
                
                for(let i = 0; i < ordersheet_list.length;i++){
                    $('#data').append('<div id="row-'+(i+1)+'" class="row mb-4">'+
                                '<div class="col-3">'+
                                    '<div class="row">'+
                                        '<div class="col-5 col-form-label">Job No.</div>'+
                                        '<div class="col-7">'+
                                            '<select id="row-job-'+(i+1)+'" class="col-12 form-control job low-data" >'+
                                            '</select>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="col-4">'+
                                    '<div class="row">'+
                                        '<div class="col-5 col-form-label">Project Name</div>'+
                                        '<div class="col-7">'+
                                            '<input id="projectname-'+(i+1)+'" class="form-control col-12" value="" readonly/>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="col-5">'+
                                    '<div class="row">'+
                                        '<div class="col-6">'+
                                            '<button class="btn red-btn col-12 del-row-btn low-data" data-row="'+(i+1)+'" type="button">Remove Job No</button>'+
                                        '</div>'+
                                        '<div class="col-6">'+
                                            '<button class="btn blue-btn col-12 add-ordersheet low-data" data-pa="'+(i+1)+'" data-ordersheet="1" type="button">Add Order Sheet</button>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="col-12 mt-3">'+
                                    '<div class="col-12 pb-2" style="border-bottom:solid 2px #707070">'+
                                        '<div class="row py-2 text-center tablehead-color">'+
                                            '<div class="col-2">Order Sheet</div>'+
                                            '<div class="col-3">Description</div>'+
                                            '<div class="col">Qty.</div>'+
                                            '<div class="col">Unit</div>'+
                                            '<div class="col-2">Unit Price (USD)</div>'+
                                            '<div class="col-2">Amount (USD)</div>'+
                                        '</div>'+
                                        '<div id="data-pa-'+(i+1)+'" class="project-'+ordersheet_list[i].job+'">'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'
                    )
                    for(let j = 0; j < ordersheet_list[i].ordersheet.length; j++){
                        $('#data-pa-'+(i+1)).append(
                            '<div id="row-'+(i+1)+'-'+(j+1)+'" class="row py-2">'+
                                '<div class="col-2">'+
                                    '<div class="row">'+
                                        '<select id="ordersheet-'+(i+1)+'-'+(j+1)+'" class="low-data form-control col-8 ordersheet" style="font-size:14px"><option value="" selected disabled>Select order sheet</option></select>'+
                                        '<div class="col-4 pt-1"><i type="button" class="bi bi-trash text-danger ordersheet-del low-data" data-project="'+(i+1)+'" data-ordersheet="'+(j+1)+'" style="font-size:25px;" ></i></div>'+
                                    '</div>'+
                                '</div>'+
                                '<div id="description-'+(i+1)+'-'+(j+1)+'" class="col-3"></div>'+
                                '<div id="qty-'+(i+1)+'-'+(j+1)+'" class="col"></div>'+
                                '<div id="unit-'+(i+1)+'-'+(j+1)+'" class="col text-center"></div>'+
                                '<div id="price-'+(i+1)+'-'+(j+1)+'" class="col-2"></div>'+
                                '<div id="total-'+(i+1)+'-'+(j+1)+'" class="col-2 text-right"></div> '+
                            '</div>'
                        )
                    }
                    
                
                }


                
            }

            async function get_ordersheet_data_project_render_project(){
                
                for(let j = 0; j < ordersheet_list.length;j++){
                    for(let i = 0; i < project_id.length ; i++){
                        const pre_project_data_con =  await projectFirestore.collection('Projects').doc(project_id[i]).get()
                        if(ordersheet_list[j].job == pre_project_data_con.id){
                            $('#row-job-'+(j+1)).append(
                                '<option value="'+pre_project_data_con.id+'" data-first="'+pre_project_data_con.data().JobNoFirst+'" data-second="'+pre_project_data_con.data().JobNoSecond+'" data-name="'+pre_project_data_con.data().ProjectName+'" data-row="'+(j+1)+'" selected >'+pre_project_data_con.data().JobNoFirst+'/'+pre_project_data_con.data().JobNoSecond+'</option>'
                            )
                            $('#projectname-'+(j+1)).val(pre_project_data_con.data().ProjectName)

                            for(let k = 0; k < ordersheet_list[j].ordersheet.length; k++){
                                for(let l = 0 ; l < pre_project_data_con.data().orderSheet.length; l++){
                                    if(pre_project_data_con.data().orderSheet[l].origin == con_origin && pre_project_data_con.data().orderSheet[l].warranty == con_warranty && pre_project_data_con.data().orderSheet[l].deliverydate == con_delivery){

                                        if( ordersheet_list[j].job == project_id[i] && ordersheet_list[j].ordersheet[k].ordersheet == pre_project_data_con.data().orderSheet[l].no){
                                            
                                            $('#ordersheet-'+(j+1)+'-'+(k+1)).append(
                                                '<option class="option-ordersheet" value="'+pre_project_data_con.data().orderSheet[l].no+'" data-row="'+(j+1)+'" data-ordersheet="'+(k+1)+'" data-project="'+pre_project_data_con.id+'" selected >'+pre_project_data_con.data().JobNoFirst+'/'+pre_project_data_con.data().JobNoSecond+'/'+pre_project_data_con.data().orderSheet[l].no+'</option>'
                                            )

                                            for(let m = 0; m < ordersheet_list[j].ordersheet[k].battery.length; m++){
                                                old_batt_data_arry.push({
                                                        job_id:ordersheet_list[j].job,
                                                        ordersheet:ordersheet_list[j].ordersheet[k].ordersheet,
                                                        batt_no:ordersheet_list[j].ordersheet[k].battery[m].batt_no
                                                    })
                                                $('#description-'+(j+1)+'-'+(k+1)).append(
                                                    '<div class="col-12 my-1" style="height:40px">'+ordersheet_list[j].ordersheet[k].battery[m].series+'</div>'
                                                )
                                                $('#qty-'+(j+1)+'-'+(k+1)).append(
                                                    '<div id="amount-'+ordersheet_list[j].ordersheet[k].battery[m].batt_no+'" class="col-12 my-1 text-right amount"  style="height:40px">'+ordersheet_list[j].ordersheet[k].battery[m].order_amount+'</div>'
                                                )
                                                $('#unit-'+(j+1)+'-'+(k+1)).append(
                                                    '<div class="col-12 my-1 text-center"  style="height:40px">Blk.</div>'
                                                )
                                                $('#price-'+(j+1)+'-'+(k+1)).append(
                                                    '<input class="form-control my-1 price batt-price low-data" data-series="'+ordersheet_list[j].ordersheet[k].battery[m].series+'" data-orderamount="'+ordersheet_list[j].ordersheet[k].battery[m].order_amount+'" data-project_id="'+ordersheet_list[j].job+'" data-ordersheet_no="'+ordersheet_list[j].ordersheet[k].ordersheet+'" data-id="'+ordersheet_list[j].ordersheet[k].battery[m].batt_no+'" data-project="'+(j+1)+'" data-ordersheet="'+(k+1)+'" style="height:40px" value="'+numeral(ordersheet_list[j].ordersheet[k].battery[m].batt_unit_price).format('0,0.00')+'" type="number" step="0.01" require />'
                                                )
                                                $('#total-'+(j+1)+'-'+(k+1)).append(
                                                    '<div id="price-total-'+ordersheet_list[j].ordersheet[k].battery[m].batt_no+'" class="my-1 price-total-'+(j+1)+'-'+(k+1)+' totalprice"  style="height:40px" >'+numeral(ordersheet_list[j].ordersheet[k].battery[m].order_amount * ordersheet_list[j].ordersheet[k].battery[m].batt_unit_price).format('0,0.00')+'</div>'
                                                )
                                            }

                                        }
                                        else{
                                            $('#ordersheet-'+(j+1)+'-'+(k+1)).append(
                                                '<option class="option-ordersheet" value="'+pre_project_data_con.data().orderSheet[l].no+'" data-row="'+(j+1)+'" data-ordersheet="'+(k+1)+'" data-project="'+pre_project_data_con.id+'">'+pre_project_data_con.data().JobNoFirst+'/'+pre_project_data_con.data().JobNoSecond+'/'+pre_project_data_con.data().orderSheet[l].no+'</option>'
                                            )
                                            
                                        }
                                    
                                            
                                    }
                                    

                                }
                            }

                        }
                        else{
                            $('#row-job-'+(j+1)).append(
                                '<option value="'+pre_project_data_con.id+'" data-name="'+pre_project_data_con.data().ProjectName+'" data-row="'+(j+1)+'">'+pre_project_data_con.data().JobNoFirst+'/'+pre_project_data_con.data().JobNoSecond+'</option>'
                            )
                        }

                       

                    }
                }
                $('#addjob').data('row',ordersheet_list.length+1)
            }

            function render_price(){
                shipment_sum()
                sumprice()
                ordersheet_check()
                $('.low-data').attr('disabled',true)
                $('.bi-trash').addClass('d-none')

            }

        }

        predata()

        $('#pecpono').on('change', function(){
            if($(this).val() && $(this).val().length === 1) {
                $(this).val('00' + $(this).val())
            }
            if($(this).val() && $(this).val().length === 2) {
                $(this).val('0' + $(this).val())
            }
        })
        $('#pecpoyear').on('change', function(){
            if($(this).val() == 1){
                const year_now = new Date().getFullYear().toString()
                
                $(this).val(year_now)
            }
            else{
                if($(this).val() && $(this).val().length === 1) {
                    $(this).val('000' + $(this).val())
                }
                if($(this).val() && $(this).val().length === 2) {
                    $(this).val('00' + $(this).val())
                }
                if($(this).val() && $(this).val().length === 3) {
                    $(this).val('0' + $(this).val())
                }
            }
            
        })
        

        $('#addjob').on('click', async function (){
            
            const rowjob_count = $(this).data('row')
            await render_project()
            await render_project_data()
            await btndata($(this))
            function render_project(){
                    $('#data').append('<div id="row-'+rowjob_count+'" class="row mb-4">'+
                                '<div class="col-3">'+
                                    '<div class="row">'+
                                        '<div class="col-5 col-form-label">Job No.</div>'+
                                        '<div class="col-7">'+
                                            '<select id="row-job-'+rowjob_count+'" class="col-12 form-control job low-data">'+
                                                '<option value="" selected disabled>Select Job No</option>'+
                                            '</select>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="col-4">'+
                                    '<div class="row">'+
                                        '<div class="col-5 col-form-label">Project Name</div>'+
                                        '<div class="col-7">'+
                                            '<input id="projectname-'+rowjob_count+'" class="form-control col-12" value="" readonly/>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="col-5">'+
                                    '<div class="row">'+
                                        '<div class="col-6">'+
                                            '<button class="btn red-btn col-12 del-row-btn low-data" data-row="'+rowjob_count+'" type="button">Remove Job No</button>'+
                                        '</div>'+
                                        '<div class="col-6">'+
                                            '<button class="btn blue-btn col-12 add-ordersheet low-data" data-pa="'+rowjob_count+'" data-ordersheet="1" type="button">Add Order Sheet</button>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="col-12 mt-3">'+
                                    '<div class="col-12 pb-2" style="border-bottom:solid 2px #707070">'+
                                        '<div class="row py-2 text-center tablehead-color">'+
                                            '<div class="col-2">Order Sheet</div>'+
                                            '<div class="col-3">Description</div>'+
                                            '<div class="col">Qty.</div>'+
                                            '<div class="col">Unit</div>'+
                                            '<div class="col-2">Unit Price (USD)</div>'+
                                            '<div class="col-2">Amount (USD)</div>'+
                                        '</div>'+
                                        '<div id="data-pa-'+rowjob_count+'">'+

                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>')
            
            }

            async function render_project_data(){
                
                for(let i = 0; i < project_id.length ; i++){
                    const project_data_con =  await projectFirestore.collection('Projects').doc(project_id[i]).get()
                    $('#row-job-'+rowjob_count).append(
                        '<option value="'+project_data_con.id+'" data-first="'+project_data_con.data().JobNoFirst+'" data-second="'+project_data_con.data().JobNoSecond+'" data-name="'+project_data_con.data().ProjectName+'" data-row="'+rowjob_count+'">'+project_data_con.data().JobNoFirst+'/'+project_data_con.data().JobNoSecond+'</option>'
                    )
                    
                    
                }
                
            }

            function btndata(btn){
                btn.data('row',rowjob_count+1)
            }
            
        })

        $('#data').on('change','.job', async function(){
            const project_name = $(this).find('option:selected').data('name')
            const project_row = $(this).find('option:selected').data('row')
            $('#projectname-'+project_row).val(project_name)
            $('#data-pa-'+project_row).html('')
        })

        $('#data').on('click','.add-ordersheet', async function(){
            const project_count = $(this).data('pa')
            const ordersheet_count = $(this).data('ordersheet')
            const select_project = $('#row-job-'+project_count).find('option:selected').val()
            const project_ordersheet_con = await projectFirestore.collection('Projects').doc(select_project).get()
            
            await render_ordersheet()
            await render_ordersheet_con()
            await ordersheet_check()
            function render_ordersheet(){
                $('#data-pa-'+project_count).append(
                    '<div id="row-'+project_count+'-'+(ordersheet_count+1)+'" class="row py-2">'+
                        '<div class="col-2">'+
                            '<div class="row">'+
                                '<select id="ordersheet-'+project_count+'-'+(ordersheet_count+1)+'" class="form-control low-data col-8 ordersheet" style="font-size:14px"><option value="" selected disabled>Select order sheet</option></select>'+
                                '<div class="col-4 pt-1"><i type="button" class="bi bi-trash text-danger low-data ordersheet-del" data-project="'+project_count+'" data-ordersheet="'+(ordersheet_count+1)+'" style="font-size:25px;" ></i></div>'+
                            '</div>'+
                        '</div>'+
                        '<div id="description-'+project_count+'-'+(ordersheet_count+1)+'" class="col-3"></div>'+
                        '<div id="qty-'+project_count+'-'+(ordersheet_count+1)+'" class="col"></div>'+
                        '<div id="unit-'+project_count+'-'+(ordersheet_count+1)+'" class="col text-center"></div>'+
                        '<div id="price-'+project_count+'-'+(ordersheet_count+1)+'" class="col-2"></div>'+
                        '<div id="total-'+project_count+'-'+(ordersheet_count+1)+'" class="col-2"></div> '+
                    '</div>'
                )
            }
            
            function render_ordersheet_con(){

                for(let i = 0; i < project_ordersheet_con.data().orderSheet.length; i++){
                    if(project_ordersheet_con.data().orderSheet[i].origin == con_origin && project_ordersheet_con.data().orderSheet[i].warranty == con_warranty  && project_ordersheet_con.data().orderSheet[i].deliverydate == con_delivery){
                        $('#ordersheet-'+project_count+'-'+(ordersheet_count+1)).append(
                            '<option class="option-ordersheet" value="'+project_ordersheet_con.data().orderSheet[i].no+'" data-row="'+project_count+'" data-ordersheet="'+(ordersheet_count+1)+'" data-project="'+project_ordersheet_con.id+'">'+project_ordersheet_con.data().JobNoFirst+'/'+project_ordersheet_con.data().JobNoSecond+'/'+project_ordersheet_con.data().orderSheet[i].no+'</option>'
                        )
                    }
                }

                
            }

            

            $(this).data('ordersheet',ordersheet_count+1)
        })

        $('#data').on('change','.ordersheet',async function(){
            const ordersheet_select = $(this).find('option:selected').val()
            const project_select_id = $(this).find('option:selected').data('project')
            const project_select_row = $(this).find('option:selected').data('row')
            const project_select_ordersheet = $(this).find('option:selected').data('ordersheet')

            const project_data_show =  await projectFirestore.collection('Projects').doc(project_select_id).get()
            await clear_row()
            await ordersheet_check()
            await add_new_row_data()

            function clear_row(){

                $('#description-'+project_select_row+'-'+project_select_ordersheet).html('')
                $('#qty-'+project_select_row+'-'+project_select_ordersheet).html('')
                $('#unit-'+project_select_row+'-'+project_select_ordersheet).html('')
                $('#price-'+project_select_row+'-'+project_select_ordersheet).html('')
                $('#total-'+project_select_row+'-'+project_select_ordersheet).html('')
            }
            
            function add_new_row_data(){
                
                for(let i = 0; i < project_data_show.data().orderSheet.length; i++){
                    if(project_data_show.data().orderSheet[i].no == ordersheet_select){
                        for(let j = 0 ;j < project_data_show.data().orderSheet[i].battery.length;j++){
                            $('#description-'+project_select_row+'-'+project_select_ordersheet).append(
                                '<div class="col-12 my-1" style="height:40px">'+project_data_show.data().orderSheet[i].battery[j].series+'</div>'
                            )
                            $('#qty-'+project_select_row+'-'+project_select_ordersheet).append(
                                '<div id="amount-'+project_data_show.data().orderSheet[i].battery[j].no+'" class="col-12 my-1 text-right amount"  style="height:40px">'+project_data_show.data().orderSheet[i].battery[j].order_amount+'</div>'
                            )
                            $('#unit-'+project_select_row+'-'+project_select_ordersheet).append(
                                '<div class="col-12 my-1 text-center"  style="height:40px">Blk.</div>'
                            )
                            $('#price-'+project_select_row+'-'+project_select_ordersheet).append(
                                '<input class="form-control low-data my-1 price batt-price" data-orderamount="'+project_data_show.data().orderSheet[i].battery[j].order_amount+'" data-series="'+project_data_show.data().orderSheet[i].battery[j].series+'" data-project_id="'+project_data_show.id+'" data-ordersheet_no="'+project_data_show.data().orderSheet[i].no+'" data-id="'+project_data_show.data().orderSheet[i].battery[j].no+'" data-project="'+project_select_row+'" data-ordersheet="'+project_select_ordersheet+'" style="height:40px" value="0.00" type="number" step="0.01" require />'
                            )
                            $('#total-'+project_select_row+'-'+project_select_ordersheet).append(
                                '<div id="price-total-'+project_data_show.data().orderSheet[i].battery[j].no+'" class="my-1 price-total-'+project_select_row+'-'+project_select_ordersheet+' totalprice text-right"  style="height:40px" >0.00</div>'
                            )
                            

                        }
                    }
                }
            }

            
        })
        
        async function ordersheet_check(){
            var ordersheet_valid = []
            const ordersheet_check = $('.ordersheet')
            const ordersheet_option = $('.option-ordersheet')
            await set_ordersheet_array()
            await set_ordersheet_valid()
            await set_ordersheet_option()

            function set_ordersheet_array(){
                for(let i = 0; i < project_ordersheet_use.length; i++){
                    ordersheet_valid.push({project_id:project_ordersheet_use[i].project_id,ordersheet:[]})
                }
            }

            function set_ordersheet_valid(){
                for(let i = 0; i < ordersheet_check.length;i++){
                    const ordersheet_check_val = $(ordersheet_check[i]).find('option:selected').val()
                    const ordersheet_check_id = $(ordersheet_check[i]).find('option:selected').data('project')
                    for(let j = 0 ; j < ordersheet_valid.length; j++){
                        if(ordersheet_check_id == ordersheet_valid[j].project_id){
                            ordersheet_valid[j].ordersheet.push(ordersheet_check_val)
                        }
                    }

                }
            }
            function set_ordersheet_option(){
                for(let i = 0 ; i < ordersheet_option.length; i++){
                    for(let j = 0; j < ordersheet_valid.length;j++){
                        for(let k = 0; k < ordersheet_valid[j].ordersheet.length;k++){
                            if($(ordersheet_option[i]).is(':selected')){
                                
                            }
                            else{
                                if($(ordersheet_option[i]).val() == ordersheet_valid[j].ordersheet[k] && $(ordersheet_option[i]).data('project') == ordersheet_valid[j].project_id){
                                    $(ordersheet_option[i]).attr('disabled',true)
                                }
                                
                            }
                        }
                    }
                    

                }
            }
            

        }

        $('#data').on('change','.price',async function(){
            const project_row_price = $(this).data('project')
            const ordersheet_row_price = $(this).data('ordersheet')
            const price_batt_id = $(this).data('id')
            const price = $(this).val()
            const amount = $('#amount-'+price_batt_id).html()
            await sumrowprice()
            await sumprice()

            function sumrowprice(){
                console.log(price_batt_id)
                console.log(price)
                console.log(amount)


                $('#price-total-'+price_batt_id).html(numeral(price*amount).format("0,0.00"))
            }

        })

        $('#data').on('click', '.del-row-btn', function(){
            const del_row_no = $(this).data('row')
            $('#row-'+del_row_no).remove()
            sumprice()
        })

        $('#data').on('click', '.ordersheet-del', function(){
            console.log('ordersheet del')
            const del_ordersheet_project_no = $(this).data('project')
            const del_ordersheet_ordersheet_no = $(this).data('ordersheet')
            $('#row-'+del_ordersheet_project_no+'-'+del_ordersheet_ordersheet_no).remove()
            sumprice()
        })

        $('#shipping-price').on('change',()=>{
            sumprice()
        })

        $('#top-data-edit').on('click',function(){

            if(con_origin != $('#select_origin').find('option:selected').val() || con_warranty != $('#warranty').val() || con_delivery != $('#delivery').val()){

            }
            else{
                if($('.top-data').prop('disabled') == true){
                    $('.low-data').attr('disabled',true)
                    $('.top-data').attr('disabled',false)
                    $('.bi-trash').addClass('d-none')

                }
                else{
                    $('.low-data').attr('disabled',true)
                    $('.top-data').attr('disabled',true)
                    $('.bi-trash').addClass('d-none')

                }
            }
            
            // console.log($('.low-data').attr('disabled'))

        
        })

        $('#low-data-edit').on('click',function(){
            if(con_origin != $('#select_origin').find('option:selected').val() || con_warranty != $('#warranty').val() || con_delivery != $('#delivery').val()){
            }
            else{
                if($('.low-data').prop('disabled') == true){
                    $('.low-data').attr('disabled',false)
                    $('.top-data').attr('disabled',true)
                    $('.bi-trash').removeClass('d-none')
                }
                else{
                    $('.low-data').attr('disabled',true)
                    $('.top-data').attr('disabled',true)
                    $('.bi-trash').addClass('d-none')

                }
            }

            

        })

        async function sumprice(){
            var sum_price = 0.00
            var new_sum_price = 0.00

            await sumbattprice()
            await sumshippingprice()
            await render_total_price()
            console.log('shipmentprice : ',shipmentprice)
            function sumbattprice(){
                $('.totalprice').each(function(){
                    const get_row_price = numeral($(this).text()).value()
                    sum_price = sum_price + get_row_price          
                })                
            }

            function sumshippingprice(){
                
                sum_price = parseFloat(sum_price)+ parseFloat(shipmentprice) 
            }

            function render_total_price(){
                $('#totalprice').html( numeral(sum_price).format('0,0.00'))
            }

        }

        $('#select_origin').on('change',function(){
            condition_change()
        })

        $('#warranty').on('change',function(){
            condition_change()
        })

        function condition_change(){
            const select_origin_data = $('#select_origin').find('option:selected').val()
            const warranty_data = $('#warranty').val()
            const delivery_data = $('#delivery').val()


            if(con_origin != select_origin_data || con_warranty != warranty_data || con_delivery != delivery_data){
                $('#con-edit').removeClass('d-none')
                $('#danger-text').removeClass('d-none')
                // $('#sumprice-row').addClass('d-none')
                $('#data').addClass('d-none')
                shipment_sum()
            }
            else{
                // $('#con-edit').addClass('d-none')
                $('#danger-text').addClass('d-none')
                $('#sumprice-row').removeClass('d-none')
                $('#data').removeClass('d-none')
                shipment_sum()
            }
        }

        $('#reset-btn').on('click',()=>{
            location.reload()
        })

        $('#add-shipment').on('click',()=>{
            const shipment_row = $('#add-shipment').data('row')
            $('#data-shipment').append(
                '<div id="shipment-row-'+shipment_row+'" data-row="'+shipment_row+'" class="row py-2 shipment-row">'+
                    '<div class="col-2">'+
                        '<div class="row">'+
                            '<select id="shipment-option-'+shipment_row+'" class="form-control col-8 shipment-option">'+
                                '<option disabled selected>select shipment</option>'+
                                '<option value="Combined to CIF">Combimed to CIF</option>'+
                                '<option value="Other">Other</option>'+
                            '</select>'+
                            '<div class="col-4 pt-1"><i type="button" class="bi bi-trash text-danger shipment-del low-data" data-row="'+shipment_row+'" style="font-size:25px;" ></i></div>'+
                        '</div>'+
                    '</div>'+
                    '<div class="col-3">'+
                        '<input id="shipment-des-'+shipment_row+'" class="form-control shipment-description" type="text" />'+
                    '</div>'+
                    '<div class="col">'+
                        '<input id="shipment-amount-'+shipment_row+'" class="form-control shipmentdata shipment-amount" data-row="'+shipment_row+'" value="0" type="number" />'+
                    '</div>'+
                    '<div class="col">'+
                        '<input id="shipment-unit-'+shipment_row+'" class="form-control shipment-unit" type="text" />'+
                    '</div>'+
                    '<div class="col-2">'+
                        '<input id="shipment-price-'+shipment_row+'" class="form-control shipmentdata shipment-price" data-row="'+shipment_row+'" value="0" type="number" />'+
                    '</div>'+
                    '<div  id="shipment-totalprice-'+shipment_row+'" class="col-2 shipment-totoal-price text-right">'+
                        
                    '</div>'+
                '</div>'
            )
            $('#add-shipment').data('row',parseInt(shipment_row)+1)
        })

        $('#data-shipment').on('change' ,'.shipmentdata', function(){
            const change_Shipment_row = $(this).data('row')
            const change_amount = $('#shipment-amount-'+change_Shipment_row)
            const change_price = $('#shipment-price-'+change_Shipment_row)
            const change_totalprice = parseFloat(change_amount.val()) * parseFloat(change_price.val())
            $('#shipment-totalprice-'+change_Shipment_row).html(change_totalprice)
            shipment_sum()
        })
        

        $('#data-shipment').on('click','.shipment-del',function(){
            const shipment_del_row = $(this).data('row')
            $('#shipment-row-'+shipment_del_row).remove()
            shipment_sum()
        })

        async function shipment_sum(){

            await pre_shipment()
            await sum_shipment()
            await sumprice()

            function pre_shipment(){
                shipmentprice = 0
            }

            function sum_shipment(){
                for(let i =0 ; i < $('.shipment-totoal-price').length;i++){
                    shipmentprice = shipmentprice + parseFloat($($('.shipment-totoal-price')[i]).html())
                }
            }

        }
        

        const addform = document.querySelector('#addform');
        addform.addEventListener('submit', async function(e){
            e.preventDefault();
            const pecpono = $('#pecpono').val()
            const pecpoyear = $('#pecpoyear').val()
            const company = $('#company').find('option:selected').val()
            const tpayment = $('#Tpayment').val()
            const delivery_date = $('#delivery_date').val()
            const comment = $('#comment').val()
            const update_time = Math.round(new Date().getTime() / 1000);
            const orgin = $('#select_origin').find('option:selected').val()
            const warranty = $('#warranty').val()
            const delivery = $('#delivery').val()
            await save_new_data()
            
            function save_new_data(){
                if(con_origin != $('#select_origin').find('option:selected').val() || con_warranty != $('#warranty').val() || con_delivery != $('#delivery').val()){
                    projectFirestore.collection('Po').doc(id).update({
                    pecpo_no:pecpono,
                    pecpo_year:pecpoyear,
                    company:company,
                    tpayment:tpayment,
                    delivery:delivery_date,
                    comment:comment,
                    update_time:update_time,
                    origin:orgin,
                    delivery_date:delivery,
                    warranty:warranty,
                    battorder:[],
                    visible:true

                    }).then(()=>{ 
                        location.reload()
                    })
                }
                else{
                    projectFirestore.collection('Po').doc(id).update({
                        pecpo_no:pecpono,
                        pecpo_year:pecpoyear,
                        company:company,
                        tpayment:tpayment,
                        delivery:delivery_date,
                        comment:comment,
                        update_time:update_time,
                        origin:orgin,
                        warranty:warranty,
                        delivery_date:delivery,
                        visible:true,
                        approve_status:false
                    }).then(()=>{ 
                        location.reload()
                    })
                    
                }
            }

            

            

        })

        const orderSheetform = document.querySelector('#ordersheet');
        orderSheetform.addEventListener('submit', async function(e){
            e.preventDefault();
            const update_time = Math.round(new Date().getTime() / 1000);
            const orgin = $('#select_origin').find('option:selected').val()
            const warranty = $('#warranty').val()
            const shipping_name = $('#shipping').val()
            const shipping_price = $('#shipping-price').val()
            const battprice_count = $('.batt-price').length
            const job_count = $('.job').length
            const ordersheet_count = $('.ordersheet').length
            var shipment_array =  []
            var projectlist =  []
            var battorder =  []
            var battarray = []
            
            await arrayorder_job()
            await arrayorder_odersheet()
            await arrayorder_batt()
            // await clear_old_data_get()
            // await clear_old_data()
            await savedata()
            
            async function clear_old_data_get(){
                console.log('old_batt_data_arry : ',old_batt_data_arry)
                
                for(let i = 0; i < old_batt_data_arry.length; i++){
                    const get_batt_no = await projectFirestore.collection('Projects').doc(old_batt_data_arry[i].job_id).get()
                    var new_batt_order = []
                    var new_order_sheet = []
                    for(let j = 0; j < get_batt_no.data().battery.length + 1; j++){
                        if(j < get_batt_no.data().battery.length){
                            if(old_batt_data_arry[i].batt_no.toString() == get_batt_no.data().battery[j].no){
                                new_batt_order.push({
                                    amount:get_batt_no.data().battery[j].amount,
                                    company:get_batt_no.data().battery[j].company,
                                    deliverydate:get_batt_no.data().battery[j].deliverydate,
                                    inter_confirm:get_batt_no.data().battery[j].inter_confirm,
                                    lock:true,
                                    main:get_batt_no.data().battery[j].main,
                                    no:get_batt_no.data().battery[j].no,
                                    origin:get_batt_no.data().battery[j].origin,
                                    series:get_batt_no.data().battery[j].series,
                                    warranty:get_batt_no.data().battery[j].warranty,
                                    wh_stock:get_batt_no.data().battery[j].wh_stock,
                                })
                                
                            }
                            else{
                                new_batt_order.push(get_batt_no.data().battery[j])
                            }
                        }
                        else{
                            console.log('new_batt_order : ',new_batt_order)
                            projectFirestore.collection('Projects').doc(old_batt_data_arry[i].job_id).update({
                                battery:new_batt_order
                            })
                        }
                        
                        
                    }
                    
                }
            }
            async function clear_old_data(){
                console.log('new_batt_order : ',new_batt_order)
                // for(let i = 0; i < old_batt_data_arry.length; i++){
                //     const save_batt_no = await projectFirestore.collection('Projects').doc(old_batt_data_arry[i].job_id).get()
                //     for(let j = 0; j < get_batt_no.data().battery.length; j++){
                //         if(new_batt_order == save_batt_no.data().battery[j].no){


                //             // projectFirestore.collection('Projects').doc(old_batt_data_arry[i].job_id).update({
                //             //     battery:new_batt_order
                //             // })
                //         }

                        
                        
                //     }
                    
                // }
            }


            function arrayorder_job(){
                
                for(let i = 0; i < job_count; i++){
                    
                    battarray.push({job:$($('.job')[i]).find('option:selected').val(),ordersheet:[],project_first:$($('.job')[i]).find('option:selected').data('first'),project_second:$($('.job')[i]).find('option:selected').data('second'),projectname:$($('.job')[i]).find('option:selected').data('name')})
                }

                for(let i = 0; i  <  $('.shipment-totoal-price').length; i++){
                    shipment_array.push({
                        shipment:$($('.shipment-option')[i]).find('option:selected').val() ,
                        description:$($('.shipment-description')[i]).val(),
                        amount:$($('.shipment-amount')[i]).val(),
                        unit:$($('.shipment-unit')[i]).val(),
                        price:$($('.shipment-price')[i]).val()
                    })
                }

            }
            function arrayorder_odersheet(){
                const ordersheet_get = $('.ordersheet')
                for(let i = 0; i < ordersheet_count; i++){
                    for(let j = 0;j < battarray.length;j++){
                        if(battarray[j].job == $(ordersheet_get[i]).find('option:selected').data('project')){
                            battarray[j].ordersheet.push({ordersheet:$(ordersheet_get[i]).find('option:selected').val(),battery:[]})
                        }
                    }
                    // battarray.push({job:$($('.job')[i]).find('option:selected').val(),ordersheet:[],projectname:$($('.job')[i]).find('option:selected').data('name')})
                }
            }

            function arrayorder_batt(){
                const batt = $('.batt-price')
                for(let i = 0; i < battprice_count; i++){
                    const project_id = $(batt[i]).data('project_id')
                    const ordersheet_no = $(batt[i]).data('ordersheet_no')
                    const ordersheet_orderamount = $(batt[i]).data('orderamount')
                    const ordersheet_series = $(batt[i]).data('series')
                    const batt_no = $(batt[i]).data('id')
                    const batt_unit_price = $(batt[i]).val()
                    const battdata = {project_id:project_id,orderSheet:ordersheet_no,batt_no:batt_no,batt_unit_price:batt_unit_price,order_amount:ordersheet_orderamount,register_amount:0,series:ordersheet_series,register_amount:0,register_barcode:[]}
                    for(let j = 0;j < battarray.length;j++){
                        for(let k = 0; k < battarray[j].ordersheet.length; k++){
                            if(project_id == battarray[j].job && ordersheet_no == battarray[j].ordersheet[k].ordersheet){
                                battarray[j].ordersheet[k].battery.push(battdata)
                            }
                        }
                    }
                }
                
            }


            function savedata(){
                var timestamp = Math.round(new Date().getTime() / 1000);

                console.log('save')
                console.log('timestamp : ',timestamp)
                console.log('battarray : ',battarray)


                projectFirestore.collection('Po').doc(id).update({
                    update_time:timestamp,
                    battorder:battarray,
                    shipment:shipment_array,
                    approve_status:false,
                    manager_approve_status:false,
                    generalmanager_approve_status:false,
                }).then(()=>{
                    router.push({ 
                        name: 'PECpoList',
                        params: { mserror: true} 
                    })
                })


            }

        })
        
        
        const approve_form = document.querySelector('#approve_form');
        approve_form.addEventListener('submit', async function(e){
            e.preventDefault();
            const appove_select = $('input[name=approve_status]:checked', '#approve_form').val()
            var timestamp = Math.round(new Date().getTime() / 1000);
            if($('#new_msg').val() != ""){
                msg.push({date:timestamp,name:username,msg:$('#new_msg').val()})
            }
            $('#approve-modal').modal('toggle');
            if(appove_select == 'true'){
                projectFirestore.collection('Po').doc(id).update({
                    update_time:timestamp,
                    approve_status:true,
                    manager_approve_status:false,
                    generalmanager_approve_status:false,
                    reject:false,
                    msg:msg
                }).then(()=>{
                    router.push({ 
                        name: 'PECpoList',
                        params: { mserror: true} 
                    })
                })
            }
            else{
                projectFirestore.collection('Po').doc(id).update({
                    update_time:timestamp,
                    approve_status:false,
                    manager_approve_status:false,
                    generalmanager_approve_status:false,
                    reject:false,
                    msg:msg
                }).then(()=>{
                    router.push({ 
                        name: 'PECpoList',
                        params: { mserror: true} 
                    })
                })
            }



        })


    }
}
</script>