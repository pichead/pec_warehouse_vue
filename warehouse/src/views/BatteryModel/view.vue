<template>
<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
        <div class="h3 mt-5 font-weight-bold">Battery Model : <span id="model_name"></span></div>
        <div class="row mt-5 mb-4">
            <div class="col-12">
                <input class="form-control" placeholder="Search" style="background: #f4f4f4;"/>
            </div>
        </div>
        <div class="modal" id="add-data-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">เพิ่มข้อมูลแบตเตอร์รี่</h5>
                    <button class="close" data-dismiss="modal">×</button>
                </div>
                <div class="modal-body">
                    <div id="modal-body" class="row">
                        <div class="col-12 my-2">Upload file excel เพื่อเพิ่มข้อมูล</div>
                        <input type="file" id="file" class="form-control-file col-12">
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-danger" data-dismiss="modal">Cancel</button>
                    <button class="btn btn-success" data-dismiss="modal">Save</button>
                </div>
                </div>
            </div>
        </div>
        <div class="col" >
            <div id="head" class="row border-top pt-4 pb-3 font-weight-bold  text-center">
                <div class="col-1">No.</div>
                <div class="col-2">Barcode</div>
                <div class="col-2">Location</div>
                <div class="col-2">MFG Code</div>
                <div class="col-1">Status</div>
                <div class="col-2">Last Update</div>
                <div class="col-2">Data</div>
            </div>
            <div id="specList">

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
        var url = window.location.pathname;
        var id = url.substring(url.lastIndexOf('/') + 1);
        var dataid = id

        projectFirestore.collection('BatterySpecifications').doc(dataid).get().then( specdata =>{
            $('#model_name').html(specdata.data().series)
        })
        projectFirestore.collection("BatterySpecifications").orderBy("series","asc").get().then((BattSpecList) => {
            var i = 1
            $('#specList').html('')
            BattSpecList.forEach((BattSpec) => {
                // console.log(BattSpec.data())
                if(BattSpec.data().visible == true){
                    if(i < 10){
                        $('#specList').append(
                            '<div class="row py-2 font-weight-bold border mb-2 rounded bg-white"  style="background: #f4f4f4;">'+
                                '<div class="col-1 my-auto">'+i+'.</div>'+
                                '<div class="col-2 my-auto">PEC-A220000'+i+'</div>'+
                                '<div class="col-2 my-auto text-center">โกดัง PEC</div>'+
                                '<div class="col-2 my-auto text-center">0122A</div>'+
                                '<div class="col-1 my-auto text-center">Stock</div>'+
                                '<div class="col-2 my-auto text-center">14-02-22</div>'+
                                '<div class="col-2 d-flex justify-content-center row-hl">'+
                                    '<button class="btn btn-info p-1 col-5 mr-1 view-btn" value="'+BattSpec.id+'">View</button>'+
                                '</div>'+
                            '</div>'
                        )
                        i++
                    }
                    
                }
                
            })
        })

        $("#specList").on("click", ".view-btn", function (e) {
          routeEdit(e.target.value);
        });

        function routeEdit(BattSpecId) {
            router.push({ path: `/BatteryModel/barcodeview/${BattSpecId}` });
        }

    }
}
</script>