<template>
    <Sidebar />
    <div id="content" style="margin-left: 250px">
        <form id="addform">
            <div class="container">
                <div class="h3 mt-5 font-weight-bold">Edit Job No</div>
                <div class="border my-3 p-5 bg-white">
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
                                <label class="col-4 col-form-label font-weight-bold">Job No.</label >
                                <div class="col">
                                    <input id="JobNo1" class="form-control jobno" placeholder="00" type="number" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" minlength="2" maxlength="2" required/>
                                </div>
                                <div class="col-1 h2">/</div>
                                <div class="col">
                                    <input id="JobNo2" class="form-control jobno" placeholder="000" type="number" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" minlength="3" maxlength="3" required/>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">Project Name</label >
                                <div class="col-8">
                                    <input id="ProjectName" class="form-control" type="text" placeholder="Name" required/>
                                </div>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">Customer</label >
                                <div class="col-8">
                                    <input id="orderby" type="text" class="form-control" placeholder="Company" />
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">File</label >
                                <div id="file" class="col-8 mt-2">
                                    No file
                                </div>
                                <!-- <input type="file" id="file" class="col form-control-file"> -->
                            </div>
                        </div>
                        
                        <!-- <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">Start Date</label >
                                <div class="col-8">
                                    <input id="startdate" type="date" class="form-control" />
                                </div>
                            </div>
                        </div> -->
                        <div class="col-6">
                            <div class="form-group row">
                                <label class="col-4 col-form-label font-weight-bold">Final Date</label >
                                <div class="col-8">
                                    <input id="deliverydate" type="date" class="form-control" />
                                </div>
                            </div>
                        </div>
                        
                        
                        <div class="col-12">
                            <div class="form-group row mb-0">
                                <label class="col-2 col-form-label font-weight-bold">Remark</label >
                                <div class="col-10">
                                    <textarea  id="comment" class="form-control" rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div  class="col-12 mt-3 ">
                            <div class="font-weight-bold col-form-label">Requirements</div>
                            <table class="table col-12">
                                <colgroup>
                                    <col span="1" style="width: 15%;">
                                    <col span="1" style="width: 13%;">
                                    <col span="1" style="width: 12%;">
                                    <col span="1" style="width: 16%;">
                                    <col span="1" style="width: 8%;">
                                    <col span="1" style="width: 8%;">
                                    <col span="1" style="width: 8%;">

                                </colgroup>
                                        <thead class="thead-dark">
                                            <tr class="text-center">
                                                <th>model</th>
                                                <th>brand</th>
                                                <th>origin</th>
                                                <th>warranty(month)</th>
                                                <th>amount</th>
                                                <th>delivery date</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody id="lots" class="bg-white">
                                            <!-- <tr id="first-lot" class="order_list">

                                                <td>
                                                    <select id="series-option-1" class="form-control form-control-sm series-option"  data-no="1"   required>
                                                        
                                                    </select>
                                                </td>
                                                <td>
                                                    <input id="company-option-1" class="form-control form-control-sm" type="text" disabled/>
                                                </td>
                                                <td>
                                                    <select id="origin-option-1" class="form-control form-control-sm"  data-no="1"   required>
                                                        <option selected disabled>Choose here</option>
                                                        <option >China</option>
                                                        <option >Mexico</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <input id="warranty-1" class="warranty form-control form-control-sm" type="number" required/>
                                                </td>
                                                <td>
                                                    <input id="amount-1" class="amount form-control form-control-sm" type="number" required/>
                                                </td>
                                                <td>
                                                    <input id="date-1" class="date form-control form-control-sm" type="date" required/>
                                                </td>                               
                                                <td>
                                                </td>
                                            </tr> -->

                                            

                                        </tbody>
                                        <tfoot>
                                            <tr id="addmore">
                                                <td colspan="7"  class="bg-success text-center text-white">
                                                    Add More
                                                </td>
                                            </tr>
                                        </tfoot>
                            </table>
                        </div>
                        

                    </div>
                </div>


                <div class="d-flex justify-content-center row-hl my-5">
                    <button class="btn btn-danger p-1 col-2 mr-2" type="submit">Update</button>
                    <a class="btn btn-secondary col-2" type="button" href="/Project">Back</a>

                </div>

            </div>
        </form>
    </div>
    <div class="modal" id="modalalarm" aria-hidden="true" style="display: none;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">แจ้งเตือน</h5>
            <button class="close" data-dismiss="modal">×</button>
          </div>
          <div class="modal-body">
              <div id="modalalarm-data"></div>
              <br>
              <div id="modal-data-detail"></div>
              <br>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" data-dismiss="modal">ปิด</button>
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
        var no = 0
        async function getdata(){
            
            const Project = await projectFirestore.collection('Projects').doc(id).get()
            const series = await projectFirestore.collection("BatterySpecifications").orderBy("series","asc").get()
            await clearolddata()
            await jobdata()
            await batterydata()
            await series_search()
            function  clearolddata(){
                $('#lots').html('')
            }
            function  jobdata(){

                    var cdate = new Date(Project.data().startdate*1000);
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

                    var date = new Date(Project.data().update_time*1000);
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

                    $('#JobNo1').val(Project.data().JobNoFirst)
                    $('#JobNo2').val(Project.data().JobNoSecond)
                    $('#ProjectName').val(Project.data().ProjectName)
                    $('#orderby').val(Project.data().orderby)
                    $('#comment').html(Project.data().comment)
                    $('#deliverydate').val(Project.data().deliverydate)
                    $('#createdate').html(Project.data().creator+'&nbsp&nbsp&nbsp&nbsp'+cnew_date)
                    $('#lastupdate').html(Project.data().update_by+'&nbsp&nbsp&nbsp&nbsp'+new_date)

                    if(Project.data().file != 'nofile'){
                        $('#file').html(
                            '<a class"" href="'+Project.data().file.src+'" target="_blank">คลิกเพื่อดูไฟล์แนบ</a>'
                        )
                    }

                        
                    for(let i = 0; i < Project.data().battery.length;i++){
                        no = no+1
                        $('#lots').append('<tr id="row-'+no+'"  class="order_list">'+

                            '<td>'+
                                '<select id="series-option-'+no+'" class="form-control form-control-sm series-option"  data-no="'+no+'"   required>    '+
                                '</select>'+
                            '</td>'+
                            '<td>'+
                                '<input id="company-option-'+no+'" class="form-control form-control-sm" value="'+Project.data().battery[i].company+'" type="text" disabled/>'+
                            '</td>'+
                            '<td>'+
                                '<select id="origin-option-'+no+'" class="form-control form-control-sm"  data-no="'+no+'"   required>    '+
                                    // '<option selected disabled>Choose here</option>'+
                                    // '<option >China</option>'+
                                    // '<option >Mexico</option>'+
                                '</select>'+
                            '</td>'+
                            '<td>'+
                                '<input id="warranty-'+no+'" class="warranty form-control form-control-sm" value="'+Project.data().battery[i].warranty+'" type="number" min="0"  required/>'+
                            '</td>'+
                            '<td>'+
                                '<input id="amount-'+no+'" class="amount form-control form-control-sm" value="'+Project.data().battery[i].amount+'" type="number" min="1"  required/>'+
                            '</td>'+
                            '<td>'+
                                '<input id="date-'+no+'" class="date form-control form-control-sm" value="'+Project.data().battery[i].deliverydate+'" type="date" />'+
                            '</td>'+
                            '<td>'+
                                '<button class="btn col btn-danger del-row py-1" data-row="'+no+'" type="button">ลบ</button>'+
                            '</td>'+
                        '</tr>')
                        


                    }
                
            }

            function batterydata(){
                    const originArr = ['China','Mexico']
                    for(let i = 0;i < no;i++){
                        for(let j = 0;j < originArr.length;j++){
                            if(originArr[j] == Project.data().battery[i].origin){
                                $('#origin-option-'+(i+1)+'').append('<option selected >'+originArr[j]+'</option>')
                            }
                            else{
                                $('#origin-option-'+(i+1)+'').append('<option >'+originArr[j]+'</option>')
                            }
                            
                        }
                    }
                    series.forEach((serie) => {
                        for(let i = 0;i < no;i++){
                            if(Project.data().battery[i].series == serie.data().series){
                                $('#series-option-'+(i+1)+'').append('<option value="'+serie.id+'" selected data-no="'+(i+1)+'">'+serie.data().series+'</option>')
                            }
                            else{
                                $('#series-option-'+(i+1)+'').append('<option value="'+serie.id+'" data-no="'+(i+1)+'">'+serie.data().series+'</option>')
                            }
                      
                        }
                        
                    })
 
                
            }
            function series_search(){
                for(let i = 0;i < (no+1);i++){
                    $('#series-option-'+(i+1)+'').addClass('selectpicker')
                    $('#series-option-'+(i+1)+'').attr('data-live-search',true)
                    $('.selectpicker').selectpicker();
                }
            }

        }

        getdata()

        
        // .then(()=>{
        //     projectFirestore.collection("BatterySpecifications").get().then((series) => {
        //         $('#series-option-'+no+'').append('<option selected disabled>Choose here</option>')
        //         series.forEach((serie) => {
        //             $('#series-option-'+no+'').append('<option value="'+serie.id+'" data-no="'+no+'">'+serie.data().series+'</option>')
        //         })
        //         console.log('1')

        //         $('#series-option-'+no+'').addClass('selectpicker')
        //         $('#series-option-'+no+'').attr('data-live-search',true)
        //         $('.selectpicker').selectpicker();
        //         console.log('2')
        //     })
        // })

        // projectFirestore.collection("BatterySpecifications").get().then((series) => {
        //     $('#series-option-1').append('<option selected disabled>Choose here</option>')
        //     $('#booking-series-option-1').append('<option selected disabled>Choose here</option>')
        //     series.forEach((serie) => {
        //         $('#series-option-1').append('<option value="'+serie.id+'" data-no="1">'+serie.data().series+'</option>')
        //         $('#booking-series-option-1').append('<option value="'+serie.id+'" data-no="1">'+serie.data().series+'</option>')

        //     })
        // }).then(()=>{
        //     $('#booking-series-option-1').addClass('selectpicker')
        //     $('#booking-series-option-1').attr('data-live-search',true)
        //     $('#series-option-1').addClass('selectpicker')
        //     $('#series-option-1').attr('data-live-search',true)
        //     $('.selectpicker').selectpicker();
        // })

        // order
        var orderN0 = [1]
        var orderN0Data = [{row:1,order_sheet_no:"",company:"",origin:"",warranty:"",amount:""}]
        $('#addmore').on('click', function(){
            no = no+1
            console.log('addmore')
            $('#lots').append(
                '<tr id="row-'+no+'"  class="order_list">'+

                    '<td>'+
                        '<select id="series-option-'+no+'" class="form-control form-control-sm series-option"  data-no="'+no+'"   required>    '+
                        '</select>'+
                    '</td>'+
                    '<td>'+
                        '<input id="company-option-'+no+'" class="form-control form-control-sm" type="text" disabled/>'+
                    '</td>'+
                    '<td>'+
                        '<select id="origin-option-'+no+'" class="form-control form-control-sm"  data-no="'+no+'"   required>    '+
                            '<option selected disabled>Choose here</option>'+
                            '<option >China</option>'+
                            '<option >Mexico</option>'+
                        '</select>'+
                    '</td>'+
                    '<td>'+
                        '<input id="warranty-'+no+'" class="warranty form-control form-control-sm" type="number" min="0"  required/>'+
                    '</td>'+
                    '<td>'+
                        '<input id="amount-'+no+'" class="amount form-control form-control-sm" type="number" min="1"  required/>'+
                    '</td>'+
                    '<td>'+
                        '<input id="date-'+no+'" class="date form-control form-control-sm"  type="date" required/>'+
                    '</td>'+
                    '<td>'+
                        '<button class="btn col btn-danger del-row py-1" data-row="'+no+'" type="button">ลบ</button>'+
                    '</td>'+
                '</tr>'
            )
            orderN0.push(no)
            orderN0Data.push({row:no,order_sheet_no:"",company:"",origin:"",warranty:"",amount:""})
            projectFirestore.collection("BatterySpecifications").orderBy("series","asc").get().then((series) => {
                $('#series-option-'+no+'').append('<option selected disabled>Choose here</option>')
                series.forEach((serie) => {
                    $('#series-option-'+no+'').append('<option value="'+serie.id+'" data-no="'+no+'">'+serie.data().series+'</option>')
                })
            }).then(()=>{
                $('#series-option-'+no+'').addClass('selectpicker')
                $('#series-option-'+no+'').attr('data-live-search',true)
                $('.selectpicker').selectpicker();
            })
        })

        $('#lots').on('change','.series-option', function(){
            const company_no = $(this).data('no')
            const spec_id = $(this).val()

            projectFirestore.collection("BatterySpecifications").doc(spec_id).get().then((serie) => {
                $('#company-option-'+company_no).val(serie.data().brand)
            })
        })

        
        
        $('.jobno').on('change',async function(){
            const jobnovalid_status = await validJobNo()
            console.log(jobnovalid_status)
            // if(jobnovalid_status == true){
            //     renderJobNo()
            // }
        })
        async function validJobNo(){
            const validno1 = await validjobno1()
            const validno2 = await validjobno2()

            function validjobno1(){
                if($('#JobNo1').val().length == 2){
                    return true
                }
                else{
                    return false
                }
            }
            function validjobno2(){
                if($('#JobNo2').val().length == 3){
                    return true
                }
                else{
                    return false
                }
            }

            if( validno1 == true && validno2 == true ){
                const year = await projectFirestore.collection("JobNo").doc($('#JobNo1').val()).get()
                const old_data_project = await projectFirestore.collection('Projects').doc(id).get()
                const valid_uniq_jobno = await valid_uniq()

                function valid_uniq(){
                    if(year && year.exists){

                        const array_no = year.data().no
                        const index = array_no.indexOf($('#JobNo2').val());

                        if($('#JobNo2').val() == old_data_project.data().JobNoSecond){   
                            return true
                        }
                        else{
                            if (index > -1) {
                                return false
                            }
                            else{
                                return true
                            }
                        }
                        
                        
                    }
                    else{
                        projectFirestore.collection("JobNo").doc($('#JobNo1').val()).set({
                            no: []
                        }).then(()=>{
                            $('#modalalarm-data').html('<h5>Job No รหัสปี '+$('#JobNo1').val()+' ไม่มีพบช้อมูล จึงได้ทำการสร้างรหัสปี '+$('#JobNo1').val()+' เรียบร้อยแล้ว!</h5>')
                            $('#modal-data-detail').html('')
                            $('#modalalarm').modal('show')
                            return true
                        })
                    }
                }

                if(valid_uniq_jobno == false){
                    $('#modal-data-detail').html('')
                    $('#modalalarm-data').html('<h5>Job No รหัสปี '+$('#JobNo1').val()+'/'+$('#JobNo2').val()+' มีข้อมูลอยู่แล้ว กรุณาใช้รหัส JobNo อื่นๆ รหัสปี'+$('#JobNo1').val()+' รหัส JobNo ที่ถูกใช้งานแล้วได้แก่ </h5>')
                    for(let i = 0 ; i < year.data().no.length; i++){
                        $('#modal-data-detail').append('<p>JobNo : '+$('#JobNo1').val()+'/'+year.data().no[i]+'</p>')
                    }
                    $('#JobNo2').val('')
                    $('#modalalarm').modal('show')
                    return false
                }
                else{
                    return true
                }
                
            }
            else{
                return false
            }
            
        }

        $('#lots').on('change','.warranty', function(){
            renderJobNo()
        })
        $('#lots').on('change','.amount', function(){
            renderJobNo()
        })

        
        $('#test_btn').on('click', function(){
            console.log(running_no)
            console.log(group_order_no)

        })

        var running_no = 0
        var group_order_no = []



        async function renderJobNo(){
            const JobNo1 = $('#JobNo1').val()
            const JobNo2 = $('#JobNo2').val()
            var numberData = 0
            var raw_group = []
            var raw_num = []
            var raw_num2 = []
            var pa = []
            var chi = []

            var uni = []
            var uni_group_raw = []
            var un_unique_raw
            var un_uni_num_raw = []
            var double_raw = []
            var booking_number = []
            var list = []
            var list2 = []
            var head = []
            var unique_head
            await setVar()
            await getData()
            await checkData()
            await getUniData()
            await getAllData()
            await getAllData2()
            await getAllData3()
            await getAllData4()
            await getAllData5()
            await getAllData6()
            await getAllData7()
            await getAllData8()
            await getAllData9()
            await getAllData10()

            await renderData()

            function setVar(){
                numberData = 0
                raw_group = []
                raw_num = []
                raw_num2 = []
                pa = []
                chi = []

                uni = []
                uni_group_raw = []
                un_unique_raw
                un_uni_num_raw = []
                double_raw = []
                booking_number = []
                list = []
                list2 = []
                head = []
                unique_head
            }

            function getData(){
                for(let i = 0; i < orderN0.length; i++){
                    
                    console.log('orderN0 : ',orderN0[i])

                    const company_Data = $('#company-option-'+orderN0[i]).val()
                    const origin_Data = $('#origin-option-'+orderN0[i]).find('option:selected').val()
                    const warranty_Data = $('#warranty-'+orderN0[i]).val()
                    const amount_Data = $('#amount-'+orderN0[i]).val()


                    if(!JobNo1 || !JobNo2 || !company_Data || !origin_Data || !warranty_Data || !amount_Data){
                       
                    }
                    else{
                        if(i == 0){
                            // un_uni_num_raw.push({no_f:i,no_s:i})
                            uni_group_raw.push({company:company_Data,origin:origin_Data,warranty:warranty_Data})
                        }
                        
                        raw_group.push({no:i,company:company_Data,origin:origin_Data,warranty:warranty_Data})
                        booking_number.push([{no:i,company:company_Data,origin:origin_Data,warranty:warranty_Data}])
                        raw_num.push(i)
                        raw_num2.push(i)
                        

                    }
                }
            }
            function checkData(){
                for(let i = 0; i < raw_group.length; i++){
                    
                    for(let j = 0; j < raw_group.length; j++){
                        if(i != j){
                            if(raw_group[i].company == raw_group[j].company && raw_group[i].origin == raw_group[j].origin && raw_group[i].warranty == raw_group[j].warranty){
                                un_uni_num_raw.push({no_f:i,no_s:j})
                                double_raw.push(i)
                                pa.push(i)
                                chi.push(j)

                            } 
                        }
                    }
                    
                }

            }
            function getUniData(){
                
                un_unique_raw = double_raw.filter(function(itm, i, double_raw) {
                    return i == double_raw.indexOf(itm);
                });
                
                for(let i = 0; i < un_unique_raw.length; i++){
                    var index = raw_num2.indexOf(un_unique_raw[i]);
                    raw_num2.splice(index, 1);
                }

                for(let i = 0; i < un_uni_num_raw.length; i++){
                    if(un_uni_num_raw[i].no_f > un_uni_num_raw[i].no_s){
                        list.push(i)
                    }
                }


            }
            function getAllData(){
                list.sort(function(a, b){return b - a})
                
            }
            function getAllData2(){
                for(let i = 0; i < list.length; i++){
                    un_uni_num_raw.splice(list[i], 1);
                }
                
            }
            function getAllData3(){
                for(let i = 0; i < un_uni_num_raw.length; i++){
                    for(let j = 0; j < un_uni_num_raw.length; j++){
                        if(un_uni_num_raw[i].no_f == un_uni_num_raw[j].no_s ){
                            list2.push(i)
                        }
                    }
                }
                
                
            }
            function getAllData4(){
                list2.sort(function(a, b){return b - a})
                
            }
            function getAllData5(){
                for(let i = 0; i < list2.length; i++){
                    un_uni_num_raw.splice(list2[i], 1);
                }
                
            }
            function getAllData6(){
                for(let i = 0; i < un_uni_num_raw.length; i++){
                    head.push(un_uni_num_raw[i].no_f)
                } 
            }

            function getAllData7(){
                var a = head;
                var unique = a.filter(function(itm, i, a) {
                    return i == a.indexOf(itm);
                });
                unique_head = unique
                
            }
            function getAllData8(){
                for(let i = 0; i < raw_num2.length; i++){
                    unique_head.push(raw_num2[i])
                }
            }
            function getAllData9(){
                unique_head.sort(function(a, b){return a - b})
            }
            function getAllData10(){
                for(let i = 0; i < unique_head.length; i++){
                    booking_number[unique_head[i]] = (i+1)
                }
                for(let i = 0; i < un_uni_num_raw.length; i++){
                    booking_number[un_uni_num_raw[i].no_s] = booking_number[un_uni_num_raw[i].no_f]
                }
                for(let i = 0; i < booking_number.length;i++){
                    console.log('set 0')
                    $('#order-'+(i+1)).val(20)

                }
            }



            function renderData(){
                for(let i = 0; i < booking_number.length;i++){
                    console.log('finish : ',i,' : ',booking_number[i])
                    if ( booking_number[i] < 10 ) {
                        $('#order-'+(i+1)).val(JobNo1+'/'+JobNo2+'/0'+booking_number[i])
                    } else {
                        $('#order-'+(i+1)).val(JobNo1,'/',JobNo2,'/',booking_number[i])
                    }
                }

                console.log('finish')
                

            }



        }
        $('#lots').on('click','.del-row', function(){
            const del_row = $(this).data('row')
            $("#row-"+del_row).remove()
            orderN0 = $(orderN0).not([del_row]).get()
            var new_orderN0Data = []
            
            function getNewArray(){
                console.log(del_row)
                for(let i = 0; i < orderN0Data.length;i++){
                    if(orderN0Data[i].row == del_row){
                        console.log(orderN0Data[i])
                    }
                    else{
                        new_orderN0Data.push(orderN0Data[i])
                    }
                }
            }

            function makeNewArray(){
                orderN0Data = new_orderN0Data
                console.log(orderN0Data)
            }

            async function main() {
                await getNewArray();
                await makeNewArray();
            }
            main()
            renderJobNo()

        })


        // end order





        const addform = document.querySelector('#addform');
        addform.addEventListener('submit',async(e)=>{
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
            var bookingNo = 0
            var orderSheetArr = []
            var bookingArr = []
            var battery = []

            async function saveData(){
                await PreGetAllData()
                await GetAllData()
                await filebaseSave()

                function PreGetAllData(){
                    $('.order_list').each(function(){
                        orderSheetNo = orderSheetNo+1
                    })
                    $('.booking_list').each(function(){
                        bookingNo = bookingNo+1
                    })
                }

                function GetAllData(){
                    var times = Math.round(new Date().getTime() / 1000);

                    for(let i = 0; i < orderSheetNo; i++){
                        const OrderSheetNo = $('#order-'+(i+1)).val()
                        const series = $('#series-option-'+(i+1)).find('option:selected').text()
                        const company = $('#company-option-'+(i+1)).val()
                        const origin = $('#origin-option-'+(i+1)).find('option:selected').val()
                        const warranty = $('#warranty-'+(i+1)).val()
                        const amount = $('#amount-'+(i+1)).val()
                        const deliverydate_battery = $('#date-'+(i+1)).val()
                        console.log(OrderSheetNo)
                        console.log(series)
                        console.log(company)
                        console.log(origin)
                        console.log(warranty)
                        console.log(amount)
                        console.log('***********order sheet***********')
                        battery.push({no:(times.toString()+(i+1).toString()),series:series,company:company,origin:origin,warranty:warranty,amount:amount,deliverydate:deliverydate_battery,lock:false,main:true})
                        // orderSheetArr.push({OrderSheetNo:OrderSheetNo,series:series,company:company,origin:origin,warranty:warranty,amount:amount,sale_confirm:false,warehouse_confirm:false,visible:true})

                    }
                    // for(let i = 0; i < bookingNo; i++){
                    //     const booking_OrderSheetNo = $('#booking-order-'+(i+1)).val()
                    //     const booking_series = $('#booking-series-option-'+(i+1)).find('option:selected').text()
                    //     const booking_company = $('#booking-company-option-'+(i+1)).val()
                    //     const booking_warranty = $('#booking-warranty-'+(i+1)).val()
                    //     const booking_amount = $('#booking-amount-'+(i+1)).val()
                    //     console.log(booking_OrderSheetNo)
                    //     console.log(booking_series)
                    //     console.log(booking_company)
                    //     console.log(booking_warranty)
                    //     console.log(booking_amount)
                    //     console.log('**********booking************')
                    //     bookingArr.push({booking_OrderSheetNo:booking_OrderSheetNo,booking_series:booking_series,booking_company:booking_company,booking_warranty:booking_warranty,booking_amount:booking_amount,sale_confirm:false,warehouse_confirm:false,visible:true})
                    // }
                }
                async function filebaseSave(){
                    var timestamp = Math.round(new Date().getTime() / 1000);
                    const old_job_data = await projectFirestore.collection('Projects').doc(id).get()
                    const get_array_no = await projectFirestore.collection('JobNo').doc(po_num_f).get()
                    var array_no = get_array_no.data().no
                    const new_job_no_array = await remove_del_data()
                    async function remove_del_data(){
                        const index = array_no.indexOf(old_job_data.data().JobNoSecond);

                        if (index > -1) {
                            array_no.splice(index, 1);                    
                            return array_no
                        }
                        else{
                            return array_no
                        }
                    }

                    await array_no.push(po_num_s)
                    await projectFirestore.collection('Projects').doc(id).update({
                        update_by:login_user,
                        update_time:timestamp,
                        JobNoFirst:po_num_f,
                        JobNoSecond:po_num_s,
                        ProjectName:ProjectName,
                        orderby:orderby,
                        // startdate:startdate,
                        deliverydate:deliverydate,
                        comment:comment,
                        battery:battery,
                        wh_validate:false,
                        inter_validate:false,
                        // orderSheet:orderSheetArr,
                        // booking:bookingArr,
                        visible:true

                    })
                    await projectFirestore.collection('JobNo').doc(po_num_f).update({
                        no:new_job_no_array
                    }).then(()=>{
                        router.push({ 
                            name: 'ProjectIndex',
                            params: { mserror: true} 

                        })
                    })
                }
                
                


            }

            const save_jobnovalid_status = await validJobNo()
            // validJobNo()
            if(save_jobnovalid_status == true){
                saveData()
            }
            else{
                $('#modalalarm-data').html(
                    '<h5>ใส้รหัส JobNo ไม่ถูกต้อง!!</h5>'+
                    '<h5>รหัส jobNo ต้องประกอบด้วยรหัสปี 2 หลัก และ รหัส Job 3 หลัก</h5>'+
                    '<h5>เช่น ปี2599 jobที่ 777 จะได้เป็น JobNo 99/777</h5>')
                $('#modal-data-detail').html('')
                $('#modalalarm').modal('show')
            }

        

        })

    }
}
</script>