<template>
  <div class="board">
    <div class="row" v-for="(row,rowIndex) in puzzle" :key="rowIndex">
        <div v-on:click="open" class="col" v-for="(col,colIndex) in row" :key="colIndex" ref="cells">
            <cell :visible="cellVisible" :val="puzzle[rowIndex][colIndex]"></cell>
        </div>
    </div>
  </div>
</template>

<script>
    import Cell from './Cell.vue';

    export default {
        name: 'Board',
        data () {
            return {
                cellVisible: false,
                matrix: [],
            }
        },
        mounted() {
            // console.log(this.$refs.cells[0]);
        },
        methods: {
           open: function(event){
                if(event){
                    console.log("WTF")
                    //console.log(this.puzzle[rowIndex][colIndex])
                }
            }
        },
        components: {
            cell: Cell
        },
        props: ['puzzle'],
    }
</script>

<style>

</style>