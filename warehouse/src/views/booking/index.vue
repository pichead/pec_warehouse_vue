<template>
<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
            <div class="h3 mt-5 font-weight-bold">Battery Booking</div>
            <div class="row mt-5 mb-4">
                <div class="col-10">
                    <input id="searchbar" class="form-control" placeholder="Search" style="background: #f4f4f4;"/>
                </div>
                <div class="col-2 pl-0">
                    <a type="button" href="/Booking/Create" class="btn col-12 btn-success">Create Booking</a>
                </div>

            </div>

            <table id="table" class="table font-weight-bold">
                <thead class="thead-dark">
                    <tr id="head" class="text-center">
                        <th>Booking ID</th>
                        <th>Job No</th>
                        <th>Booking User</th>
                        <th>Confirm User</th>
                        <th>Booking Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="data" class="text-center">
                    <tr>
                        <td>B_65/001</td>
                        <td>65/001</td>
                        <td>พิเชษฐ์ มณีรัตน์</td>
                        <td>มณีรัตน์ พิเชษฐ์</td>
                        <td>01/07/65</td>
                        <td>
                            <button type="button" class="btn btn-info py-0">View</button>
                        </td>
                    </tr>
                    <tr>
                        <td>B_65/002</td>
                        <td>65/002</td>
                        <td>พิเชษฐ์ มณีรัตน์</td>
                        <td>มณีรัตน์ พิเชษฐ์</td>
                        <td>02/07/65</td>
                        <td>
                            <button type="button" class="btn btn-info py-0">View</button>
                        </td>
                    </tr>
                </tbody>
            </table>


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