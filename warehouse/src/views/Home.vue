
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

export default {
    components: { Sidebar },
    mounted() {
        $('#test_btn').on('click',function(){
            const createRequestObject = {mobile:"0917259488",voucher_hash:"McGm0yaFjj9XpdA1in"}
            console.log(JSON.stringify(createRequestObject))
            const data_sent = {"mobile":"0917259488","voucher_hash":"McGm0yaFjj9XpdA1in"}
            $.ajax({
                type: "POST",
                url: 'https://gift.truemoney.com/campaign/vouchers/McGm0yaFjj9XpdA1in/redeem',
                crossDomain: true,
                data: {mobile:"0917259488",voucher_hash:"McGm0yaFjj9XpdA1in"},
                dataType: 'json'
            });
            // $.ajax({
            //     type: "POST",
            //     crossDomain: true,
            //     headers: {
            //         'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
            //         'Sec-Fetch-Site':'same-origin',
            //         'Content-Type':'application/json',
            //         'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.82 Safari/537.36'
            //     },
            //     url: "https://gift.truemoney.com/campaign/vouchers/McGm0yaFjj9XpdA1in/redeem",
            //     data: "json=" + escape(JSON.stringify(createRequestObject)),
            //     processData: false,
            //     success: function(msg) {
            //         $("#results").append("The result =" + StringifyPretty(msg));
            //     }
            // });
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