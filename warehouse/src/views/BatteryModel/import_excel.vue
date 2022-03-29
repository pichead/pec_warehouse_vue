<template>
<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
        <div class="h3 mt-5 font-weight-bold">บำรุงรักษาแบตเตอรี่</div>
        <div class="row p-4 mt-5 mb-4 border">
            <div class="col-12">
                <div class="row">
                    <div class="col-4">
                        <div class="row">
                            <div class="col-4 col-form-label">Model:</div>
                            <div class="col-8"></div>
                        </div>
                    </div>
                    <div class="col-8">
                        <div class="row">
                            <div class="col-2 col-form-control">Location:</div>
                            <div class="col-8"></div>
                        </div>
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


    }
}
</script>