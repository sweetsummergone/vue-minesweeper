<template>
    <div class="minesweeper">
        <h1>{{sign}}</h1>
        <!-- <button id="randomField">Random Field</button> -->
        <div class="grid">
            <div class="row" v-for="(row,rowIndex) in puzzle" :key="rowIndex">
                <div class="col" v-for="(col,colIndex) in row" :key="colIndex">
                    <cell :x="rowIndex" :y="colIndex" :val="puzzle[rowIndex][colIndex]"></cell>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { MineField } from '../js/minesweeper';
    import Cell from './Cell.vue';

    export default {
        name: 'Minesweeper',
        data () {
            return {
                puzzle: [],
                rows: 10,
                cols: 10,
                mines: 10,
                sign: 'Minesweeper Field'
            }
        },
        mounted() {
            this.generateField()
        },
        methods: {
            generateField(){
                const msArr = MineField.field(this.rows,this.cols,this.mines);
                this.puzzle = msArr;
            },
            getValue(r,c){
                console.log(r,c);
            }
        },
        components: {
            cell: Cell
        }
    }
</script>

<style lang="stylus" scoped>

</style>