<template>
    <Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
            <div class="h3 mt-5 font-weight-bold">รายการ Inspection Form</div>
            <div class="row mt-5 mb-4">
                <div class="col-9">
                    <input class="form-control" placeholder="Search" style="background: #f4f4f4;"/>
                </div>
                <div class="col-3 pl-0">
                    <a class="btn btn-outline-danger col" href="/Warehouse/InspectionCreate">Create Inspection Form</a>
                </div>


            </div>
            <div class="col">
                <div id="head" class="row border-top pt-4 pb-3 font-weight-bold text-center">
                    <div class="col-2">Inspection No.</div>
                    <div class="col-2">Packing List</div>
                    <div class="col-2">Shipper/Exporter</div>
                    <div class="col-2">Location</div>
                    <div class="col-2">Status</div>
                    <div class="col-2"></div>
                </div>
                <div id="inslist">
                    
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
        projectFirestore.collection("InspectionForm").get().then((inspection) => {
            
                
            $('#inslist').html('')
            inspection.forEach(async function(ins){
                const btn_edit = get_btn()
                const status_name = get_status()
                function get_btn(){
                    if(ins.data().gen_barcode == false){
                        return '<a class="btn btn-warning text-white p-1 mr-2 col-5" href="/Warehouse/InspectionEdit/'+ins.id+'">Edit</a>'
                    }
                    else{
                        return '<a class="btn btn-warning text-white p-1 mr-2 col-5" href="/Warehouse/InspectionView/'+ins.id+'">View</a>'
                    }
                }
                function get_status(){
                    if(ins.data().gen_barcode == false){
                        return '<div class="col-2 my-auto">In progress</div>'
                    }
                    else{
                        return '<div class="col-2 my-auto text-success">Complete</div>'
                    }
                }
                $('#inslist').append('<div class="row py-2 font-weight-bold border mb-2 rounded text-center"  style="background: #f4f4f4;">'+
                        '<div class="col-2 my-auto">'+ins.data().inspection_no+'</div>'+
                        '<div class="col-2 my-auto">'+ins.data().packing_list+'</div>'+
                        '<div class="col-2 my-auto">'+ins.data().shipper_exporter+'</div>'+
                        '<div class="col-2 my-auto">'+ins.data().warehouse_location+'</div>'+
                        status_name+
                        '<div class="col-2 d-flex justify-content-center row-hl">'+
                            btn_edit+
                        '</div>'+
                    '</div>')
            })
        })
    }
}
</script>