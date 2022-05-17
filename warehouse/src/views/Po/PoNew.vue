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
                <form id="addform" class="border mt-5 mb-2 p-3 bg-white">
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

        predata()

        
        async function predata(){
            var job_arr = []
            var all_condition_arr = []
            var uniq_condition_arr = []
            var ordersheet_arr = []
            const get_ordersheet = await projectFirestore.collection("Projects").where('inter_validate','==',true).get()
            
            get_ordersheet.forEach((ordersheet)=>{
                job_arr.push(ordersheet.data())
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
                        uniq_condition_arr.push(all_condition_arr[i])
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
                console.log('all_condition_arr : ',all_condition_arr)
                console.log('uniq_condition_arr : ',uniq_condition_arr)
                for(let i = 0; i < uniq_condition_arr.length; i++){
                    $('#data').append(
                        '<div class="col-12 border rounded p-4 my-2">'+
                            '<div class="row">'+
                                '<div class="col-3 border-right">'+
                                    '<div class="font-weight-bold">Origin : '+uniq_condition_arr[i].origin+'</div>'+
                                    '<div class="font-weight-bold">Warranty : '+uniq_condition_arr[i].warranty+'</div>'+
                                    '<div class="font-weight-bold">Delivery Date : '+uniq_condition_arr[i].deliverydate+'</div>'+
                                '</div>'+
                                '<div id="con_no_'+uniq_condition_arr[i].no+'" class="col-9">'+

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

                                        $('#con_no_'+uniq_condition_arr[j].no).append(
                                            '<div id="con_'+uniq_condition_arr[j].no+'_job'+ordersheet.id+'" class="row">'+
                                                '<div class="col-4 border-right">'+
                                                        '<input class="" type="checkbox">'+
                                                        '<span class="pl-4 font-weight-bold">Job No : '+ordersheet.data().JobNoFirst+'/'+ordersheet.data().JobNoSecond+'</span>'+
                                                '</div>'+
                                                '<div class="col-8">'+
                                                    '<div class="row">'+
                                                        '<div class="col-6">'+
                                                            '<input class="" type="checkbox">'+
                                                            '<span class="pl-4 font-weight-bold">OrderSheet : '+ordersheet.data().JobNoFirst+'/'+ordersheet.data().JobNoSecond+'/'+ordersheet.data().orderSheet[i].no+'</span>'+
                                                            '</div>'+
                                                        '<div class="col-6">'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</div>'+
                                            '</div>'
                                        )

                                    }
                            }

                        }
                    }
                })

            }




        }

    }
}
</script>