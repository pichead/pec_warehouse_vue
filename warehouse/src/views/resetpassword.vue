<template>

  <div class="mt-5 container card p-5 col-lg-6 col-md-8" style="color: black">
    <div id="alertdanger" class="alert alert-danger d-none"></div>
    <div class="text-center h4">รีเซ็ตรหัสผ่าน</div>
    <div class="text-center mb-4 text-danger">**กรุณากรอกอีเมลเพื่อรีเซ็ตรหัสผ่าน**</div>

    <form id="addform">
      <div class="col-10 mx-auto">
        <div class="form-group row">
          <label class="col-sm-2 col-form-label font-weight-bold">อีเมล</label>
          <input id="email" class="form-control col-8 mx-auto" type="email" required placeholder="" v-model="email">
        </div>
        <br>
        <div class="errror" style="color:red">{{  error  }}</div>
        <div class="d-flex justify-content-center row-hl">
        <button class="btn btn-primary" type="submit">รีเซ็ต</button>
        </div>
        <div class="d-flex justify-content-center row-hl mt-3">
        <p>
          มีบัญชีอยู่แล้ว?
          <span  style="cursor: pointer"><a href="/" class="font-weight-bold" style="color: black">เข้าใช้งาน</a></span> 
        </p>
      </div>
      </div>
    </form>
  </div>
</template>

<script>

import Navbar from "../components/Navbar.vue";


import { ref } from "vue";
import { useRouter } from "vue-router";
import { projectFirestore,projectAuth } from '../firebase/config'
import router from '@/router';

export default {
  mounted() {
    const addform = document.querySelector('#addform');
    addform.addEventListener('submit',(e)=>{
                    
        e.preventDefault();
        var email = document.getElementById('email').value
        projectAuth.sendPasswordResetEmail(email).then(function() {
          router.push({ 
                        name: 'Welcome',
                        params: { mserror: 'ส่งลิงค์รีเซ็ตรหัสผ่านสำเร็จ กรุณาตรวจเช็คในอีเมล'} 
                    })
        }).catch(function(error) {
          var errorCode = error.Code
          var errorMessage = error.errorMessage
          if (errorCode == 'auth/invalid-email'){
            alert(errorMessage)
            $('#alertdanger').removeClass('d-none')
            $('#alertdanger').text(errorMessage)
          } else if (errorCode == 'auth/user-not-found') {
              alert(errorMessage)

            $('#alertdanger').removeClass('d-none')
            $('#alertdanger').text(errorMessage)
          }
          $('#alertdanger').removeClass('d-none')
          $('#alertdanger').text(error)
          // console.log(error)
        })
    })
  },
  setup() {
    // console.log(projectAuth.currentUser)
    // projectAuth.onAuthStateChanged((user) => {
    //   if (user) {
    //     // User logged in already or has just logged in.
    //     console.log(user.uid);
    //   } else {
    //     // User not logged in or has just logged out.
    //   }
    // });

    // const showLogin = ref(true);
    // const router = useRouter();

    // const enterStockIndex = () => {
    //   router.push({ name: "StockIndex" });
    // };

    // return { showLogin, enterStockIndex };
  },
};
</script>

<style>
body {
  background-color: #d34444;
  color: white;
}
</style>