<template>
    <div :class="$style.root">
        <aside :class="$style.aside">
            <RouterLink
                :class="$style.link"
                :to="{ name: routeNames.noteList }">
                Notes
            </RouterLink>
            <RouterLink
                :class="$style.link"
                :to="{ name: routeNames.noteCreate }">
                Create Note
            </RouterLink>
            <div :class="$style.bottom">
                <button
                    :class="$style.logout"
                    @click="onLogout">
                    Logout
                </button>
            </div>
        </aside>
        <main :class="$style.main">
            <RouterView />
        </main>
    </div>
</template>

<script lang="ts" setup>
import { routeNames } from '@/shared/lib/route-names'
import { useRouter } from 'vue-router'

const router = useRouter()

function onLogout() {
    console.log('logout')
    router.push({ name: routeNames.login })
}
</script>

<style lang="scss" module>
.root {
    display: flex;
    flex-direction: column;
    padding-left: 260px;
    flex-grow: 1;
}

.aside {
    position: fixed;
    top: 0;
    left: 0;
    width: 260px;
    height: 100%;
    background-color: #f0f0f0;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 24px;
    box-sizing: border-box;
}

.bottom {
    margin-top: auto;
}

.main {
    padding: 24px 36px;
    max-width: 600px;
    flex-grow: 1;
}

.link {
    padding: 12px;
    color: #000;
    border-radius: 8px;

    &:hover {
        background-color: #fff;
    }
}
</style>
