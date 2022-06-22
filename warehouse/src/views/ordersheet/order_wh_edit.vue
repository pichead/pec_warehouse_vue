<template>
    <Sidebar />
    <div id="content" style="margin-left: 250px">
        <form id="addform">
            <div class="container">
                <div class="h3 mt-5 font-weight-bold">Job No</div>
                <div class="border my-3 p-5 bg-white">
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">Job No.</label >
                                <div class="col-8">
                                    <p id="jobno" class=" col-form-label">64/031</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">Project Name</label >
                                <div class="col-8">
                                    <p id="projectname" class=" col-form-label">AIS SILA</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">Order By</label >
                                <div class="col-8">
                                    <p id="orderby" class=" col-form-label">Huawei</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">Files</label >
                                <div id="file" class="col-8">
                                    <p class=" col-form-label">ไม่มีไฟล์แนบ</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">Start Date</label >
                                 <div class="col-8">
                                    <p id="startdate" class=" col-form-label"></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">Handover Date</label >
                                <div class="col-8">
                                    <p id="deliverydate" class=" col-form-label"></p>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div class="col-12">
                            <div class="form-group row mb-0">
                                <label class="col-2 col-form-label font-weight-bold">Remark</label >
                                <div class="col-10">
                                    <p id="comment" class=" col-form-label">-</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div class="col-12 pl-0 mt-5">
                    <h3 class="font-weight-bold">Warehouse Validate </h3>
                </div>

                <table class="table col-12">
                                <colgroup>
                                    <col span="1" style="width: 20%;">
                                    <col span="1" style="width: 10%;">
                                    <col span="1" style="width: 10%;">
                                    <col span="1" style="width: 20%;">
                                    <col span="1" style="width: 10%;">
                                    <col span="1" style="width: 20%;">
                                    <col span="1" style="width: 10%;">


                                </colgroup>
                                        <thead class="thead-dark">
                                            <tr class="text-center">
                                                <th>Model</th>
                                                <th>Brand</th>
                                                <th>Origin</th>
                                                <th>Order warranty(month)</th>
                                                <th>Amount</th>
                                                <th>PEC WH Date</th>
                                                <th>Stock</th>
                                            </tr>
                                        </thead>
                                        <tbody id="inputdata" class="bg-white">



                                        </tbody>
                            </table>
    


                <div class="d-flex justify-content-center row-hl my-5">
                    <button class="btn btn-success p-1 col-2 mr-2" type="submit">Save</button>
                    <a class="btn btn-secondary col-2" type="button" href="/Order_check/Wh">Back</a>

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

        $( document ).ready(function() {
            $('#rawdata').html("")
            $('#inputdata').html("")
        });

        var url = window.location.pathname;
        var id = url.substring(url.lastIndexOf('/') + 1);
        console.log(id)
        
        var battery_count
        var all_batt
        
        projectFirestore.collection("Projects").doc(id).get().then((Project) => {

            // timestamp converter
            var date = new Date(Project.data().startdate*1000);
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year =date.getFullYear();
            if (day < 10) {
                day = "0" + day;
            }
            if (month < 10) {
                month = "0" + month;
            }
            var new_date = day + "-" + month + "-" + year;
            // end timestamp converter

            // ymd converter
            var fdate = new Date(Project.data().deliverydate);
            var fday = fdate.getDate();
            var fmonth = fdate.getMonth() + 1;
            var fyear =fdate.getFullYear();
            if (fday < 10) {
                fday = "0" + fday;
            }
            if (fmonth < 10) {
                fmonth = "0" + fmonth;
            }
            var fnew_date = fday + "-" + fmonth + "-" + fyear;
            // end ymd converter

            $('#jobno').text(Project.data().JobNoFirst+"/"+Project.data().JobNoSecond)
            $('#projectname').text(Project.data().ProjectName)
            $('#orderby').text(Project.data().orderby)
            $('#startdate').text(new_date)
            $('#deliverydate').html(fnew_date)
            all_batt = Project.data()
            battery_count = Project.data().battery.length
            $('#rawdata').html("")
            $('#inputdata').html("")
            $('#comment').text(Project.data().comment)
            console.log('renderdata')
            if(Project.data().file != "nofile"){
                $('#file').html(
                    '<a class"" href="'+Project.data().file.src+'" target="_blank">คลิกเพื่อดูไฟล์แนบ</a>'
                )
            }

            for(let i = 0; i < Project.data().battery.length;i++){
                if(Project.data().battery[i].main == true){
                    var bdate = new Date(Project.data().battery[i].deliverydate);
                    var bday = bdate.getDate();
                    var bmonth = bdate.getMonth() + 1;
                    var byear = bdate.getFullYear();
                    if (bday < 10) {
                        bday = "0" + bday;
                    }
                    if (bmonth < 10) {
                        bmonth = "0" + bmonth;
                    }
                    var bnew_date = bday + "-" + bmonth + "-" + byear;

                    $('#inputdata').append('<tr>'+
                                            '<td id="series-option-'+(i+1)+'" class="text-center">'+Project.data().battery[i].series+'</td>'+
                                            '<td id="company-option-'+(i+1)+'" class="text-center">'+Project.data().battery[i].company+'</td>'+
                                            '<td id="origin-option-'+(i+1)+'" class="text-center">'+Project.data().battery[i].origin+'</td>'+
                                            '<td id="warranty-'+(i+1)+'" class="text-center">'+Project.data().battery[i].warranty+'</td>'+
                                            '<td id="amount-'+(i+1)+'" class="text-center">'+Project.data().battery[i].amount+'</td>'+
                                            '<td class="text-center">'+
                                                '<input  id="delivery-'+(i+1)+'" class="date form-control form-control-sm d-none" type="date" value="'+Project.data().battery[i].deliverydate+'" disabled required/>'+bnew_date+
                                            '</td>'+
                                            '<td>'+
                                                '<input id="wh-stock-'+(i+1)+'" class="form-control form-control-sm" type="number" min="0" max="'+Project.data().battery[i].amount+'" value="'+Project.data().battery[i].wh_stock+'" required/>'+
                                            '</td>'+
                                        '</tr>')
    
                }
           
            }

        })



        const addform = document.querySelector('#addform');
        addform.addEventListener('submit',(e)=>{
            e.preventDefault();
            console.log('save')
            const po_num_f = $("#JobNo1").val()
            const po_num_s = $("#JobNo2").val()
            const ProjectName = $('#ProjectName').val()
            const orderby = $("#orderby").val()
            const startdate = $('#startdate').val()
            const deliverydate = $('#deliverydate').val()
            const comment = $('#comment').val()
            const file = $('#file').val()
            var orderSheetNo = 0
            var battery = []

            async function saveData(){
                await GetAllData()
                await filebaseSave()


                function GetAllData(){
                    for(let i = 0; i < battery_count; i++){

                        const wh_stock = $('#wh-stock-'+(i+1)).val()

                        console.log('***********order sheet***********')
                        if(all_batt.battery[i].main == true){
                            battery.push({no:all_batt.battery[i].no,series:all_batt.battery[i].series,company:all_batt.battery[i].company,origin:all_batt.battery[i].origin,warranty:all_batt.battery[i].warranty,amount:all_batt.battery[i].amount,deliverydate:all_batt.battery[i].deliverydate,wh_stock:wh_stock,lock:all_batt.battery[i].lock,main:all_batt.battery[i].main})
                        }
                        else{
                            battery.push({no:all_batt.battery[i].no,series:all_batt.battery[i].series,company:all_batt.battery[i].company,origin:all_batt.battery[i].origin,warranty:all_batt.battery[i].warranty,amount:all_batt.battery[i].amount,deliverydate:all_batt.battery[i].deliverydate,wh_stock:wh_stock,lock:all_batt.battery[i].lock,main:all_batt.battery[i].main})
                        }

                    }
                    

                }
                function filebaseSave(){
                    
                    var timestamp = Math.round(new Date().getTime() / 1000);

                    projectFirestore.collection('Projects').doc(id).update({

                        battery:battery,
                        wh_update_by:login_user,
                        wh_update_time:timestamp,
                        wh_validate:true,
                        inter_validate:false

                    }).then(()=>{
                        router.push({ 
                            name: 'OrderCheckWh',
                            params: { mserror: true} 

                        })
                    })
                }
                
                


            }

            saveData()

        

        })

    }
}
</script>