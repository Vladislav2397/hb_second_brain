<template>
    <div :class="$style.root">
        <h1 :class="$style.title">Notes</h1>
        <div v-if="isError">Error: {{ error?.message }}</div>
        <div v-else-if="isLoading">Loading...</div>
        <div v-else-if="notes.length === 0">No notes</div>
        <div
            v-else
            :class="$style.list">
            <RouterLink
                v-for="note in notes"
                :key="note.id"
                :to="{
                    name: routeNames.noteEdit,
                    params: { noteId: note.id },
                }">
                <NoteCard :note="note" />
            </RouterLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { NoteCard } from '@/entities/note/ui/NoteCard'
import { routeNames } from '@/shared/lib/route-names'
import { useNoteListModel } from './model'

const { notes, isLoading, isError, error } = useNoteListModel()
</script>

<style lang="scss" module>
.root {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.title {
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
}

.list {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
</style>
