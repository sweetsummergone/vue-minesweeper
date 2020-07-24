import '../css/main.scss';
import { MineField } from './minesweeper';

const outputParagraph = document.querySelector('#outputParagraph');

const outputRandomField = () => {
    outputParagraph.textContent = MineField.field();
}

const buttonRndField = document.querySelector('#randomField');

buttonRndField.addEventListener('click',outputRandomField);