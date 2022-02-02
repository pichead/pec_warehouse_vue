<style>
    .tablehead-color {
        background-color:#707070;
        color: #FAFAFA;
    }
</style>
<template>
    <Sidebar />
    <div id="content" style="margin-left: 250px">
        <div>
            <div class="container">
                <div class="h3 mt-5 font-weight-bold">แก้ไข PEC PO</div>
                <form id="addform" class="border mt-5 mb-2 p-5 bg-white">
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">Company</label >
                                <div class="col-8">
                                    <select id="company" class="form-control  series-option" disabled required>
                                        <option selected disabled>choose company</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">Term of payment</label >
                                <div class="col-4">
                                    <input id="Tpayment" class="form-control" type="number" disabled required/>
                                </div>
                                <div class="col-4 col-form-label">days</div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">PEC PO</label >
                                <div class="col">
                                    <input id="pecpono" class="form-control pecpo" placeholder="000" type="number" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" minlength="3" maxlength="3" disabled required/>
                                </div>
                                <div class="col-1 h2">/</div>
                                <div class="col">
                                    <input id="pecpoyear" class="form-control pecpo" placeholder="0000" type="number" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" minlength="4" maxlength="4" disabled required/>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">Delivery date</label >
                                <div class="col-4">
                                    <input id="delivery_date" class="form-control" type="number" disabled required/>
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
                        
     
                        <div class="col-12">
                            <div class="form-group row mb-0">
                                <label class="col-2 col-form-label font-weight-bold">Remark</label >
                                <div class="col-10">
                                    <textarea  id="comment" class="form-control" disabled rows="3" placeholder="note..."></textarea>
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
                                <div class="col-5">
                                    <div class="row">
                                        <div class="col-4">
                                            <button id="cancel-btn" class="btn btn-danger col-12" type="button" >Cancel</button>
                                        </div>
                                        <div class="col-4">
                                            <button id="save-btn" class="btn btn-primary col-12" type="submit" >Save</button>
                                        </div>
                                        <div class="col-4">
                                            <button id="print-btn" class="btn btn-info col-12" type="button">Print</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

                <div class="col-12 border p-4">
                    <div id="data" class="col-12">

                    </div>
                    <div class="col-12">
                        <button id="addjob" class="btn btn-warning col-12 text-white" type="button" data-row="1" >Add Job No</button>
                    </div>

                </div>

                <div class="d-flex justify-content-center row-hl my-5">
                    <a class="btn btn-secondary col-2 mr-2" type="button" href="/Battery/pecpoList">Cancel</a>
                    <button class="btn btn-danger  col-2 " type="submit">Save</button>

                </div>

            </div>
        </div>
    </div>
    
</template>

<script>

