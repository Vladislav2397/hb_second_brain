<template>
    <div :class="$style.root">
        <h4>{{ note.name }}</h4>
        <p :class="$style.content">{{ note.content }}</p>
    </div>
</template>

<script lang="ts" setup>
import { Note } from '@/shared/api/contracts/note'

const { note } = defineProps<{
    note: Pick<Note, 'name' | 'content'>
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

.content {
    font-size: 16px;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    line-clamp: 5;
}
</style>
