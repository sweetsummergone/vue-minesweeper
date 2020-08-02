<template>
    <div class="main-app">
        <Header/>
        <NewGameModal v-if="isWin" :isWin="true"></NewGameModal>
        <TableView :key="componentKey" :table="table"/>
    </div>
</template>

<script>
import TableView from './TableView.vue'
import NewGameModal from './NewGameModal.vue'
import {Table} from '../table.js'
import Header from './Header.vue'
import { bus } from '../main'

export default {
    data: function() {
        return {
            table: new Table(10,10,10),
            componentKey: 0,
            marks: [],
            isWin: false,
        }
    },
    components: {
        TableView, Header, NewGameModal
    },
    methods: {
        setGame: function(rows,cols,mines) {
            this.table = new Table(rows,cols,mines)
            this.componentKey += 1;
        },
    },
    created() {
        bus.$on('newGame', (data) => {
            this.setGame(data[0],data[1],data[2])
        }),
        bus.$on('handleMark', (data) => {
            this.table.marksPosition[data[0]][data[1]] = !this.table.marksPosition[data[0]][data[1]]
            if(this.table.marksPosition[data[0]][data[1]] == 0) {
                this.table.marksCounter -= 1
            }else{this.table.marksCounter += 1}
            if(this.table.marksCounter == this.table.mines){
                this.isWin = this.table.checkMarksInMatrix();
            }
        })
    },
}
</script>

<style>

</style>