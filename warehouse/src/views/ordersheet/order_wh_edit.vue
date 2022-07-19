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
                <div class="col-12 pl-0 mt-5">
                    <div class="row">
                        <h3 class="font-weight-bold col-6">Warehouse Stock </h3>
                        <h5 class="font-weight-bold col-6 text-right col-form-label">Checked <span id="stock_checking">0</span>/<span id="stock_count">0</span></h5>
                    </div>
                </div>
                <div id="zone_Stock">

                </div>

    


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
    beforeCreate(){
    }, 
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
        var jobNo
        var battery_count
        var all_batt
        var stock_batt = []
        var batt_model = []
        predata()

        async function predata(){
            $('#zone_Stock').html(
                '<table id="stock_table" class="table col-12 px-0">'+
                    '<thead class="thead-dark">'+
                        '<tr class="text-center">'+
                            '<th>Barcode</th>'+
                            '<th>Model</th>'+
                            '<th>warranty</th>'+
                            '<th>Location</th>'+
                            '<th>Zone</th>'+
                            '<th></th>'+
                        '</tr>'+
                    '</thead>'+
                    '<tbody id="stock_data" class="bg-white text-center" data-turbolinks="false">'+
                    '</tbody>'+
                '</table>'
            )
            var all_model = []
            const job_data = await projectFirestore.collection("Projects").doc(id).get()
            const job_no = job_data.data().JobNoFirst+"/"+job_data.data().JobNoSecond
            const stock_data = await projectFirestore.collection("Batteries_beta").where('jobNo','in',['stock',job_no]).get()
            
            
            stock_data.forEach((batt)=>{
                stock_batt.push({
                    id:batt.id,
                    data:batt.data()
                })
            })
            await get_batt_model()
            await render_stock_batt()
            await data_table()
            function get_batt_model(){
                for(let i = 0; i < job_data.data().battery.length; i++){
                    if(job_data.data().battery[i].main == true){
                        all_model.push(
                            job_data.data().battery[i].series
                        )
                    }
                }
            }

            function render_stock_batt(){
                batt_model = Array.from(new Set(all_model))
                var stock_count = 0
                var stock_check_count = 0
                for(let i = 0; i < stock_batt.length; i++){
                    if( batt_model.includes(stock_batt[i].data.series) ){
                        stock_count++
                        if(stock_batt[i].data.jobNo == 'stock'){
                            $('#stock_data').append(
                                '<tr class="text-center">'+
                                    '<td>'+stock_batt[i].data.barcode+'</td>'+
                                    '<td>'+stock_batt[i].data.series+'</td>'+
                                    '<td>'+stock_batt[i].data.warranty+'</td>'+
                                    '<td>'+stock_batt[i].data.history[stock_batt[i].data.history.length - 1].building+'</td>'+
                                    '<td>'+stock_batt[i].data.history[stock_batt[i].data.history.length - 1].room+'</td>'+
                                    '<td>'+
                                        '<input value="'+stock_batt[i].id+'" data-check="false" data-model="'+stock_batt[i].data.series+'" type="checkbox" class="text-center stock_checkbox">'+
                                    '</td>'+
                                '</tr>'
                            )
                        }
                        else{
                            $('#stock_data').append(
                                '<tr class="text-center" style="background-color:#D6FCEF;">'+
                                    '<td>'+stock_batt[i].data.barcode+'</td>'+
                                    '<td>'+stock_batt[i].data.series+'</td>'+
                                    '<td>'+stock_batt[i].data.warranty+'</td>'+
                                    '<td>'+stock_batt[i].data.history[stock_batt[i].data.history.length - 1].building+'</td>'+
                                    '<td>'+stock_batt[i].data.history[stock_batt[i].data.history.length - 1].room+'</td>'+
                                    '<td>'+
                                        '<input value="'+stock_batt[i].id+'" data-check="true" data-model="'+stock_batt[i].data.series+'" type="checkbox" class="text-center stock_checkbox" checked>'+
                                    '</td>'+
                                '</tr>'
                            )
                            stock_check_count++
                        }

                    }
                }
                $('#stock_count').html(stock_count)
                $('#stock_checking').html(stock_check_count)

            }

            function data_table(){

                $('#stock_table').DataTable({
                    "searching": false,
                    "ordering": true,
                    "pageLength": 10,
                    "info":false,
                    "lengthChange": false
                })


            }

        } 

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
            jobNo =  Project.data().JobNoFirst+"/"+Project.data().JobNoSecond

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
                                                '<input id="wh-stock-'+(i+1)+'" data-model="'+Project.data().battery[i].series+'" class="form-control order_model form-control-sm" type="number" min="0" max="'+Project.data().battery[i].amount+'" value="'+Project.data().battery[i].wh_stock+'" required/>'+
                                            '</td>'+
                                        '</tr>')
    
                }
           
            }

        })

        $('#inputdata').on('change','.order_model',function(){
            
            const max_input = $(this).attr('max')
            const min_input = $(this).attr('min')

            const change_model = $(this).data('model')
            const total = parseInt($(this).val())
   

            var checked_model_count = 0
            $('.stock_checkbox').prop('checked', false )
            var stock_model_count = get_stock_model_count()

            function get_stock_model_count(){
                var model_counting = 0
                for(let i = 0; i < $('.stock_checkbox').length; i++){
                    if($($('.stock_checkbox')[i]).data('model') == change_model ){
                        model_counting++
                    }
                }
                return model_counting
            }

            
            if(total <= stock_model_count){
                if(total > max_input || total < min_input || !(Number.isInteger(total))){
                    $(this).val(0)
                    for(let i = 0; i < $('.stock_checkbox').length; i++){
                        
                        if($($('.stock_checkbox')[i]).prop('checked')){
                            if($($('.stock_checkbox')[i]).data('model') == change_model ){
                                $($('.stock_checkbox')[i]).prop('checked',false)
                            }
                            else{
                                checked_model_count++
                            }
                        }
                    }
                    $('#stock_checking').html(checked_model_count)
                }
                else{

                    for(let i = 0; i < $('.stock_checkbox').length; i++){
                        if(checked_model_count != total && $($('.stock_checkbox')[i]).data('model') == change_model ){
                            $($('.stock_checkbox')[i]).prop('checked',true)
                            checked_model_count++
                        }
                    }
                    $('#stock_checking').html(checked_model_count)
                    
                }
            }
            else{
                $(this).val(0)
                for(let i = 0; i < $('.stock_checkbox').length; i++){
                        
                        if($($('.stock_checkbox')[i]).prop('checked')){
                            if($($('.stock_checkbox')[i]).data('model') == change_model ){
                                $($('.stock_checkbox')[i]).prop('checked',false)
                            }
                            else{
                                checked_model_count++
                            }
                        }
                    }
                    $('#stock_checking').html(checked_model_count)
            }



        })

        $('#stock_data').on('change','.stock_checkbox',async function(){
            var checked_count = 0
            var checked_count_model = 0

            var input_model
            const checkbox_model = $(this).data('model')
            const this_check = $(this)

            await valid_check()
            await change_input_box()

            function valid_check(){
                for(let i = 0; i < $('.order_model').length; i++){
                    if( $($('.order_model')[i]).data('model') ==  checkbox_model){
                        input_model = i
                    }
                }

                for(let i = 0; i < $('.stock_checkbox').length; i++){
                    if($($('.stock_checkbox')[i]).prop('checked')){
                        if($($('.stock_checkbox')[i]).data('model') == checkbox_model){
                            checked_count_model++
                        }
                        checked_count++
                    }
                }
            }
            
            function change_input_box(){
                if($($('.order_model')[input_model]).attr('max') < checked_count_model){
                    this_check.prop('checked',false)
                }
                else{
                    $($('.order_model')[input_model]).val(checked_count_model)
                    $('#stock_checking').html(checked_count)
                }
            }


            


        })

        const addform = document.querySelector('#addform');
        addform.addEventListener('submit',(e)=>{
            e.preventDefault();
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
            var stock_checked = []
            async function saveData(){
                await GetAllData()
                await bookingSave()
                await filebaseSave()
               

                function GetAllData(){
                    for(let i = 0; i < battery_count; i++){
                        const wh_stock = $('#wh-stock-'+(i+1)).val()
                        if(all_batt.battery[i].main == true){
                            battery.push({no:all_batt.battery[i].no,series:all_batt.battery[i].series,company:all_batt.battery[i].company,origin:all_batt.battery[i].origin,warranty:all_batt.battery[i].warranty,amount:all_batt.battery[i].amount,deliverydate:all_batt.battery[i].deliverydate,wh_stock:wh_stock,lock:all_batt.battery[i].lock,main:all_batt.battery[i].main})
                        }
                        else{
                            battery.push({no:all_batt.battery[i].no,series:all_batt.battery[i].series,company:all_batt.battery[i].company,origin:all_batt.battery[i].origin,warranty:all_batt.battery[i].warranty,amount:all_batt.battery[i].amount,deliverydate:all_batt.battery[i].deliverydate,wh_stock:wh_stock,lock:all_batt.battery[i].lock,main:all_batt.battery[i].main})
                        }
                    }
                }

                function bookingSave(){
                    for(let i = 0; i < $('.stock_checkbox').length; i++){
                        if($($('.stock_checkbox')[i]).prop('checked')){
                            if($($('.stock_checkbox')[i]).data('check') == false){
                                var stock_checked_id = $($('.stock_checkbox')[i]).val()
                                var job_history = stock_batt.find(x => x.id === stock_checked_id).data.job_history
                                job_history.push({
                                    jobId:id,
                                    jobNo:jobNo
                                })
                                projectFirestore.collection('Batteries_beta').doc(stock_checked_id).update({
                                    jobNo:jobNo,
                                    jobId:id,
                                    job_history:job_history
                                })
                            }
                        }
                        else{
                            if( $($('.stock_checkbox')[i]).data('check') == true ){
                                var stock_checked_id = $($('.stock_checkbox')[i]).val()
                                var job_history = stock_batt.find(x => x.id === stock_checked_id).data.job_history
                                job_history.push({
                                    jobId:job_history[job_history.length - 2].jobId,
                                    jobNo:job_history[job_history.length - 2].jobNo
                                })
                                projectFirestore.collection('Batteries_beta').doc(stock_checked_id).update({
                                    jobNo:job_history[job_history.length - 1].jobNo,
                                    jobId:job_history[job_history.length - 1].jobId,
                                    job_history:job_history
                                })
                            }
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