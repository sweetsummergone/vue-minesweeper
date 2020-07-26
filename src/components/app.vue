<template>
    <div class="minesweeper">
        <!-- <h1>{{sign}}</h1>
        <div class="cells">{{puzzle}}</div> -->
        <board :visMatrix="matrix" :visPuzzle="puzzle"></board>
    </div>
</template>

<script>
    import { MineField } from '../js/minesweeper2';
    import { EventBus } from '../js/app';
    import Board from './Board.vue';
    import {store} from '../js/store';

    export default {
        name: 'Minesweeper',
        data () {
            return {
                puzzle: [],
                matrix: [],
                rows: 10,
                cols: 10,
                mines: 10,
                sign: 'Minesweeper Field'
            }
        },
        created() {
            store.commit('createPuzzle');
            this.puzzle = this.$store.getters.getPuzzle;
            this.matrix = this.$store.getters.getMatrix;
            EventBus.$on('open-cell', data => {
                store.commit('setMatrixVis',data)
                return this.$store.getters.getPuzzle;
            });
        },
        updated() {
            console.log(this.matrix)
        },
        components: {
            board: Board
        }
    }
</script>

<style lang="scss" scoped>
.cells {
    color: #FFF;
    display: flex;
    justify-content: center;
}
</style>