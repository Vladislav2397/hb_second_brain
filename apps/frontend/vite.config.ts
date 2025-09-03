import { ConfigEnv, defineConfig, UserConfig } from 'vite'
import { fileURLToPath, URL } from 'url'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig((_env: ConfigEnv): UserConfig => {
    const replace = (path: string) =>
        fileURLToPath(new URL(path, import.meta.url))

    return {
        plugins: [vue()],
        server: {
            port: 5200,
            host: true,
            allowedHosts: true,

        },
        preview: {
            port: 5201,
            host: true,
            allowedHosts: true,
        },
        resolve: {
            alias: [
                {
                    find: '@',
                    replacement: replace('./src'),
                },
            ],
        },
        css: {
            preprocessorOptions: {
                scss: {
                    //
                },
            },
        },
    }
})
