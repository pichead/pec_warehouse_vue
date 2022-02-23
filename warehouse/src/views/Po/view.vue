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
                <div class="h3 mt-5 font-weight-bold">View PEC PO</div>
                <form id="addform" class="border mt-5 mb-2 p-5 fwhite">
                    <div class="row">
                        
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
                                    <select id="select_origin" class="col-12 form-control top-data" disabled required>
                                        <option selected disabled value="">Select Origin</option>
                                        
                                    </select> 
                                </div>

                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">Warranty</label >
                                <div class="col-4">
                                    <input id="warranty" class="form-control top-data" type="number" disabled required/>
                                </div>
                                <div class="col-4 col-form-label">Months</div>
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
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                
                <form id="ordersheet" >
                    <div class="col-12 border p-4">
                        <div id="data" class="col-12" >

                        </div>
                        <div class="col-12 mb-4">
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
                    

                    <div id="approve_valid" class="d-flex flex-row-reverse row-hl my-5">
                        <button class="btn btn-info col-2 " type="button" data-toggle="modal" data-target="#approve-modal">Approve</button>
                        <a class="btn btn-secondary col-2 mr-2" type="button" href="/Battery/pecpoList">Back</a>
                        
                    </div>
                </form>
                <div class="modal" id="approve-modal" aria-hidden="true" style="display: none;">
                    <div class="modal-dialog">
                        <form id="approve_form" class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Approve</h5>
                                <button class="close" data-dismiss="modal">×</button>
                            </div>
                            <div id="approve-modal-body" class="modal-body col-10 mx-auto">
                                
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
        var con_delivery = ""
        const origin_option = ['China','Mexico']
        var shipmentprice = 0
        const shipment_list = ['Combined to CIF','Other']
        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }

        // pre_approve_btn()
        // async function pre_approve_btn(){
        //     const auth = projectAuth;
        //     const user_email = auth.currentUser.email;
        //     const get_user_list = await projectFirestore.collection("Users").where("email", '==', user_email).get()
        //     var user_permission

        //     await get_permission()
        //     await get_permission()

        //     function get_permission(){
        //         get_user_list.forEach((user)=>{
        //             user_permission = user.data().permission
        //         })
        //     }            
        // }

        async function predata(){
            const Po = await projectFirestore.collection('Po').doc(id).get()
            const Companys = await projectFirestore.collection('ContactCompany').get()
            const ordersheet_list = Po.data().battorder
            const approve_status = Po.data().approve_status

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
                $('#comment').val(Po.data().comment)
                $('#createdate').html('Create Date: '+cnew_date)
                $('#lastupdate').html('Last Update: '+unew_date)
                con_origin = Po.data().origin
                con_warranty = Po.data().warranty
                $('#add-shipment').data('row',(Po.data().shipment.length+1))
                for(let i = 0 ;i < Po.data().shipment.length; i++){
                    $('#data-shipment').append(
                        '<div id="shipment-row-'+(i+1)+'" data-row="'+(i+1)+'" class="row py-2 shipment-row">'+
                            '<div class="col-2">'+
                                '<div class="row">'+
                                    '<select id="shipment-option-'+(i+1)+'" class="form-control col-8 shipment-option low-data">'+
                                        '<option disabled selected>select shipment</option>'+
                                    '</select>'+
                                    '<div class="col-4 pt-1"></div>'+
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
            async function getdata(){
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

                
                
                const allproject = await  projectFirestore.collection('Projects').get()
                allproject.forEach((project)=>{
                    for(let i = 0 ; i  < project.data().orderSheet.length; i++){
                        if(project.data().orderSheet[i].origin == con_origin && project.data().orderSheet[i].warranty == con_warranty){
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
                        if(project_data_con.data().orderSheet[l].origin == con_origin && project_data_con.data().orderSheet[l].warranty == con_warranty){
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
                                '<option value="'+pre_project_data_con.id+'" data-name="'+pre_project_data_con.data().ProjectName+'" data-row="'+(j+1)+'" selected >'+pre_project_data_con.data().JobNoFirst+'/'+pre_project_data_con.data().JobNoSecond+'</option>'
                            )
                            $('#projectname-'+(j+1)).val(pre_project_data_con.data().ProjectName)

                            for(let k = 0; k < ordersheet_list[j].ordersheet.length; k++){
                                for(let l = 0 ; l < pre_project_data_con.data().orderSheet.length; l++){
                                    if(pre_project_data_con.data().orderSheet[l].origin == con_origin && pre_project_data_con.data().orderSheet[l].warranty == con_warranty){

                                        if( ordersheet_list[j].job == project_id[i] && ordersheet_list[j].ordersheet[k].ordersheet == pre_project_data_con.data().orderSheet[l].no){
                                            
                                            $('#ordersheet-'+(j+1)+'-'+(k+1)).append(
                                                '<option class="option-ordersheet" value="'+pre_project_data_con.data().orderSheet[l].no+'" data-row="'+(j+1)+'" data-ordersheet="'+(k+1)+'" data-project="'+pre_project_data_con.id+'" selected >'+pre_project_data_con.data().JobNoFirst+'/'+pre_project_data_con.data().JobNoSecond+'/'+pre_project_data_con.data().orderSheet[l].no+'</option>'
                                            )

                                            for(let m = 0; m < ordersheet_list[j].ordersheet[k].battery.length; m++){
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

        const approve_form = document.querySelector('#approve_form');
        approve_form.addEventListener('submit', async function(e){
            e.preventDefault();
            const appove_select = $('input[name=approve_status]:checked', '#approve_form').val()
             $('#approve-modal').modal('toggle');
            if(appove_select == 'true'){
                var timestamp = Math.round(new Date().getTime() / 1000);
                projectFirestore.collection('Po').doc(id).update({
                    update_time:timestamp,
                    approve_status:true
                }).then(()=>{
                    router.push({ 
                        name: 'PECpoList',
                        params: { mserror: true} 
                    })
                })
            }
            else{
                var timestamp = Math.round(new Date().getTime() / 1000);
                projectFirestore.collection('Po').doc(id).update({
                    update_time:timestamp,
                    approve_status:false
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