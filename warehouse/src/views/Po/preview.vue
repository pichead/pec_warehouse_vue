<style>
    body {
        background:white;
      }
    .bg-top{
        background: #DBDBDB !important;
    }
    .bg-blue{
        background: #EBF4FF !important;
    }
    
    .print-wrapper{
    display: none;
    }

    @media print {
        .bg-top{
            background: #DBDBDB !important;
        }
        .bg-blue{
            background: #EBF4FF !important;
        }
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
    <div id="data" style="margin-left: 250px ;font-family:Helvetica;" >
        <div class="container page-break my-5 page-print">

                <div class="row">
                    <div class="col-2"><img class="" style=" width:200px;display:block" src="/33281.jpg" ></div>
                    <small class="col-6 pl-5">
                        <div class="pl-4 h5 font-weight-bold">PEC Technology (Thailand) Co., Ltd.</div>
                        <div class="pl-4 font-weight-bold">181,183 Sukontasawat Rd. Ladprao Bangkok, Thailand 10230</div>
                        <div class="pl-4 font-weight-bold">Tel: 02-9078521-4 Fax: 02-9078525</div>
                        <div class="pl-4 font-weight-bold">Email: email@pectecth.co.th Website: pectecth.co.th</div>
                    </small>
                    <div class="col-4 h3 text-right font-weight-bold"><u>PURCHASE ORDER</u></div>
                </div>

                <div class="row my-4"  style="font-size:13px">
                    <div class="col-7">
                        <div class="col-12">
                            <div class="row">
                                <div class="col-3 border px-4 py-2 bg-top">To</div>
                                <div class="col-9 border px-4  py-2">Bon Hui</div>
                                <div class="col-3 border px-4 py-2 bg-top">Company</div>
                                <div class="col-9 border px-4  py-2">C&D Technology (Singapore) Pte.Ltd </div>
                                <div class="col-3 border px-4 py-2 bg-top">Address</div>
                                <div class="col-9 border pl-4  py-2">100 Jalan Sultan # 08-09 Sultan Plaza Singapore 199001</div>
                                <div class="col-3 border px-4 py-2 bg-top">tel</div>
                                <div class="col-9 border px-4  py-2">+65 - 6291 1031</div>
                                <div class="col-3 border px-4 py-2 bg-top">Fax</div>
                                <div class="col-9 border px-4  py-2">+65 - 6291 0767</div>
                                <div class="col-3 border px-4 py-2 bg-top">Email</div>
                                <div class="col-9 border px-4  py-2">Bhui@cdtechno.com</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-5">
                        <div class="col-12">
                            <div class="row">
                                <div class="col-5 border px-4 py-2 bg-top">PO No.</div>
                                <div id="pono" class="col-7 border px-4 py-2"></div>
                                <div class="col-5 border px-4 py-2 bg-top">Date</div>
                                <div id="date" class="col-7 border px-4 py-2"></div>
                                <div class="col-5 border px-4 py-2 bg-top">Term of Payment</div>
                                <div id="tpayment" class="col-7 border px-4 py-2"></div>
                                <div class="col-5 border px-4 py-2 bg-top">Delivery Date</div>
                                <div id="deliverydate" class="col-7 border px-4 py-2"></div>
                                <div class="col-5 border px-4 py-2 bg-top">Origin</div>
                                <div id="Origin" class="col-7 border px-4 py-2">China</div>
                                <div class="col-5 border px-4 py-2 bg-top">Project</div>
                                <div id="project" class="col-7 border px-4 py-2"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <table class="mb-5 mt-2 table table-bordered" style="font-size:13px">
                    <thead>
                        <tr class="text-center bg-blue">
                            <th width="10%">Item</th>
                            <th width="30%">Description</th>
                            <th width="10%">Warranty</th>
                            <th width="10%">Qty.</th>
                            <th width="10%">Unit</th>
                            <th width="15%">Unit Price(USD)</th>
                            <th width="15%">Amount(USD)</th>
                        </tr>
                    </thead>
                    <tbody id="sum_data" class="text-right">
  

                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="5" ></td>
                            <td class="text-center">Total</td>
                            <td id="sumprice" class="text-right"></td>
                            
                        </tr>
                    </tfoot>
                    
                </table>
                <div class="col-12">
                    <div class="row mt-2">
                        <div class="col-12 border">
                            <div class="p-2">
                                <div class="">Note : </div>
                                <div id="comment" class="pb-5"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <div class="col-12">
                    <div class="row mt-2 mb-5">
                        <div class="col pl-0">
                            <div class="font-weight-bold">Consignee & Ship to:</div>
                            <div class="">PEC TECHNOLOGY (THAILAND) CO.,LTD.</div>
                            <div class="">181, 183 Sukhontasawat Rd., Ladprao Bangkok, Thailand 10230</div>
                            <div class="mb-2">Tel: +662-9078521-4 Fax: +662-9078525</div>
                            <div class="font-weight-bold">Performa & Origin Invoice:</div>
                            <div class="">PEC TECHNOLOGY (THAILAND) CO.,LTD.</div>
                            <div class="">181, 183 Sukhontasawat Rd., Ladprao Bangkok, Thailand 10230</div>
                            <div class="">Tel: +662-9078521-4 Fax: +662-9078525</div>
                            <div class="">
                                <span  class="font-weight-bold">Order by:</span>
                                <span>Mr.Kasiean Sukemoke</span>
                            </div>
                            <div class="">
                                <span  class="font-weight-bold">Send:</span>
                                <span>BY SEA</span>
                            </div>
                        </div>
                        <div class="col border row">
                                <div class="col-12 mt-3">please give me for your confirmation and signature : </div>
                                <div id="comment" class="col-12"></div>
                                <div class="mt-auto col-12 mb-3">
                                    <div class="">Date : </div>
                                </div>
                        </div>
                        <!-- <div class="row col">
                            <div class="align-self-start">
                                please give me for your confirmation and signature : 
                            </div>

                            <div class="align-self-end">
                                Bottom Aligned
                            </div>
                        </div> -->
                    </div>
                </div>
                <div class="row" style="margin-top:150px">
                    <div class="col-4">
                        <div class="text-center my-2">Ananda Khamsuwatana</div>
                        <div class="text-center my-2">International Correspondence</div>

                    </div>
                    <div class="col-4">
                        <div class="text-center my-2">Punnawit Ritthiprapa</div>
                        <div class="text-center my-2">Manager</div>
                    </div>
                    <div class="col-4">
                        <div class="text-center my-2">Kasiean Sukemoke</div>
                        <div class="text-center my-2">General Manager</div>
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
import numeral from "numeral";
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



        async function renderData() {
            const Po = await projectFirestore.collection("Po").doc(dataid).get()
            // <div class="col-5 border px-4 py-2">Term of Payment</div>
            // <div id="tpayment" class="col-7 border px-4 py-2"></div>
            // <div class="col-5 border px-4 py-2">Delivery Date</div>
            // <div id="deliverydate" class="col-7 border px-4 py-2"></div>
            // <div class="col-5 border px-4 py-2">Origin</div>
            // <div id="Origin" class="col-7 border px-4 py-2">China</div>
            // <div class="col-5 border px-4 py-2">Project</div>
            // <div id="project" class="col-7 border px-4 py-2"></div>
            $('#pono').html(Po.data().pecpo_no+"/"+Po.data().pecpo_year)
            $('#tpayment').html(Po.data().tpayment+' Days')
            $('#deliverydate').html(Po.data().delivery+' Days')
            $('#project').html()

            
            var date = new Date(Po.data().createdate*1000);
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year =date.getFullYear();
            if (day < 10) {
                day = "0" + day;
            }
            if (month < 10) {
                month = "0" + month;
            }
            var new_date = day + "/" + month + "/" + year;

            var sumbattprice = 0 
            const shipping_no = Po.data().battorder.length+1
            $('#date').html(new_date)
            await renderdata()
            await renderfooter()


            async function renderdata(){

                for(let i = 0; i < Po.data().battorder.length;i++){
                    const Project = await projectFirestore.collection("Projects").doc(Po.data().battorder[i].project_id).get()
                    // console.log(Project.data())
                    for(let j = 0; j < Project.data().orderSheet.length; j++){
                        for(let k = 0; k < Project.data().orderSheet[j].battery.length; k++){
                            if(Po.data().battorder[i].orderSheet == Project.data().orderSheet[j].no && Po.data().battorder[i].batt_no == Project.data().orderSheet[j].battery[k].no){
                                 $('#sum_data').append(
                                        '<tr height="30px">'+
                                            '<td class="text-center">'+(i+1)+'</td>'+
                                            '<td class="text-left">'+Project.data().orderSheet[j].battery[k].series+'</td>'+
                                            '<td class="text-right">'+(Project.data().orderSheet[j].battery[k].warranty)+' Mth</td>'+
                                            '<td class="text-right">'+Project.data().orderSheet[j].battery[k].order_amount+'</td>'+
                                            '<td class="text-center">Blks.</td>'+
                                            '<td class="text-right">'+numeral(Po.data().battorder[i].batt_unit_price).format("0,0.00")+'</td>'+
                                            '<td class="text-right">'+numeral((Project.data().orderSheet[j].battery[k].order_amount*Po.data().battorder[i].batt_unit_price)).format("0,0.00")+'</td>'+
                                        '</tr>'
                                    )
                                sumbattprice = sumbattprice + (Project.data().orderSheet[j].battery[k].order_amount*Po.data().battorder[i].batt_unit_price)
                            }
                        }
                        
                    }
                    // const order_amount = Po.data().battery[i].amount - Po.data().battery[i].wh_stock
                   
                }

            

            }

            function renderfooter(){
                $('#sum_data').append(
                    '<tr height="30px">'+
                        '<td class="text-center">'+(shipping_no)+'</td>'+
                        '<td class="text-left">Freight Charge : '+Po.data().shippingname+'</td>'+
                        '<td class="text-center"></td>'+
                        '<td class="text-center"></td>'+
                        '<td class="text-center"></td>'+
                        '<td class="text-center"></td>'+
                        '<td class="text-right">'+numeral(Po.data().shippingprice).format("0,0.00")+'</td>'+
                    '</tr>'
                )
                $('#sumprice').html( numeral( sumbattprice+ parseFloat(Po.data().shippingprice)).format("0,0.00"))
            }



        }


        renderData()

        $('#print').on('click',()=>{
             window.print();
        })

    }
}
</script>