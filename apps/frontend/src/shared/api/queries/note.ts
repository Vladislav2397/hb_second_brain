import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'
import { httpClient } from '../http-client'
import {
    createNoteResponseContract,
    editNoteResponseContract,
    getNoteDetailResponseContract,
    getNoteListResponseContract,
} from '../contracts/note'
import { Ref, toValue } from 'vue'
import { useAccessTokenStorage } from '@/shared/lib/use-access-token-storage'

export const useNoteListQuery = () => {
    const accessToken = useAccessTokenStorage()

    return useQuery({
        queryKey: ['notes'],
        queryFn: async () => {
            const response = await httpClient.get('/api/v1/notes')

            if (!getNoteListResponseContract.isData(response.data)) {
                throw new Error('Invalid response')
            }

            return response.data
        },
        enabled: !!accessToken.value,
    })
}

export type NoteDetailParams = {
    noteId: string
}
export const useNoteDetailQuery = (params: Ref<NoteDetailParams>) => {
    const accessToken = useAccessTokenStorage()

    return useQuery({
        queryKey: ['notes', 'detail', params],
        queryFn: async () => {
            const response = await httpClient.get(
                `/api/v1/notes/${toValue(params).noteId}`,
            )

            if (!getNoteDetailResponseContract.isData(response.data)) {
                throw new Error('Invalid response')
            }

            return response.data
        },
        enabled: !!accessToken.value,
    })
}

export type NoteCreateParams = {
    name: string
    content: string
}
export const useNoteCreateMutation = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (data: NoteCreateParams) => {
            const response = await httpClient.post('/api/v1/notes', data)

            if (!createNoteResponseContract.isData(response.data)) {
                throw new Error('Invalid response')
            }

            return response.data
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['notes'] })
        },
    })
}

export type NoteEditParams = {
    noteId: string
    name: string
    content: string
}
export const useNoteEditMutation = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async ({ noteId, ...data }: NoteEditParams) => {
            const response = await httpClient.patch(
                `/api/v1/notes/${noteId}`,
                data,
            )

            if (!editNoteResponseContract.isData(response.data)) {
                throw new Error('Invalid response')
            }

            return response.data
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['notes'] })
        },
    })
}

export type NoteDeleteParams = {
    noteId: string
}
export const useNoteDeleteMutation = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async ({ noteId }: NoteDeleteParams) => {
            const response = await httpClient.delete(`/api/v1/notes/${noteId}`)

            return response.data
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['notes'] })
        },
    })
}
