<template>
<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
            <div class="h3 mt-5 font-weight-bold">ลงทะเบียนสินค้าเข้าคลัง</div>
            <div class="border my-5 bg-white">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="p-4 h-100">
                            <div class="form-group row">
                                <label class="col-4 col-form-label">ลักษณะสินค้า</label >
                                <div class="col-8">
                                    <select class="form-control" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-4 col-form-label">Invoice No.</label >
                                <div class="col-8">
                                    <select class="form-control" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-4 col-form-label">PEC PO</label >
                                <div class="col-8">
                                    <select id="PECPO" class="form-control">
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-4 col-form-label">Lot No.</label >
                                <div class="col-8">
                                    <select id="Lot" class="form-control">

                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-4 col-form-label">Job No.</label >
                                <div class="col-8">
                                    <select class="form-control" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row mb-0">
                                <label class="col-4 col-form-label">Code</label >
                                <div class="col-8">
                                    <select class="form-control" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-6" >
                        <div class="p-4">
                            <div class="form-group row">
                                <label class="col-4 col-form-label">ประเภทสินค้า</label >
                                <div class="col-8">
                                    <select class="form-control" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-4 col-form-label">ยี่ห้อ</label >
                                <div class="col-8">
                                    <input id="brand" class="form-control" disabled/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-4 col-form-label">รุ่น</label >
                                <div class="col-8">
                                    <input id="model" class="form-control" disabled/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-4 col-form-label">สถานะสินค้า</label >
                                <div class="col-8">
                                    <select class="form-control" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-4 col-form-label">สถานที่</label >
                                <div class="col-8">
                                    <select class="form-control" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row mb-0">
                                <label class="col-4 col-form-label">ตำแหน่ง</label >
                                <div class="col-8">
                                    <select class="form-control" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-info py-2 text-center" style="color:white;">Total :</div>
            <div class="border">
                <div class="row p-4">
                    <div class="col-2 text-center pt-2">Barcode</div>
                    <div class="col-10 row">
                        <div class="col-3 mb-3">
                            <input type="text" class="form-control" placeholder="Scan Barcode">
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center row-hl my-5">
                <button class="btn btn-info p-1 col-1 ml-1">สร้าง</button>
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
        projectFirestore.collection("Po").get().then((Pos) => {
            $('#PECPO').append('<option selected disabled>เลือก PEC PO</option>')
            $('#Lot').attr('disabled',true)
            $('#Lot').html('<option selected disabled>เลือก Lot</option>')
            
            Pos.forEach((po) => {   
                $('#PECPO').append('<option value="'+po.id+'" >'+po.data().pec_po+'</option>')
            })
        })

        $('#PECPO').on('change', function(){
            $('#Lot').html('<option selected disabled>เลือก Lot</option>')
            $('#Lot').attr('disabled',false)
            $('#brand').val('')
            $('#model').val('')
            const po_id = $(this).val()
            projectFirestore.collection("Po").doc(po_id).get().then((po) => {
                for(let i = 0; i < po.data().lot.length; i++){
                    $('#Lot').append('<option value="'+i+'" data-brand="'+po.data().lot[i].companyname+'" data-serieid="'+po.data().lot[i].serieid+'" >'+(i+1)+'</option>')
                }
                
            })
            
        })
        $('#Lot').on('change', function(){                
            const serie_id = $(this).find('option:selected').data('serieid')
            projectFirestore.collection("BatterySpecifications").doc(serie_id).get().then((serie) => {
                $('#brand').val(serie.data().brand)
                $('#model').val(serie.data().series)

                
            })
        })
        
    }
}
</script>