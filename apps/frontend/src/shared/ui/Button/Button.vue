<template>
    <button :disabled="isDisabled">
        {{ label }}
    </button>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const { label, isDisabled = false } = defineProps<{
    label: string
    isDisabled?: boolean
}>()
</script>

<style lang="scss" module>
//
</style>
