<template>
<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
            <div class="h3 mt-5 font-weight-bold">ตั้งค่าบำรุงรักษาแบตเตอรี่</div>
            

            <div class="p-4 border">
                <table class="col table table-striped">
                    <colgroup>
                        <!-- <col span="1" style="width: 5%;">
                        <col span="1" style="width: 15%;">
                        <col span="1" style="width: 20%;">
                        <col span="1" style="width: 20%;">
                        <col span="1" style="width: 15%;">
                        <col span="1" style="width: 15%;">
                        <col span="1" style="width: 10%;"> -->
                    </colgroup>
                    <thead class="text-center">
                        <tr class="">
                            <th>No.</th>
                            <th>Model</th>
                            <th>Charge Cycle(Days)</th>
                            <th>Measurement Cycle(Days)</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody id="table_data" class="text-center">

                    </tbody>
                </table>
            </div>
            <div class="modal" id="editModal" aria-hidden="true" style="display: none;">
            <div class="modal-dialog">

                <div class="modal-content">
                    <div class="modal-header">
                        <h5 id="model_head" class="modal-title"></h5>
                        <button class="close" data-dismiss="modal">×</button>
                    </div>
                    <div id="modal-edit-content" class="modal-body">
                        <div class="row">
                            <div class="col-6 font-weight-bold pt-2">
                                Model
                            </div>
                            <div id="model_modal" class="col-6 col-form-label">
                                
                            </div>
                        </div>
                        <br>
                        <div id="model_data">

                        </div>
                        
                    </div>
                    <div id="modalfooter" class="modal-footer">
                        
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

        
        preload()
        async function preload(){
            const get_all_model = await projectFirestore.collection("BatteryMaintenanceScheduler").orderBy("model", "asc").get()
            var run_number = 0
            get_all_model.forEach((model)=>{
                run_number++
                $('#table_data').append(
                    '<tr>'+
                        '<td>'+
                            run_number+
                        '</td>'+
                        '<td>'+
                            model.data().model+
                        '</td>'+
                        '<td>'+
                            (model.data().charge_cycle/2629743)*30+
                        '</td>'+
                        '<td>'+
                            (model.data().measurement_cycle/2629743)*30+
                        '</td>'+
                        '<td>'+
                            '<button class="btn btn-warning font-weight-bold col-8 ml-4 edit-btn text-white" value="'+model.id+'" data-toggle="modal" data-target="#editModal" >Edit</button>'+
                        '</td>'+
                    '</tr>'
                )

            })
        }



        $("#table_data").on("click", ".edit-btn", async function (e) {
            const model_modal = await projectFirestore.collection("BatteryMaintenanceScheduler").doc(e.target.value).get()
            $('#modal-edit-option').html('')

            await render_modal_data()

            function render_modal_data(){

                $('#model_head').text('รอบการMaintenance : '+ model_modal.data().model)

                $('#model_data').html(
                    '<div class="row">'+
                        '<div class="col-6 font-weight-bold pt-2">Charge Cycle</div>'+
                        '<div class="col-6">'+
                            '<input id="loop_setup_modal" type="number" class="form-control" value="'+(model_modal.data().charge_cycle/2629743)*30+'">'+
                        '</div>'+
                    '</div>'+
                    '<br>'+
                    '<div class="row">'+
                        '<div class="col-6 font-weight-bold pt-2">Maintenance Cycle</div>'+
                        '<div class="col-6">'+
                            '<input id="loop_setup_modal" type="number" class="form-control" value="'+(model_modal.data().measurement_cycle/2629743)*30+'">'+
                        '</div>'+
                    '</div>'
                )

                $('#model_modal').html(model_modal.data().model)
                $("#modalfooter").html('<button class="btn btn-secondary col" data-dismiss="modal">ยกเลิก</button>'+
                                        '<button class="btn btn-success edit-btn-cf col" value="'+e.target.value+'">บันทึก</button>'
                )
            }
            
        });

    }
}
</script>