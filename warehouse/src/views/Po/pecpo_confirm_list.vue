<template>
    <Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
            <div class="h3 mt-5 font-weight-bold">รายการ PEC PO</div>
            <div class="row mt-5 mb-4">
                <div class="col-8">
                    <input class="form-control" placeholder="Search" style="background: #f4f4f4;"/>
                </div>
                <div class="col-2 pl-0">
                    <button class="btn btn-outline-danger col" data-toggle="modal" data-target="#createStatus">สร้างสถานะ PEC PO</button>
                </div>
                <div class="col-2 pl-0">
                    <a class="btn btn-outline-danger col" href="/createPecpo">Create PO</a>
                </div>

                <div class="modal" id="createStatus" style="display: none;" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <button class="close col-12 text-right pt-2 pr-3" data-dismiss="modal">x</button>
                            <div class="col-10 mx-auto p-3">
                                <div class="font-weight-bold h4 border-danger pb-2" style="border-bottom: 4px solid">สร้างสถานะ PEC PO</div>
                                
                                <div class="col-11 mx-auto">
                                    <div class="h5 my-4">สถานะ</div>
                                    <div class="row mb-3">
                                        <div class="col-10 pr-0">
                                            <input class="form-control" placeholder="ชื่อสถานะใหม่" style="background: #f4f4f4; text-align:center;"/>
                                        </div>
                                        <button class="col-2 close pt-1">x</button>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-10 pr-0">
                                            <button class="border form-control rounded text-center" style="background: #f4f4f4;">+ เพิ่ม</button>
                                        </div>
                                        <div class="col-2 close pt-1"></div>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-center row-hl mt-5">
                                    <button class="btn btn-danger p-1 col-3">บันทึก</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col">
                <div id="head" class="row border-top pt-4 pb-3 font-weight-bold text-center">
                    <div class="col">PO NO.</div>
                    <div class="col-2">Company</div>
                    <div class="col">Date</div>
                    <div class="col-2">Validation</div>
                    <div class="col-2">Print</div>
                </div>
                <div id="polist">
                    
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
        const auth = projectAuth;
        const user_email = auth.currentUser.email;
        const user_role = get_user_role()
        console.log(user_role)
        async function get_user_role(){
            const get_user_list = await projectFirestore.collection("Users").get()
            var role_array = []
            await find_user_role()
            await return_role()


            function find_user_role(){
                get_user_list.forEach((user)=>{
                    if(user.data().email == user_email){
                        role_array = user.data().permission
                    }
                })

            }

            function return_role(){
                return role_array
            }
        }
        

        projectFirestore.collection("Po").get().then((Pos) => {
            
                
            $('#polist').html('')
            Pos.forEach(async function(po){   
                // var creatdate = eval((PmData.data().create_date)*1000);
                var crdate = new Date(po.data().createdate*1000);
                var crday = crdate.getDate();
                var crmonth = crdate.getMonth() + 1;
                var cryear = crdate.getFullYear();
                if (crday < 10) {
                    crday = "0" + crday;
                }
                if (crmonth < 10) {
                    crmonth = "0" + crmonth;
                }
                var new_crdate = crday + "-" + crmonth + "-" + cryear;
                
                const company = await projectFirestore.collection('ContactCompany').doc(po.data().company).get()
                $('#polist').append('<div class="row py-2 font-weight-bold border mb-2 rounded text-center"  style="background: #f4f4f4;">'+
                        '<div class="col my-auto">'+po.data().pecpo_no+'/'+po.data().pecpo_year+'</div>'+
                        '<div class="col-2 my-auto">'+company.data().CompanyName+'</div>'+
                        '<div class="col my-auto">'+new_crdate+'</div>'+
                        '<div class="col-2 my-auto">no validation</div>'+
                        '<div class="col-2 d-flex justify-content-center row-hl">'+
                            '<a class="btn btn-warning text-white p-1 mr-2 col-5" href="/editPecpo/'+po.id+'">Edit</a>'+
                            '<a class="btn btn-info p-1 col-5" href="/pecpo_print/'+po.id+'">Print</a>'+
                        '</div>'+
                    '</div>')
            })
        })
    }
}
</script>