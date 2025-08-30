<template>
    <div :class="$style.root">
        <h1 :class="$style.title">Create Note</h1>
        <form :class="$style.form">
            <input
                v-model="title"
                type="text"
                name="title"
                placeholder="Title" />
            <textarea
                v-model="content"
                :class="$style.content"
                type="text"
                name="content"
                placeholder="Content" />
        </form>
        <button
            type="submit"
            @click="onClickCreate">
            Create
        </button>
    </div>
</template>

<script lang="ts" setup>
import { routeNames } from '@/shared/lib/route-names'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const title = ref('')
const content = ref('')

const router = useRouter()
function onClickCreate() {
    console.log('create')
    router.push({ name: routeNames.noteList })
}
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

.form {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.content {
    resize: vertical;
    min-height: 100px;
    max-height: 500px;
}
</style>
