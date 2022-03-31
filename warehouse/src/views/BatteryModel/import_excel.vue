<template>
<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
        <div class="h3 mt-5 font-weight-bold">บำรุงรักษาแบตเตอรี่</div>
        <div class="row p-4 my-4 border">
            <div class="col-12">
                <div class="row my-2">
                    <div class="col-3">
                        <div class="row">
                            <div class="col-4">Model:</div>
                            <div class="col-8">UPS12-320MRX</div>
                        </div>
                    </div>
                    <div class="col-9">
                        <div class="row">
                            <div class="col-2">Location:</div>
                            <div class="col-8">โกดัง PEC</div>
                        </div>
                    </div>
                </div>
                <div class="row my-2">
                    <div class="col-2 col-form-label">รอบการตรวจถัดไป:</div>
                    <div class="col-10">
                        <div class="row">
                            <div class="col">
                                <div class="row">
                                    <div class="col-1 pt-2">
                                        <input type="radio" name="radio_check_1" checked>
                                    </div>
                                    <div class="col-4 col-form-label">
                                        รายเดือน
                                    </div>
                                    <select class="custom-select col-5">
                                        <option>30วัน</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col">
                                <div class="row">
                                    <div class="col-1 pt-2">
                                        <input type="radio" name="radio_check_1" >
                                    </div>
                                    <div class="col-4 col-form-label">
                                        กำหนดเอง
                                    </div>
                                    <input type="date" class="col-5 form-control" disabled>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="row">
                                    <div class="col-2 pt-2">
                                        <input type="radio" name="radio_check_1" >
                                    </div>
                                    <div class="col-8 col-form-label">
                                        ไม่มี (ส่งให้ลูกค้า)
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row my-2">
                    <div class="col-2 col-form-label">รูปภาพ(Optional):</div>
                    <div class="col-10">
                        <div class="col-4">
                            <button type="button" class="border p-1 col-12 bg-white pr-2 d-flex flex-row-reverse row-hl">
                                <i class="bi bi-camera-fill"></i>
                            </button>
                            <input type="file" class="form-control d-none">
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="row p-4 my-4  border">
            <div class="col-12">
                <div class="row my-2">
                    <div class="col-3">
                        <div class="row">
                            <div class="col-4">Model:</div>
                            <div class="col-8">UPS12-490MRX</div>
                        </div>
                    </div>
                    <div class="col-9">
                        <div class="row">
                            <div class="col-2">Location:</div>
                            <div class="col-8">โกดัง PEC</div>
                        </div>
                    </div>
                </div>
                <div class="row my-2">
                    <div class="col-2 col-form-label">รอบการตรวจถัดไป:</div>
                    <div class="col-10">
                        <div class="row">
                            <div class="col">
                                <div class="row">
                                    <div class="col-1 pt-2">
                                        <input type="radio" name="radio_check_1" >
                                    </div>
                                    <div class="col-4 col-form-label">
                                        รายเดือน
                                    </div>
                                    <select class="custom-select col-5" disabled>
                                        <option>30วัน</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col">
                                <div class="row">
                                    <div class="col-1 pt-2">
                                        <input type="radio" name="radio_check_1" checked>
                                    </div>
                                    <div class="col-4 col-form-label">
                                        กำหนดเอง
                                    </div>
                                    <input type="date" class="col-5 form-control">
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="row">
                                    <div class="col-2 pt-2">
                                        <input type="radio" name="radio_check_1" >
                                    </div>
                                    <div class="col-8 col-form-label">
                                        ไม่มี (ส่งให้ลูกค้า)
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row my-2">
                    <div class="col-2 col-form-label">รูปภาพ(Optional):</div>
                    <div class="col-10">
                        <div class="col-4">
                            <button type="button" class="border p-1 col-12 bg-white pr-2 d-flex flex-row-reverse row-hl">
                                <i class="bi bi-camera-fill"></i>
                            </button>
                            <input type="file" class="form-control d-none">
                        </div>
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