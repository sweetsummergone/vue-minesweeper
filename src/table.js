export class Table {
    constructor(cols,rows,mines) {
        this.cols = cols;
        this.rows = rows;
        this.mines = mines;
        this.marksCounter = 0;
        this.minesPosition = [];
        this.minefield = this.createMinefield(cols,rows,mines);
        this.matrixVisible = this.createMatrixVisible(cols,rows);
        this.marksPosition = this.createMatrixVisible(cols,rows);
        this.won = false;
    }

    get minefield() {
        return this._minefield;
    }

    set minefield(value) {
        this._minefield = value;
    }

    get matrixVisible() {
        return this._matrixVisible;
    }

    set matrixVisible(value) {
        this._matrixVisible = value;
    }

    get mines() {
        return this._mines;
    }

    set mines(value) {
        this._mines = value;
    }

    createMinefield(rows, cols, mines) {
        let minefield = new Array(cols*rows);
        minefield.fill(0);
        minefield.fill('x',0,mines);
        this.shuffle(minefield)
        minefield = this.create2D(minefield,rows);
        this.minesPosition = JSON.parse(JSON.stringify(minefield))
        for (let i = 0; i < this.minesPosition.length; i++) {
            for (let j = 0; j < this.minesPosition[1].length; j++) {
                if(this.minesPosition[i][j] == 'x'){this.minesPosition[i][j]=true}
            }
        }
        this.createBorder(minefield)
        this.addNeighborMinesValues(minefield);
        return minefield;
    }

    createMatrixVisible(rows, cols) {
        let minefield = new Array(cols*rows);
        minefield.fill(0);
        minefield = this.create2D(minefield,rows);
        return minefield;
    }

    checkMarksInMatrix() {
        if (JSON.stringify(this.marksPosition) === JSON.stringify(this.minesPosition)) {
            return true;
        } else {
            return false;
        }
    }

    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    
    gameEnd(matrix){
        matrix.forEach(element => {
            element.fill(1);
        });
        return matrix
    }

    create2D(array,size) {
        let subarray = []
        for (let i = 0; i < Math.ceil(array.length/size); i++){
            subarray[i] = array.slice((i*size), (i*size) + size)
        }
        return subarray
    }

    createBorder(array){
        let k = array.length;
        // const months = ['Jan', 'March', 'April', 'June'];
        // months.splice(1, 0, 'Feb');
        array.splice(0,0,Array(k+2));
        for (let i = 1; i < array.length; i++){
            array[i].splice(0,0,0);
            array[i].splice(array[i].length,0,0)
        }
        array.splice(array.length,0,Array(k+2));
        return array
    }

    addNeighborMinesValues(field) {
        for (let n = 1; n < field.length - 1; n++) {
            for (let m = 1; m < field[1].length - 1; m++) {
                if (field[n][m] != 'x') {
                    if (field[n - 1][m - 1] === 'x') {
                        field[n][m] += 1;
                    }
                    if (field[n][m - 1] === 'x') {
                        field[n][m] += 1;
                    }
                    if (field[n + 1][m - 1] === 'x') {
                        field[n][m] += 1;
                    }

                    if (field[n - 1][m] === 'x') {
                        field[n][m] += 1;
                    }
                    if (field[n + 1][m] === 'x') {
                        field[n][m] += 1;
                    }

                    if (field[n - 1][m + 1] === 'x') {
                        field[n][m] += 1;
                    }
                    if (field[n][m + 1] === 'x') {
                        field[n][m] += 1;
                    }
                    if (field[n + 1][m + 1] === 'x') {
                        field[n][m] += 1;
                    }
                }
            }
        }
        field.splice(0,1);
        field.splice(field.length-1,1);
        for (let i = 0; i < field.length; i++) {
            field[i].splice(0,1);
            field[i].splice(field[i].length-1,1);
        }
        return field
    }

    openCell(matrix, row, col) {
        if (matrix[row][col] != 1) {
            if(this.marksPosition[row][col] == 1) {this.marksPosition[row][col] = 0; this.marksCounter -= 1}
            matrix[row][col] = 1;
            if (this.minefield[row][col] == 0) {
                let neighbors = [];
                if (row == 0) {
                    if (col == 0) {
                        neighbors.push([row + 1, col], [row + 1, col + 1], [row, col + 1]);
                    }
                    else if (col == matrix[0].length-1) {
                        neighbors.push([row + 1, col], [row + 1, col - 1], [row, col - 1]);
                    }
                    else {
                        neighbors.push([row, col - 1], [row, col + 1], [row + 1, col - 1], [row + 1, col], [row + 1, col + 1]);
                    }
                }
                else if (row == matrix.length-1) {
                    if (col == 0) {
                        neighbors.push([row - 1, col], [row - 1, col + 1], [row, col + 1]);
                    }
                    else if (col == matrix[0].length-1) {
                        neighbors.push([row - 1, col], [row - 1, col - 1], [row, col - 1]);
                    }
                    else {
                        neighbors.push([row, col - 1], [row, col + 1], [row - 1, col - 1], [row - 1, col], [row - 1, col + 1]);
                    }
                }
                else {
                    if(col == 0){
                        neighbors.push([row - 1, col],[row - 1, col + 1],[row, col + 1],[row + 1, col + 1],[row + 1, col])
                    }
                    else if (col == matrix[0].length-1) {
                        neighbors.push([row - 1, col],[row - 1, col - 1],[row, col - 1],[row + 1, col - 1],[row + 1, col])
                    }
                    else {
                        neighbors.push([row - 1, col - 1], [row - 1, col], [row - 1, col + 1], [row, col - 1], [row, col + 1], [row + 1, col - 1], [row + 1, col], [row + 1, col + 1]);
                    }
                }
                neighbors.forEach(element => {
                    this.openCell(matrix, element[0], element[1]);
                });
            }
        }
        //this.matrixVisible = matrix;
        return matrix
    }
    
}