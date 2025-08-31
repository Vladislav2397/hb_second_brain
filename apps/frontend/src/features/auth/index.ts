import { LoginParams, useLoginMutation } from '@/shared/api/queries/auth'

export const useLogin = () => {
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

export const useLogout = () => {
    async function logout() {
        localStorage.removeItem('app/v1/access_token')
    }

    return {
        logout,
    }
}
