import { QueryClient } from '@tanstack/vue-query'

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            staleTime: 1000 * 60 * 5, // 5 min
        },
        mutations: {
            throwOnError: true,
        },
    },
})
