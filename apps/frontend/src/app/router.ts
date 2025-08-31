import { createRouter, createWebHistory } from 'vue-router'

import { LoginPage } from '@/pages/LoginPage'
import { RegistrationPage } from '@/pages/RegistrationPage'
import { routeNames } from '@/shared/lib/route-names'
import HomePage from '@/pages/app/HomePage.vue'
import NoteListPage from '@/pages/app/NoteListPage.vue'
import { NoteCreatePage } from '@/pages/app/NoteCreatePage'
import { NoteEditPage } from '@/pages/app/NoteEditPage'
import ProfilePage from '@/pages/app/ProfilePage.vue'

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
                {
                    path: '/notes/create',
                    name: routeNames.noteCreate,
                    component: NoteCreatePage,
                },
                {
                    path: '/notes/:noteId',
                    name: routeNames.noteEdit,
                    component: NoteEditPage,
                    props: true,
                },
                {
                    path: '/profile',
                    name: routeNames.profile,
                    component: ProfilePage,
                },
            ],
        },
    ],
})
