<template>
    <div class="cell" @click="emitGlobalOpenCell(crow,ccol)">
        <p v-if="this.visible">{{val}}</p>
        <p v-else>‎‏‏‎ ‎</p>
    </div>
</template>

<script>
    import { EventBus } from '../js/app';

    export default {
        name: 'Cell',
        props: ['val','row','col'],
        data() {
            return {
                crow: this.row,
                ccol: this.col,
                visible: false,
            }
        },
        methods: {
            emitGlobalOpenCell(row,col) {
                this.crow = row;
                this.ccol = col;
                this.visible = true;
                EventBus.$emit('open-cell', [this.crow, this.ccol]);
            },
        },
    }
</script>

<style lang="scss" scoped>
</style>