<template>
    <div :class="$style.root">
        <h1 :class="$style.title">Notes</h1>
        <div v-if="isError">Error: {{ error?.message }}</div>
        <div v-else-if="isLoading">Loading...</div>
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
import { computed } from 'vue'
import { routeNames } from '@/shared/lib/route-names'
import { useNoteListQuery } from '@/shared/api/queries/note'

const { data, isLoading, isError, error } = useNoteListQuery()

const notes = computed(() => data.value?.notes ?? [])
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
