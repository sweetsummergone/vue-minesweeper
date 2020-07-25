<template>
    <div class="minesweeper">
        <h1>{{sign}}</h1>
        <board :puzzle="this.puzzle"></board>
    </div>
</template>

<script>
    import { MineField } from '../js/minesweeper';
    import Board from './Board.vue';

    export default {
        name: 'Minesweeper',
        created() {
            const msArr = MineField.field(this.rows,this.cols,this.mines);  
            this.puzzle = msArr;
        },
        data () {
            return {
                puzzle: [],
                rows: 10,
                cols: 10,
                mines: 10,
                sign: 'Minesweeper Field'
            }
        },
        components: {
            board: Board
        }
    }
</script>

<style lang="stylus" scoped>

</style>