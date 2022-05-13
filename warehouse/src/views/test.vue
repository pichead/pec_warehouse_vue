
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
        const obj = [
            {a:1,b:2},
            {a:2,b:3},
            {a:1,b:2},
            {a:3,b:3},
            {a:2,b:3},
            {a:2,b:2},
            {a:1,b:2},
            {a:1,b:4},
        ]


        async function test_fun1(){
            var result_data = []
            await test1()
            await result()

            function test1(){
                for(let i = 0; i < obj.length; i++){
                    
                    if(result_data.length == 0){
                        result_data.push(obj[i])
                    }
                    else{
                        const count = check()
                        function check(){
                            for(let j = 0; j < result_data.length; j++){
                                if(result_data[j].a == obj[i].a && result_data[j].b == obj[i].b){
                                    return false
                                }
                                if(j == result_data.length - 1){
                                    if(result_data[j].a == obj[i].a && result_data[j].b == obj[i].b){
                                        return false
                                    }
                                    else{
                                        return true
                                    }  
                                }
                            }
                        }
                        if(count == true){
                            result_data.push(obj[i])
                        }

                    }
                }
            }

            function result(){
                console.log('obj : ',obj)
                console.log('result : ',result_data)
            }

        }




        $('#test1').on('click',function(){
            console.log('test....')
            test_fun1()
        })

        

        async function test_fun2(){
            var data = []
            var row = 5
            

            await get_data1()
            await get_data2()
            await res()

            function get_data1(){
                for(let i = 0; i < row; i++){
                    data.push([])
                }
            }
            function get_data2(){
                for(let i = 0; i < data.length; i++){
                    if(i < 5){
                        data[i].push(i+1)
                    }
                }
            }
            function res(){
                console.log('res : ',data)
                
            }
        }




        $('#test2').on('click',function(){
            console.log('test....')
            test_fun2()
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