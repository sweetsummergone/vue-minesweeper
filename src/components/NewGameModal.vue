<template>
  <div>
    <transition name="modal">
        <div v-if="isOpen">
            <div class="overlay" @click.self="isOpen = false;">
                <div class="modal">
                    <h1 v-if="isLost" style="{color: red}">You Lost</h1>
                    <h1 v-else-if="isWin" style="{color: green}">Congratulations</h1>
                    <h1>Start New Game</h1>
                    <form v-on:submit.prevent="checkForm();createNewGame()" novalidate="true" method="post">
                      <p v-if="errors.length">
                      <b>Please correct the following error(s):</b>
                      <ul>
                        <li v-for="error in errors" :key="error">{{ error }}</li>
                      </ul>
                      </p>
                      <h4>Rows:</h4>
                      <input type="number" v-model.number="rows" placeholder="Rows" required>
                      <h4>Columns:</h4>
                      <input type="number" v-model.number="cols" placeholder="Columns" required>
                      <h4>Mines:</h4>
                      <input type="number" v-model.number="mines" placeholder="Mines" required>
                      <br><br>
                      <button v-on:click.prevent="checkForm();createNewGame(); isOpen= !isOpen">Generate</button>
                    </form>
                </div>
            </div>
      </div>
    </transition>
    <button v-if="!isLost&&!isWin" @click="isOpen = !isOpen;">
      New Game
    </button>
  </div>
</template>

<script>

import { bus } from '../main'

export default {
    props: ['isLost','isWin'],
    data: function() {
        return {
            errors: [],
            rows: 10,
            cols: 10,
            mines: 10,
            isOpen: false
        };
    },
    created(){
      if(this.isLost==true){
        this.isOpen=true
      }
      else if(this.isWin==true){
        this.isOpen=true
      }
    },
    methods: {
      createNewGame() {
        let data = [this.rows,this.cols,this.mines]
        bus.$emit('newGame', data);
      },
      checkForm: function (e) {
        if (this.rows && this.cols && this.mines) {
          return true;
        }

        this.errors = [];

        if (!this.rows||this.rows<5) {
          this.errors.push('Rows required (> 5).');
        }
        if (!this.cols||this.cols<5) {
          this.errors.push('Columns required (> 5).');
        }
        if (!this.mines||this.mines<5) {
          this.errors.push('Mines required (> 5).');
        }

        e.preventDefault();
      }
    }   
}
</script>

<style scoped>
h4{
  width: 10px;
  display: inline;
}

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
  width: 40px;
  padding:10px;
  margin:0 15px 0 15px;
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