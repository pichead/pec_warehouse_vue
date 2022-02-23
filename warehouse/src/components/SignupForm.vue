<template>
  <form @submit.prevent="handleSubmit">
    <div id="alertdanger" class="alert alert-danger d-none">
            {{ error }}
        </div>
    <div class="text-center h5 mt-3 font-weight-bold mb-5">สมัครใช้งาน</div>
    <div class="col-10 mx-auto">
      <div class="form-group row">
          <label class="col-sm-3 col-form-label font-weight-bold">ชื่อ-นามสกุล</label>
          <input class="form-control col-7 mx-auto" type="text" required placeholder="Name" v-model="displayName">
      </div>
      <div class="form-group row">
        <label class="col-sm-3 col-form-label font-weight-bold">อีเมล</label>
        <input class="form-control col-7 mx-auto" type="email" required placeholder="" v-model="email">
      </div>
      <div class="form-group row">
        <label class="col-sm-3 col-form-label font-weight-bold">รหัสผ่าน</label>
        <input id="password" class="form-control col-7 mx-auto" type="password" required placeholder="" v-model="password">
      </div>
      <div class="form-group row">
        <label class="col-sm-3 col-form-label font-weight-bold">ยืนยันรหัสผ่าน</label>
        <input id="confirm_password" class="form-control col-7 mx-auto" type="password" required placeholder="" >
      </div>
      <!-- <div class="form-group row">
          <label class="col-sm-3 "></label>
          <p id='message' class="col-7 mx-auto"></p>
      </div> -->
      <div class="form-group row mb-0">
          <label class="col-sm-3 col-form-label font-weight-bold"></label>
          <p id='message' class=" col-7 mx-auto pl-0 mb-3"></p>
      </div>  
      <div class="form-group row ">
        <div class="col-3"></div>
        <button id="submitregister" class="btn btn-dark col-7 mx-auto" disabled>สมัครใช้งาน</button>
      </div>
      <!-- <div class="d-flex justify-content-center row-hl">
        <button id="submitregister" class="btn btn-dark" disabled>สมัครใช้งาน</button>
      </div> -->
    </div>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/useSignup'
import { projectFirestore,projectAuth } from '../firebase/config'
import router from '@/router';

export default {
    mounted() {

        $('#password, #confirm_password').on('keyup', function () {
          if ($('#password').val() == $('#confirm_password').val()) {
            $('#message').html('รหัสผ่านตรงกัน').css('color', 'green')
            $('#submitregister').prop('disabled', false)
          } else if($('#password').val() != $('#confirm_password').val()){
              $('#message').html('รหัสผ่านไม่ตรงกัน').css('color', 'red')
            $('#submitregister').prop('disabled', true)
          }
            
        });


        
    },
    setup(props, context) {

        

        const { error, signup } = useSignup()
        const displayName = ref('')
        const email = ref('')
        const password = ref('')


        const handleSubmit = async () => {
          await signup(email.value, password.value, displayName.value)
          if (!error.value) {
            // context.emit('signup')
              // this.$emit()

            projectFirestore.collection('Users').doc(projectAuth.currentUser.uid).set({
                email: projectAuth.currentUser.email,
                name:displayName.value,
                activation: false,
                permission: [],
            }).then(function() {
                console.log('regis pass')
                projectAuth.signOut()
                location.reload()
            })
              
          }
          else{
            $('#alertdanger').removeClass('d-none')
          }

          
          


        }

        return {   email, password,displayName, handleSubmit, error }
    }
}
</script>

<style>
</style>