import Sidebar from "../../components/Sidebar.vue";
import { projectFirestore, projectAuth } from "../../firebase/config";
import router from "@/router";
export default {
    components: { Sidebar },
    mounted() {

        var url = window.location.pathname;
        var id = url.substring(url.lastIndexOf('/') + 1);
        var project_id = []
        var con_origin
        var con_warranty
        var con_delivery = ""
        const origin_option = ['China','Mexico']

        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }

        async function predata(){
            const Po = await projectFirestore.collection('Po').doc(id).get()
            const Companys = await projectFirestore.collection('ContactCompany').get()
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
            }
            async function getdata(){
                
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

        }

        predata()


        $('#addjob').on('click', async function (){

            const rowjob_count = $(this).data('row')
            
            await render_project()
            await render_project_data()
            
            function render_project(){
                    $('#data').append('<div id="row-'+rowjob_count+'" class="row mb-4">'+
                                '<div class="col-3">'+
                                    '<div class="row">'+
                                        '<div class="col-5 col-form-label">Job No.</div>'+
                                        '<div class="col-7">'+
                                            '<select id="row-job-'+rowjob_count+'" class="col-12 form-control job">'+
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
                                            '<button class="btn btn-danger col-12" data-row="'+rowjob_count+'" type="button">Remove Job No</button>'+
                                        '</div>'+
                                        '<div class="col-6">'+
                                            '<button class="btn btn-primary col-12 add-ordersheet" data-pa="'+rowjob_count+'" data-ordersheet="1" type="button">Add Order Sheet</button>'+
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
                                            // '<div id="row-'+rowjob_count+'-1" class="row py-2">'+
                                            //     '<div class="col-2">'+
                                            //         '<div class="row">'+
                                            //             '<select id="ordersheet-'+rowjob_count+'-1" class="form-control col-8" style="font-size:14px"><option value="" selected disabled>Select order sheet</option></select>'+
                                            //             '<div class="col-4 pt-1"><i class="bi bi-trash text-danger ordersheet-del" data-project="'+rowjob_count+'" data-ordersheet="1" style="font-size:25px;" ></i></div>'+
                                            //         '</div>'+
                                            //     '</div>'+
                                            //     '<div id="description-'+rowjob_count+'-1" class="col-3"></div>'+
                                            //     '<div id="qty-'+rowjob_count+'-1" class="col"></div>'+
                                            //     '<div id="unit-'+rowjob_count+'-1" class="col text-center"></div>'+
                                            //     '<div id="price-'+rowjob_count+'-1" class="col-2"></div>'+
                                            //     '<div id="total-'+rowjob_count+'-1" class="col-2"></div> '+
                                            // '</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>')
            
                

            }

            async function render_project_data(){
                for(let i = 0; i < project_id.length ; i++){
                    const project_data_con =  await projectFirestore.collection('Projects').doc(project_id[i]).get()
                    $('#row-job-'+rowjob_count).append(
                        '<option value="'+project_data_con.id+'" data-name="'+project_data_con.data().ProjectName+'" data-row="'+rowjob_count+'">'+project_data_con.data().JobNoFirst+'/'+project_data_con.data().JobNoSecond+'</option>'
                    )
                }
                $(this).data('row',rowjob_count+1)
            }
            
        })

        $('#data').on('change','.job', async function(){
            const project_name = $(this).find('option:selected').data('name')
            const project_row = $(this).find('option:selected').data('row')
            $('#projectname-'+project_row).val(project_name)
        })


        $('#data').on('click','.add-ordersheet', async function(){
            const project_count = $(this).data('pa')
            const ordersheet_count = $(this).data('ordersheet')
            const select_project = $('#row-job-'+project_count).find('option:selected').val()
            const project_ordersheet_con = await projectFirestore.collection('Projects').doc(select_project).get()
            
            await render_ordersheet()
            await render_ordersheet_con()

            function render_ordersheet(){
                $('#data-pa-'+project_count).append(
                    '<div id="row-'+project_count+'-'+(ordersheet_count+1)+'" class="row py-2">'+
                        '<div class="col-2">'+
                            '<div class="row">'+
                                '<select id="ordersheet-'+project_count+'-'+(ordersheet_count+1)+'" class="form-control col-8 ordersheet" style="font-size:14px"><option value="" selected disabled>Select order sheet</option></select>'+
                                '<div class="col-4 pt-1"><i class="bi bi-trash text-danger ordersheet-del" data-project="'+project_count+'" data-ordersheet="'+(ordersheet_count+1)+'" style="font-size:25px;" ></i></div>'+
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
                    if(project_ordersheet_con.data().orderSheet[i].origin == con_origin && project_ordersheet_con.data().orderSheet[i].warranty == con_warranty){
                        $('#ordersheet-'+project_count+'-'+(ordersheet_count+1)).append(
                            '<option value="'+project_ordersheet_con.data().orderSheet[i].no+'" data-row="'+project_count+'" data-ordersheet="'+(ordersheet_count+1)+'" data-project="'+project_ordersheet_con.id+'">'+project_ordersheet_con.data().JobNoFirst+'/'+project_ordersheet_con.data().JobNoSecond+'/'+project_ordersheet_con.data().orderSheet[i].no+'</option>'
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
            
            for(let i = 0; i < project_data_show.data().orderSheet.length; i++){
                if(project_data_show.data().orderSheet[i].no == ordersheet_select){
                    for(let j = 0 ;j < project_data_show.data().orderSheet[i].battery.length;j++){
                        $('#description-'+project_select_row+'-'+project_select_ordersheet).append(
                            '<div class="col-12 my-1" style="height:40px">'+project_data_show.data().orderSheet[i].battery[j].series+'</div>'
                        )
                        $('#qty-'+project_select_row+'-'+project_select_ordersheet).append(
                            '<div class="col-12 my-1"  style="height:40px">'+project_data_show.data().orderSheet[i].battery[j].order_amount+'</div>'
                        )
                        $('#unit-'+project_select_row+'-'+project_select_ordersheet).append(
                            '<div class="col-12 my-1"  style="height:40px">Blk.</div>'
                        )
                        $('#price-'+project_select_row+'-'+project_select_ordersheet).append(
                            '<input class="form-control my-1"  style="height:40px" value="" type="number" require />'
                        )
                        $('#total-'+project_select_row+'-'+project_select_ordersheet).append(
                            '<input class="form-control my-1"  style="height:40px" value="" type="number" require disabled/>'
                        )
                        

                    }
                }
            }
        })


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

            projectFirestore.collection('Po').add({
                pecpo_no:pecpono,
                pecpo_year:pecpoyear,
                company:company,
                tpayment:tpayment,
                delivery:delivery_date,
                comment:comment,
                update_time:update_time,
                origin:orgin,
                warranty:warranty,
                visible:true

            }).then(()=>{ 
                location.reload()
            })

        })


        

    }
}
</script>