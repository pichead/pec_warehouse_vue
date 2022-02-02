<template>
    <div class="container">
        <div class="h3 mt-5 font-weight-bold">BATTERY SPECIFICATION</div>
        <div class="row mt-5 mb-4">
            <div class="col-8">
                <input class="form-control" placeholder="Search" style="background: #f4f4f4;"/>
            </div>
            <div class="col-2 pl-0">
                <button class="btn btn-outline-primary col">Clear</button>
            </div>
            <div class="col-2 pl-0">
                <button class="btn btn-primary col ">+ New</button>
            </div>
        </div>
        <div class="col">
            <div id="head" class="row border-top pt-4 pb-3 font-weight-bold">
                <div class="col-1">No.</div>
                <div class="col-3">NAME</div>
                <div class="col-5">REMARK</div>
                <div class="col-3"></div>
            </div>
            <div class="row py-2 font-weight-bold border mb-2 rounded"  style="background: #f4f4f4;">
                <div class="col-1 my-auto">1.</div>
                <div class="col-3 my-auto">TRUE</div>
                <div class="col-5 my-auto">-</div>
                <div class="col-3 d-flex justify-content-center row-hl">
                    <button class="btn btn-primary p-1 col-5 mr-1">Edit</button>
                    <button class="btn btn-danger p-1 col-5 ml-1">Remove</button>
                </div>
            </div>
            <div class="row py-2 font-weight-bold border mb-2 rounded"  style="background: #f4f4f4;">
                <div class="col-1 my-auto">2.</div>
                <div class="col-3 my-auto">CAT</div>
                <div class="col-5 my-auto">-</div>
                <div class="col-3 d-flex justify-content-center row-hl">
                    <button class="btn btn-primary p-1 col-5 mr-1">Edit</button>
                    <button class="btn btn-danger p-1 col-5 ml-1">Remove</button>
                </div>
            </div>
            <div class="row py-2 font-weight-bold border mb-2 rounded"  style="background: #f4f4f4;">
                <div class="col-1 my-auto">3.</div>
                <div class="col-3 my-auto">DTAC</div>
                <div class="col-5 my-auto">-</div>
                <div class="col-3 d-flex justify-content-center row-hl">
                    <button class="btn btn-primary p-1 col-5 mr-1">Edit</button>
                    <button class="btn btn-danger p-1 col-5 ml-1">Remove</button>
                </div>
            </div>
            <div class="row py-2 font-weight-bold border mb-2 rounded"  style="background: #f4f4f4;">
                <div class="col-1 my-auto">4.</div>
                <div class="col-3 my-auto">KBANK</div>
                <div class="col-5 my-auto">-</div>
                <div class="col-3 d-flex justify-content-center row-hl">
                    <button class="btn btn-primary p-1 col-5 mr-1">Edit</button>
                    <button class="btn btn-danger p-1 col-5 ml-1">Remove</button>
                </div>
            </div>
            <div class="row py-2 font-weight-bold border mb-2 rounded"  style="background: #f4f4f4;">
                <div class="col-1 my-auto">5.</div>
                <div class="col-3 my-auto">AOT</div>
                <div class="col-5 my-auto">-</div>
                <div class="col-3 d-flex justify-content-center row-hl">
                    <button class="btn btn-primary p-1 col-5 mr-1">Edit</button>
                    <button class="btn btn-danger p-1 col-5 ml-1">Remove</button>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>

import Sidebar from "../../components/Sidebar.vue";
import router from "@/router";
export default {
    components: { Sidebar },
}
</script>