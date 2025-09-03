<template>
    <div v-if="isLoading" :class="$style.root">
        <h1 :class="$style.title">SplashScreen</h1>
    </div>
    <slot v-else />
</template>

<script lang="ts" setup>
defineProps<{
    isLoading: boolean
}>()
</script>

<style lang="scss" module>
.root {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
