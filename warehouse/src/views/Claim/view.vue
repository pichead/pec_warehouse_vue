<style>
.dot_old {
    z-index: 2;
    height: 20px;
    width: 20px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    right: -37%;
}
.dot_new {
    z-index: 2;
    height: 20px;
    width: 20px;
    background-color: rgb(41, 225, 93);
    border-radius: 50%;
    display: inline-block;
    position: relative;
    right: -37%;
}
</style>
<template>
<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
            <div id="page_head" class="h4 my-4">รายการเคลม : </div>
            <div class="border p-5 my-3 font-weight-bold">
                <div class="h3 border-bottom pb-3 my-2">Infomation</div>
                <br>
                <form id="form-data" class="row">
                    <div class="col-6">
                        <div class="row">
                            <div class="col-4 my-2 col-form-label">Claim No. : </div>
                            <div id="claim_no" class="col-8 my-2  col-form-label"></div>
                            <div class="col-4 my-2  col-form-label">Date : </div>
                            <div id="create_date" class="col-8 my-2  col-form-label"></div>
                            <div class="col-4 my-2  col-form-label">Job No : </div>
                            <div id="job_no" class="col-8 my-2  col-form-label"></div>
                            <div class="col-4 my-2  col-form-label">Invoice No. : </div>
                            <div class="col-8 my-2">
                                <input id="invoice" type="text" class="form-control col-8" required>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="row">
                            <div class="col-4 my-2 col-form-label">User Name : </div>
                            <div  class="col-8 my-2">
                                <input id="user_name" type="text" class="form-control col-8" required>
                            </div>
                            <div class="col-4 my-2  col-form-label">Model : </div>
                            <div id="model" class="col-8 my-2  col-form-label"></div>
                            <div class="col-4 my-2  col-form-label">Qty. : </div>
                            <div id="qty" class="col-8 my-2  col-form-label"></div>
                            <div class="col-4 my-2  col-form-label">MFG Code : </div>
                            <div  class="col-8 my-2">
                                <input id="mfg_code" type="text" class="form-control col-8" required>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-12 mt-4">
                        <div class="d-flex flex-row-reverse row-hl">
                            <div class="col-2 item-hl">
                                <button id="save" class="blue-btn btn col-12" type="submit">Save</button>
                            </div>
                        </div>
                    
                    </div>
                </form>
            </div>
            <div class="border p-5 my-3 font-weight-bold">
                <div class="h3 border-bottom pb-3 my-2">File</div>
                <br>
                <div class="row">

                    <div class="col-2 my-2">ใบเคลม C&D : </div>
                    <div id="file_claim" class="col-10 my-2"></div>
                    <div class="col-2 my-2">รายงานปัญหา : </div>
                    <div id="file_report" class="col-10 my-2"></div>

                </div>
            </div>
            <div class="border p-5 my-3 font-weight-bold">
                <div class="h3 border-bottom pb-3 my-2">สถานะ</div>
                <br>
                <div id="status_timeline" class="row">
                    
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
        var url = window.location.pathname;
        var id = url.substring(url.lastIndexOf('/') + 1);
        var dataid = id


        preload()


        async function preload(){
            const claim = await projectFirestore.collection("Claim").doc(dataid).get()
            const batt = await projectFirestore.collection("Batteries_beta").doc(claim.data().batt_claim[0]).get()
            
            const claim_type = get_claim_type()
            const valid_file = get_valid_file()

            function get_claim_type(){
                if(claim.data().claim_type != ''){
                    if(claim.data().claim_type == 'Batteries'){
                        return (claim.data().batt_claim.length).toString()+' Batteries'
                    }
                    else{
                        return 'Credit Note'
                    }
                }
                else{
                    return 'ยังไม่ได้เลือก'
                }
            }
            function get_valid_file(){
                if(claim.data().valid_file.length != 0){
                    return claim.data().valid_file[0].src
                }
                else{
                    return 'ยังไม่ได้อัพโหลดไฟล์'
                }
            }

            var cdate = new Date(claim.data().create_date*1000);
            var cday = cdate.getDate();
            var cmonth = cdate.getMonth() + 1;
            var cyear = cdate.getFullYear();
            if (cday < 10) {
                cday = "0" + cday;
            }
            if (cmonth < 10) {
                cmonth = "0" + cmonth;
            }
            var cnew_date = cday + "/" + cmonth + "/" + cyear;



            $('#claim_no').html(claim.data().ClaimNo)
            $('#create_date').html(cnew_date)
            $('#job_no').html(claim.data().JobNo)
            $('#invoice').html(claim.data().invoice)
            $('#user_name').html(claim.data().user_name)
            $('#model').html(claim.data().model)
            $('#qty').html(claim.data().batt_claim.length)
            $('#model').html(batt.data().series)
            $('#invoice').val(claim.data().invoice)
            $('#user_name').val(claim.data().user_name)
            $('#mfg_code').val(claim.data().mfg_code)

            console.log('claim.data() : ',claim.data())
            if(claim.data().claim_file[0]){
                $('#file_claim').html(
                    '<span>'+claim.data().claim_file[0].name+'</span><span class="ml-5"><a target="_blank" href="'+claim.data().claim_file[0].src+'"><i class="bi bi-download text-dark" style="font-size:25px" ></i></a></span>'
                )
            }
            if(claim.data().report_file[0]){
                $('#file_report').html(
                    '<span>'+claim.data().report_file[0].name+'</span><span class="ml-5"><a target="_blank" href="'+claim.data().report_file[0].src+'"><i class="bi bi-download text-dark" style="font-size:25px" ></i></a></span>'
                )
            }
            



            $('#status_timeline').html('')
            for(let i = claim.data().status.length-1 ;i > -1 ; i--){
                
                const more_detail = get_more_detail()
                const dot_timeline = get_dot_time_line()
                function get_more_detail(){
                    if(i == claim.data().status.length-1){
                        if(claim.data().status[i].status == 'เสร็จสมบูรณ์'){
                            return '<div class="my-2">ได้รับของเครม '+claim_type+'</div>'+
                                    '<div class="my-2">หลักฐานยืนยันการเสร็จสมบูรณ์ : '+
                                    '<a target="_blank" href="'+claim.data().valid_file[claim.data().valid_file.length - 1].src+'">'+claim.data().valid_file[claim.data().valid_file.length - 1].name+'</a>'+
                                    '</div>'
                        }
                        else{
                            return '<div></div>'
                        }
                    }
                    else{
                        
                        return '<div></div>'
                        
                    }
                }
                function get_dot_time_line(){
                    if(i == claim.data().status.length-1){
                        return '<div class="dot_new"></div>'
                    }
                    else{
                        return '<div class="dot_old"></div>'
                    }
                }

                var sdate = new Date(claim.data().status[i].timestamp*1000);
                var sday = sdate.getDate();
                var smonth = sdate.getMonth() + 1;
                var syear = sdate.getFullYear();
                if (sday < 10) {
                    sday = "0" + sday;
                }
                if (smonth < 10) {
                    smonth = "0" + smonth;
                }
                var snew_date = sday + "/" + smonth + "/" + syear;

                $('#status_timeline').append(
                    '<div class="pl-4 col-2 py-3">'+snew_date+dot_timeline+'</div>'+
                    '<div class="pl-4 border-left col-10 py-3">'+
                        '<div class="my-2">'+claim.data().status[i].status+'</div>'+
                        more_detail+
                        '<div class="my-2">by : '+claim.data().status[i].create_user+'</div>'+
                    '</div>'
                )
            }


        }

        const add_form = document.querySelector('#form-data');
        add_form.addEventListener('submit', async function(e){
            e.preventDefault();
            const invoice = $('#invoice').val()
            const user_name = $('#user_name').val()
            const mfg_code = $('#mfg_code').val()
            console.log(invoice)
            console.log(user_name)
            console.log(mfg_code)

            projectFirestore.collection('Claim').doc(dataid).update({
                invoice:invoice,
                user_name:user_name,
                mfg_code:mfg_code
            }).then(()=>{
                location.reload()
            })
        })


    }


}
</script>