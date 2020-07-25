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
                visible: false
            }
        },
        // data() {
        //     return {
        //         x: 0,
        //         y: 0,
        //         val: 0
        //     }
        // },
        methods: {
            open: function(event){
                if(event){
                    this.visible = true
                    console.log(this.x,this.y);
                }
            }
        },
        props: ['x','y','val']
    }
</script>

<style lang="scss" scoped>

</style>