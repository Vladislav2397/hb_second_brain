import { noteModel } from '@/features/note'
import { ref } from 'vue'

export const useNoteCreateModel = () => {
    const name = ref('')
    const content = ref('')
    const noteCreateModel = noteModel.useNoteCreate()

    function create() {
        return noteCreateModel.create({
            name: name.value,
            content: content.value,
        })
    }

    return {
        name,
        content,
        create,
        isPending: noteCreateModel.isPending,
    }
}
