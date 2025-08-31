import { authModel } from '@/features/auth'
import { ref } from 'vue'

export const useRegistrationModel = () => {
    const name = ref('')
    const email = ref('')
    const password = ref('')
    const repeatPassword = ref('')
    const registerModel = authModel.useRegistration()

    function register() {
        return registerModel.register({
            name: name.value,
            email: email.value,
            password: password.value,
        })
    }

    return {
        name,
        email,
        password,
        repeatPassword,
        register,
        isPending: registerModel.isPending,
        isError: registerModel.isError,
    }
}
