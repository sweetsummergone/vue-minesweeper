<template>
  <div class="board">
    <div class="row" v-for="(row,rowIndex) in visPuzzle" :key="rowIndex">
        <div class="col" v-for="(col,colIndex) in row" :key="colIndex">
            <cell v-if="visMatrix[rowIndex][colIndex] == 1" :vis="true" :val="visPuzzle[rowIndex][colIndex]" @click="emitGlobalOpenCell(row,col)"></cell>
            <cell v-else :vis="false"></cell>
        </div>
    </div>
  </div>
</template>

<script>

    import Cell from './Cell.vue';
    import { EventBus } from '../js/app';
    import {store} from '../js/store';

    export default {
        name: 'Board',
        props: ['visMatrix','visPuzzle'],
        created(){ 
            if(!this.matrix){ console.log("No matrix") }
        },
        methods: {
            emitGlobalOpenCell(row,col) {
                EventBus.$emit('open-cell', [row, col]);
            }
        },
        computed: {
            updatedField() {
                return this.$store.getters.getPuzzle;
            },
        },
        components: {
            cell: Cell
        },
        
    }
</script>

<style>

</style>