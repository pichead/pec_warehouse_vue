<template>
<Sidebar />
    <div id="content" style="margin-left: 250px">
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
                <a class="btn btn-primary col " type="button" href="/Battery/Specification">+ New</a>
                <!-- <button class="btn btn-primary col ">+ New</button> -->
            </div>
        </div>
        <div class="col" >
            <div id="head" class="row border-top pt-4 pb-3 font-weight-bold">
                <div class="col-1">No.</div>
                <div class="col-3">BATTERY MODEL</div>
                <div class="col-3">BATTERY BRAND</div>
                <div class="col-2">BATTERY TYPE</div>
                <div class="col-3"></div>
            </div>
            <div id="specList">
            <!-- <div class="row py-2 font-weight-bold border mb-2 rounded"  style="background: #f4f4f4;">
                <div class="col-1 my-auto">1.</div>
                <div class="col-3 my-auto">UPS12-280R MRX</div>
                <div class="col-3 my-auto">C&D Technologies</div>
                <div class="col-2 my-auto">VRLA</div>
                <div class="col-3 d-flex justify-content-center row-hl">
                    <button class="btn btn-primary p-1 col-5 mr-1">Edit</button>
                    <button class="btn btn-danger p-1 col-5 ml-1">Remove</button>
                </div>
            </div> -->
            </div>
        </div>
        <div class="modal" id="delModal" aria-hidden="true" style="display: none;">
            <div class="modal-dialog">

                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">ยืนยันการลบ</h5>
                        <button class="close" data-dismiss="modal">×</button>
                    </div>
                    <div id="model-del-content" class="modal-body">
                        ยืนยันการลบ battery specification นี้หรือไม่
                    </div>
                    <div id="modalfooter" class="modal-footer">
                        
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
        projectFirestore.collection("BatterySpecifications").orderBy("series","asc").get().then((BattSpecList) => {
            var i = 1
            $('#specList').html('')
            BattSpecList.forEach((BattSpec) => {
                // console.log(BattSpec.data())
                if(BattSpec.data().visible == true){
                    
                    $('#specList').append(
                        '<div class="row py-2 font-weight-bold border mb-2 rounded bg-white"  style="background: #f4f4f4;">'+
                            '<div class="col-1 my-auto">'+i+'.</div>'+
                            '<div class="col-3 my-auto">'+BattSpec.data().series+'</div>'+
                            '<div class="col-3 my-auto">'+BattSpec.data().brand+'</div>'+
                            '<div class="col-2 my-auto">'+BattSpec.data().type+'</div>'+
                            '<div class="col-3 d-flex justify-content-center row-hl">'+
                                '<button class="btn btn-primary p-1 col-5 mr-1 edit-btn" value="'+BattSpec.id+'">Edit</button>'+
                                '<button class="btn btn-danger p-1 col-5 ml-1 del-btn" value="'+BattSpec.id+'" data-toggle="modal" data-target="#delModal" >Remove</button>'+
                            '</div>'+
                        '</div>'
                    )
                    i++
                }
                
            })
        })

        $("#specList").on("click", ".edit-btn", function (e) {
          routeEdit(e.target.value);
        });

        function routeEdit(BattSpecId) {
            router.push({ path: `/Battery/Specification/edit/${BattSpecId}` });
        }

        $("#specList").on("click", ".del-btn", function (e) {
            $("#modalfooter").html('<button class="btn btn-secondary del-btn-cf col" data-dismiss="modal">ยกเลิก</button>'+
                                    '<button class="btn btn-danger del-btn-cf col" value="'+e.target.value+'">ลบ</button>'
            )
        });


        $("#delModal").on("click", ".del-btn-cf", function (e) {
          delSpec(e.target.value);
        });

        function delSpec(BattSpecId) {
            projectFirestore.collection('BatterySpecifications').doc(BattSpecId).update({
                visible:false
            }).then(function () {
                location.reload();
            })
        }

    }
}
</script>