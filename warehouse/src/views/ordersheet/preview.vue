<style>
    body {

        background:white;
      }
    
    .print-wrapper{
    display: none;
    }

    @media print {

      /* body *{
        visibility: hidden;
        height: 0;
      } */
      .content-wrapper{
        display: none;
      }
      .print-wrapper{
        display: block;
        height: auto;
        margin-top: -60px;
        margin-left: -250px;
      }
      .page-print{
          margin-left: -250px;
      }
      .print-wrapper,.print-wrapper *{
        visibility: visible;
        height: auto;
      }
      .tb-print-stock-history{
        width: auto;;
        margin: auto;
      }
      .page-break { 
        /* display:block;
        height:1px; */
        page-break-after:always; 
      }
      .page-break-no {
        display:block;
        height:1px;
        page-break-after:avoid; 
      }
      @page {
        size: A4 portrait;
        margin: 6mm 12mm;
      }
    }
</style>
<template>
<Sidebar  class="content-wrapper" />
    <div id="content"  class="content-wrapper"  style="margin-left: 250px">
        
        <!-- <div id="content" style="margin-left: 250px"> -->
        <div class="container">
            <div class="clearfix my-4 content-wrapper">
                <button id="print" class="btn btn-info float-right" href="#" type="button" >พิมพ์</button>
            </div>
        </div>
    <!-- </div> -->

    </div>
    <div id="data" style="margin-left: 250px" >
        <div class="container page-break my-5 page-print">

                <div class="row">
                    <div class="col-4"></div>
                    <div class="col-4"><img class="pt-5" style="margin:auto; width:270px;display:block" src="/33281.jpg" ></div>
                    <small class="col-4">
                        <div class="pl-4 font-weight-bold text-primary">PEC Technology (Thailand) Co., Ltd.</div>
                        <div class="pl-4 font-weight-bold text-primary">181,183 Sukontasawat Rd.</div>
                        <div class="pl-4 font-weight-bold text-primary">Ladprao Bangkok, Thailand 10230</div>
                        <div class="pl-4 font-weight-bold text-primary">Tel : 02-9078521-4</div>
                        <div class="pl-4 font-weight-bold text-primary">Fax : 02-9078525</div>
                        <div class="pl-4 font-weight-bold text-primary">Email : email@pectecth.co.th</div>
                        <div class="pl-4 font-weight-bold text-primary">Web site : pectecth.co.th</div>
                    </small>
                </div>
                <div class="h4 mt-5 text-center font-weight-bold">Summary Report</div>
                <div class="h4 mb-5 text-center font-weight-bold">Order Sheet</div>

                <div class="row mb-5">
                    <div id="sum_jobno" class="col-4 font-weight-bold my-2"></div>
                    <div id="sum_project" class="col-4 font-weight-bold my-2"></div>
                    <div id="sum_company" class="col-4 font-weight-bold my-2"></div>
                    <div id="sum_date" class="col-4 font-weight-bold my-2"></div>
                    <div id="sum_deliverydate" class="col-4 font-weight-bold my-2"></div>

                </div>
                <div class="font-weight-bold">Battery Requirements</div>
                <table class="mb-5 mt-2 table table-bordered">
                    <thead>
                        <tr class="text-center">
                            <th width="10%">Item</th>
                            <th width="30%">Series</th>
                            <th width="15%">Warranty(month)</th>
                            <th width="15%">Origin</th>
                            <th width="10%">Total/EA</th>
                            <th width="10%">Stock/EA</th>
                            <th width="10%">Order/EA</th>
                            <!-- <th width="15%">Delivery Date</th> -->
                        </tr>
                    </thead>
                    <tbody id="sum_data">
  

                    </tbody>
                </table>
                <div id="new_batt"></div>
                <div class="row mt-2">
                    <div class="col-1 font-weight-bold">
                        remark
                    </div>
                    <div id="remark" class="col-11">
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-4">
                        <div class="text-center my-2">Responsible for the order</div>
                        <div class="text-center my-4">................................................................</div>
                        <div class="text-center my-2">(................................................................)</div>

                    </div>
                    <div class="col-4">
                        <div class="text-center my-2">Endorsee</div>
                        <div class="text-center my-4">................................................................</div>
                        <div class="text-center my-2">(................................................................)</div>
                    </div>
                    <div class="col-4">
                        <div class="text-center my-2">Ordering Person</div>
                        <div class="text-center my-4">................................................................</div>
                        <div class="text-center my-2">( Panatda Utamakaew )</div>
                    </div>

                </div>
                

        </div>
        <div class="content-wrapper col-12" style="border-bottom: 5px solid black;"></div>
        
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
        // var productId = this.$route.params.productId
        var dataid = id

        function onlyUnique(value, index, self) { 
            return self.indexOf(value) === index;
        }

        var OrderSheetNo = []
        var RunningOrderSheetNo = []


        async function renderData() {
            const Project = await projectFirestore.collection("Projects").doc(dataid).get()

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

            var bdate = new Date(Project.data().deliverydate);
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

            let uniqueOrder
            let new_uniqueOrder

            await sumData()
            await getOrderNo()
            await renderOrder()
            await OrderData()
            await OrderDataSetpage()
            await OrderWarranty()

            function sumData(){
                $('#new_batt').html('')
                $('#sum_jobno').html('Job No. : '+Project.data().JobNoFirst+('/')+Project.data().JobNoSecond)
                $('#sum_project').html('Project Name : '+Project.data().ProjectName)
                $('#sum_company').html('Ordering by Company : '+Project.data().orderby)
                $('#sum_date').html('Start Date : '+new_date)
                $('#sum_deliverydate').html('Final Date : '+bnew_date)
                $('#remark').html(Project.data().comment)

                for(let i = 0; i < Project.data().battery.length;i++){
                    const order_amount = Project.data().battery[i].amount - Project.data().battery[i].wh_stock
                    $('#sum_data').append(
                        '<tr height="50px">'+
                            '<td class="text-center">'+(i+1)+'</td>'+
                            '<td>'+Project.data().battery[i].series+' : '+Project.data().battery[i].company+'</td>'+
                            '<td class="text-center">'+Project.data().battery[i].warranty+'</td>'+
                            '<td class="text-center">'+Project.data().battery[i].origin+'</td>'+
                            '<td class="text-center">'+Project.data().battery[i].amount+'</td>'+
                            '<td class="text-center">'+Project.data().battery[i].wh_stock+'</td>'+
                            '<td class="text-center">'+order_amount+'</td>'+
                        '</tr>'
                    )
                }

            

            }

            function getOrderNo(){
                for(let i = 0; i < Project.data().orderSheet.length; i++){
                    OrderSheetNo.push(Project.data().orderSheet[i].no)
                }


            }

            function renderOrder(){

                uniqueOrder = OrderSheetNo.filter( onlyUnique );
                for(let i = 0; i < uniqueOrder.length; i++){
                    
                    RunningOrderSheetNo.push(0)
                    $('#data').append(
                        '<div class="container page-break my-5 page-print" >'+
                            '<div class="row">'+
                                '<div class="col-4"></div>'+
                                '<div class="col-4"><img class="pt-5" style="margin:auto; width:270px;display:block" src="/33281.jpg" ></div>'+
                                '<small class="col-4">'+
                                    '<div class="pl-4 font-weight-bold text-primary">PEC Technology (Thailand) Co., Ltd.</div>'+
                                    '<div class="pl-4 font-weight-bold text-primary">181,183 Sukontasawat Rd.</div>'+
                                    '<div class="pl-4 font-weight-bold text-primary">Ladprao Bangkok, Thailand 10230</div>'+
                                    '<div class="pl-4 font-weight-bold text-primary">Tel : 02-9078521-4</div>'+
                                    '<div class="pl-4 font-weight-bold text-primary">Fax : 02-9078525</div>'+
                                    '<div class="pl-4 font-weight-bold text-primary">Email : email@pectecth.co.th</div>'+
                                    '<div class="pl-4 font-weight-bold text-primary">Web site : pectecth.co.th</div>'+
                                '</small>'+
                            '</div>'+
                            '<div class="h4 my-5 text-center font-weight-bold">Order Sheet</div>'+
                            '<div class="row mb-5">'+
                                '<div class="col-4 font-weight-bold my-2">Job No. : '+Project.data().JobNoFirst+('/')+Project.data().JobNoSecond+'</div>'+
                                '<div class="col-4 font-weight-bold my-2">Project Name : '+Project.data().ProjectName +'</div>'+
                                '<div class="col-4 font-weight-bold my-2">Ordering by Company : '+Project.data().orderby+'</div>'+
                                '<div class="col-4 font-weight-bold my-2">Start Date : '+new_date+'</div>'+
                                '<div class="col-4 font-weight-bold my-2">Final Date : '+bnew_date+'</div>'+
                                '<div class="col-4 font-weight-bold my-2">Order No : '+Project.data().JobNoFirst+('/')+Project.data().JobNoSecond+('/')+uniqueOrder[i]+'</div>'+

                            '</div>'+
                            '<table class="my-5 table table-bordered">'+
                                '<thead>'+
                                    '<tr class="text-center">'+
                                        '<th width="10%">Item</th>'+
                                        '<th width="50%">Description</th>'+
                                        '<th width="10%">Total/EA</th>'+
                                        '<th width="30%">Supported Documents</th>'+
                                    '</tr>'+
                                '</thead>'+
                                '<tbody id="data'+i+'">'+
 
                                '</tbody>'+
                                '<tfoot >'+
                                    '<tr id="footer'+i+'" height="50px">'+

                                    '</tr>'+
                                '</tfoot>'+
                            '</table>'+
                            '<div class="row" style="margin-top:150px">'+
                                    '<div class="col-4">'+
                                        '<div class="text-center my-2">Responsible for the order</div>'+
                                        '<div class="text-center my-4">................................................................</div>'+
                                        '<div class="text-center my-2">(................................................................)</div>'+

                                    '</div>'+
                                    '<div class="col-4">'+
                                        '<div class="text-center my-2">Endorsee</div>'+
                                        '<div class="text-center my-4">................................................................</div>'+
                                        '<div class="text-center my-2">(................................................................)</div>'+
                                    '</div>'+
                                    '<div class="col-4">'+
                                        '<div class="text-center my-2">Ordering Person</div>'+
                                        '<div class="text-center my-4">................................................................</div>'+
                                        '<div class="text-center my-2">( Panatda Utamakaew )</div>'+
                                    '</div>'+

                                '</div>'+
                        '</div>'+
                        '<div class="content-wrapper col-12" style="border-bottom: 5px solid black;"></div>'
                        

                    )
                }



            }
            function OrderData(){

                for(let i = 0; i < uniqueOrder.length; i++){
                    for(let j = 0; j < Project.data().orderSheet.length; j++){

                        if(Project.data().orderSheet[j].no == uniqueOrder[i]){
                            
                            for(let k = 0; k < Project.data().orderSheet[j].battery.length;k++){
                                $('#data'+i).append(
                                    '<tr height="50px">'+
                                        '<td class="text-center">'+(k+1)+'</td>'+
                                        '<td>'+Project.data().orderSheet[j].battery[k].series+'</td>'+
                                        '<td class="text-center">'+Project.data().orderSheet[j].battery[k].order_amount+'</td>'+
                                        '<td></td>'+
                                    '</tr>'
                                )
                            }
                            

                            // $('#data'+uniqueOrder[i]).append(
                            //     '<tr height="50px">'+
                            //         '<td class="text-center">'+(RunningOrderSheetNo[i]+1)+'</td>'+
                            //         '<td>'+Project.data().orderSheet[j].series+'</td>'+
                            //         '<td class="text-center">'+Project.data().orderSheet[j].order_amount+'</td>'+
                            //         '<td></td>'+
                            //     '</tr>'
                            // )
                            RunningOrderSheetNo[i] = RunningOrderSheetNo[i]+1
                        }

                    }
                }

       
            }
            function OrderDataSetpage(){
                
                for(let i = 0; i < RunningOrderSheetNo.length;i++){
                    if(RunningOrderSheetNo[i] < 8){
                        for(let j = 0; j < (8-RunningOrderSheetNo[i]);j++){
                            $('#data'+i).append(
                                        '<tr height="50px">'+
                                            '<td class="text-center"></td>'+
                                            '<td></td>'+
                                            '<td class="text-center"></td>'+
                                            '<td></td>'+
                                        '</tr>'
                                    )
                        }
                        
                    }
                }




       
            }
            function OrderWarranty(){
                for(let i = 0; i < uniqueOrder.length; i++){
                    for(let j = 0; j < Project.data().orderSheet.length; j++){

                        if(Project.data().orderSheet[j].no == uniqueOrder[i]){
                            var fdate = new Date(Project.data().orderSheet[j].battery[0].deliverydate);
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
                            
                            $('#footer'+i).html(
                                    '<td class="text-center"></td>'+
                                    '<td ><small>Origin : '+Project.data().orderSheet[j].battery[0].origin+' / Warranty : '+Project.data().orderSheet[j].battery[0].warranty+' month / Order Delivery : '+fnew_date+'</small></td>'+
                                    '<td class="text-center"></td>'+
                                    '<td></td>'
                            )
                        }

                    }
                }


            }




        }


        renderData()

        $('#print').on('click',()=>{
             window.print();
        })

    }
}
</script>