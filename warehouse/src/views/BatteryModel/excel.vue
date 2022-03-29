<template>
<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
        <div class="h3 mt-5 font-weight-bold">อัปโหลดข้อมูลทางไฟฟ้า</div>
        <div class="row p-4 mt-5 mb-4 border">
            <div class="col-3 col-form-label">
                ข้อมูลไฟฟ้า
            </div>
            <div class="col-9">
                <button id="addfile_btn" type="button" class="btn btn-primary col-3">เลือกไฟล์ (.xlsx,.xls)</button>
            </div>
        </div>
        <div class="row">
            <div class="col-8"></div>
            <div class="col-4">
                <div class="row">
                    <div class="col">
                        <button class="btn btn-danger col-12" type="button">Cancel</button>

                    </div>
                    <div class="col">
                        <button class="btn btn-primary col-12" type="button">Next</button>
                    </div>

                </div>
            </div>
        </div>
        <!-- <table class="table table-sm table-hover table-striped col-12">
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
        </table> -->


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