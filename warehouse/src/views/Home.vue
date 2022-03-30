
<style>


</style>
<template>

<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="col-10 mx-auto">
          <div class="h3">HOME</div>
          <div id="test_btn" class="btn border">test</div>
          <div id="results"></div>
        </div>
    </div>
</template>

<script>
import { projectFirestore, projectAuth } from "../firebase/config";
import pagination from '../assets/pagination'

import Sidebar from "../components/Sidebar.vue";
import router from "@/router";
import axios from "axios";
// import { response } from 'express';
export default {
    components: { Sidebar },
    mounted() {
        async function main(){
            
        }

        $('#test_btn').on('click',function(){
            main()
        })


        
        
        
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