<template>
    <div :class="$style.root">
        <h2>Header</h2>
        <p :class="$style.withfont">
            lorem ipsum. This content write with font-family
        </p>
        <p :class="$style.withoutfont">lorem ipsum. And this without</p>
        <hr />
        <p>
            Env app title is "{{ getEnv('VITE_APP_TITLE') }}" and api domain "{{
                getEnv('VITE_API_DOMAIN')
            }}"
        </p>
    </div>
</template>

<script lang="ts" setup>
import { getEnv } from '@/shared/lib/env'
</script>

<style lang="scss" module>
.root {
    // font-family: 'Roboto', sans-serif;
}

.withfont {
    font-family: 'Roboto', sans-serif;
}
.withoutfont {
    font-family: sans-serif;
}
</style>
