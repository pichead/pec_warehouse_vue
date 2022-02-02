import { ref } from "vue"
import { projectAuth } from '../firebase/config'
 
const error = ref(null)

const logout = async () => {
    error.value = null

    try {
        const res = await projectAuth.signOut()

    } catch(err){
        error.value = error.message
    }

}

const useLogout = () => {
    return { error, logout }
}

export default useLogout