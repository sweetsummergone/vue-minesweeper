<template>
    <div class="wrapper">
        <NewGameModal v-if="isLost" :isLost="true"></NewGameModal>
        <div class="table">
            <div class="row" v-for="(row,rowIndex) in table.minefield" :key="rowIndex">
                <div class="col" v-on:click="setMatrix(rowIndex,colIndex)" v-for="(col,colIndex) in row" :key="colIndex">
                    <Cell :key="componentKey" v-if="table.matrixVisible[rowIndex][colIndex]===1" :isLost="isLost" :isOpened="true" :val="table.minefield[rowIndex][colIndex]" />
                    <Cell :key="componentKey" v-else />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Cell from './Cell'
    import NewGameModal from './NewGameModal'

    export default {
        name: 'TableView',
        props: ['table','isLost'],
        data: function() {
            return {
                componentKey: 0,
            }
        },
        methods: {
            setMatrix: function(row,col) {
                if(this.table.minefield[row][col]=="x"){
                    this.table.gameEnd(this.table.matrixVisible);
                    this.isLost = true;
                    this.componentKey += 1;
                }
                else{
                    this.table.openCell(this.table.matrixVisible,row,col)
                }
                this.$forceUpdate()
            },
        },
        components: {
            Cell, NewGameModal
        },
    }
</script>

<style lang="scss" scoped>
    @import '../assets/css/main.scss';
    .table {
        width: 100px;
        margin: 0 auto;
    }

    .row {
        align-items: center;
        justify-content: center;
        display: flex;
    }

    .col {
        background-color: $indigo;
        border: 0.1rem solid black;
        margin: 0.5px 0.5px 0.5px 0.5px;
    }

    
</style>