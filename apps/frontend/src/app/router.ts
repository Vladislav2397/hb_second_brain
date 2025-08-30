import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '@/pages/LoginPage.vue'
import RegistrationPage from '@/pages/RegistrationPage.vue'
import { routeNames } from '@/shared/lib/route-names'
import HomePage from '@/pages/app/HomePage.vue'
import NoteListPage from '@/pages/app/NoteListPage.vue'

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
        {
            path: '/',
            name: routeNames.home,
            component: HomePage,
            redirect: { name: routeNames.noteList },
            children: [
                {
                    path: '/notes',
                    name: routeNames.noteList,
                    component: NoteListPage,
                },
            ],
        },
    ],
})
