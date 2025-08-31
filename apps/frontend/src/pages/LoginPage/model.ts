import { authModel } from '@/features/auth'
import { ref } from 'vue'

export const useLoginModel = () => {
    const email = ref('')
    const password = ref('')
    const loginModel = authModel.useLogin()

    async function login() {
        await loginModel.login({
            email: email.value,
            password: password.value,
        })
    }

    return {
        email,
        password,
        isError: loginModel.isError,
        isPending: loginModel.isPending,
        login,
    }
}
