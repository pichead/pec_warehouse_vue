<template>
<Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
        <div class="h3 mt-5 font-weight-bold">User</div>
        <div class="row mt-5 mb-4">
            <div class="col-12">
                <input id="searchbar" class="form-control" placeholder="Search" style="background: #f4f4f4;"/>
            </div>

        </div>

        <table id="table" class="table font-weight-bold">
            <thead>
                <tr id="head" class="text-center">
                    <th>No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Activation</th>
                    <th>Permission</th>
                    <th></th>
                </tr>
            </thead>
            <tbody id="data">
                
            </tbody>
        </table>


        <div class="modal" id="editModal" aria-hidden="true" style="display: none;">
            <div class="modal-dialog">

                <div class="modal-content">
                    <div class="modal-header">
                        <h5 id="model_head" class="modal-title"></h5>
                        <button class="close" data-dismiss="modal">×</button>
                    </div>
                    <div id="modal-edit-content" class="modal-body">
                        <div class="row">
                            <div class="col-4 font-weight-bold pt-2">
                                การเปิดใช้งาน
                            </div>
                            <div class="col-8">
                                <select id="modal-edit-option" class="form-control">
                                </select>
                            </div>
                        </div>
                        <br>
                        <!-- <div class="font-weight-bold mb-2">การเข้าถึง</div> -->
                        <!-- <div id="modal-edit-role" class="border p-3 col-10 mx-auto disable" >

                                <div class="col-12 pl-5 font-weight-bold">Warehouse</div>
                                <div class="row">
                                    <input type="checkbox" class="col-1 offset-3 my-1" style="width: 25px; height: 25px"/>
                                    <div class="col-8 my-1">Stock</div>
                                    <input type="checkbox" class="col-1 offset-3 my-1" style="width: 25px; height: 25px"/>
                                    <div class="col-8 my-1">Battery Specifications</div>
                                    <input type="checkbox" class="col-1 offset-3 my-1" style="width: 25px; height: 25px"/>
                                    <div class="col-8 my-1">Project Order</div>
                                    
                                </div>

                                <div class="col-12 mt-2 pl-5 font-weight-bold">Site</div>
                                <div class="row">
                                    <input type="checkbox" class="col-1 offset-3 my-1" style="width: 25px; height: 25px"/>
                                    <div class="col-8 my-1">Site</div>
                                    <input type="checkbox" class="col-1 offset-3 my-1" style="width: 25px; height: 25px"/>
                                    <div class="col-8 my-1">Pm Data</div>
                                </div>

                                <div class="col-12 pl-5 font-weight-bold">User</div>
                                <div class="row">
                                    <input type="checkbox" class="col-1 offset-3 my-1" style="width: 25px; height: 25px"/>
                                    <div class="col-8 my-1">User management</div>                                
                                </div>



                        </div> -->
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
        projectFirestore.collection("Users").get().then((Users) => {
            var i = 1
            $('#data').html('')
            Users.forEach((user) => {
                    if(user.data().admin == true){
                        $('#data').append(
                            '<tr>'+
                                '<td class="text-center">'+i+'</td>'+
                                '<td class="">'+user.data().name+'</td>'+
                                '<td class="">'+user.data().email+'</td>'+
                                '<td class="text-center text-success">เปิดใช้งานแล้ว</td>'+
                                '<td>'+
                                    '<button class="btn btn-warning font-weight-bold col-8 ml-4 edit-btn" value="'+user.id+'" data-toggle="modal" data-target="#editModal" >Edit</button>'+
                                '</td>'+
                            '</tr>'
                        )
                    }
                    else{
                        $('#data').append(
                            '<tr>'+
                                '<td class="text-center">'+i+'</td>'+
                                '<td class="">'+user.data().name+'</td>'+
                                '<td class="">'+user.data().email+'</td>'+
                                '<td class="text-center text-danger">ไม่ได้ใช้งาน</td>'+
                                '<td>'+
                                    '<button class="btn btn-warning font-weight-bold col-8 ml-4 edit-btn" value="'+user.id+'" data-toggle="modal" data-target="#editModal" >Edit</button>'+
                                '</td>'+
                            '</tr>'
                        )
                    }
                    
                    i++
                
            })
        })

        $("#data").on("click", ".edit-btn", async function (e) {
            const user_data = await projectFirestore.collection("Users").doc(e.target.value).get()
            $('#modal-edit-option').html('')

            await render_modal_data()

            function render_modal_data(){

                $('#model_head').text('แก้ไข user : '+ user_data.data().name)
                

                if(user_data.data().admin == true){
                    $('#modal-edit-option').append(
                        '<option value="true" selected>เปิดใช้งาน</option>'+
                        '<option value="false">ปิด</option>'
                    )
                }
                else{
                    $('#modal-edit-option').append(
                        '<option value="true" >เปิดใช้งาน</option>'+
                        '<option value="false" selected>ปิด</option>'
                    )
                }
                
                
                
                $("#modalfooter").html('<button class="btn btn-secondary col" data-dismiss="modal">ยกเลิก</button>'+
                                        '<button class="btn btn-success edit-btn-cf col" value="'+e.target.value+'">บันทึก</button>'
                )
            }
            
        });


        $("#editModal").on("click", ".edit-btn-cf", function (e) {
          editUser(e.target.value);
        });

        function editUser(UserId) {
            const activated = get_act()

            function get_act(){
                if($('#modal-edit-option').find('option:selected').val() == 'true'){
                    return true
                }
                else{
                    return false
                }
            }
            
            projectFirestore.collection('Users').doc(UserId).update({
                admin:activated,
            }).then(function () {
                location.reload();
            })
        }

        $('#searchbar').on('keyup',function(){
            var input, filter, table, tr, td, i, col2, col3, col4;
            input = document.getElementById("searchbar");
            filter = input.value.toUpperCase();
            table = document.getElementById("data");
            tr = table.getElementsByTagName("tr");
            // console.log(tr)
            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td");

                if (td) {
                    col2 = td[1].textContent || td[1].innerText
                    col3 = td[2].textContent || td[2].innerText
                    col4 = td[3].textContent || td[3].innerText                
                    if (col2.toUpperCase().indexOf(filter) > -1 || col3.toUpperCase().indexOf(filter) > -1 || col4.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }       
            }
        })

    }
}
</script>