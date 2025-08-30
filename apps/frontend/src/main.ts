import { createApp } from 'vue'
import App from '@/app/App.vue'
import { isAppMode } from './shared/lib/env'
import { router } from './app/router'

console.log('App mode =', import.meta.env.MODE)
if (!isAppMode('production')) {
    console.table(import.meta.env)
}

createApp(App).use(router).mount('#app')
