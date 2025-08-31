import {
    NoteCreateParams,
    NoteDeleteParams,
    NoteEditParams,
    useNoteCreateMutation,
    useNoteDeleteMutation,
    useNoteEditMutation,
} from '@/shared/api/queries/note'

const useNoteCreate = () => {
    const noteCreateMutation = useNoteCreateMutation()

    function create(data: NoteCreateParams) {
        return noteCreateMutation.mutateAsync(data)
    }

    return {
        create,
        isPending: noteCreateMutation.isPending,
    }
}

const useNoteUpdate = () => {
    const noteEditMutation = useNoteEditMutation()

    function update(data: NoteEditParams) {
        return noteEditMutation.mutateAsync(data)
    }

    return {
        update,
        isPending: noteEditMutation.isPending,
    }
}

const useNoteRemove = () => {
    const noteDeleteMutation = useNoteDeleteMutation()

    function remove(data: NoteDeleteParams) {
        return noteDeleteMutation.mutateAsync(data)
    }

    return {
        remove,
        isPending: noteDeleteMutation.isPending,
    }
}

export const noteModel = {
    useNoteCreate,
    useNoteUpdate,
    useNoteRemove,
}
