import axios from 'axios'
import { getEnv } from '../lib/env'

export const httpClient = axios.create({
    baseURL: getEnv('VITE_API_DOMAIN'),
    validateStatus: status => status < 400,
})

httpClient.interceptors.request.use(async config => {
    await new Promise(resolve => setTimeout(resolve, 500))

    const token = localStorage.getItem('app/v1/access_token')

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})
