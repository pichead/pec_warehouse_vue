<template>
<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
        <div class="h3 mt-5 font-weight-bold">Battery Barcode : PEC-A2200001</div>
        <div class="row mt-5 mb-4">
            <div class="col-12">
                <input class="form-control" placeholder="Search" style="background: #f4f4f4;"/>
            </div>
        </div>
        <div class="col" >
            <div id="head" class="row border-top pt-4 pb-3 font-weight-bold  text-center">
                <div class="col-2">Location</div>
                <div class="col-2">Status</div>
                <div class="col-2">Date</div>
                <div class="col-2">OCV</div>
                <div class="col-2">Mhos</div>
                <div class="col-2">Mhos%</div>
            </div>
            <div id="specList">

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

        projectFirestore.collection('BatterySpecifications').doc(dataid).get().then( specdata =>{
            $('#model_name').html(specdata.data().series)
        })
        projectFirestore.collection("BatterySpecifications").orderBy("series","asc").get().then((BattSpecList) => {
            var i = 1
            $('#specList').html('')
            BattSpecList.forEach((BattSpec) => {
                // console.log(BattSpec.data())
                if(BattSpec.data().visible == true){
                    if(i < 10){
                        $('#specList').append(
                            '<div class="row py-2 font-weight-bold border mb-2 rounded bg-white"  style="background: #f4f4f4;">'+
                                '<div class="col-2 my-auto text-center">โกดัง PEC</div>'+
                                '<div class="col-2 my-auto text-center">Stock</div>'+
                                '<div class="col-2 my-auto text-center">14-02-22</div>'+
                                '<div class="col-2 my-auto text-center">12.965</div>'+
                                '<div class="col-2 my-auto text-center">2502</div>'+
                                '<div class="col-2 my-auto text-center">100%</div>'+
                            '</div>'
                        )
                        i++
                    }
                    
                }
                
            })
        })

        $("#specList").on("click", ".view-btn", function (e) {
          routeEdit(e.target.value);
        });

        function routeEdit(BattSpecId) {
            router.push({ path: `/BatteryModel/barcodeview/${BattSpecId}` });
        }

    }
}
</script>