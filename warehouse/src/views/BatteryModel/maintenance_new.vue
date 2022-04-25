<template>
<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
        <div class="h3 mt-5 font-weight-bold">แบตเตอรี่เข้าใหม่</div>
        
        <div class="my-5 p-4 border">
            <div class="row">
                <div class="col-6 mb-4">
                    <div class="row">
                        <div class="col-4 col-form-label font-weight-bold">Inspection No.</div>
                        <div class="col">
                            <select class="form-control" id=""></select>
                        </div>
                    </div>
                </div>
                <div class="col-6 mb-4">
                    <div class="row">
                        <div class="col-4 pl-5 col-form-label font-weight-bold">Po No.</div>
                        <div class="col">
                            <select class="form-control" id=""></select>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="row">
                        <div class="col-8"></div>
                        <div class="col-4">
                            <div class="row">
                                <div class="col">
                                    <button class="btn btn-danger col" type="button">Reset</button>
                                </div>
                                <div class="col">
                                    <button class="btn btn-primary col" type="button">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-4 border">
            <table class="col table table-striped">
                <colgroup>
                    <col span="1" style="width: 5%;">
                    <col span="1" style="width: 15%;">
                    <col span="1" style="width: 15%;">
                    <col span="1" style="width: 10%;">
                    <col span="1" style="width: 20%;">
                    <col span="1" style="width: 15%;">
                    <col span="1" style="width: 10%;">
                    <col span="1" style="width: 10%;">
                </colgroup>
                <thead class="text-center ">
                    <tr class="">
                        <th>No.</th>
                        <th>Inspection</th>
                        <th>PO No.</th>
                        <th>Job No.</th>
                        <th>Model</th>
                        <th>Location</th>
                        <th>จำนวน</th>
                        <th>จำนวนExport</th>
                    </tr>
                </thead>
                <tbody class="text-center">
                    <tr>
                        <td >1</td>
                        <td>IF_30/2022</td>
                        <td>PEC056/22</td>
                        <td>65/035</td>
                        <td>UPS12-370MRX</td>
                        <td>โกดัง PEC</td>
                        <td>60</td>
                        <td>
                            <input type="number" class="col" value="0">
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>IF_29/2022</td>
                        <td>PEC055/22</td>
                        <td>65/034</td>
                        <td>UPS12-490MRX</td>
                        <td>โกดัง PEC</td>
                        <td>100</td>
                        <td>
                            <input type="number" class="col" value="0">
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>IF_28/2022</td>
                        <td>PEC054/22</td>
                        <td>65/000</td>
                        <td>UPS12-490MRX</td>
                        <td>โกดัง PEC</td>
                        <td>100</td>
                        <td>
                            <input type="number" class="col" value="0">
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>IF_27/2022</td>
                        <td>PEC053/22</td>
                        <td>65/000</td>
                        <td>UPS12-490MRX</td>
                        <td>โกดัง PEC</td>
                        <td>100</td>
                        <td>
                            <input type="number" class="col" value="0">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="row my-4">
            <div class="col-10"></div>
            <div class="col-2">
                <button type="button" class="col-12 btn btn-primary">Download(.xlsx)</button>
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
        
        var batt_data = []
        preload()
        async function preload(){
            const batt = await projectFirestore.collection("Batteries_beta").get()
            batt.forEach((data)=>{
                batt.push(data.data())
            })
            
        }


    }
}
</script>