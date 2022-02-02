<template  >
  <form @submit.prevent="handleSubmit">
          <div id="alertdanger" class="alert alert-danger d-none">
            {{ error }}
        </div>

        <div class="text-center h5 mt-3 font-weight-bold mb-5">ลงชื่อเข้าใช้งาน</div>
      <div class="col-10 mx-auto">
        <div class="form-group row">
          <label class="col-sm-3 col-form-label font-weight-bold">อีเมล</label>
          <input class="form-control col-7 mx-auto" type="email" required placeholder="" v-model="email">
        </div>
        <div class="form-group row">
          <label class="col-sm-3 col-form-label font-weight-bold">รหัสผ่าน</label>
          <input class="form-control col-7 mx-auto" type="password" required placeholder="" v-model="password">
        </div>
        <div class="form-group row">
          <div class="col-3"></div>
          <button class="btn btn-dark col-7 mx-auto">เข้าใช้งาน</button>
        </div>
        
        <!-- <div class="form-group row">
          <label class="col-sm-3 col-form-label font-weight-bold"></label>
          <a class="nav-link col-7 mx-auto pl-0" href="/resetpassword">ลืมรหัสผ่าน</a>
        </div> -->
        
      </div>
  </form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../composables/useLogin'


export default {
    setup(prop, context) {
        // const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const { error, login } = useLogin()

        const handleSubmit = async () => {
            await login(email.value, password.value)
            if (!error.value) {
              context.emit('login')
              // this.$emit()
            }
            
            else{
              $('#alertdanger').removeClass('d-none')
            }
        }

        return { email, password, handleSubmit, error }
    }
}
</script>

<style>
</style>