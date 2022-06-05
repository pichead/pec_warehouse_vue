
<style>


</style>
<template>

    <div id="content" style="margin-left: 250px">
        <div class="col-10 mx-auto">
          <div class="h3">Test Page</div>
          <!-- <div id="test_btn" class="btn border">test</div>
          <div id="results"></div> -->
        </div>
        <br>
        <br>
        <button id="test1">TEST 1</button>
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
        
        test2()

        function test2(){
            var x = 10
            console.log('data ',x,' mama')
        }

        // test()
        // const timestamp = Math.round(new Date().getTime() / 1000);
        // async function test(){
        //     const get_batt = await projectFirestore.collection("Batteries_beta").get()

        //     await update()

        //     function update(){
        //         get_batt.forEach((battdata)=>{

        //             projectFirestore.collection('Batteries_beta').doc(battdata.id).update({
        //                 location:'Warehouse',
        //                 location_id:'U1CHpc83zGdhZhudwQ36',
        //                 status:'Preventive Maintenance',
        //                 history:[{
        //                     building:'โกดัง PEC',
        //                     room:'Zone A',
        //                     system:"",
        //                     status:'Preventive Maintenance',
        //                     timestamp:timestamp
        //                 }]
        //             })
        //         })
        //     }
        // }


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