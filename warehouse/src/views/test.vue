
<style>


</style>
<template>

    <div id="content" style="margin-left: 250px">
        <div class="col-10 mx-auto">
          <div class="h3">{{page}}</div>
          <!-- <div id="test_btn" class="btn border">test</div>
          <div id="results"></div> -->
        </div>
        <br>
        <br>
        <button id="test1">TEST 1</button>
        <br>
        <button id="test2">TEST 2</button>
    </div>
</template>

<script>
import { projectFirestore, projectAuth } from "../firebase/config";
import pagination from '../assets/pagination'

import Sidebar from "../components/Sidebar.vue";
import router from "@/router";
import axios from "axios";

export default {
    components: { Sidebar },
    mounted() {
        
        $('#test1').on('click',()=>{
            test1()
        })

       
        const timestamp = Math.round(new Date().getTime() / 1000);
        async function test1(){

            const get_batt = await projectFirestore.collection("Batteries_beta").get()
            await update()
            await update_log()
            function update(){
                get_batt.forEach((battdata)=>{
                    projectFirestore.collection('Batteries_beta').doc(battdata.id).update({
                        location:'Warehouse',
                        location_id:'U1CHpc83zGdhZhudwQ36',
                        status:'สมบูรณ์',
                        claim_id:"",
                        claim:false,
                        history:[{
                            building:'โกดัง PEC',
                            room:'Zone A',
                            system:"",
                            status:'สมบูรณ์',
                            timestamp:timestamp
                        }]
                    })
                })
            }
            function update_log(){
                console.log('task complete')
            }
        }


    },
    data() {
        return {
            page: 'Test Page',
            totalItem: 1,
        };
    },
    methods: {
        
    },
}
</script>