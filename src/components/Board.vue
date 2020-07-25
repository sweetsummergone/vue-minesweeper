<template>
  <div class="board">
    <div class="row" v-for="(row,rowIndex) in puzzle" :key="rowIndex">
        <div class="col" v-for="(col,colIndex) in row" :key="colIndex" ref="cells">
            <cell :val="puzzle[rowIndex][colIndex]"></cell>
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
                matrix: [],
            }
        },
        mounted() {
            // console.log(this.$refs.cells[0]);
            console.log(this.$refs.cells[0].value);
        },
        components: {
            cell: Cell
        },
        props: ['puzzle'],
    }
</script>

<style>

</style>