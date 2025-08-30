<template>
    <component :is="as"><slot /></component>
</template>

<script lang="ts" setup>
const { as } = defineProps<{ as: 'div' | 'p' | 'span' | 'strong' }>()
</script>
