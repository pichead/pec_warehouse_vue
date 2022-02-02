<template>
    <nav class="navbar  sticky-top navbar-expand-sm navbar-dark bg-dark mb-3">
      <div class=" mx-auto font-weight-bold">
        <!-- <a class="navbar-brand" href="/">
            <img src="../../public/racewing-white.png" width="98" height="56" />
        </a> -->
      </div>
    </nav>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
import { useRouter } from "vue-router";
import { projectAuth } from '../firebase/config'

export default {
    setup(){
        const {logout, error} = useLogout()
        // const { user } = getUser()
        const router = useRouter();

        const handleClick = async () => {
            await logout()
            if(!error.value) {
                console.log('user logged out')
                router.push({ 
                        name: 'Welcome',
                    })
            }
        }

        
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