<template>
    <div class="cell">
        <p v-if="visible">{{val}}</p>
        <p v-else>‎‏‏‎ ‎</p>
    </div>
</template>

<script>
    export default {
        name: 'Cell',
        // data() {
        //     return {
        //         visible: false,
        //     }
        // },
        props: ['val','visible']
    }
</script>

<style lang="scss" scoped>

</style>