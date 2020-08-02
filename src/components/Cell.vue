<template>
    <div id="wrapper" v-bind:class="{ closed: !isOpened }">
        <h4>{{marker}}</h4>
        <!-- <h4 v-if="isMarked&&!isOpened">🚩</h4> -->
        <div :class="colorChanger" class="score">
            <h4 v-if="val!=0&&val!='x'">{{val}}</h4>
            <h4 v-else-if="val=='x'">💣</h4>
            <h4 v-else> </h4>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Cell',
    props: ['val','isOpened','isMarked'],
    data: function() {
        return {
            activeColor: "gray",
            markCounter: 0,
        }
    },
    computed:{
        colorChanger: function(){
            var theColor = 'gray';
            if(this.val == 1){
                theColor = 'one';
            }
            else if (this.val == 2){
                theColor = 'two';
            }
            else if (this.val == 3){
                theColor = 'three';
            }
            else if (this.val == 4){
                theColor = 'four';
            }
            else if (this.val == 5){
                theColor = 'five';
            }
            else if (this.val == 6){
                theColor = 'six';
            }
            else if (this.val == 7){
                theColor = 'seven';
            }
            else if (this.val == 8){
                theColor = 'eight';
            }
            return theColor;
        },
        marker: function(){
            return (this.isMarked&&!this.isOpened) ? '🚩' : ' ';
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '../assets/css/main.scss';
    $width: 40px;
    $height: 40px;

    .one {
        color: #90be6d;
    }

    .two {
        color: #43aa8b;
    }

    .three {
        color: #f9c74f;
    }

    .four {
        color: #f8961e;
    }

    .five {
        color: #f3722c;
    }

    .six {
        color: #f94144;
    }

    .seven {
        color: #577590;
    }

    .eight {
        color: #1b4332;
    }

    #wrapper {
        margin: 1px;
        width: $width;
        height: $height;
        background-color: $indigo;
        display: flex;
        align-items: center;
        justify-content: center;
        .score {
            width: 90%;
            height: 90%;
            background-color: $opened;
            h4 {
                margin: 20%;
            }
        }
    }

    .closed {
        .score {
            display: none;
        }
    }
    
</style>