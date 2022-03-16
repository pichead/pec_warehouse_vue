

<template>
    <section class="bg-dark p-4 " style="width: 250px;position:fixed;z-index: 1000;left: 0;top: 0;border-right: 1px solid #162636;height: 100%;color:white">
        <div class="h4 pb-4 pt-3 font-weight-bold" style="border-bottom: 4px solid white;">
            <a class="text-white" style="text-decoration:none" href="/home">
                PEC Warehouse 0.3.50
            </a>
        </div>
        <br>
         <ul class="navbar-nav">
            <li id="" class="nav-item  py-2 pl-3" >
                <a class="nav-link text-light font-weight-bold" href="/Project">Job No</a>
            </li>
            <li id="" class="nav-item   py-2  pl-3" >
                <a id="order_booking" class="nav-link text-light font-weight-bold"  data-toggle="collapse" data-target=".Order-collapse" >Order<span id="alarm_order" class="d-none mx-2 p-2  badge badge-danger"></span><i id="sign-down" class="bi bi-caret-down "></i><i id="sign-right" class="bi bi-caret-right d-none"></i></a>
                <ul class="collapse pl-3 Order-collapse">
                    <li class="nav-item" >
                        <a class="nav-link text-light pl-0 font-weight-bold" href="/Order_N_Booking"><i class="bi bi-caret-right-fill"></i>International Order<span id="alarm_ordersheet" class=" mx-2 p-2 d-none badge badge-danger"></span></a>
                    </li>
                    <li class="nav-item" >
                        <a class="nav-link text-light pl-0 font-weight-bold" href="/Order_check/Wh"><i class="bi bi-caret-right-fill"></i>Warehouse Order<span id="alarm_order_wh" class=" mx-2 p-2 d-none badge badge-danger"></span></a>
                    </li>
                </ul>
            </li>
            <li id="" class="nav-item    py-2 pl-3" >
                <a class="nav-link text-light font-weight-bold" href="/BatteryModel">Battery</a>
            </li>
            <li id="" class="nav-item    py-2 pl-3" >
                <a class="nav-link text-light font-weight-bold" href="/ContactCompany">Contact Company</a>
            </li>
            <li id="" class="nav-item   py-2 pl-3" >
                <a class="nav-link text-light font-weight-bold" href="/Battery/pecpoList">PEC PO</a>
            </li>
            <li id="" class="nav-item   py-2 pl-3" >
                <a class="nav-link text-light font-weight-bold" href="/pecpo_confirm_list">PEC PO Confirm</a>
            </li>
            <li id="" class="nav-item   py-2  pl-3" >
                <a id="warehouse" class="nav-link text-light font-weight-bold"  data-toggle="collapse" data-target=".warehouse-collapse" >Warehouse<span id="alarm_warehouse" class="d-none mx-2 p-2  badge badge-danger"></span><i id="sign-down-wh" class="bi bi-caret-down "></i><i id="sign-right-wh" class="bi bi-caret-right d-none"></i></a>
                <ul class="collapse pl-3 warehouse-collapse">
                    <li class="nav-item" >
                        <a class="nav-link text-light pl-0 font-weight-bold" href="/Warehouse/InspectionIndex"><i class="bi bi-caret-right-fill"></i>Inspection Form<span id="" class=" mx-2 p-2 d-none badge badge-danger"></span></a>
                    </li>
                    <li class="nav-item" >
                        <a class="nav-link text-light pl-0 font-weight-bold" href="/Warehouse/registerbatteryIndex"><i class="bi bi-caret-right-fill"></i>Register Battery<span id="" class=" mx-2 p-2 d-none badge badge-danger"></span></a>
                    </li>
                    <li class="nav-item" >
                        <a class="nav-link text-light pl-0 font-weight-bold" href="/Warehouse/batterybarcodeIndex"><i class="bi bi-caret-right-fill"></i>Battery Barcode<span id="" class=" mx-2 p-2 d-none badge badge-danger"></span></a>
                    </li>
                </ul>
            </li>
            
            <!-- <li id="" class="nav-item   py-2 pl-3"  >
                <a class="nav-link text-light font-weight-bold" href="/Battery/batterylist">Stock</a>
            </li> -->
            <!-- <li id="" class="nav-item   py-2 pl-3" >
                <a class="nav-link text-light font-weight-bold" href="/Battery/index">BATTERY SPECIFICATION</a>
            </li> -->
            <!-- <li id="" class="nav-item  py-2 pl-3" >
                <a class="nav-link text-light font-weight-bold" href="/Sites">Sites</a>
            </li> -->
            <!-- <li id="" class="nav-item  py-2 pl-3" >
                <a class="nav-link text-light font-weight-bold" href="/pmIndex">PM Data</a>
            </li> -->
            <li id="" class="nav-item    py-2 pl-3" >
                <a class="nav-link text-light font-weight-bold" href="/user">User</a>
            </li>
         </ul>
         <div class="btn-group mt-5  col-12 px-0">
            <button id="currentuser" type="button" class="btn py-1 btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            </button>
            <div class="dropdown-menu" style="width:212px">
                <a id="nav-admin" class="dropdown-item d-none" href="/user/adminedit">จัดการผู้ดูแลระบบ</a>
                <a class="dropdown-item" href="#" @click="resetpassword" >รีเซ็ตรหัสผ่าน</a>
                <div class="dropdown-divider"></div>
                <a @click="handleClick" href="#" class="dropdown-item mb-0">ออกจากระบบ</a>
            </div>
        </div>
    </section>


