import Vue from 'vue'
import Vuex from 'vuex'

import { MineField } from '../js/minesweeper2';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    puzzle: [],
    matrixVis: [],
  },
  getters: {
    getMatrix: state => {
        return state.matrixVis;
    },
    getPuzzle: state => {
        return state.puzzle;
    }
  },
  mutations: {
    createPuzzle(state,_cols,_rows,_mines){
        const msArr = new MineField(10,10,10);
        msArr.initField();
        state.puzzle = msArr.mineFieldArray;
        state.matrixVis = msArr.matrixVisible;
        // console.log("Cool")
        // console.log(state.puzzle);
    },
    setMatrixVis (state,data) {
        const msArr = new MineField(10,10,10);
        msArr.mineFieldArray = state.puzzle;
        msArr.matrixVisible = state.matrixVis;
        msArr.openCell(data[0],data[1]);
        state.matrixVis = msArr.matrixVisible;
        console.log(state.matrixVis)
    }
  }
})
