
<style>


</style>
<template>

<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="col-10 mx-auto">
          <div class="h3">HOME</div>
        </div>
    </div>
</template>

<script>
import { projectFirestore, projectAuth } from "../firebase/config";
import pagination from '../assets/pagination'

import Sidebar from "../components/Sidebar.vue";
import router from "@/router";

export default {
    components: { Sidebar },
    mounted() {
        
        async function predata(){
            const data = await projectFirestore.collection("Batteries").get()
            await log_model()
            await finish_job()
            function log_model(){
                data.forEach((batt)=>{
                    console.log(batt.data().series)
                })
            }
            function finish_job(){
                console.log('finish....')
            }
            
        }
        predata()
        
        
    },
    data() {
        return {
        option: 1,
        totalItem: 1,
        };
    },
    methods: {
        
    },
}
</script>