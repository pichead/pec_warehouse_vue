
<style>


</style>
<template>

<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
            <div class="text-center h3 my-5">PM DATA</div>
            <input class="form-control mb-4" placeholder="Search" style="background:#f4f4f4;">
                <table class="table text-center">
                    <thead class="thead-dark">
                        <tr>
                            <th>No</th>
                            <th>Group</th>
                            <th>Site</th>
                            <th>Room</th>
                            <th>System</th>
                            <th>Create Date</th>
                            <th>PM Date</th>
                            <th>Last Update</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody id="data">
                        <!-- <tr>
                            <td>1</td>
                            <td>1633587160</td>
                            <td>AOT</td>
                            <td>AOB</td>
                            <td>UPS_SS4-6</td>
                            <td>14/10/2021</td>
                            <td>5/10/2021</td>
                            <td>14/10/2021</td>
                            <td>
                                <button class="btn py-0 btn-info" type="button">edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>1633995516</td>
                            <td>AOT</td>
                            <td>AOB</td>
                            <td>UPS_SS4-6</td>
                            <td>15/5/2021</td>
                            <td>6/5/2021</td>
                            <td>15/5/2021</td>
                            <td>
                                <button class="btn py-0 btn-info" type="button">edit</button>
                            </td>
                        </tr> -->
                        
                    </tbody>
                </table>
        </div>
    </div>
</template>

<script>
import { projectFirestore, projectAuth } from "../../firebase/config";
import pagination from '../../assets/pagination'

import Sidebar from "../../components/Sidebar.vue";
import router from "@/router";
export default {
    components: { Sidebar },
    mounted() {
        projectFirestore.collection("PmGroup").orderBy("last_update", "desc").get().then((PmData) => {
            $('#data').html('')
            var start_no = 1
            PmData.forEach((pm) => { 
                var creatdate = eval((pm.data().create_date)*1000);
                var crdate = new Date(creatdate);
                var crday = crdate.getDate();
                var crmonth = crdate.getMonth() + 1;
                var cryear = crdate.getFullYear();
                if (crday < 10) {
                    crday = "0" + crday;
                }
                if (crmonth < 10) {
                    crmonth = "0" + crmonth;
                }
                var new_rcdate = crday + "-" + crmonth + "-" + cryear;

                var lastdate = eval((pm.data().last_update)*1000);
                var lsdate = new Date(lastdate);
                var lsday = lsdate.getDate();
                var lsmonth = lsdate.getMonth() + 1;
                var lsyear = lsdate.getFullYear();
                if (lsday < 10) {
                    lsday = "0" + lsday;
                }
                if (lsmonth < 10) {
                    lsmonth = "0" + lsmonth;
                }
                var new_lsdate = lsday + "-" + lsmonth + "-" + lsyear;

                $('#data').append('<tr>'+
                            '<td>'+start_no+'</td>'+
                            '<td>'+pm.data().group+'</td>'+
                            '<td>'+pm.data().site+'</td>'+
                            '<td>'+pm.data().room+'</td>'+
                            '<td>'+pm.data().system+'</td>'+
                            '<td>'+new_rcdate+'</td>'+
                            '<td>'+pm.data().pm_date+'</td>'+
                            '<td>'+new_lsdate+'</td>'+
                            '<td>'+
                                '<button class="btn py-0 btn-info edit-btn" type="button" value="'+pm.id+'">edit</button>'+
                            '</td>'+
                        '</tr>')
                start_no++
            })
        })

        $("#data").on("click", ".edit-btn", function (e) {
        //   routeEdit(e.target.value);
          router.push({ path: `/pmEdit/${e.target.value}` });
        });
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