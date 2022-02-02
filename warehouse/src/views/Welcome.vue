<template>

  <div class="mt-5 container card p-5 col-lg-6 col-md-8" style="color: black">
    <div id="mserror" class="d-none alert alert-success alert-dismissible">
        <button class="close" type="button" data-dismiss="alert">
            <span>×</span>
        </button>
        <strong id="errortext"></strong>
    </div>
    <div v-if="showLogin">
      <LoginForm @login="enterStockIndex" />
      <div class="form-group row col-10 mx-auto px-0">
          <div class="col-3"></div>
          <div class="col-7 mx-auto px-0 row">
            <div class="col-7 px-0">
              <p>ไม่มีบัญชีเข้าใช้งาน?<span @click="showLogin = false" style="cursor: pointer"><strong>สมัครใช้งาน</strong></span></p>
            </div>
            <div class="col-5 pr-0 text-right">
              <!-- <a class="nav-link pr-0 py-0" href="/resetpassword">ลืมรหัสผ่าน</a> -->
            </div>
          </div>
        </div>
    </div>
    <div v-else>
      <SignupForm  />
      <div class="form-group row col-10 mx-auto px-0">
          <div class="col-3"></div>
          <div class="col-7 mx-auto px-0 row">
            <div class="col-7 px-0">
              <p>มีบัญชีอยู่แล้ว?<span @click="showLogin = true" style="cursor: pointer"><strong>เข้าใช้งาน</strong></span></p>
            </div>
            <div class="col-5 pr-0 text-right">
              <!-- <a class="nav-link pr-0 py-0" href="/resetpassword">ลืมรหัสผ่าน</a> -->
            </div>
          </div>
        </div>
    </div>
    <br>

  </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";
import Sidebar from "../components/Sidebar.vue";


import { ref } from "vue";
import { useRouter } from "vue-router";
import { projectFirestore,projectAuth } from '../firebase/config'
import router from '@/router';
import Navbarwelcome from '../components/Navbarwelcome.vue';

export default {
  components: { SignupForm, LoginForm, Sidebar, Navbarwelcome },
  mounted() {
    if(this.$route.params.mserror){
        $('#mserror').removeClass("d-none")
        $('#errortext').text(this.$route.params.mserror)
    }

    if(this.$route.params.msediterror == 'true'){
        $('#msediterror').removeClass("d-none")
    }
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

    const showLogin = ref(true);
    const router = useRouter();

    const enterStockIndex = () => {
      router.push({ name: "Home" });
    };

    return { showLogin, enterStockIndex };
  },
};
</script>

<style>

</style>