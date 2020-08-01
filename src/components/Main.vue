<template>
    <div class="main-app">
        <Header/>
        <TableView :table="table"/>
    </div>
</template>

<script>
import TableView from './TableView.vue'
import {Table} from '../table.js'
import Header from './Header.vue'
import { bus } from '../main'

export default {
    data: function() {
        return {
            table: new Table(10,10,10),
        }
    },
    components: {
        TableView, Header
    },
    methods: {
        setGame: function(rows,cols,mines) {
            this.table = new Table(rows,cols,mines)
        },
    },
    created() {
        bus.$on('newGame', (data) => {
            this.setGame(data[0],data[1],data[2])
        })
    },
}
</script>

<style>

</style>