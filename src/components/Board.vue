<template>
  <div class="board">
    <div class="row" v-for="(row,rowIndex) in updatedField" :key="rowIndex">
        <div class="col" v-for="(col,colIndex) in row" :key="colIndex">
            <cell :val="updatedField[rowIndex][colIndex]" :row="rowIndex" :col="colIndex"></cell>
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
        data () {
            return {
                visMatrix: this.$store.getters.getMatrix,
                visPuzzle: this.$store.getters.getPuzzle,
                visible: false,
            }
        },
        created(){ 
            if(!this.matrix){ console.log("No matrix") }
            EventBus.$on('open-cell', data => {
                store.commit('setMatrixVis',data)
                return this.$store.getters.getMatrix;
            });
        },
        computed: {
            updatedField() {
                return this.$store.getters.getMatrix;
            }
        },
        components: {
            cell: Cell
        },
        
    }
</script>

<style>

</style>