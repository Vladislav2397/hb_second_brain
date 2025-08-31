import { createApp } from 'vue'
import App from '@/app/App.vue'
import { isAppMode } from './shared/lib/env'
import { router } from './app/router'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { queryClient } from './app/query-client'

console.log('App mode =', import.meta.env.MODE)
if (!isAppMode('production')) {
    console.table(import.meta.env)
}

createApp(App).use(router).use(VueQueryPlugin, { queryClient }).mount('#app')
