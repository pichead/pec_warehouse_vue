
<style>
</style>
<template>
  <Sidebar />
  <div id="content" style="margin-left: 250px">
    <div class="container">
    <div class="text-center h3 my-5">PM DATA</div>
        <div class="mx-auto row">
        <button id="editbtn" class="btn btn-success col-md-1">แก้ไข</button>
        <button id="canclebtn" class="btn btn-danger col-md-1 mr-3 d-none">ยกเลิก</button>
        <button id="savebtn" class="btn btn-primary col-md-1 d-none">บันทึก</button>
    </div>
    <div class="border col-12 my-3 p-2 pl-3 rounded bg-white">
        <div id="head" class="row">
            
        </div>
    </div>
      <div id="data" class="">

      </div>
    </div>
  </div>
</template>

<script>
import { projectFirestore, projectAuth } from "../../firebase/config";
import pagination from "../../assets/pagination";

import Sidebar from "../../components/Sidebar.vue";
import router from "@/router";
import numeral from "numeral";

export default {
  components: { Sidebar },
  mounted() {
    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf('/') + 1);
    var pmID = id
    var string
    var batt_array
    var systemArray = []
    var order_systemArray
    var raw_batt_array = []

    projectFirestore.collection("PmGroup").doc(pmID).get().then( PmData =>{

        var creatdate = eval((PmData.data().create_date)*1000);
        var crdate = new Date(creatdate);
        var crday = crdate.getDate();
        var crmonth = crdate.getMonth() + 1;
        var cryear = crdate.getFullYear();
        if (crday < 10) {
            crday = "0" + crday;
        }
        if (crmonth < 10) {
            crmonth = "0" + crmonth;
        }
        var new_rcdate = crday + "-" + crmonth + "-" + cryear;

        var lastdate = eval((PmData.data().last_update)*1000);
        var lsdate = new Date(lastdate);
        var lsday = lsdate.getDate();
        var lsmonth = lsdate.getMonth() + 1;
        var lsyear = lsdate.getFullYear();
        if (lsday < 10) {
            lsday = "0" + lsday;
        }
        if (lsmonth < 10) {
            lsmonth = "0" + lsmonth;
        }
        var new_lsdate = lsday + "-" + lsmonth + "-" + lsyear;

        $('#head').html('<div class="col-xl-3 col-12 my-1"><b>Group</b> : '+PmData.data().group+'</div>'+
            '<div class="col-xl-3 col-12 my-1"><b>Create Date</b> : '+new_rcdate+'</div>'+
            '<div class="col-xl-3 col-12 my-1"><b>Pm Date</b> : '+PmData.data().pm_date+'</div>'+
            '<div class="col-xl-3 col-12 my-1"><b>Last Update</b> : '+new_lsdate+'</div>')

        


        projectFirestore.collection("SystemMeasurements").where('Group','==',PmData.data().group).get().then((SystemData) => {
            
            SystemData.forEach((sysdata) => {
                systemArray.push(sysdata.data())
            })

        }).then(()=>{
            order_systemArray = _.orderBy(systemArray, ['string'], ['asc']);

            string = order_systemArray.length

            projectFirestore.collection("Measurements").where('Group','==',PmData.data().group).get().then((BattData) => {
                
                BattData.forEach((Batt) => {
                    raw_batt_array.push({Group:Batt.data().Group,
                                            barcode:Batt.data().barcode,
                                            blockNo:parseInt(Batt.data().blockNo),
                                            floatVoltage:parseFloat(Batt.data().floatVoltage),
                                            g:parseInt(Batt.data().g),
                                            r:parseFloat(Batt.data().r),
                                            room:Batt.data().room,
                                            site:Batt.data().site,
                                            stringNo:Batt.data().stringNo,
                                            system:Batt.data().system,
                                            })
                    
                })
                batt_array = _.orderBy(raw_batt_array, ['blockNo'], ['asc']);

                
            }).then(()=>{
                showdata()
            })
            
            for(let i = 0; i < order_systemArray.length; i++){
                $('#data').append('<div class="border col-12 my-3 p-2 pl-3 rounded bg-white">'+
                                    '<div id="head'+(i+1)+'" class="row">'+
                                        '<div class="col-xl-4 col-12 my-1"><b>Site</b> : '+order_systemArray[i].site+'</div>'+
                                        '<div class="col-xl-4 col-12 my-1"><b>Room</b> : '+order_systemArray[i].room+'</div>'+
                                        '<div class="col-xl-4 col-12 my-1"><b>Ups name</b> : '+order_systemArray[i].system+'</div>'+
                                        '<div class="col-xl-4 col-12 my-1"><b>String</b> : '+order_systemArray[i].string+'</div>'+
                                        '<div class="col-xl-4 col-12 my-1"><b>Date</b> : '+order_systemArray[i].Date+'</div>'+
                                        '<div class="col-xl-4 col-12 my-1"><b>Ambient temp</b> : '+numeral(order_systemArray[i].Ambient_temp).format("0.0")+' °C</div>'+
                                        '<div class="col-xl-4 col-12 my-1"><b>Battery temp</b> : '+numeral(order_systemArray[i].Battery_temp).format("0.0")+' °C</div>'+
                                        '<div class="col-xl-4 col-12 my-1"><b>Float DC voltage</b> : '+order_systemArray[i].Float_DC_voltage+' Vdc</div>'+
                                        '<div class="col-xl-4 col-12 my-1"><b>Float DC current</b> : '+order_systemArray[i].Float_DC_current+' Adc</div>'+
                                        '<div class="col-xl-4 col-12 my-1"><b>Float AC voltage</b> : '+order_systemArray[i].Float_AC_voltage+' Vac</div>'+
                                        '<div class="col-xl-4 col-12 my-1"><b>Float AC current</b> : '+order_systemArray[i].Float_AC_current+' Aac</div>'+
                                        '<div class="col-xl-4 col-12 my-1"><b>Service_life(Y:M)</b> : '+order_systemArray[i].Service_life+'</div>'+
                                        '<div class="col-12 my-1"><b>Device conductance</b> : '+order_systemArray[i].D_conductance+'</div>'+
                                        '<div class="col-12 my-1"><b>Device resistance</b> : '+order_systemArray[i].D_resistance+'</div>'+
                                    '</div>'+
                                '</div>'+
                                '<table class="table table-striped mt-2 mb-5">'+
                                    '<thead class="text-center sticky-top bg-white">'+
                                        '<tr>'+
                                        '<th>Barcode</th>'+
                                        '<th>blk no</th>'+
                                        '<th>float voltage(V)</th>'+
                                        '<th>internal conductance(G)</th>'+
                                        '<th>internal resistance(mΩ)</th>'+
                                        '<th>temp(°C)</th>'+
                                        '<th>visual inspection</th>'+
                                        '</tr>'+
                                    '</thead>'+
                                    '<tbody id="table'+(i+1)+'" class="">'+
                                    '</tbody>'+
                                '</table>')
                
            }
            


        })






    
    })

    function showdata(){
        for(let i = 0; i < string; i++){
            for(let j = 0; j < batt_array.length; j++){
                
                    if(batt_array[j].stringNo == (i+1)){
                        $('#table'+(i+1)).append('<tr>'+
                                            '<td class="border-top-0 text-center border-right">'+
                                                '<input type="text" class="d-none text-input form-control-sm p-0" style="width: 130px;text-align: center;" value="'+batt_array[j].barcode+'"/>'+
                                                '<div class="text-data">'+batt_array[j].barcode+'</div>'+
                                            '</td>'+
                                            '<td class="border-top-0 text-center border-right">'+
                                                '<input type="number" class="d-none text-input form-control-sm p-0" style="width: 50px;text-align: center;" value="'+batt_array[j].blockNo+'"/>'+
                                                '<div class="text-data">'+batt_array[j].blockNo+'</div>'+
                                            '</td>'+
                                            '<td id="voltage037" class="border-top-0 text-center border-right">'+
                                                '<input type="number" step="0.01" class="d-none text-input form-control-sm p-0" style="width: 100px;text-align: center;" value="'+numeral(batt_array[j].floatVoltage).format("0.00")+'"/>'+
                                                '<div class="text-data">'+numeral(batt_array[j].floatVoltage).format("0.00")+'</div>'+
                                            '</td>'+
                                            '<td  class="border-top-0 text-center border-right">'+
                                                '<input type="number" class="d-none text-input form-control-sm p-0" style="width: 100px;text-align: center;" value="'+batt_array[j].g+'"/>'+
                                                '<div class="text-data">'+batt_array[j].g+'</div>'+
                                            '</td>'+
                                            '<td  class="border-top-0 text-center border-right">'+
                                                '<input type="number" step="0.01" class="d-none text-input form-control-sm p-0" style="width: 100px;text-align: center;" value="'+numeral(batt_array[j].r).format("0.000")+'"/>'+
                                                '<div  class="text-data">'+numeral(batt_array[j].r).format("0.000")+'</div>'+                                                
                                            '</td>'+
                                            '<td class="border-top-0 text-center border-right">'+
                                                '<input type="number" step="0.01" class="d-none text-input form-control-sm p-0" style="width: 100px;text-align: center;" value="'+systemArray[i].Battery_temp+'"/>'+
                                                '<div class="text-data">'+numeral(systemArray[i].Battery_temp).format("0.0")+'</div>'+
                                            '</td>'+
                                            '<td class=" border-top-0 text-center border-right"></td>'+
                                                '<input class="d-none text-input form-control-sm p-0" style="width: 100px;text-align: center;" value=""/>'+
                                                '<div class="text-data"></div>'+
                                            '</tr>')
                    }
                    
                
            }
        }
            

    }





    $('#editbtn').on('click',()=>{
        $('#canclebtn').removeClass('d-none')
        $('#savebtn').removeClass('d-none')
        $('#editbtn').addClass('d-none')
        $('.text-input').removeClass('d-none')
        $('.text-data').addClass('d-none')

    })
    $('#canclebtn').on('click',()=>{
        $('#canclebtn').addClass('d-none')
        $('#savebtn').addClass('d-none')
        $('#editbtn').removeClass('d-none')
        $('.text-input').addClass('d-none')
        $('.text-data').removeClass('d-none')
    })
  },
  data() {
    return {
      option: 1,
      totalItem: 1,
    };
  },
  methods: {},
};
</script>