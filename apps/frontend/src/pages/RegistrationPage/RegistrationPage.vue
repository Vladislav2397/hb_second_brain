<template>
    <CenterLayout>
        <div :class="$style.root">
            <h1 :class="$style.title">Registration</h1>
            <form :class="$style.form">
                <input
                    v-model="name"
                    type="text"
                    name="name"
                    placeholder="Name" />
                <input
                    v-model="email"
                    type="email"
                    name="email"
                    placeholder="Email" />
                <input
                    v-model="password"
                    type="password"
                    name="password"
                    placeholder="Password" />
                <input
                    v-model="repeatPassword"
                    type="password"
                    name="repeat-password"
                    placeholder="Repeat Password" />
            </form>
            <button
                type="submit"
                @click="onClickRegister">
                register
            </button>
            <p>
                Уже есть аккаунт?
                <RouterLink :to="{ name: routeNames.login }">Вход</RouterLink>
            </p>
        </div>
    </CenterLayout>
</template>

<script lang="ts" setup>
import { CenterLayout } from '@/shared/layouts/CenterLayout'
import { routeNames } from '@/shared/lib/route-names'
import { useRegistrationModel } from './model'
import { useRouter } from 'vue-router'

const { name, email, password, repeatPassword, register } = useRegistrationModel()

const router = useRouter()
async function onClickRegister() {
    await register()
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
