import { computed, inject, provide, Ref } from 'vue'
import { User } from '@/shared/api/contracts/auth'
import { useMeQuery } from '@/shared/api/queries/auth'

export type Viewer = User

type ViewerContext = {
    viewer: Ref<User>
}

export const useViewerProvider = () => {
    const { data, isLoading, isError } = useMeQuery()

    const viewer = computed(() => data.value!)

    provide<ViewerContext>('viewer-key', { viewer })

    return { data, isLoading, isError }
}

export const useViewer = () => {
    const context = inject<ViewerContext>('viewer-key')

    if (!context) {
        throw new Error('Viewer context not found')
    }

    return { viewer: context.viewer }
}
