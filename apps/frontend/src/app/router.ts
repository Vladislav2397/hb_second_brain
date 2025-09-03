import { createRouter, createWebHistory } from 'vue-router'

import { LoginPage } from '@/pages/LoginPage'
import { RegistrationPage } from '@/pages/RegistrationPage'
import { routeNames } from '@/shared/lib/route-names'
import HomePage from '@/pages/authed/HomePage.vue'
import { NoteListPage } from '@/pages/authed/NoteListPage'
import { NoteCreatePage } from '@/pages/authed/NoteCreatePage'
import { NoteEditPage } from '@/pages/authed/NoteEditPage'
import { ProfilePage } from '@/pages/authed/ProfilePage'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/auth',
            redirect: { name: routeNames.login },
            children: [
                {
                    path: 'login',
                    name: routeNames.login,
                    component: LoginPage,
                },
                {
                    path: 'register',
                    name: routeNames.register,
                    component: RegistrationPage,
                },
            ],
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
