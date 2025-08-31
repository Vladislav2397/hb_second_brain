import { useQuery } from '@tanstack/vue-query'
import { httpClient } from '../http-client'
import { getNoteListResponseContract } from '../contracts/note'

export const useNoteListQuery = () => {
    return useQuery({
        queryKey: ['notes'],
        queryFn: async () => {
            const response = await httpClient.get('/api/v1/notes')

            if (!getNoteListResponseContract.isData(response.data)) {
                throw new Error('Invalid response')
            }

            return response.data
        },
    })
}
