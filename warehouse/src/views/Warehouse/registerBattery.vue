<template>
<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
            <div class="h3 mt-5 font-weight-bold">รับสินค้าเข้าคลัง</div>
            <div class="border my-5 bg-white p-5">
                <div class="row">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-6 mb-3">
                                <div class="row">
                                    <div class="col-4 col-form-label font-weight-bold">PEC PO No.</div>
                                    <div class="col-7">
                                        <select id="pecpo_option" class="col form-control">
                                            <option value="" selected disabled>Choose..PEC PO</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 mb-3">
                                <div class="row">
                                    <div class="col-4 col-form-label font-weight-bold">ลักษณะสินค้า</div>
                                    <div class="col-7">
                                        <select class="col form-control">
                                            <option value="">choose..</option>
                                            <option selected value="brandnew">สินค้าใหม่</option>
                                            <option  value="old">สินค้าเก่า</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 mb-3">
                                <div class="row">
                                    <div class="col-4 col-form-label font-weight-bold">Job No.</div>
                                    <div class="col-7">
                                        <select id="jobno_option" class="col form-control" disabled>
                                            <option selected disabled value="">Choose..</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 mb-3">
                                <div class="row">
                                    <div class="col-4 col-form-label font-weight-bold">Invoice</div>
                                    <div class="col-7">
                                        <input class="form-control" type="text" required/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 mb-3">
                                <div class="row">
                                    <div class="col-4 col-form-label font-weight-bold">Order Sheet</div>
                                    <div class="col-7">
                                        <select id="Order_Sheet" class="col form-control">
                                            <option selected disabled value="">choose..</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 mb-3">
                                <div class="row">
                                    <div class="col-4 col-form-label font-weight-bold">โรงงานรับประกัน</div>
                                    <div class="col-7">
                                        <input id="warranty" class="form-control" type="number" readonly/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 mb-3">
                                <div class="row">
                                    <div class="col-4 col-form-label font-weight-bold">Model</div>
                                    <div class="col-7">
                                        <select id="batt_model" class="col form-control">
                                            <option selected disabled value="">choose..</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 mb-3">
                                <div class="row">
                                    <div class="col-4 col-form-label font-weight-bold">Brand</div>
                                    <div class="col-7">
                                        <input id="brand" type="text" class="form-control" readonly/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 mb-3">
                                <div class="row">
                                    <div class="col-4 col-form-label font-weight-bold">ปีนำเข้า</div>
                                    <div class="col-7">
                                        <input id="register_year" type="number" placeholder="format 00" class="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 mb-3">
                                <div class="row">
                                    <div class="col-4 col-form-label font-weight-bold">เอกสารแนบ</div>
                                    <div class="col-7">
                                        <input type="file" class=""/>
                                    </div>
                                </div>
                            </div>

                            <div class="col-6 mb-3">
                                <div class="row">
                                    <div class="col-4 col-form-label font-weight-bold">Total</div>
                                    <div class="col-7">
                                        <input id="batt_total" type="number" class="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 mb-3">
                                
                            </div>
                            <div class="col-12 mb-3">
                                <div class="row">
                                    <div class="col-2 col-form-label font-weight-bold">Preview</div>
                                    <div class="col-5">
                                        <div class="col-12">
                                            <div class="row">
                                                <input type="text" class="col-5 form-control" readonly>
                                                <div class="col-form-label text-center col-2">To</div>
                                                <input type="text" class="col-5 form-control" readonly>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 my-4">
                        <div class="border border-top"></div>
                    </div>
                    <div class="clear-fix col-12">
                        <button class="btn btn-primary float-right col-1">Confirm</button>
                        <button class="btn btn-danger float-right col-1 mr-3">Cancel</button>
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
        const lastbarcode = get_lastbarcode()
        $('#register_year').val(new Date().getFullYear())
        async function render_pecpo(){
            const pec_po_list = await projectFirestore.collection('Po').orderBy('createdate','asc').get()

            await get_po_data(pec_po_list)

            function get_po_data(){
                pec_po_list.forEach((pec_po)=>{
                    if(pec_po.data().register_batt == false){
                        if(pec_po.data().battorder.length > 0){
                            $('#pecpo_option').append(
                                '<option value="'+pec_po.id+'">PEC'+pec_po.data().pecpo_no+'/'+pec_po.data().pecpo_year+'</option>'
                            )
                        }
                    }
                    
                })
            }
            
        }
        render_pecpo()


        $('#pecpo_option').on('change',async function(){
            
            $('#jobno_option').html('<option disabled selected value="" >Choose Job No</option>')
            let po_select = $(this).val()
            let get_job_no = await projectFirestore.collection('Po').doc(po_select).get()
            let company = await projectFirestore.collection('ContactCompany').doc(get_job_no.data().company).get()
            await render_job_no(get_job_no)
            
            async function render_job_no(get_job_no){
                $('#jobno_option').prop( "disabled", false )
                $('#warranty').val(parseInt(get_job_no.data().warranty)/12)
                $('#brand').val(company.data().CompanyName)
                for(let i = 0; i < get_job_no.data().battorder.length; i++){                    
                    $('#jobno_option').append(
                        '<option value="'+get_job_no.data().battorder[i].job+'">'+get_job_no.data().battorder[i].project_first+'/'+get_job_no.data().battorder[i].project_second+' '+get_job_no.data().battorder[i].projectname+'</option>'
                    )
                }
            }
        })

        $('#jobno_option').on('change',async function(){
            $('#Order_Sheet').html('<option disabled selected value="" >Choose Ordersheet</option>')
            $('#jobno_option').prop( "disabled", false )
            let po_select = $('#pecpo_option').val()
            let job_no_select = $(this).val()
            let get_job_no = await projectFirestore.collection('Po').doc(po_select).get()

            await render_ordersheet(get_job_no)
            
            function render_ordersheet(get_job_no){
                for(let i = 0; i < get_job_no.data().battorder.length; i++){
                    if(get_job_no.data().battorder[i].job == job_no_select){
                        for(let j = 0; j < get_job_no.data().battorder[i].ordersheet.length; j++){
                            $('#Order_Sheet').append(
                                '<option value="'+get_job_no.data().battorder[i].ordersheet[j].ordersheet+'">'+get_job_no.data().battorder[i].project_first+'/'+get_job_no.data().battorder[i].project_second+'/'+get_job_no.data().battorder[i].ordersheet[j].ordersheet+'</option>'
                            )
                        }
                    }
                }
            }
        })

        $('#Order_Sheet').on('change',async function(){
            $('#batt_model').html('<option disabled selected value="" >Choose Model</option>')
            const ordersheet_select = $(this).val()
            let po_select = $('#pecpo_option').val()
            let job_no_select = $('#jobno_option').val()
            let get_job_no = await projectFirestore.collection('Po').doc(po_select).get()

            await render_batt_model(get_job_no)
            function render_batt_model(get_job_no){
                for(let i = 0; i < get_job_no.data().battorder.length; i++){
                    if(get_job_no.data().battorder[i].job == job_no_select){
                        for(let j = 0; j < get_job_no.data().battorder[i].ordersheet.length; j++){
                            for(let k = 0; k < get_job_no.data().battorder[i].ordersheet[j].battery.length;k++){
                                $('#batt_model').append(
                                    '<option data-instock="'+get_job_no.data().battorder[i].ordersheet[j].battery[k].register_amount+'" data-amount="'+get_job_no.data().battorder[i].ordersheet[j].battery[k].order_amount+'" value="'+get_job_no.data().battorder[i].ordersheet[j].battery[k].batt_no+'">'+get_job_no.data().battorder[i].ordersheet[j].battery[k].series+'</option>'
                                )
                            }
                        }
                    }
                }
            }            
        })
        $('#batt_model').on('change', function(){
            let batt_instock = $(this).find('option:selected').data('instock')
            let batt_amount = $(this).find('option:selected').data('amount')
            const render_amount_batt = parseInt(batt_amount) - parseInt(batt_instock)
            console.log(batt_instock)
            console.log(batt_amount)

            $('#batt_total').val(render_amount_batt)
        })
        async function get_lastbarcode(){
            return
        }
    }
}
</script>