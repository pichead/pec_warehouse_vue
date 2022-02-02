<template>
<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
        <div class="h3 mt-5 font-weight-bold">Order</div>
        <div class="row mt-5 mb-4">
            <div class="col-12">
                <input class="form-control" placeholder="Search" style="background: #f4f4f4;"/>
            </div>
        </div>

        <table class="table">
            <thead>
                <tr id="head" class="text-center">
                    <th>No.</th>
                    <th>Job No</th>
                    <th>Project Name</th>
                    <th>Warehouse validate</th>
                    <th>International validate</th>
                    <th></th>
                </tr>
            </thead>
            <tbody id="data">
                
            </tbody>
        </table>


        <div class="modal" id="viewModal" aria-hidden="true" style="display: none;">
            <div class="modal-dialog modal-xl">

                <div class="modal-content">
                    <div class="modal-header">
                        <h5 id="modal-view-title" class="modal-title"></h5>
                        <button class="close" data-dismiss="modal">×</button>
                    </div>
                    <div id="model-view-content" class="modal-body">
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group row">
                                    <label class="col-4 col-form-label font-weight-bold">Create By</label >
                                    <div id="createdate" class="col-8 mt-2">
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group row">
                                    <label class="col-4 col-form-label font-weight-bold">Last Update</label >
                                    <div id="lastupdate" class="col-8 mt-2">
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group row">
                                    <label class="col-4 col-form-label font-weight-bold">WH. Update</label >
                                    <div id="whupdate" class="col-8 mt-2">
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group row">
                                    <label class="col-4 col-form-label font-weight-bold">Inter. Update</label >
                                    <div id="interupdate" class="col-8 mt-2">
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group row">
                                    <label class="col-4 col-form-label font-weight-bold">Customer</label >
                                    <div id="orderby" class="col-8">
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group row">
                                    <label class="col-4 col-form-label font-weight-bold">File</label >
                                    <div id="file" class="col-8 mt-2">
                                        No file
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group row">
                                    <label class="col-4 col-form-label font-weight-bold">Final Date</label >
                                    <div id="deliverydate" class="col-8">
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div class="col-12">
                                <div class="form-group row mb-0">
                                    <label class="col-2 col-form-label font-weight-bold">Remark</label >
                                    <div  id="comment" class="col-10">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="h4 mt-3">Battery Requirements</div>
                        <table class="table">
                            <colgroup>
                                <col span="1" style="width: 15%;">
                                <col span="1" style="width: 10%;">
                                <col span="1" style="width: 10%;">
                                <col span="1" style="width: 10%;">
                                <col span="1" style="width: 10%;">
                                <col span="1" style="width: 10%;">
                                <col span="1" style="width: 15%;">
                                <col span="1" style="width: 10%;">
                                <col span="1" style="width: 10%;">
                            </colgroup>
                            <thead class="thead-dark text-center">
                                <tr>
                                    <th>model</th>
                                    <th>company</th>
                                    <th>origin</th>
                                    <th>warranty</th>
                                    <th>amount</th>
                                    <th>in stock</th>
                                    <th>delivery date</th>
                                    <th>warehouse</th>
                                    <th>International</th>
                                </tr>
                            </thead>
                            <tbody id="modal-ordersheet-data" class="text-center">

                            </tbody>
                        </table>
                        <div id="new_batt" class="d-none">
                            <div class="h4 mt-3">New Battery Requirements</div>
                                <table class="table">
                                    <colgroup>
                                        <col span="1" style="width: 15%;">
                                        <col span="1" style="width: 10%;">
                                        <col span="1" style="width: 10%;">
                                        <col span="1" style="width: 10%;">
                                        <col span="1" style="width: 10%;">
                                        <col span="1" style="width: 10%;">
                                        <col span="1" style="width: 15%;">
                                        <col span="1" style="width: 10%;">
                                        <col span="1" style="width: 10%;">
                                    </colgroup>
                                    <thead class="thead-dark text-center">
                                        <tr>
                                            <th>model</th>
                                            <th>company</th>
                                            <th>origin</th>
                                            <th>warranty</th>
                                            <th>amount</th>
                                            <th>in stock</th>
                                            <th>delivery date</th>
                                            <th>warehouse</th>
                                            <th>International</th>
                                        </tr>
                                    </thead>
                                    <tbody id="modal-new-data" class="text-center">
                                    </tbody>
                                </table>
                        </div>

                        
                    </div>
                    <div id="modalfooter" class="modal-footer d-flex justify-content-center row-hl my-5">
                        
                    </div>
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

        projectFirestore.collection("Projects").where("wh_validate", '==', true).get().then((Projects) => {
            var i = 1
            
            $('#data').html('')
            Projects.forEach((Project) => {

                var date = new Date(Project.data().CreateDate*1000);
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

                
                async function renderdata(){
                    var wh_confirm = true
                    var sale_confirm = true
                    var wh_status
                    var inter_status 
                    var viewbtn
                    await getData()
                    await render()

                    function getData(){
                        
                        if(Project.data().inter_validate == true){
                            inter_status = '<td class="text-center text-success">ยืนยัน</td>'
                            viewbtn = '<button class="btn btn-primary p-0 px-1 col-4 ml-2  print-btn" value="'+Project.id+'">Print</button>'

                        }
                        else{
                            inter_status = '<td class="text-center text-danger">ไม่ยืนยัน</td>'
                            viewbtn = '<button class="btn btn-primary p-0 px-1 col-4 ml-2 " disabled>Print</button>'
                        }
                    }
                    function render(){
                        if(Project.data().visible == true){
                            if(Project.data().wh_validate == true){
                                $('#data').append(
                                    '<tr>'+
                                        '<td class="text-center">'+i+'</td>'+
                                        '<td class="text-center">'+Project.data().JobNoFirst+'/'+Project.data().JobNoSecond+'</td>'+
                                        '<td class="text-center">'+Project.data().ProjectName+'</td>'+
                                        '<td class="text-center text-success">ยืนยัน</td>'+
                                        inter_status+
                                        '<td>'+
                                            '<button class="btn btn-info p-0 px-1 col-4 ml-1 edit-btn" value="'+Project.id+'" data-toggle="modal" data-target="#viewModal" data-jobid="'+Project.id+'" >view</button>'+
                                            viewbtn+

                                        '</td>'+
                                    '</tr>'
                                )
                                i++
                            }
                            else{
                                $('#data').append(
                                    '<tr>'+
                                        '<td class="text-center">'+i+'</td>'+
                                        '<td class="text-center">'+Project.data().JobNoFirst+'/'+Project.data().JobNoSecond+'</td>'+
                                        '<td class="text-center">'+Project.data().ProjectName+'</td>'+
                                        '<td class="text-center text-danger">ไม่ยืนยัน</td>'+
                                        inter_status+
                                        '<td>'+
                                            '<button class="btn btn-info p-0 px-1 col-4 ml-1 edit-btn" value="'+Project.id+'" data-toggle="modal" data-target="#viewModal" data-jobid="'+Project.id+'" >view</button>'+
                                            viewbtn+
                                        '</td>'+
                                    '</tr>'
                                )
                                i++
                            }

                        }
                    }

                }

                renderdata()

            })
        })


        $("#data").on("click", ".print-btn", function (e) {
          routeprint(e.target.value);
        });

        function routeprint(ProjectId) {
            router.push({ path: `/Order_N_Booking/Preview/${ProjectId}` });
        }
        var inter_cf
        $("#data").on("click", ".edit-btn", function (e) {
            const jobnoid = $(this).data('jobid')
            $('#new_batt').addClass('d-none')
            $('#modal-new-data').html('')

            projectFirestore.collection("Projects").doc(jobnoid).get().then(jobdata =>{
                $('#modal-view-title').html('JOB No : '+jobdata.data().JobNoFirst+'/'+jobdata.data().JobNoSecond+'&nbsp&nbsp&nbsp&nbsp Project : '+jobdata.data().ProjectName)
                $('#modal-ordersheet-data').html('')
                $('#modal-booking-data').html('')
                
                var cdate = new Date(jobdata.data().startdate*1000);
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

                var date = new Date(jobdata.data().update_time*1000);
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

                var wdate = new Date(jobdata.data().wh_update_time*1000);
                var wday = wdate.getDate();
                var wmonth = wdate.getMonth() + 1;
                var wyear = wdate.getFullYear();
                if (wday < 10) {
                    wday = "0" + wday;
                }
                if (wmonth < 10) {
                    wmonth = "0" + wmonth;
                }
                var wnew_date = wday + "-" + wmonth + "-" + wyear;

                var idate = new Date(jobdata.data().inter_update_time*1000);
                var iday = idate.getDate();
                var imonth = idate.getMonth() + 1;
                var iyear = idate.getFullYear();
                if (iday < 10) {
                    iday = "0" + iday;
                }
                if (imonth < 10) {
                    imonth = "0" + imonth;
                }
                var inew_date = iday + "-" + imonth + "-" + iyear;

                var fdate = new Date(jobdata.data().deliverydate);
                var fday = fdate.getDate();
                var fmonth = fdate.getMonth() + 1;
                var fyear = fdate.getFullYear();
                if (fday < 10) {
                    fday = "0" + fday;
                }
                if (fmonth < 10) {
                    fmonth = "0" + fmonth;
                }
                var fnew_date = fday + "-" + fmonth + "-" + fyear;


                $('#orderby').html(jobdata.data().orderby)
                $('#comment').html(jobdata.data().comment)
                $('#deliverydate').html(fnew_date)
                $('#createdate').html(jobdata.data().creator+'&nbsp&nbsp&nbsp&nbsp'+cnew_date)
                $('#lastupdate').html(jobdata.data().update_by+'&nbsp&nbsp&nbsp&nbsp'+new_date)
                $('#whupdate').html(jobdata.data().wh_update_by+'&nbsp&nbsp&nbsp&nbsp'+wnew_date)
                $('#interupdate').html(jobdata.data().inter_update_by+'&nbsp&nbsp&nbsp&nbsp'+inew_date)
                if(jobdata.data().file != 'nofile'){
                    $('#file').html(
                        '<a class"" href="'+jobdata.data().file.src+'" target="_blank">คลิกเพื่อดูไฟล์แนบ</a>'
                    )
                }
                
                for(let i = 0; i < jobdata.data().battery.length; i++){
                    
                    var bdate = new Date(jobdata.data().battery[i].deliverydate);
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

                    if(jobdata.data().battery[i].main == true){
                        if(jobdata.data().battery[i].inter_confirm == true){
                            if(jobdata.data().battery[i].lock == true){
                                inter_cf  = '<select  class="form-control form-control-sm" required disabled>'+
                                            '<option selected  value="true">ยืนยัน</option>'+
                                        '</select>'
                            }
                            else{
                                inter_cf  = '<select id="inter-option'+(i+1)+'" class="form-control form-control-sm confirm-option" required>'+
                                            '<option value="false">ไม่ยืนยัน</option>'+
                                            '<option selected  value="true">ยืนยัน</option>'+
                                        '</select>'
                            }
                            
                        }
                        else{
                            if(jobdata.data().battery[i].lock == true){
                                inter_cf  = '<select  class="form-control form-control-sm" required disabled>'+
                                        '<option selected value="false">ไม่ยืนยัน</option>'+
                                    '</select>'
                            }
                            else{
                                inter_cf  = '<select id="inter-option'+(i+1)+'" class="form-control form-control-sm confirm-option" required>'+
                                        '<option selected value="false">ไม่ยืนยัน</option>'+
                                        '<option  value="true" >ยืนยัน</option>'+
                                    '</select>'
                            }
                            
                        }
                        $('#modal-ordersheet-data').append(
                            '<tr id="'+i+'" class="order_list"  data-id="'+i+'">'+
                                '<td id="series'+(i+1)+'">'+jobdata.data().battery[i].series+'</td>'+
                                '<td id="company'+(i+1)+'">'+jobdata.data().battery[i].company+'</td>'+
                                '<td id="origin'+(i+1)+'">'+jobdata.data().battery[i].origin+'</td>'+
                                '<td id="warranty'+(i+1)+'">'+jobdata.data().battery[i].warranty+'</td>'+
                                '<td id="amount'+(i+1)+'">'+jobdata.data().battery[i].amount+'</td>'+
                                '<td id="wh-stock'+(i+1)+'">'+jobdata.data().battery[i].wh_stock+'</td>'+
                                '<td><input id="delivery'+(i+1)+'" class="d-none" value="'+jobdata.data().battery[i].deliverydate+'" disabled/>'+bnew_date+'</td>'+
                                '<td class="text-success">ยืนยัน</td>'+
                                '<td>'+inter_cf+'</td>'+
                            '</tr>'
                        )
                    
                    }
                    else{
                        $('#new_batt').removeClass('d-none')
                        if(jobdata.data().battery[i].inter_confirm == true){
                            if(jobdata.data().battery[i].lock == true){
                                inter_cf  = '<select class="form-control form-control-sm " required disabled>'+
                                            '<option selected  value="true">ยืนยัน</option>'+
                                        '</select>'
                            }
                            else{
                                inter_cf  = '<select id="inter-option'+(i+1)+'" class="form-control form-control-sm confirm-option" required>'+
                                            '<option value="false">ไม่ยืนยัน</option>'+
                                            '<option selected  value="true">ยืนยัน</option>'+
                                        '</select>'
                            }
                            
                        }
                        else{
                            if(jobdata.data().battery[i].lock == true){
                                inter_cf  = '<select class="form-control form-control-sm" required disabled>'+
                                        '<option selected value="false">ไม่ยืนยัน</option>'+
                                    '</select>'
                            }
                            else{
                                inter_cf  = '<select id="inter-option'+(i+1)+'" class="form-control form-control-sm confirm-option" required>'+
                                        '<option selected value="false">ไม่ยืนยัน</option>'+
                                        '<option  value="true" >ยืนยัน</option>'+
                                    '</select>'
                            }
                            
                        }
                        $('#modal-new-data').append(
                            '<tr id="'+i+'" class="order_list" data-id="'+i+'">'+
                                '<td id="new_series'+(i+1)+'">'+jobdata.data().battery[i].series+'</td>'+
                                '<td id="new_company'+(i+1)+'">'+jobdata.data().battery[i].company+'</td>'+
                                '<td id="new_origin'+(i+1)+'">'+jobdata.data().battery[i].origin+'</td>'+
                                '<td id="new_warranty'+(i+1)+'">'+jobdata.data().battery[i].warranty+'</td>'+
                                '<td id="new_amount'+(i+1)+'">'+jobdata.data().battery[i].amount+'</td>'+
                                '<td id="new_wh-stock'+(i+1)+'">'+jobdata.data().battery[i].wh_stock+'</td>'+
                                '<td><input id="new_delivery'+(i+1)+'" class="d-none" value="'+jobdata.data().battery[i].deliverydate+'" disabled/>'+bnew_date+'</td>'+
                                '<td class="text-success">ยืนยัน</td>'+
                                '<td>'+inter_cf+'</td>'+
                            '</tr>'
                        )
                    }
                    

                }
                // new_batt()


                async function new_batt(){
                    if(jobdata.data().new_battery.length > 0){
                        await render_new_table()
                        await render_new_data()
                    }

                    function render_new_table(){

                            $('#new_batt').html(
                                '<div class="h4 mt-3">New Battery Requirements</div>'+
                                '<table class="table">'+
                                    '<colgroup>'+
                                        '<col span="1" style="width: 15%;">'+
                                        '<col span="1" style="width: 10%;">'+
                                        '<col span="1" style="width: 10%;">'+
                                        '<col span="1" style="width: 10%;">'+
                                        '<col span="1" style="width: 10%;">'+
                                        '<col span="1" style="width: 10%;">'+
                                        '<col span="1" style="width: 15%;">'+
                                        '<col span="1" style="width: 10%;">'+
                                        '<col span="1" style="width: 10%;">'+
                                    '</colgroup>'+
                                    '<thead class="thead-dark text-center">'+
                                        '<tr>'+
                                            '<th>model</th>'+
                                            '<th>company</th>'+
                                            '<th>origin</th>'+
                                            '<th>warranty</th>'+
                                            '<th>amount</th>'+
                                            '<th>in stock</th>'+
                                            '<th>delivery date</th>'+
                                            '<th>warehouse</th>'+
                                            '<th>International</th>'+
                                        '</tr>'+
                                    '</thead>'+
                                    '<tbody id="modal-new-data" class="text-center">'+
                                    '</tbody>'+
                                '</table>'
                                )
                        
                    }

                    function render_new_data(){
                        for(let i = 0; i < jobdata.data().new_battery.length; i++){

                            bdate = new Date(jobdata.data().new_battery[i].deliverydate);
                            bday = bdate.getDate();
                            bmonth = bdate.getMonth() + 1;
                            byear = bdate.getFullYear();
                            if (bday < 10) {
                                bday = "0" + bday;
                            }
                            if (bmonth < 10) {
                                bmonth = "0" + bmonth;
                            }
                            bnew_date = bday + "-" + bmonth + "-" + byear;

                            

                            if(jobdata.data().new_battery[i].inter_confirm == true){
                                inter_cf  = '<select id="new_inter-option'+(i+1)+'" class="form-control form-control-sm confirm-option" required>'+
                                                '<option value="false">ไม่ยืนยัน</option>'+
                                                '<option selected  value="true">ยืนยัน</option>'+
                                            '</select>'
                            }
                            else{
                                inter_cf  = '<select id="new_inter-option'+(i+1)+'" class="form-control form-control-sm confirm-option" required>'+
                                            '<option selected value="false">ไม่ยืนยัน</option>'+
                                            '<option  value="true" >ยืนยัน</option>'+
                                        '</select>'
                            }
                            $('#modal-new-data').append(
                                '<tr class="new_order_list">'+
                                    '<td id="new_series'+(i+1)+'">'+jobdata.data().new_battery[i].series+'</td>'+
                                    '<td id="new_company'+(i+1)+'">'+jobdata.data().new_battery[i].company+'</td>'+
                                    '<td id="new_origin'+(i+1)+'">'+jobdata.data().new_battery[i].origin+'</td>'+
                                    '<td id="new_warranty'+(i+1)+'">'+jobdata.data().new_battery[i].warranty+'</td>'+
                                    '<td id="new_amount'+(i+1)+'">'+jobdata.data().new_battery[i].amount+'</td>'+
                                    '<td id="new_wh-stock'+(i+1)+'">'+jobdata.data().new_battery[i].wh_stock+'</td>'+
                                    '<td><input id="new_delivery'+(i+1)+'" class="d-none" value="'+jobdata.data().new_battery[i].deliverydate+'" disabled/>'+bnew_date+'</td>'+
                                    '<td class="text-success">ยืนยัน</td>'+
                                    '<td>'+inter_cf+'</td>'+
                                '</tr>'
                            )
                        }
                    }
                }
                
            })
            

            $("#modalfooter").html('<button class="btn btn-danger col-3" data-dismiss="modal">ยกเลิก</button>'+
                                    '<button class="btn btn-success save-btn-cf col-3" data-jobid="'+jobnoid+'">บันทึก</button>'
            )
        });


     

        // $("#modalfooter").on("click", ".save-btn-cf",async function (e) {
        //     const updateid = $(this).data('jobid')
        //     var project_data
        //     await getdata()


        //     function getdata(){
        //         $('.order_list').each(function(){
        //             console.log($(this).data('id'))
        //         })
        //         project_data = projectFirestore.collection("Projects").doc(updateid).get()
        //     }
        //     function 


        // })


           $("#modalfooter").on("click", ".save-btn-cf", function (e) {
            const updateid = $(this).data('jobid')
            var project_data
            var select_data_no = []
            var select_batt_data = []
            // old
            var orderSheetNo = 0
            var battery_data = []
            var inter_option = true
            var order_battery = []
            var all_origin = []
            var all_warranty = []
            var all_delivery = []
            var uni_origin = []
            var uni_warranty = []
            var uni_delivery = []
            var condition = []
            var rawcondition = []
            var ordercondition = []
            var uni_condition = []
            var OrderSheet = []
            // end old

            // new
            var new_orderSheetNo = 0
            var new_battery_data = []
            var new_inter_option = true
            var new_order_battery = []
            var new_all_origin = []
            var new_all_warranty = []
            var new_all_delivery = []
            var new_uni_origin = []
            var new_uni_warranty = []
            var new_uni_delivery = []
            var new_condition = []
            var new_rawcondition = []
            var new_ordercondition = []
            var new_uni_condition = []
            var new_OrderSheet = []
            // end new

            function onlyUnique(value, index, self) {
                return self.indexOf(value) === index;
            }


            async function saveData(){
                await PreGetAllData()
                await GetAllData()
                await getOrderSheet1()
                await getOrderSheet2()
                await getOrderSheet3()
                await getOrderSheet4()
                await getOrderSheet5()
                await getOrderSheet6()
                await getOrderSheet7()


                await filebaseSave()
                await reload_location()

                async function PreGetAllData(){
                    project_data = await projectFirestore.collection("Projects").doc(updateid).get()
                    $('.order_list').each(function(){
                        select_data_no.push($(this).data('id'))
                        orderSheetNo = orderSheetNo+1
                    })

                }
                
                function GetAllData(){
                    console.log('project_data : ',project_data)
                    console.log('orderSheetNo : ',select_data_no)
                    
                    for(let i = 0; i < select_data_no.length; i++){
                        if($('#inter-option'+(select_data_no[i]+1)).find('option:selected').val() == 'true'){
                            var inter_confirm = true
                        }
                        else{
                            var inter_confirm = false
                            inter_option = false
                        }
                        select_batt_data.push({
                            no:project_data.data().battery[select_data_no[i]].no,
                            main:project_data.data().battery[select_data_no[i]].main,
                            lock:project_data.data().battery[select_data_no[i]].lock,
                            series:project_data.data().battery[select_data_no[i]].series,
                            company:project_data.data().battery[select_data_no[i]].company,
                            origin:project_data.data().battery[select_data_no[i]].origin,
                            warranty:project_data.data().battery[select_data_no[i]].warranty,
                            amount:project_data.data().battery[select_data_no[i]].amount,
                            inter_confirm:inter_confirm,
                            wh_stock:project_data.data().battery[select_data_no[i]].wh_stock,
                            deliverydate:project_data.data().battery[select_data_no[i]].deliverydate,
                        })
                    }

                    for(let i = 0; i < orderSheetNo; i++){
                        const series = $('#series'+(i+1)).text()
                        const company = $('#company'+(i+1)).text()
                        const origin = $('#origin'+(i+1)).text()
                        const warranty = $('#warranty'+(i+1)).text()
                        const amount = $('#amount'+(i+1)).text()
                        const use_stock = $('#wh-stock'+(i+1)).text()
                        const delivery = $('#delivery'+(i+1)).val()

                        if($('#inter-option'+(i+1)).find('option:selected').val() == 'true'){
                            var inter_confirm = true
                        }
                        else{
                            var inter_confirm = false
                            inter_option = false
                        }

                        battery_data.push({series:series,company:company,origin:origin,warranty:warranty,amount:amount,inter_confirm:inter_confirm,wh_stock:use_stock,deliverydate:delivery})
                    }

                    for(let i = 0; i < new_orderSheetNo; i++){
                        const new_series = $('#new_series'+(i+1)).text()
                        const new_company = $('#new_company'+(i+1)).text()
                        const new_origin = $('#new_origin'+(i+1)).text()
                        const new_warranty = $('#new_warranty'+(i+1)).text()
                        const new_amount = $('#new_amount'+(i+1)).text()
                        const new_use_stock = $('#new_wh-stock'+(i+1)).text()
                        const new_delivery = $('#new_delivery'+(i+1)).val()
                        console.log($('#new_inter-option'+(i+1)).find('option:selected').val())
                        if($('#new_inter-option'+(i+1)).find('option:selected').val() == 'true'){
                            var new_inter_confirm = true
                            console.log(true)

                        }
                        else{
                            var new_inter_confirm = false
                            new_inter_option = false
                            console.log(false)

                        }

                        new_battery_data.push({series:new_series,company:new_company,origin:new_origin,warranty:new_warranty,amount:new_amount,inter_confirm:new_inter_confirm,wh_stock:new_use_stock,deliverydate:new_delivery})
                    }

                }
                function getOrderSheet1(){                    
                    console.log('select_batt_data : ',select_batt_data)
                    for(let i = 0; i < battery_data.length; i++){
                        if(battery_data[i].wh_stock < battery_data[i].amount || battery_data[i].wh_stock != battery_data[i].amount){
                           var new_order = battery_data[i].amount - battery_data[i].wh_stock
                           order_battery.push({series:battery_data[i].series,company:battery_data[i].company,origin:battery_data[i].origin,warranty:battery_data[i].warranty,order_amount:new_order,deliverydate:battery_data[i].deliverydate})
                        }
                        console.log('battery_data[i].wh_stock : ',battery_data[i].wh_stock)

                        all_origin.push(battery_data[i].origin)
                        all_warranty.push(battery_data[i].warranty)
                        all_delivery.push(battery_data[i].deliverydate)
                    }

                    for(let i = 0; i < new_battery_data.length; i++){
                        if(new_battery_data[i].wh_stock < new_battery_data[i].amount || new_battery_data[i].wh_stock != new_battery_data[i].amount){
                           var new_new_order = new_battery_data[i].amount - new_battery_data[i].wh_stock
                           new_order_battery.push({series:new_battery_data[i].series,company:new_battery_data[i].company,origin:new_battery_data[i].origin,warranty:new_battery_data[i].warranty,order_amount:new_new_order,deliverydate:new_battery_data[i].deliverydate})
                        }

                        new_all_origin.push(new_battery_data[i].origin)
                        new_all_warranty.push(new_battery_data[i].warranty)
                        new_all_delivery.push(new_battery_data[i].deliverydate)
                    }
                }
                function getOrderSheet2(){
                    uni_origin = all_origin.filter(onlyUnique);
                    uni_warranty = all_warranty.filter(onlyUnique);
                    uni_delivery = all_delivery.filter(onlyUnique);


                    new_uni_origin = new_all_origin.filter(onlyUnique);
                    new_uni_warranty = new_all_warranty.filter(onlyUnique);
                    new_uni_delivery = new_all_delivery.filter(onlyUnique);

                }

                function getOrderSheet3(){
              

                    for(let i = 0; i < uni_origin.length;i++){
                        for(let j = 0; j < uni_warranty.length;j++){
                            for(let k = 0; k < uni_delivery.length;k++){
                                condition.push({origin:uni_origin[i],warranty:uni_warranty[j],delivery:uni_delivery[k]})
                            }
                            
                        }
                    }

                    for(let i = 0; i < new_uni_origin.length;i++){
                        for(let j = 0; j < new_uni_warranty.length;j++){
                            for(let k = 0; k < new_uni_delivery.length;k++){
                                new_condition.push({origin:new_uni_origin[i],warranty:new_uni_warranty[j],delivery:new_uni_delivery[k]})
                            }
                            
                        }
                    }
                    
                }
                function getOrderSheet4(){
                    
                    for(let i = 0; i < order_battery.length; i++){
                        for(let j = 0; j < condition.length; j++){
                            if(order_battery[i].origin == condition[j].origin &&  order_battery[i].warranty == condition[j].warranty && order_battery[i].deliverydate == condition[j].delivery){
                                ordercondition.push({order:i,condition:j})
                                

                            }
                            
                        }
                    }
                    console.log(order_battery)
                    console.log(condition)


                    for(let i = 0; i < new_order_battery.length; i++){
                        for(let j = 0; j < new_condition.length; j++){
                            if(new_order_battery[i].origin == new_condition[j].origin &&  new_order_battery[i].warranty == new_condition[j].warranty && new_order_battery[i].deliverydate == new_condition[j].delivery){
                                new_ordercondition.push({order:i,condition:j})
                            }
                        }
                    }
                    
                }
                function getOrderSheet5(){
                    
                    for(let i = 0; i < ordercondition.length;i++){
                        rawcondition.push(ordercondition[i].condition)
                    }

                    for(let i = 0; i < new_ordercondition.length;i++){
                        new_rawcondition.push(new_ordercondition[i].condition)
                    }

                    
                    
                }
                function getOrderSheet6(){
                    var uniq = rawcondition.filter(onlyUnique);
                    var new_uniq = new_rawcondition.filter(onlyUnique);


                    for(let i = 0 ; i < uniq.length;i++){
                        for(let j = 0; j < ordercondition.length;j++){
                            if(uniq[i] == ordercondition[j].condition){
                                uni_condition.push({order:ordercondition[j].order,condition:ordercondition[j].condition,no:(i+1)})
                            }
                        }
                        
                    }
                    for(let i = 0 ; i < new_uniq.length;i++){
                        for(let j = 0; j < new_ordercondition.length;j++){
                            if(new_uniq[i] == new_ordercondition[j].condition){
                                new_uni_condition.push({order:new_ordercondition[j].order,condition:new_ordercondition[j].condition,no:(i+1)})
                            }
                        }
                        
                    }
                    
                }
                function getOrderSheet7(){
                    for(let i = 0;i < uni_condition.length;i++){
                        OrderSheet.push({
                            series:order_battery[uni_condition[i].order].series,
                            company:order_battery[uni_condition[i].order].company,
                            origin:order_battery[uni_condition[i].order].origin,
                            warranty:order_battery[uni_condition[i].order].warranty,
                            deliverydate:order_battery[uni_condition[i].order].deliverydate,
                            order_amount:order_battery[uni_condition[i].order].order_amount,
                            no:uni_condition[i].no})
                    }


                    for(let i = 0;i < new_uni_condition.length;i++){
                        new_OrderSheet.push({
                            series:new_order_battery[new_uni_condition[i].order].series,
                            company:new_order_battery[new_uni_condition[i].order].company,
                            origin:new_order_battery[new_uni_condition[i].order].origin,
                            warranty:new_order_battery[new_uni_condition[i].order].warranty,
                            deliverydate:new_order_battery[new_uni_condition[i].order].deliverydate,
                            order_amount:new_order_battery[new_uni_condition[i].order].order_amount,
                            no:(new_uni_condition[i].no).toString()+'(R)'})
                    }
                    
                    
                }
                async function filebaseSave(){

                    var timestamp = Math.round(new Date().getTime() / 1000);
                    console.log('battery_data : ',battery_data)
                    console.log('OrderSheet : ',OrderSheet)
                    console.log('inter_validate : ',inter_option)
                    console.log('new_battery_data : ',new_battery_data)
                    console.log('new_OrderSheet : ',new_OrderSheet)
                    console.log('new_inter_validate : ',new_inter_option)


                    // await projectFirestore.collection('Projects').doc(updateid).update({

                    //     battery:battery_data,
                    //     orderSheet:OrderSheet,
                    //     inter_update_by:login_user,
                    //     inter_update_time:timestamp,
                    //     inter_validate:inter_option,

                    // })

                    // await projectFirestore.collection('Projects').doc(updateid).update({

                    //     new_battery:new_battery_data,
                    //     new_orderSheet:new_OrderSheet,
                    //     new_inter_update_by:login_user,
                    //     new_inter_update_time:timestamp,
                    //     new_inter_validate:new_inter_option,

                    // })


                    
                }
                function reload_location(){
                    // location.reload()
                }

            }

            saveData()
        }
        );

    }
}
</script>