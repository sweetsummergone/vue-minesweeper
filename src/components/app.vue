<template>
    <div class="minesweeper">
        <h1>{{sign}}</h1>
        <board></board>
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
        },
        updated() {
            console.log(this.matrix)
        },
        components: {
            board: Board
        }
    }
</script>

<style lang="stylus" scoped>

</style>