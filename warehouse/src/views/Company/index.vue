<template>
<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
        <div class="h3 mt-5 font-weight-bold">Contact Company</div>
        <div class="row mt-5 mb-4">
            <div class="col-8">
                <input class="form-control" placeholder="Search" style="background: #f4f4f4;"/>
            </div>
            <div class="col-2 pl-0">
                <button class="btn btn-outline-primary col">Clear</button>
            </div>
            <div class="col-2 pl-0">
                <a class="btn btn-primary col " type="button" href="/Company/Create">New Contact</a>
                <!-- <button class="btn btn-primary col ">+ New</button> -->
            </div>
        </div>
        <!-- <div class="col" >
            <div id="head" class="row border-top pt-4 pb-3 font-weight-bold">
                <div class="col-1">No.</div>
                <div class="col-3">Project Name</div>
                <div class="col-3">Job No</div>
                <div class="col-2">Create Date</div>
                <div class="col-3"></div>
            </div>
            <div id="data">

            </div>
        </div> -->

        <table class="table">
            <thead>
                <tr id="head" class="text-center">
                    <th>No.</th>
                    <th>Company Name</th>
                    <th>Email</th>
                    <th></th>
                </tr>
            </thead>
            <tbody id="data">
                
            </tbody>
        </table>


        <div class="modal" id="delModal" aria-hidden="true" style="display: none;">
            <div class="modal-dialog">

                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">ยืนยันการลบ</h5>
                        <button class="close" data-dismiss="modal">×</button>
                    </div>
                    <div id="model-del-content" class="modal-body">
                        ยืนยันการลบ ContactCompany นี้หรือไม่
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
        projectFirestore.collection("ContactCompany").get().then((ContactCompanys) => {
            var i = 1
            


            $('#data').html('')
            ContactCompanys.forEach((ContactCompany) => {


                if(ContactCompany.data().visible == true){
                    
                    $('#data').append(
                        '<tr>'+
                            '<td class="text-center">'+i+'</td>'+
                            '<td class="text-center">'+ContactCompany.data().CompanyName+'</td>'+
                            '<td class="text-center">'+ContactCompany.data().Email+'</td>'+
                            '<td>'+
                                '<button class="btn btn-primary p-1 col-5 mr-1 edit-btn" value="'+ContactCompany.id+'">Edit</button>'+
                                '<button class="btn btn-danger p-1 col-5 ml-1 del-btn" value="'+ContactCompany.id+'" data-toggle="modal" data-target="#delModal" >Remove</button>'+
                            '</td>'+
                        '</tr>'
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