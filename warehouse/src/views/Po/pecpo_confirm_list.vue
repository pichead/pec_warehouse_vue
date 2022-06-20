<template>
    <Sidebar />
    <div id="content" style="margin-left: 250px">
        <div class="container">
            <div class="h3 mt-5 font-weight-bold">รายการ PEC PO</div>
            <div class="row mt-5 mb-4">
                <div class="col-10">
                    <input class="form-control" placeholder="Search" style="background: #f4f4f4;"/>
                </div>
                <!-- <div class="col-2 pl-0">
                    <button class="btn btn-outline-danger col" data-toggle="modal" data-target="#createStatus">สร้างสถานะ PEC PO</button>
                </div> -->
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
                    <div class="col">Date</div>
                    <div class="col-2">Validation</div>
                    <div class="col-2">Validation Manager</div>
                    <div class="col-3">Validation General Manager</div>
                    <div class="col-2"></div>
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
    beforeCreate(){
        pre_render()
        async function pre_render(){
            const auth = projectAuth;
            const user_email = auth.currentUser.email;
            const get_user_list = await projectFirestore.collection("Users").where("email", '==', user_email).get()
            var user_permission

            await get_permission()
            await get_render_page()

            function get_permission(){
                get_user_list.forEach((user)=>{
                    user_permission = user.data().permission
                })
            }
            function get_render_page(){
                if(user_permission && user_permission.includes('confirm_pecpo_manager') || user_permission.includes('confirm_pecpo_general_manager')){

                }
                else{
                    
                    router.push({ 
                        name: 'Home',
                        params: { mserror: true} 
                    })
                }
            }
            // const user_permission = await get_user_list.data().email
            // console.log(get_user_list.data())
                
        }
        
    },
    mounted() {
        

        projectFirestore.collection("Po").orderBy('createdate','desc').get().then((Pos) => {
            
                
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
                const view_btn = get_view_btn()
                const approve_status = get_approve_status()
                const manager_approve_status = get_manager_approve_status()
                const general_mangager_approve_status = get_generalmanager_approve_status()

                function get_view_btn(){
                    if(po.data().approve_status == true){
                        return '<button class="btn btn-warning p-1 mr-2 col-5"><a class=" text-white text-decoration-none" href="/viewPecpo/'+po.id+'">View</a></button>'
                    }
                    else{
                        return '<button class="btn btn-warning text-white p-1 mr-2 col-5" disabled>View</button>'
                    }
                }
                function get_approve_status(){
                    if(po.data().approve_status == true){
                        return '<div class="col-2 my-auto text-success">'+po.data().approve_status+'</div>'
                    }
                    else{
                        return '<div class="col-2 my-auto text-danger">'+po.data().approve_status+'</div>'
                    }                                                                                                  
                }
                function get_manager_approve_status(){
                    if(po.data().manager_approve_status == true){
                        return '<div class="col-2 my-auto text-success">'+po.data().manager_approve_status+'</div>'
                    }
                    else{
                        return '<div class="col-2 my-auto text-danger">'+po.data().manager_approve_status+'</div>'
                    }
                }
                function get_generalmanager_approve_status(){
                    if(po.data().generalmanager_approve_status == true){
                        return '<div class="col-3 my-auto text-success">'+po.data().generalmanager_approve_status+'</div>'
                    }
                    else{
                        return '<div class="col-3 my-auto text-danger">'+po.data().generalmanager_approve_status+'</div>'
                    }
                }

                $('#polist').append('<div class="row py-2 font-weight-bold border mb-2 rounded text-center"  style="background: #f4f4f4;">'+
                        '<div class="col my-auto">'+po.data().pecpo_no+'/'+po.data().pecpo_year+'</div>'+
                        '<div class="col my-auto">'+new_crdate+'</div>'+
                        approve_status+
                        manager_approve_status+
                        general_mangager_approve_status+
                        '<div class="col-2 d-flex justify-content-center row-hl">'+
                            view_btn +
                            '<a class="btn btn-info p-1 col-5" href="/pecpo_print/'+po.id+'">Print</a>'+
                        '</div>'+
                    '</div>')
            })
        })
    }
}
</script>