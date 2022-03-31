<template>
<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
        <div class="h3 mt-5 font-weight-bold">บำรุงรักษาแบตเตอรี่</div>
        
        <div class="my-5 p-4 border">
            <div class="row">
                <div class="col-6 mb-4">
                    <div class="row">
                        <div class="col-4 col-form-label font-weight-bold">รอบการตรวจ</div>
                        <div class="col">
                            <select class="form-control" id="">
                                <option value="">30 วัน</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-6 mb-4">
                    <div class="row">
                        <div class="col-4 pl-5 col-form-label font-weight-bold">Model</div>
                        <div class="col">
                            <select class="form-control" id=""></select>
                        </div>
                    </div>
                </div>
                <div class="col-6 mb-4">
                    <div class="row">
                        <div class="col-4 col-form-label font-weight-bold">Location</div>
                        <div class="col">
                            <select class="form-control" id=""></select>
                        </div>
                    </div>
                </div>
                <div class="col-6 mb-4">
                    <div class="row">
                        <div class="col-4 pl-5 col-form-label font-weight-bold">วันที่ชาร์จ</div>
                        <div class="col">
                            <div class="row">
                                <div class="col-6">
                                    <input class="form-control" type="date">
                                </div>
                                <div class="col-6">
                                    <input class="form-control" type="date">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="row">
                        <div class="col-4 col-form-label font-weight-bold">วันที่ชาร์จถัดไป</div>
                        <div class="col">
                            <div class="row">
                                <div class="col-6">
                                    <input class="form-control" type="date">
                                </div>
                                <div class="col-6">
                                    <input class="form-control" type="date">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="row">
                        <div class="col-6"></div>
                        <div class="col-3">
                            <button type="button" class="btn btn-danger col-12">Reset</button>
                        </div>
                        <div class="col-3">
                            <button type="button" class="btn btn-primary col-12">Search</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="p-4 border">
            <table class="col table table-striped">
                <thead class="text-center">
                    <tr class="">
                        <th>No.</th>
                        <th>Model</th>
                        <th>Location</th>
                        <th>วันที่ชาร์จ</th>
                        <th>วันที่ชาร์จถัดไป</th>
                        <th>จำนวน</th>
                        <th>
                            <input type="checkbox">
                        </th>
                    </tr>
                </thead>
                <tbody class="text-center">
                    <tr>
                        <td>1</td>
                        <td>UPS12-150MRX</td>
                        <td>โกดัง PEC</td>
                        <td>20/01/2022</td>
                        <td>19/02/2022</td>
                        <td>30</td>
                        <td>
                            <input type="checkbox">
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>UPS12-320MRX</td>
                        <td>โกดัง PEC</td>
                        <td>20/01/2022</td>
                        <td>19/02/2022</td>
                        <td>40</td>
                        <td>
                            <input type="checkbox">
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>UPS12-320R MRX</td>
                        <td>โกดัง PEC</td>
                        <td>20/01/2022</td>
                        <td>19/02/2022</td>
                        <td>10</td>
                        <td>
                            <input type="checkbox">
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>UPS12-37MRX</td>
                        <td>โกดัง PEC</td>
                        <td>20/01/2022</td>
                        <td>19/02/2022</td>
                        <td>10</td>
                        <td>
                            <input type="checkbox">
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>UPS12-490MRX</td>
                        <td>โกดัง PEC</td>
                        <td>20/01/2022</td>
                        <td>20/04/2022</td>
                        <td>30</td>
                        <td>
                            <input type="checkbox">
                        </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>UPS12-510MRX</td>
                        <td>โกดัง PEC</td>
                        <td>20/01/2022</td>
                        <td>20/04/2022</td>
                        <td>150</td>
                        <td>
                            <input type="checkbox">
                        </td>
                    </tr>
                </tbody>
            </table>
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