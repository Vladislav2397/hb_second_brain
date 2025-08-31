import { useNoteListQuery } from '@/shared/api/queries/note'
import { computed } from 'vue'

export const useNoteListModel = () => {
    const { data, isLoading, isError, error } = useNoteListQuery()

    const notes = computed(() => data.value?.notes ?? [])

    return {
        notes,
        isLoading,
        isError,
        error,
    }
}
