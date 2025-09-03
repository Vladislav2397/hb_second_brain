import { useMutation, useQuery } from '@tanstack/vue-query'
import { httpClient } from '../http-client'
import {
    loginResponseContract,
    meResponseContract,
    registrationResponseContract,
} from '../contracts/auth'
import { useAccessTokenStorage } from '@/shared/lib/use-access-token-storage'

export type LoginParams = {
    email: string
    password: string
}
export const useLoginMutation = () => {
    return useMutation({
        mutationFn: async (data: LoginParams) => {
            const response = await httpClient.post('/api/v1/auth/login', data)

            if (!loginResponseContract.isData(response.data)) {
                throw new Error('Invalid response')
            }

            return response.data
        },
    })
}

export type RegistrationParams = {
    name: string
    email: string
    password: string
}
export const useRegistrationMutation = () => {
    return useMutation({
        mutationFn: async (data: RegistrationParams) => {
            const response = await httpClient.post(
                '/api/v1/auth/register',
                data,
            )

            if (!registrationResponseContract.isData(response.data)) {
                throw new Error('Invalid response')
            }

            return response.data
        },
    })
}

export const useMeQuery = () => {
    const accessToken = useAccessTokenStorage()

    return useQuery({
        queryKey: ['me'],
        queryFn: async () => {
            const response = await httpClient.get('/api/v1/auth/me')

            if (!meResponseContract.isData(response.data)) {
                throw new Error('Invalid response')
            }

            return response.data
        },
        enabled: !!accessToken.value,
    })
}

export const useMeUpdateMutation = () => {
    return useMutation({
        mutationFn: async (data: { name: string }) => {
            const response = await httpClient.patch('/api/v1/auth/me', data)

            if (!meResponseContract.isData(response.data)) {
                throw new Error('Invalid response')
            }

            return response.data
        },
    })
}
