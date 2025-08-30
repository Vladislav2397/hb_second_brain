<template>
    <div :class="$style.root">
        <h4>{{ note.title }}</h4>
        <p>{{ note.content }}</p>
    </div>
</template>

<script lang="ts" setup>
import { Note } from '@/shared/api/contracts/note'

const { note } = defineProps<{
    note: Pick<Note, 'title' | 'content'>
}>()
</script>

<style lang="scss" module>
.root {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
}
</style>
