<template>
    <CenterLayout>
        <div :class="$style.root">
            <h1 :class="$style.title">Authorization</h1>
            <form :class="$style.form">
                <input
                    type="email"
                    v-model="email" />
                <input
                    type="password"
                    v-model="password" />
            </form>
            <button
                type="submit"
                @click="onClickLogin">
                login
            </button>
        </div>
    </CenterLayout>
</template>

<script lang="ts" setup>
import { CenterLayout } from '@/shared/layouts/CenterLayout'
import { ref } from 'vue'

const email = ref('')
const password = ref('')

function onClickLogin() {
    console.log('login')
}
</script>

<style lang="scss" module>
.root {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
    width: 300px;
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
    width: 100%;
}
</style>
