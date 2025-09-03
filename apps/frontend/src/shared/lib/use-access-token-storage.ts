import { useStorage } from "@vueuse/core"

export const useAccessTokenStorage = () => {
    return useStorage('app/v1/access_token', '')
}
