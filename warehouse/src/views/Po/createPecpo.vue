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
                <div class="h3 mt-5 font-weight-bold">ลงทะเบียน PEC PO</div>
                <form id="addform" class="border mt-5 mb-2 p-5 bg-white">
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
                                    <input id="Tpayment" class="form-control" type="number" required/>
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
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">Order Origin</label >
                                <div class="col-8">
                                    <select id="select_origin" class="col-12 form-control" required>
                                        <option selected disabled value="">Select Origin</option>
                                        <option value="China">China</option>
                                        <option value="Mexico">Mexico</option>
                                    </select> 
                                </div>

                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">Order Warranty</label >
                                <div class="col-4">
                                    <input id="warranty" class="form-control" type="number" required/>
                                </div>
                                <div class="col-4 col-form-label">Months</div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 pr-0 col-form-label font-weight-bold">Order Delivery Date</label >
                                <div class="col-8">
                                    <input id="delivery" class="form-control" type="date" required/>
                                </div>
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
                        <button id="addjob" class="btn btn-warning col-12 text-white" type="button" data-row="1" disabled >Add Job No</button>
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
        
        var project
        var con_origin = ""
        var con_warranty = ""
        var con_delivery = ""
        
        projectFirestore.collection("ContactCompany").where('visible','==',true).get().then((compdata)=>{
            compdata.forEach((data)=>{
                $('#company').append(
                    '<option value="'+data.id+'">'+data.data().CompanyName+'</option>'
                )
            })

        })

        
        $('#addjob').on('click', async function (){

            const rowjob_count = $(this).data('row')

            $('#data').append('<div id="row-'+rowjob_count+'" class="row mb-4">'+
                            '<div class="col-3">'+
                                '<div class="row">'+
                                    '<div class="col-5 col-form-label">Job No.</div>'+
                                    '<div class="col-7">'+
                                        '<select id="row-job-'+rowjob_count+'" class="col-12 form-control job"></select>'+
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
                                        '<div id="row-'+rowjob_count+'-1" class="row py-2">'+
                                            '<div class="col-2">'+
                                                '<div class="row">'+
                                                    '<select id="ordersheet-'+rowjob_count+'-1" class="form-control col-8" style="font-size:14px"></select>'+
                                                    '<div class="col-4 pt-1"><i class="bi bi-trash text-danger ordersheet-del" data-project="'+rowjob_count+'" data-ordersheet="1" style="font-size:25px;" ></i></div>'+
                                                '</div>'+
                                            '</div>'+
                                            '<div id="description-'+rowjob_count+'-1" class="col-3"></div>'+
                                            '<div id="qty-'+rowjob_count+'-1" class="col"></div>'+
                                            '<div id="unit-'+rowjob_count+'-1" class="col text-center"></div>'+
                                            '<div id="price-'+rowjob_count+'-1" class="col-2"></div>'+
                                            '<div id="total-'+rowjob_count+'-1" class="col-2"></div> '+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>')
        
        
            $(this).data('row',rowjob_count+1)

        })


        $('.add-ordersheet').on('click', async function(){
            console.log('asdsd')
            console.log($(this).data('pa'))
            console.log($(this).data('ordersheet'))
        })



        const addform = document.querySelector('#addform');
        addform.addEventListener('submit', async function(e){
            e.preventDefault();
            console.log('save')
            const pecpono = $('#pecpono').val()
            const pecpoyear = $('#pecpoyear').val()
            const company = $('#company').find('option:selected').val()
            const tpayment = $('#Tpayment').val()
            const delivery = $('#delivery_date').val()
            const comment = $('#comment').val()
            const createdate = Math.round(new Date().getTime() / 1000);
            const orgin = $('#select_origin').find('option:selected').val()
            const warranty = $('#warranty').val()
            const delivery_date = $('#delivery').val()


            projectFirestore.collection('Po').add({
                pecpo_no:pecpono,
                pecpo_year:pecpoyear,
                company:company,
                tpayment:tpayment,
                delivery:delivery,
                comment:comment,
                createdate:createdate,
                update_time:createdate,
                origin:orgin,
                warranty:warranty,
                delivery_date:delivery_date,
                visible:true,
                approve_status:false,
                manager_approve_status:false,
                generalmanager_approve_status:false,
                reject:false,
                msg:[],
                battorder:[],
                register_batt:false


            }).then( function(docRef){
                router.push({ 
                    path: `/editPecpo/${docRef.id}`
                })
            })


        })


        

    }
}
</script>