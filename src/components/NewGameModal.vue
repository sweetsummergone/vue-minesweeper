<template>
  <div>
    <transition name="modal">
        <div v-if="isOpen">
            <div class="overlay" @click.self="isOpen = false;">
                <div class="modal">
                    <h1 v-if="isLost" style="{color: red}">You Lost</h1>
                    <h1>Start New Game</h1>
                    <form v-on:submit.prevent="createNewGame()">
                      <input type="number" v-model.number="rows" placeholder="Rows" required>
                      <input type="number" v-model.number="cols" placeholder="Columns" required>
                      <input type="number" v-model.number="mines" placeholder="Mines" required>
                      <br><br>
                      <button v-on:click.prevent="createNewGame(); isOpen= !isOpen">Generate</button>
                    </form>
                </div>
            </div>
      </div>
    </transition>
    <button v-if="!isLost" @click="isOpen = !isOpen;">
      New Game
    </button>
  </div>
</template>

<script>

import { bus } from '../main'

export default {
    props: ['isLost'],
    data: function() {
        return {
            rows: 0,
            cols: 0,
            mines: 0,
            isOpen: false
        };
    },
    created(){
      if(this.isLost==true){
        this.isOpen=true
      }
    },
    methods: {
      createNewGame() {
          let data = [this.rows,this.cols,this.mines]
          bus.$emit('newGame', data);
        }
      }
}
</script>

<style scoped>
.modal {
    color:#ff7f11;
    width: 500px;
    margin: 0px auto;
    padding: 20px;
    background-color: #161818;
    border-radius: 2px;
    box-shadow: 0 2px 8px 3px;
    transition: all 0.2s ease-in;
    font-family: Helvetica, Arial, sans-serif;
}
.fadeIn-enter {
  opacity: 0;
}

.fadeIn-leave-active {
  opacity: 0;
  transition: all 0.2s step-end;
}

.fadeIn-enter .modal,
.fadeIn-leave-active.modal {
  transform: scale(1.1);
}
button {
    border: none;
    padding: 4px;
    background-color: rgba(0,0,0,0);
    color: #ff7f11;
    font-size: 1.1rem;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #00000094;
  z-index: 999;
  transition: opacity 0.2s ease;
}

input {
  padding:10px;
  margin:10px;
  border:0;
  border-radius:10px;
  box-shadow:0 0 15px 4px rgba(250,127,11,0.1);
  background-color: rgba(0,0,0,0);
  color:honeydew;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>