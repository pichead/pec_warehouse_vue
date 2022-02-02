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
                    <th>WH validate</th>
                    <th>inter validate</th>
                    <th></th>
                </tr>
            </thead>
            <tbody id="data">
                
                <!-- <tr>
                    <td class="text-center">1</td>
                    <td class="text-center">64/031</td>
                    <td class="text-center">AIS SILA</td>
                    <td class="text-danger text-center">ไม่ยืนยัน</td>
                    <td>
                        <a class="btn btn-info p-0 col-6" href="/Order_check/Wh/Edit">Edit</a>
                    </td>
                </tr>
                <tr>
                    <td class="text-center">2</td>
                    <td class="text-center">64/030</td>
                    <td class="text-center">True</td>
                    <td class="text-success text-center">ยืนยัน</td>
                    <td>
                        <a class="btn btn-info p-0 col-6" href="/Order_check/Wh/Edit">Edit</a>
                    </td>
                </tr> -->

            </tbody>
        </table>

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
        projectFirestore.collection("Projects").get().then((Projects) => {
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
                    
                    await render()

                    function render(){
                        if(Project.data().visible == true){

                            var wh_validate = wh()
                            var inter_validate = inter()
                            var edit_btn = edit_valid_check()


                            function wh(){
                                if(Project.data().wh_validate == false){
                                    return '<td class="text-center text-danger">ยังไม่ยืนยัน</td>'
                                }
                                else{
                                    return '<td class="text-center text-success">ยืนยัน</td>'
                                }
                            }
                            function inter(){
                                if(Project.data().inter_validate == false){
                                    return '<td class="text-center text-danger">ยังไม่ยืนยัน</td>'
                                }
                                else{
                                    return '<td class="text-center text-success">ยืนยัน</td>'
                                }
                            }

                            function edit_valid_check(){
                                if(inter_validate == '<td class="text-center text-success">ยืนยัน</td>'){
                                    return '<button class="btn btn-info p-0 px-1 col-5 mr-1 " disabled>Edit</button>'
                                }
                                else{
                                    return '<button class="btn btn-info p-0 px-1 col-5 mr-1 edit-btn" value="'+Project.id+'">Edit</button>'
                                }
                            }

                            
                            $('#data').append(
                                '<tr>'+
                                    '<td class="text-center">'+i+'</td>'+
                                    '<td class="text-center">'+Project.data().JobNoFirst+'/'+Project.data().JobNoSecond+'</td>'+
                                    '<td class="text-center">'+Project.data().ProjectName+'</td>'+
                                    wh_validate+
                                    inter_validate+
                                    '<td>'+
                                        edit_btn+
                                    '</td>'+
                                '</tr>'
                            )
                            i++
                        }
                    }

                }

                renderdata()

            })
        })


        $("#data").on("click", ".edit-btn", function (e) {
          routeEdit(e.target.value);
        });

        function routeEdit(ProjectID) {
            router.push({ path: `/Order_check/Wh/Edit/${ProjectID}` });
        }

        $("#data").on("click", ".del-btn", function (e) {

            const jobnoid = $(this).data('jobid')
            projectFirestore.collection("Projects").doc(jobnoid).get().then(jobdata =>{
                $('#modal-view-title').html('JOB No : '+jobdata.data().JobNoFirst+'/'+jobdata.data().JobNoSecond+' : '+jobdata.data().ProjectName)
                $('#modal-ordersheet-data').html('')
                $('#modal-booking-data').html('')
                var order_orderSheet_list
                const orderSheet_list = jobdata.data().orderSheet

                order_orderSheet_list = _.orderBy(orderSheet_list, ['OrderSheetNo'], ['asc']);
                for(let i = 0; i < jobdata.data().orderSheet.length; i++){
                    var sale_cf
                    var wh_cf
                    if(order_orderSheet_list[i].sale_confirm == true){
                        sale_cf  = '<td id="sale_cf'+(i+1)+'" class="text-success">ยืนยัน</td>'
                    }
                    else{
                        sale_cf  = '<td id="sale_cf'+(i+1)+'" class="text-danger">ไม่ยืนยัน</td>'
                    }
                    if(order_orderSheet_list[i].warehouse_confirm == true){
                        wh_cf  = '<select id="wh-order-option'+(i+1)+'" class="form-control form-control-sm confirm-option" required>'+
                                    '<option value="false">ไม่ยืนยัน</option>'+
                                    '<option selected  value="true">ยืนยัน</option>'+
                                '</select>'
                    }
                    else{
                        wh_cf  = '<select id="wh-order-option'+(i+1)+'" class="form-control form-control-sm confirm-option" required>'+
                                    '<option selected value="false">ไม่ยืนยัน</option>'+
                                    '<option  value="true" >ยืนยัน</option>'+
                                '</select>'
                    }
                    $('#modal-ordersheet-data').append(
                        '<tr class="order_list">'+
                            '<td id="OrderSheetNo'+(i+1)+'">'+order_orderSheet_list[i].OrderSheetNo+'</td>'+
                            '<td id="series'+(i+1)+'">'+order_orderSheet_list[i].series+'</td>'+
                            '<td id="company'+(i+1)+'">'+order_orderSheet_list[i].company+'</td>'+
                            '<td id="origin'+(i+1)+'">'+order_orderSheet_list[i].origin+'</td>'+
                            '<td id="warranty'+(i+1)+'">'+order_orderSheet_list[i].warranty+'</td>'+
                            '<td id="amount'+(i+1)+'">'+order_orderSheet_list[i].amount+'</td>'+
                            sale_cf+
                            '<td>'+wh_cf+'</td>'+
                        '</tr>'
                    )
                }
                var order_booking_list
                const booking_list = jobdata.data().booking

                order_booking_list = _.orderBy(booking_list, ['booking_OrderSheetNo'], ['asc']);
                for(let i = 0; i < jobdata.data().booking.length; i++){
                    var booking_sale_cf
                    var booking_wh_cf
                    if(order_booking_list[i].sale_confirm == true){
                        booking_sale_cf  = '<td id="booking_sale_cf'+(i+1)+'" class="text-success">ยืนยัน</td>'
                    }
                    else{
                        booking_sale_cf  = '<td id="booking_sale_cf'+(i+1)+'" class="text-danger">ไม่ยืนยัน</td>'
                    }
                    if(order_booking_list[i].warehouse_confirm == true){
                        booking_wh_cf  = '<select id="wh-booking-option'+(i+1)+'" class="form-control form-control-sm confirm-option" required>'+
                                    '<option value="false">ไม่ยืนยัน</option>'+
                                    '<option selected  value="true" >ยืนยัน</option>'+
                                '</select>'
                    }
                    else{
                        booking_wh_cf  = '<select id="wh-booking-option'+(i+1)+'" class="form-control form-control-sm confirm-option" required>'+
                                    '<option selected value="false">ไม่ยืนยัน</option>'+
                                    '<option  value="true" >ยืนยัน</option>'+
                                '</select>'
                    }
                    $('#modal-booking-data').append(
                        '<tr class="booking_list">'+
                            '<td id="booking_OrderSheetNo'+(i+1)+'">'+order_booking_list[i].booking_OrderSheetNo+'</td>'+
                            '<td id="booking_series'+(i+1)+'">'+order_booking_list[i].booking_series+'</td>'+
                            '<td id="booking_company'+(i+1)+'">'+order_booking_list[i].booking_company+'</td>'+
                            '<td id="booking_warranty'+(i+1)+'">'+order_booking_list[i].booking_warranty+'</td>'+
                            '<td id="booking_amount'+(i+1)+'">'+order_booking_list[i].booking_amount+'</td>'+
                            booking_sale_cf+
                            '<td>'+booking_wh_cf+'</td>'+
                        '</tr>'
                    )
                }
                


            })
            

            $("#modalfooter").html('<button class="btn btn-danger col-3" data-dismiss="modal">ยกเลิก</button>'+
                                    '<button class="btn btn-success save-btn-cf col-3" data-jobid="'+jobnoid+'">บันทึก</button>'
            )
        });


        $("#modalfooter").on("click", ".save-btn-cf", function (e) {
            console.log('save')
            const updateid = $(this).data('jobid')
            console.log(updateid)

            var orderSheetNo = 0
            var bookingNo = 0
            var orderSheetArr = []
            var bookingArr = []

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
                    for(let i = 0; i < orderSheetNo; i++){
                        const OrderSheetNo = $('#OrderSheetNo'+(i+1)).text()
                        const series = $('#series'+(i+1)).text()
                        const company = $('#company'+(i+1)).text()
                        const origin = $('#origin'+(i+1)).text()
                        const warranty = $('#warranty'+(i+1)).text()
                        const amount = $('#amount'+(i+1)).text()
                        var sale_cf
                        if($('#sale_cf'+(i+1)).text() == 'ยืนยัน'){
                            sale_cf = true
                        }
                        else{
                            sale_cf = false
                        }

                        var wh_cf

                        if($('#wh-order-option'+(i+1)).find('option:selected').val() == 'true'){
                            wh_cf = true
                        }
                        else{
                            wh_cf = false
                        }

                        orderSheetArr.push({OrderSheetNo:OrderSheetNo,series:series,company:company,origin:origin,warranty:warranty,amount:amount,sale_confirm:sale_cf,warehouse_confirm:wh_cf,visible:true})

                    }
                    for(let i = 0; i < bookingNo; i++){
                        const booking_OrderSheetNo = $('#booking_OrderSheetNo'+(i+1)).text()
                        const booking_series = $('#booking_series'+(i+1)).text()
                        const booking_company = $('#booking_company'+(i+1)).text()
                        const booking_warranty = $('#booking_warranty'+(i+1)).text()
                        const booking_amount = $('#booking_amount'+(i+1)).text()
                        var booking_sale_cf 
                        if($('#booking_sale_cf'+(i+1)).text() == 'ยืนยัน'){
                            booking_sale_cf = true
                        }
                        else{
                            booking_sale_cf = false
                        }

                        var booking_wh_cf

                        if($('#wh-booking-option'+(i+1)).find('option:selected').val() == 'true'){
                            booking_wh_cf = true
                        }
                        else{
                           booking_wh_cf = false
                        }

                        bookingArr.push({booking_OrderSheetNo:booking_OrderSheetNo,booking_series:booking_series,booking_company:booking_company,booking_warranty:booking_warranty,booking_amount:booking_amount,sale_confirm:booking_sale_cf,warehouse_confirm:booking_wh_cf,visible:true})
                    }
                }
                function filebaseSave(){
                    
                    console.log(orderSheetArr)
                    console.log(bookingArr)


                    projectFirestore.collection('Projects').doc(updateid).update({

                        orderSheet:orderSheetArr,
                        booking:bookingArr

                    }).then(function () {
                        location.reload();
                    })
                }
                
                


            }

            saveData()
        });

        function delSpec(BattSpecId) {
            projectFirestore.collection('BatterySpecifications').doc(BattSpecId).update({
                visible:false
            }).then(function () {
                location.reload();
            })
        }

    }
}
</script>