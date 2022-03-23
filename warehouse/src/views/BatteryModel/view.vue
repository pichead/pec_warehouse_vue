<template>
<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
        <div class="h3 mt-5 font-weight-bold">Battery Model : <span id="model_name"></span></div>
        <div class="row mt-5 mb-4">
            <div class="col-12">
                <input class="form-control" placeholder="Search" style="background: #f4f4f4;"/>
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
        <table id="table_main" class="table">
            <thead class="text-center">
                <th>No.</th>
                <th>Barcode</th>
                <th>Location</th>
                <th>MFG Code</th>
                <th>Status</th>
                <th>Last Update</th>
                <th>Date</th>

            </thead>
            <tbody id="specList">

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
        var url = window.location.pathname;
        var id = url.substring(url.lastIndexOf('/') + 1);
        var dataid = id

        pre_data()

        async function pre_data(){
            const model_batt = await projectFirestore.collection("BatterySpecifications").doc(dataid).get()
            const model_name = model_batt.data().series
            const batt_list = await projectFirestore.collection("Batteries").where('series','==',model_name).get()
            $('#model_name').html(model_name)
            
            await render_data()
            
            let i = 1
            function render_data(){
                
                batt_list.forEach(async function(batt_data){
                    const batt_status_id = batt_data.data().statusItems[batt_data.data().statusItems.length-1].id
                    const batt_status = await projectFirestore.collection("StatusItems").doc(batt_status_id).get() 
                    $('#specList').append(
                        '<tr class="font-weight-bold border rounded bg-white"  style="background: #f4f4f4;">'+
                            '<td >'+i+'.</td>'+
                            '<td>'+batt_data.data().barcode+'</td>'+
                            '<td class="text-center">'+batt_data.data().siteLocations[batt_data.data().siteLocations.length-1].site+'</td>'+
                            '<td class="text-center">'+batt_data.data().mfg_code+'</td>'+
                            '<td class="text-center">'+batt_status.data().name+'</td>'+
                            '<td class="text-center">14-02-22</td>'+
                            '<td class="d-flex justify-content-center row-hl">'+
                                '<button class="btn btn-info p-1 col-12 mr-1 view-btn" value="'+batt_data.id+'">View</button>'+
                            '</td>'+
                        '</tr>'
                    )
                    i++
                    if(i == batt_list.size+1){
                        data_table()

                    }
                })
                


            }

            function data_table(){
                $('#table_main').DataTable({
                    "searching": false,
                    "ordering": false,
                    "pageLength": 10,
                    "info":false,
                    "lengthChange": false
                })
            }

            

        }
        projectFirestore.collection("BatterySpecifications").orderBy("series","asc").get().then((BattSpecList) => {
            var i = 1
            $('#specList').html('')
            BattSpecList.forEach((BattSpec) => {
                // console.log(BattSpec.data())
                if(BattSpec.data().visible == true){
                    if(i < 10){
                        
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