<template>
<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
            <div id="page_head" class="h4 my-4">รายการเคลม : </div>
            <div class="border p-4 my-3 font-weight-bold">
                <div class="h3 border-bottom pb-3 my-2">Infomation</div>
                <br>
                <div class="row">
                    <div class="col-6">
                        <div class="row">
                            <div class="col-4 my-2">Claim No. : </div>
                            <div id="claim_no" class="col-8 my-2"></div>
                            <div class="col-4 my-2">Date : </div>
                            <div id="create_date" class="col-8 my-2"></div>
                            <div class="col-4 my-2">Job No : </div>
                            <div id="job_no" class="col-8 my-2"></div>
                            <div class="col-4 my-2">Invoice No. : </div>
                            <div id="invoice" class="col-8 my-2"></div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="row">
                            <div class="col-4 my-2">User Name : </div>
                            <div id="user_name" class="col-8 my-2"></div>
                            <div class="col-4 my-2">Model : </div>
                            <div id="model" class="col-8 my-2"></div>
                            <div class="col-4 my-2">Qty. : </div>
                            <div id="qty" class="col-8 my-2"></div>
                            <div class="col-4 my-2">MFG Code : </div>
                            <div id="mfg_code" class="col-8 my-2"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border p-4 my-3 font-weight-bold">
                <div class="h3 border-bottom pb-3 my-2">File</div>
                <br>
                <div class="row">

                    <div class="col-2 my-2">ใบเคลม C&D : </div>
                    <div id="file_claim" class="col-10 my-2"></div>
                    <div class="col-2 my-2">รายงานปัญหา : </div>
                    <div id="file_report" class="col-10 my-2"></div>

                </div>
            </div>
            <div class="border p-4 my-3 font-weight-bold">
                <div class="h3 border-bottom pb-3 my-2">สถานะ</div>
                <br>
                <div class="row">
                    
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


        preload()


        async function preload(){
            const cliam = await projectFirestore.collection("Claim").doc(dataid).get()

            $('#claim_no').html(cliam.data().ClaimNo)
            $('#create_date').html(cliam.data().create_date)
            $('#job_no').html(cliam.data().JobNo)
            $('#invoice').html(cliam.data().invoice)
            $('#user_name').html(cliam.data().user_name)
            $('#model').html(cliam.data().model)
            $('#qty').html(cliam.data().qty)
            $('#mfg_code').html(cliam.data().mfg_code)
            $('#model').html(cliam.data().model)


        }

    }
}
</script>