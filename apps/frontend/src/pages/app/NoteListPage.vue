<template>
    <div :class="$style.root">
        <h1 :class="$style.title">Notes</h1>
        <div :class="$style.list">
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
import { Note } from '@/shared/api/contracts/note'
import { NoteCard } from '@/entities/note/ui/NoteCard'
import { onMounted, ref } from 'vue'
import { routeNames } from '@/shared/lib/route-names'

const notes = ref<Note[]>([])

onMounted(() => {
    notes.value = [
        { id: '1', title: 'Note 1', content: 'Content 1' },
        { id: '2', title: 'Note 2', content: 'Content 2' },
    ]
})
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
