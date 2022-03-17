<template>
<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
        <div class="h3 mt-5 font-weight-bold">Battery : Charge / Test</div>
        <div class="row mt-5 mb-4">
            <div class="col-2 font-weight-bold col-form-label">Upload Excel File</div>
            <div class="col-10">
                <input class="" type="file"/>
            </div>
        </div>
        <table class="table table-sm table-hover table-striped col-12">
            <thead>
                <tr class="text-center">
                    <th>#</th>
                    <th>Barcode</th>
                    <th>Model</th>
                    <th>Brand</th>
                    <th>Ref</th>
                    <th>MFG Code</th>
                    <th>Job No.</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>OCV</th>
                    <th>Mhos</th>
                    <th>Mhos%</th>
                </tr>
            </thead>
            <tbody>
                
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


    }
}
</script>