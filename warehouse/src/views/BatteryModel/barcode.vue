<template>
<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
        <div class="h3 my-5 font-weight-bold">Battery Barcode : PEC-A2200001</div>

        <table id="table_main" class="table">
            <thead class="text-center">
                <th>Location</th>
                <th>Status</th>
                <th>Date</th>
                <th>OCV</th>
                <th>Mhos</th>
                <th>Mhos%</th>
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
        projectFirestore.collection('BatterySpecifications').doc(dataid).get().then( specdata =>{
                $('#model_name').html(specdata.data().series)
            })
        pre_data()

        async function pre_data(){
            

            const batt_data = await projectFirestore.collection("Batteries").doc(dataid).get()
            let i =1
            if(batt_data.data().warehouse_measurements){
                $('#specList').append(
                        '<tr class="font-weight-bold border my-2 rounded bg-white"  style="background: #f4f4f4;">'+
                            '<td class="my-auto text-center">โกดัง PEC</td>'+
                            '<td class="my-auto text-center">Stock</td>'+
                            '<td class="my-auto text-center">14-02-22</td>'+
                            '<td class="my-auto text-center">12.965</td>'+
                            '<td class="my-auto text-center">2502</td>'+
                            '<td class="my-auto text-center">100%</td>'+
                        '</tr>'
                    )
                    i++
            }
            await data_table()

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

        $("#specList").on("click", ".view-btn", function (e) {
          routeEdit(e.target.value);
        });

        function routeEdit(BattSpecId) {
            router.push({ path: `/BatteryModel/barcodeview/${BattSpecId}` });
        }

    }
}
</script>