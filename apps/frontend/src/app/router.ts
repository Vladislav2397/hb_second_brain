import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '@/pages/LoginPage.vue'
import RegistrationPage from '@/pages/RegistrationPage.vue'
import { routeNames } from '@/shared/lib/route-names'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/auth/login',
            name: routeNames.login,
            component: LoginPage,
        },
        {
            path: '/auth/register',
            name: routeNames.register,
            component: RegistrationPage,
        },
    ],
})
