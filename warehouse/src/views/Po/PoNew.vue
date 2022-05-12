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

     
                        <div class="col-12">
                            <div class="form-group row mb-0">
                                <label class="col-2 col-form-label font-weight-bold">Remark</label >
                                <div class="col-10">
                                    <textarea  id="comment" class="form-control" rows="3" placeholder="note..."></textarea>
                                </div>
                            </div>
                        </div>



                    </div>
                </form>

                <br>
                <div id="data">
                    <div class="col-12 border rounded p-4 my-2">
                        <div class="row">
                            <div class="col-4 border-right">
                                <input type="checkbox"><span> Job 65/001 : AIS</span>
                            </div>
                            <div class="col-8">
                                <div class="row my-2">
                                    <div class="col-4">
                                        <input type="checkbox"><span> OrderSheet 65/001/1</span>
                                    </div>
                                    <div class="col-8">
                                        <div class="col-12">UPS12-220MRX 120 ลูก</div>
                                        <div class="col-12">UPS12-320MRX 50  ลูก</div>
                                    </div>
                                </div>

                                <div class="row my-2">
                                    <div class="col-4">
                                        <input type="checkbox"><span> OrderSheet 65/001/(R)</span>
                                    </div>
                                    <div class="col-8">
                                        <div class="col-12">UPS12-220MRX 120 ลูก</div>
                                        <div class="col-12">UPS12-320MRX 50  ลูก</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="col-12 border rounded p-4 my-2">
                        <div class="row">
                            <div class="col-4 border-right">
                                <input type="checkbox"><span> Job 65/002 : Dtac</span>
                            </div>
                            <div class="col-8">
                                <div class="row my-2">
                                    <div class="col-4">
                                        <input type="checkbox"><span> OrderSheet 65/002/1</span>
                                    </div>
                                    <div class="col-8">
                                        <div class="col-12">UPS12-220MRX 120 ลูก</div>
                                        <div class="col-12">UPS12-320MRX 50  ลูก</div>
                                    </div>
                                </div>

                                <div class="row my-2">
                                    <div class="col-4">
                                        <input type="checkbox"><span> OrderSheet 65/002/(R)</span>
                                    </div>
                                    <div class="col-8">
                                        <div class="col-12">UPS12-220MRX 120 ลูก</div>
                                        <div class="col-12">UPS12-320MRX 50  ลูก</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="col-12 border rounded p-4 my-2">
                        <div class="row">
                            <div class="col-4 border-right">
                                <input type="checkbox"><span> Job 65/003 : True</span>
                            </div>
                            <div class="col-8">
                                <div class="row my-2">
                                    <div class="col-4">
                                        <input type="checkbox"><span> OrderSheet 65/003/1</span>
                                    </div>
                                    <div class="col-8">
                                        <div class="col-12">UPS12-220MRX 120 ลูก</div>
                                        <div class="col-12">UPS12-320MRX 50  ลูก</div>
                                    </div>
                                </div>

                                <div class="row my-2">
                                    <div class="col-4">
                                        <input type="checkbox"><span> OrderSheet 65/003/(R)</span>
                                    </div>
                                    <div class="col-8">
                                        <div class="col-12">UPS12-220MRX 120 ลูก</div>
                                        <div class="col-12">UPS12-320MRX 50  ลูก</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <!-- <div class="col-12 border p-4">
                    <div id="data" class="col-12">

                    </div>
                    <div class="col-12">
                        <button id="addjob" class="btn btn-warning col-12 text-white" type="button" data-row="1" disabled >Add Job No</button>
                    </div>

                </div>

                <div class="d-flex justify-content-center row-hl my-5">
                    <a class="btn btn-secondary col-2 mr-2" type="button" href="/Battery/pecpoList">Cancel</a>
                    <button class="btn btn-danger  col-2 " type="submit">Save</button>

                </div> -->

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

        predata()

        
        async function predata(){
            var job_arr = []
            var condition_arr = []
            var uniq_condition_arr = []
            var ordersheet_arr = []
            const get_ordersheet = await projectFirestore.collection("Projects").where('inter_validate','==',true).get()
            
            get_ordersheet.forEach((ordersheet)=>{
                job_arr.push(ordersheet.data())
            })
            console.log('job_arr : ',job_arr)

            await fun1()
            await fun2()
            await fun3()

            function fun1(){
                for(let i = 0; i < job_arr.length; i++){
                    for(let j = 0; j < job_arr[i].orderSheet.length; j++){
                        if(job_arr[i].orderSheet[j].po == false){
                            condition_arr.push({
                                warranty:job_arr[i].orderSheet[j].warranty,
                                delivery:job_arr[i].orderSheet[j].deliverydate,
                                origin:job_arr[i].orderSheet[j].origin
                            })
                        }
                    }
                }
            }

            function fun2(){
                console.log(condition_arr)
                for(let i = 0; i < condition_arr.length; i++){
                    
                        uniq_condition_arr.push(condition_arr[i])
                        console.log(uniq_condition_arr.length)
                    for(let j = 0; j < uniq_condition_arr.length; j++){
                        // if(uniq_condition_arr[j] )
                    }
                    
                }
            }

            function fun3(){
                // console.log('uniq : ',uniq_condition_arr)
            }

        }

    }
}
</script>