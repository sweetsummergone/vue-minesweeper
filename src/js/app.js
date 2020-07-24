import '../css/main.scss';
import { MineField } from './minesweeper';
import Vue from 'vue'
import App from '../components/app.vue'

new Vue({
    el: '#app',
    render: h => h(App),
    components: { App },
    template: '<App/>'
})

const outputParagraph = document.querySelector('#outputParagraph');

const outputRandomField = () => {
    outputParagraph.textContent = MineField.field();
}

const buttonRndField = document.querySelector('#randomField');

buttonRndField.addEventListener('click',outputRandomField);