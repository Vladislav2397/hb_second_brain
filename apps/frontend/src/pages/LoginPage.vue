<template>
    <CenterLayout>
        <div :class="$style.root">
            <h1 :class="$style.title">Authorization</h1>
            <form :class="$style.form">
                <input
                    v-model="email"
                    name="email"
                    placeholder="Email"
                    type="email" />
                <input
                    v-model="password"
                    name="password"
                    placeholder="Password"
                    type="password" />
            </form>
            <button
                type="submit"
                @click="onClickLogin">
                login
            </button>
            <p>
                Еще нет аккаунта?
                <RouterLink :to="{ name: routeNames.register }">
                    Регистрация
                </RouterLink>
            </p>
        </div>
    </CenterLayout>
</template>

<script lang="ts" setup>
import { CenterLayout } from '@/shared/layouts/CenterLayout'
import { routeNames } from '@/shared/lib/route-names'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')

const router = useRouter()
function onClickLogin() {
    console.log('login')
    router.push({ name: routeNames.home })
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
