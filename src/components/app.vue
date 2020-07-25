<template>
    <div class="minesweeper">
        <h1>{{sign}}</h1>
        <!-- <button id="randomField">Random Field</button> -->
        <div class="grid">
            <div class="row" v-for="(row,rowIndex) in puzzle" :key="rowIndex">
                <div class="cell" v-for="(cell,colIndex) in row" :key="colIndex">
                    <p v-on:click="open">{{cell}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { MineField } from '../js/minesweeper'

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
            open: function(event){
                
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>