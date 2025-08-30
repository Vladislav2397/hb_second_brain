<template>
    <div :class="$style.root">
        <h1 :class="$style.title">Profile</h1>
        <form :class="$style.form">
            <input
                v-model="name"
                type="text"
                name="name"
                placeholder="Name" />
        </form>
        <button
            type="submit"
            @click="onClickSave">
            Save
        </button>
    </div>
</template>

<script lang="ts" setup>
import { routeNames } from '@/shared/lib/route-names'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const name = ref('')

const router = useRouter()
function onClickSave() {
    console.log('save')
    router.push({ name: routeNames.home })
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
</style>
