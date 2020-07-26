<template>
    <div class="cell">
        <p v-if="vis">{{val}}</p>
        <p v-else>‎‏‏‎ ‎</p>
    </div>
</template>

<script>
    import { EventBus } from '../js/app';

    export default {
        name: 'Cell',
        props: ['vis','val'],
    }
</script>

<style lang="scss" scoped>
</style>