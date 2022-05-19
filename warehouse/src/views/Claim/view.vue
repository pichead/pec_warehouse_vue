<template>
<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
            <div id="page_head" class="h4 my-4">รายการเคลม : </div>
            <div class="border p-4 my-3 font-weight-bold">
                <div class="h3 border-bottom pb-3 my-2">Infomation</div>
                <br>
                <div class="row">
                    <div class="col-6">
                        <div class="row">
                            <div class="col-4 my-2">Claim No. : </div>
                            <div class="col-8 my-2">Wrrt002/2022</div>
                            <div class="col-4 my-2">Date : </div>
                            <div class="col-8 my-2">10/05/2022</div>
                            <div class="col-4 my-2">Job No : </div>
                            <div class="col-8 my-2">63/007</div>
                            <div class="col-4 my-2">Invoice No. : </div>
                            <div class="col-8 my-2">Invoice 195_PO.PEC009/2020</div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="row">
                            <div class="col-4 my-2">User Name : </div>
                            <div class="col-8 my-2">TOT</div>
                            <div class="col-4 my-2">Model : </div>
                            <div class="col-8 my-2">UPS12-410MRX</div>
                            <div class="col-4 my-2">Qty. : </div>
                            <div class="col-8 my-2">5</div>
                            <div class="col-4 my-2">MFG Code : </div>
                            <div class="col-8 my-2">0420A</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border p-4 my-3 font-weight-bold">
                <div class="h3 border-bottom pb-3 my-2">File</div>
                <br>
                <div class="row">

                    <div class="col-4 my-2">Claim No. : </div>
                    <div class="col-8 my-2">Wrrt002/2022</div>
                    <div class="col-4 my-2">Date : </div>
                    <div class="col-8 my-2">10/05/2022</div>



                </div>
            </div>
            <div class="border p-4 my-3 font-weight-bold">
                <div class="h3 border-bottom pb-3 my-2">Infomation</div>
                <br>
                <div class="row">
                    <div class="col-6">
                        <div class="row">
                            <div class="col-4 my-2">Claim No. : </div>
                            <div class="col-8 my-2">Wrrt002/2022</div>
                            <div class="col-4 my-2">Date : </div>
                            <div class="col-8 my-2">10/05/2022</div>
                            <div class="col-4 my-2">Job No : </div>
                            <div class="col-8 my-2">63/007</div>
                            <div class="col-4 my-2">Invoice No. : </div>
                            <div class="col-8 my-2">Invoice 195_PO.PEC009/2020</div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="row">
                            <div class="col-4 my-2">User Name : </div>
                            <div class="col-8 my-2">TOT</div>
                            <div class="col-4 my-2">Model : </div>
                            <div class="col-8 my-2">UPS12-410MRX</div>
                            <div class="col-4 my-2">Qty. : </div>
                            <div class="col-8 my-2">5</div>
                            <div class="col-4 my-2">MFG Code : </div>
                            <div class="col-8 my-2">0420A</div>
                        </div>
                    </div>
                </div>
            </div>
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