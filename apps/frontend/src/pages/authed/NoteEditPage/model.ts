import { noteModel } from '@/features/note'
import { useNoteDetailQuery } from '@/shared/api/queries/note'
import { computed, ref, toValue, watch } from 'vue'

export const useNoteEditModel = (noteId: string) => {
    const name = ref('')
    const content = ref('')
    const params = computed(() => ({ noteId }))

    const { data, isLoading } = useNoteDetailQuery(params)
    const noteEditModel = noteModel.useNoteUpdate()
    const noteRemoveModel = noteModel.useNoteRemove()

    watch(
        data,
        value => {
            if (!value) return

            const { note } = value

            name.value = note.name
            content.value = note.content
        },
        {
            immediate: true,
        },
    )

    function save() {
        return noteEditModel.update({
            noteId: noteId,
            name: name.value,
            content: content.value,
        })
    }

    function remove() {
        return noteRemoveModel.remove({
            noteId,
        })
    }

    const isPending = computed(() => {
        return (
            toValue(noteEditModel.isPending) ||
            toValue(noteRemoveModel.isPending)
        )
    })

    return {
        name,
        content,
        save,
        remove,
        isLoading,
        isPending,
    }
}
