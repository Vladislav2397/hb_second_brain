import {
    LoginParams,
    RegistrationParams,
    useLoginMutation,
    useRegistrationMutation,
} from '@/shared/api/queries/auth'
import { useAccessTokenStorage } from '@/shared/lib/use-access-token-storage'
import { useQueryClient } from '@tanstack/vue-query'
import { computed } from 'vue'

const useLogin = () => {
    const loginMutation = useLoginMutation()
    const accessToken = useAccessTokenStorage()

    async function login(data: LoginParams) {
        const response = await loginMutation.mutateAsync(data)

        accessToken.value = response.access_token
    }

    return {
        login,
        isPending: loginMutation.isPending,
        isError: loginMutation.isError,
    }
}

const useLogout = () => {
    const queryClient = useQueryClient()
    const accessToken = useAccessTokenStorage()

    async function logout() {
        accessToken.value = ''
        await queryClient.clear()
    }

    return {
        logout,
    }
}

const useRegistration = () => {
    const registrationMutation = useRegistrationMutation()
    const accessToken = useAccessTokenStorage()

    async function register(data: RegistrationParams) {
        const response = await registrationMutation.mutateAsync(data)

        accessToken.value = response.access_token
    }

    return {
        register,
        isPending: registrationMutation.isPending,
        isError: registrationMutation.isError,
    }
}

const useIsNeedAuth = () => {
    const accessToken = useAccessTokenStorage()
    const isNeedAuth = computed(() => accessToken.value !== '')

    return { isNeedAuth }
}

export const authModel = {
    useIsNeedAuth,
    useRegistration,
    useLogin,
    useLogout,
}
