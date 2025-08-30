<template>
    <div :class="$style.root">
        <slot />
    </div>
</template>

<script lang="ts" setup>
//
</script>

<style lang="scss" module>
.root {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
</style>