</template>

<script>

import { useRouter } from "vue-router";
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
import { projectAuth,projectFirestore } from '../firebase/config'

export default {
    mounted() {
        $("#order_booking").click(function(){
            $("#sign-down").toggleClass("d-none");
            $("#sign-right").toggleClass("d-none");

        });
        async function ordersheet_alarm(){
            let alert = 0
            let alert_order = 0
            const ordersheets = await projectFirestore.collection("Projects").where("wh_validate", '==', true).where('visible','==',true).get()
            const order_wh = await projectFirestore.collection("Projects").where("wh_validate", '==', false).where('visible','==',true).get()
            const sumAlert = await sum_alert()
            await render_alert()

            function sum_alert(){
                
                ordersheets.forEach((order) => {
                    if(order.data().inter_validate == false || order.data().new_inter_validate == false){
                        alert_order = alert_order+1
                        alert = alert+1
                    }
                })
                
                if(order_wh.size > 0){
                    alert = alert + order_wh.size
                }
                return alert

                
            }

            function render_alert(){
                if(sumAlert > 0){
                    $('#alarm_order').text(sumAlert)
                    $('#alarm_order').removeClass('d-none')
                    if(alert_order > 0){
                        $('#alarm_ordersheet').text(alert_order)
                        $('#alarm_ordersheet').removeClass('d-none')
                    }
                    if(order_wh.size > 0){
                        $('#alarm_order_wh').text(order_wh.size)
                        $('#alarm_order_wh').removeClass('d-none')
                    }
                }
                
            }

            

            
        }
        ordersheet_alarm()
        
    },
    setup(){


        

        const {logout, error} = useLogout()
        // const { user } = getUser()
        const router = useRouter();

        const handleClick = async () => {
            await logout()
            if(!error.value) {
                router.push({ 
                        name: 'Welcome',
                    })
            }
        }
        
        projectAuth.onAuthStateChanged((user) => {
            projectFirestore.collection("Users").get().then((Users) => {
                Users.forEach((currentuser)=>{


                    if(currentuser.data().email == user.email){
                        $('#currentuser').text(currentuser.data().name)

                    }
                })
            })
            
        });

        // projectAuth.onAuthStateChanged((user) => {projectFirestore.collection("Users").doc(user.uid).get().then((userdata) => {
        //     var countrole = userdata.data().role.length
        //         for(let i = 0; i < countrole; i++){
        //             if(userdata.data().role[i] == "stock"){
        //                 $('#nav-stock').removeClass('d-none')
        //             }
        //             if(userdata.data().role[i] == "type"){
        //                 $('#nav-type').removeClass('d-none')
        //             }
        //             if(userdata.data().role[i] == "brand"){
        //                 $('#nav-brand').removeClass('d-none')
        //             }
        //             if(userdata.data().role[i] == "delivery"){
        //                 $('#nav-delivery').removeClass('d-none')
        //             }
        //             if(userdata.data().role[i] == "slide"){
        //                 $('#nav-slide').removeClass('d-none')
        //             }
        //             if(userdata.data().role[i] == "customer"){
        //                 $('#nav-customer').removeClass('d-none')
        //             }
        //             if(userdata.data().role[i] == "order"){
        //                 $('#nav-order').removeClass('d-none')
        //             }
        //             if(userdata.data().role[i] == "admin"){
        //                 $('#nav-admin').removeClass('d-none')
        //             }
        //         }
        //     })
        // })
        
        const resetpassword = async () => {
            await logout()
            if(!error.value) {
                console.log('user logged out')
                router.push({ 
                        name: 'resetpassword',
                    })
            }
        }

        return { handleClick,resetpassword }
    }
}
</script>

<style>

</style>