<template>
<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
        <div class="h3 mt-5 font-weight-bold">Battery Model </div>
        <div class="row mt-5 mb-4">
            <div class="col-10">
                <input class="form-control" placeholder="Search" style="background: #f4f4f4;"/>
            </div>
            <div class="col-2 pl-0">
                <a class="btn btn-primary col" type="button" href="/BatteryModel/excelUpload">เพิ่มข้อมูล</a>
                <!-- <button class="btn btn-primary col" type="button" data-toggle="modal" data-target="#add-data-modal" >เพิ่มข้อมูล</button> -->
            </div>
        </div>
        <div class="modal" id="add-data-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">เพิ่มข้อมูลแบตเตอร์รี่</h5>
                    <button class="close" data-dismiss="modal">×</button>
                </div>
                <div class="modal-body">
                    <div id="modal-body" class="row">
                        <div class="col-12 my-2">Upload file excel เพื่อเพิ่มข้อมูล</div>
                        <input type="file" id="file" class="form-control-file col-12">
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-danger" data-dismiss="modal">Cancel</button>
                    <button class="btn btn-success" data-dismiss="modal">Save</button>
                </div>
                </div>
            </div>
        </div>
        <div class="col" >
            <div id="head" class="row border-top pt-4 pb-3 font-weight-bold  text-center">
                <div class="col-2">No.</div>
                <div class="col-4">Battery Model</div>
                <div class="col-4">total</div>
                <div class="col-2"></div>
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

        preload()
        async function preload(){
            var batt_model_arr = []
            var none_model = 0
            const batt_specs = await projectFirestore.collection("BatterySpecifications").where('visible','==',true).orderBy("series","asc").get()
            const batt_list = await projectFirestore.collection("Batteries").get()
            await get_batt_model()
            await get_amount_model()
            await render_batt_model()


            function get_batt_model(){
                let i = 0
                batt_specs.forEach((batt_spec)=>{
                    i++
                    batt_model_arr.push({
                        row:i,
                        id:batt_spec.id,
                        model:batt_spec.data().series,
                        total:0
                    })
                })
            }
            function get_amount_model(){
                batt_list.forEach((batt_data)=>{
                    none_model = none_model + 1 
                    for(let i = 0; i < batt_model_arr.length; i++){
                        if(batt_data.data().series == batt_model_arr[i].model){
                            batt_model_arr[i].total = batt_model_arr[i].total+1
                        }
                    }
                })
            }
            function render_batt_model(){
                console.log('batt_model_arr : ',batt_model_arr)
                console.log('none_model : ',none_model)

                for(let i = 0; i < batt_model_arr.length; i++){
                    $('#specList').append(
                        '<div class="row py-2 font-weight-bold border mb-2 rounded bg-white"  style="background: #f4f4f4;">'+
                            '<div class="col-2 my-auto">'+batt_model_arr[i].row+'.</div>'+
                            '<div class="col-4 my-auto">'+batt_model_arr[i].model+'</div>'+
                            '<div class="col-4 my-auto text-center">'+batt_model_arr[i].total+'</div>'+
                            '<div class="col-2 d-flex justify-content-center row-hl">'+
                                '<button class="btn btn-info p-1 col-5 mr-1 view-btn" value="'+batt_model_arr[i].id+'">View</button>'+
                            '</div>'+
                        '</div>'
                    )
                }

            }
        }

        $("#specList").on("click", ".view-btn", function (e) {
          routeEdit(e.target.value);
        });

        function routeEdit(BattSpecId) {
            router.push({ path: `/BatteryModel/modelview/${BattSpecId}` });
        }

    }
}
</script>