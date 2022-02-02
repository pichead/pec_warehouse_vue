
<style>


</style>
<template>

<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
            <div class="border my-5">
                <div class="m-4">
                    <div id="SystemLocation" class="p-3 " style="background-color:#FFF0B5" disabled></div>
                    <div class="border-top my-5"></div>
                    <div class="row">
                        <div class="col-4">
                            <div id="SystemString" class="border">

                            </div>
                        </div>
                        <div class="col-8">
                            <div id="Systemblk" class="border pl-3 pb-3 pr-3 pt-0" style="height:600px;background-color:#FAFAFA;">
                                <div id="defaulttext" class="text-center" style="margin-top:280px">กำลังโหลดข้อมูล...</div>
                                <div id="batterysystem" class="col-12 overflow-auto" style="height:600px;">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { projectFirestore, projectAuth } from "../../firebase/config";
import pagination from '../../assets/pagination';
import Sidebar from "../../components/Sidebar.vue";
import router from "@/router";

export default {
    components: { Sidebar },
    mounted() {
        var url = window.location.pathname;
        const ParaArray = url.split('/')
        const SiteId = ParaArray[2]
        const BuildingNo = ParaArray[3]
        const RoomNo = ParaArray[4]
        const SystemNo = ParaArray[5]
        var sitename
        var buildingname
        var roomname
        var systemname
        var battery = []
        var totalString
        var totalBattery
        var blockPerString

        var data = {one:1,two:2}
        console.log(data)

        projectFirestore.collection("Sites").doc(SiteId).get().then((Site) => {
            sitename = Site.data().name
            buildingname = Site.data().buildings[BuildingNo].name
            roomname = Site.data().buildings[BuildingNo].rooms[RoomNo].name
            systemname = Site.data().buildings[BuildingNo].rooms[RoomNo].systems[SystemNo].name
            $('#SystemLocation').text('ระบบแบตเตอรี่ : '+sitename+' / '+buildingname+' / '+roomname+' / '+systemname)
            totalString = Site.data().buildings[BuildingNo].rooms[RoomNo].systems[SystemNo].totalStrings
            blockPerString = Site.data().buildings[BuildingNo].rooms[RoomNo].systems[SystemNo].blockPerString
            totalBattery = blockPerString*totalString
            for(let i=0 ;i < totalString;i++ ){
                battery.push([]);
                for(let j = 0 ; j < blockPerString;j++ ){
                    // if(Site.data().buildings[BuildingNo].rooms[RoomNo].systems[SystemNo].batteries[j].stringNo == i+1){
                        projectFirestore.collection("Batteries")
                            .where("site", "==", sitename)
                            .where("building", "==", buildingname)
                            .where("room", "==", roomname)
                            .where("system", "==", systemname)
                            .where("stringNo", "==", (i+1))
                            .where("blockNo", "==", (j+1))
                            .get().then((Batterys) => {
                            Batterys.forEach((Battery) => {
                                projectFirestore.collection("Measurements")
                                .where("barcode", "==", Battery.data().barcode)
                                .where("stringNo", "==", (i+1))
                                .where("blockNo", "==", (j+1))
                                .where("site", "==", sitename)
                                .where("room", "==", roomname)
                                .limit(1)
                                .get().then((measurements) => {
                                    measurements.forEach((measurement) => {
                                        console.log(measurement.data().floatVoltage)

                                        battery[i].push({barcode:Battery.data().barcode, 
                                                            blkno:Battery.data().blockNo, 
                                                            model:Battery.data().series,
                                                            floatvoltage:measurement.data().floatVoltage,
                                                            g:measurement.data().g })
                                    })
                                })
                            })
                        })
                        // projectFirestore.collection("Batteries")
                        //     .where("site", "==", sitename)
                        //     .where("blockNo", "==", (j+1))
                        //     .where("room", "==", roomname)
                    // }
                }
            }
        }).then(()=>{
            $('#SystemString').html('')
            for(let i = 0; i < totalString; i++){
                $('#SystemString').append('<div class="p-2 border pl-5 blkstring" data-string="'+(i)+'" type="button"  style="background-color:#FFF0B5">String '+(i+1)+' : '+blockPerString+' Blocks</div>')
                if(i == totalString-1){
                    setTimeout(
                        function(){
                            var stringdata = 0
                            $('#defaulttext').addClass('d-none')
                            $('#batterysystem').html('')
                            $('#batterysystem').append('<table class="table text-center">'+
                                                    '<thead class="sticky-top"  style="background-color:#E3E3E3;">'+
                                                        '<tr>'+
                                                            '<th>Blk No.</th>'+
                                                            '<th>Barcode</th>'+
                                                            '<th>Model</th>'+
                                                            '<th>Float Voltage</th>'+
                                                            '<th>g</th>'+
                                                        '</tr>'+
                                                    '</thead>'+
                                                    '<tbody id="blkdata" style="height:600px">'+
                                                    '</tbody>'+
                                                '</table>')
                            for(let m = 0; m < blockPerString; m++){
                                
                                $('#blkdata').append('<tr>'+
                                                        '<th scope="row">'+battery[stringdata][m].blkno+'</th>'+
                                                        '<td>'+battery[stringdata][m].barcode+'</td>'+
                                                        '<td>'+battery[stringdata][m].model+'</td>'+
                                                        '<td>'+battery[stringdata][m].floatvoltage+'</td>'+
                                                        '<td>'+battery[stringdata][m].g+'</td>'+
                                                    '</tr>')
                            }
                    }, 3500);
                    

                }
            }
            
        })

        $('#SystemString').on('click', '.blkstring', function() {
            console.log(battery)
            var stringdata = $(this).data('string')
            $('#defaulttext').addClass('d-none')
            $('#batterysystem').html('')
            $('#batterysystem').append('<table class="table text-center">'+
                                    '<thead class="sticky-top"  style="background-color:#E3E3E3;">'+
                                        '<tr>'+
                                            '<th>Blk No.</th>'+
                                            '<th>Barcode</th>'+
                                            '<th>Model</th>'+
                                            '<th>Float Voltage</th>'+
                                            '<th>g</th>'+
                                        '</tr>'+
                                    '</thead>'+
                                    '<tbody id="blkdata" style="height:600px">'+
                                    '</tbody>'+
                                '</table>')
            for(let i = 0; i < blockPerString; i++){
                
                $('#blkdata').append('<tr>'+
                                        '<th scope="row">'+battery[stringdata][i].blkno+'</th>'+
                                        '<td>'+battery[stringdata][i].barcode+'</td>'+
                                        '<td>'+battery[stringdata][i].model+'</td>'+
                                        '<td>'+battery[stringdata][i].floatvoltage+'</td>'+
                                        '<td>'+battery[stringdata][i].g+'</td>'+
                                    '</tr>')
            }
            

        })




    },
    data() {
        return {
            ption: 1,
            totalItem: 1,
        };
    },
    methods: {
        
    },
}
</script>