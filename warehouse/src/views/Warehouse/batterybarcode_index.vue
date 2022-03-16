<template>
    <Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
            <div class="h3 mt-5 font-weight-bold">Battery Barcode</div>
            <div class="row mt-5 mb-4">
                <div class="col-12">
                    <input class="form-control" placeholder="Search" style="background: #f4f4f4;"/>
                </div>
            </div>
            <div class="col">
                <div id="head" class="row border-top pt-4 pb-3 font-weight-bold text-center">
                    <div class="col">Inspection No.</div>
                    <div class="col-2">Packing List</div>
                    <div class="col">Location</div>
                    <div class="col-2">Barcode Register</div>
                    <div class="col-2"></div>
                </div>
                <div id="inslist">
                    
                </div>
                <div class="modal" id="data_modal">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Battery Barcode</h5>
                            <button class="close" data-dismiss="modal">×</button>
                        </div>
                        <div class="modal-body">
                            <table class="table">
                                <thead class="thead-dark text-center" >
                                    <tr>
                                        <th rowspan="2" style="vertical-align: middle;">#</th>
                                        <th rowspan="2" style="vertical-align: middle;">PO No</th>
                                        <th rowspan="2" style="vertical-align: middle;">Job No</th>
                                        <th rowspan="2" style="vertical-align: middle;">Model</th>
                                        <th rowspan="2" style="vertical-align: middle;">Qty</th>
                                        <th colspan="2" style="vertical-align: middle;">Barcode</th>
                                    </tr>
                                    <tr>
                                        <th>Start</th>
                                        <th>End</th>
                                    </tr>
                                </thead>
                                <tbody id="modal_body">

                                </tbody>
                            </table>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-secondary" data-dismiss="modal">Close</button>
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
        projectFirestore.collection("InspectionForm").where("gen_barcode", '==', true).get().then((inspection) => {
            
                
            $('#inslist').html('')
            inspection.forEach(async function(ins){
                const total_barcode = get_total_barcode()

                function get_total_barcode(){
                    let total = 0
                    for(let i = 0; i < ins.data().gen_barcode_data.length; i++){
                        total = total + ins.data().gen_barcode_data[i].qty
                    }
                    return total
                }

                $('#inslist').append('<div class="row py-2 font-weight-bold border mb-2 rounded text-center"  style="background: #f4f4f4;">'+
                        '<div class="col my-auto">'+ins.data().inspection_no+'</div>'+
                        '<div class="col-2 my-auto">'+ins.data().packing_list+'</div>'+
                        '<div class="col my-auto">'+ins.data().warehouse_location+'</div>'+
                        '<div class="col-2 my-auto">'+total_barcode+'</div>'+
                        '<div class="col-2 d-flex justify-content-center row-hl">'+
                            '<button type="button" class="btn btn-primary modal-data p-1 mr-2 col-5" data-toggle="modal" data-target="#data_modal" value="'+ins.id+'" >View</button>'+
                        '</div>'+
                    '</div>')
            })
        })

        $('#inslist').on('click','.modal-data',async function(){
            $('#modal_body').html('')
            const btn_id = $(this).val()
            const modal_inspection = await projectFirestore.collection("InspectionForm").doc(btn_id).get()
            console.log(modal_inspection.data())
            for(let i = 0; i < modal_inspection.data().gen_barcode_data.length; i++){
                $('#modal_body').append(
                    '<tr>'+
                        '<td class="">'+(i+1)+'</td>'+
                        '<td class="">'+modal_inspection.data().gen_barcode_data[i].poNo+'</td>'+
                        '<td class="">'+modal_inspection.data().gen_barcode_data[i].jobNo+'</td>'+
                        '<td class="">'+modal_inspection.data().gen_barcode_data[i].series+'</td>'+
                        '<td class="">'+modal_inspection.data().gen_barcode_data[i].qty+'</td>'+
                        '<td class="">'+modal_inspection.data().gen_barcode_data[i].barcodeStart+'</td>'+
                        '<td class="">'+modal_inspection.data().gen_barcode_data[i].barcodeEnd+'</td>'+
                    '</tr>'
                )
            }
            
        })
    }
}
</script>