import {
    LoginParams,
    RegistrationParams,
    useLoginMutation,
    useRegistrationMutation,
} from '@/shared/api/queries/auth'
import { useQueryClient } from '@tanstack/vue-query'

const useLogin = () => {
    const loginMutation = useLoginMutation()

    async function login(data: LoginParams) {
        const response = await loginMutation.mutateAsync(data)

        localStorage.setItem('app/v1/access_token', response.access_token)
    }

    return {
        login,
        isPending: loginMutation.isPending,
        isError: loginMutation.isError,
    }
}

const useLogout = () => {
    const queryClient = useQueryClient()

    async function logout() {
        await queryClient.invalidateQueries()
        localStorage.removeItem('app/v1/access_token')
    }

    return {
        logout,
    }
}

const useRegistration = () => {
    const registrationMutation = useRegistrationMutation()

    async function register(data: RegistrationParams) {
        const response = await registrationMutation.mutateAsync(data)

        localStorage.setItem('app/v1/access_token', response.access_token)
    }

    return {
        register,
        isPending: registrationMutation.isPending,
        isError: registrationMutation.isError,
    }
}

export const authModel = {
    useRegistration,
    useLogin,
    useLogout,
}
