
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
        
        // sumdata()

        async function sumdata(){
            let data1 = []
            let data2 = []
            let data3 = []


            await get_raw_data()
            await sum_raw_data()
            await return_sum()
            var start
            function get_raw_data(){
                start = new Date;
            

                console.log(1)
                for(let i = 0; i < 40000; i++){
                    data1.push(i)
                }
                for(let i = 40000; i < 80000; i++){
                    data2.push(i)
                }
            }

            function sum_raw_data(){
                console.log(2)

                for(let j = 0;j < data1.length; j++){
                    if (j % 2 === 0){
                        let sum  = data1[j]+data2[j]
                        data3.push(sum)

                    }else{
                        let sum  = data1[j]-data2[j]
                        data3.push(sum)

                    }
                    
                }
            }

            function return_sum(){
              
                console.log(data3)
                console.log((new Date - start) / 1000000 + "m Seconds");
            }

        }
        
        
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