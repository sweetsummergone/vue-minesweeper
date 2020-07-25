<template>
    <div class="cell" v-on:click="open">
        <p v-if="this.visible">{{val}}</p>
        <p v-else>‎‏‏‎ ‎</p>
    </div>
</template>

<script>
    export default {
        name: 'Cell',
        data() {
            return {
                visible: false,
            }
        },
        methods: {
            open: function(event){
                if(event){
                    this.visible = true
                }
            }
        },
        props: ['val']
    }
</script>

<style lang="scss" scoped>

</style>