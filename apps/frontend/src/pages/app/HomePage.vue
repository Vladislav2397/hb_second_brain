<template>
    <div :class="$style.root">
        <aside :class="$style.aside">
            <RouterLink :to="{ name: routeNames.noteList }">Notes</RouterLink>
            <div :class="$style.bottom">
                <button :class="$style.logout">Logout</button>
            </div>
        </aside>
        <main :class="$style.main">
            <RouterView />
        </main>
    </div>
</template>

<script lang="ts" setup>
import { routeNames } from '@/shared/lib/route-names'

//
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
    gap: 16px;
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
</style>
