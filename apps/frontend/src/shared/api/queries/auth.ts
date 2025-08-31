import { useMutation } from '@tanstack/vue-query'
import { httpClient } from '../http-client'
import {
    loginResponseContract,
    registrationResponseContract,
} from '../contracts/auth'

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
