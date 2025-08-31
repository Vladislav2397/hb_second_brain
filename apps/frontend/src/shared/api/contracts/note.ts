import * as C from '@withease/contracts'

export type Note = {
    id: string
    name: string
    content: string
}

export const noteContract = C.obj({
    id: C.str,
    name: C.str,
    content: C.str,
})

export const getNoteListResponseContract = C.obj({
    notes: C.arr(noteContract),
})
