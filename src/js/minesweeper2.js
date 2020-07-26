export class MineField {
    constructor(rows,cols,mines) {
        this.rows = rows || 10;
        this.cols = cols || 10;
        this.mines = mines || 10;
        this.mineFieldArray = new Array(rows*cols);
        this.matrixVisible = new Array(rows*cols);
        this.mineFieldArray.fill(0);
        this.matrixVisible.fill(0);
        this.mineFieldArray.fill('x',0,mines);
    }

    initField(){
        this.shuffle();
        this.mineFieldArray = this.createField(this.mineFieldArray,10); //
        this.matrixVisible = this.createField(this.matrixVisible,10); //
    }

    checkNeighbor(field) {
        for (let n = 1; n < field[0].length-1; n++) {
            for (let m = 1; m < field.length-1; m++) {
                if(field[n][m] != 'x') {
                    if(field[n-1][m-1] === 'x') {
                        field[n][m] += 1;
                    }
                    if(field[n][m-1] === 'x') {
                        field[n][m] += 1;
                    }
                    if(field[n+1][m-1] === 'x') {
                        field[n][m] += 1;
                    }

                    if(field[n-1][m] === 'x') {
                        field[n][m] += 1;
                    }
                    if(field[n+1][m] === 'x') {
                        field[n][m] += 1;
                    }

                    if(field[n-1][m+1] === 'x') {
                        field[n][m] += 1;
                    }
                    if(field[n][m+1] === 'x') {
                        field[n][m] += 1;
                    }
                    if(field[n+1][m+1] === 'x') {
                        field[n][m] += 1;
                    }
                }
            }
        }
        return field;
    }

    openCell(row,col){
        console.log("There is should be action")
        if(this.matrixVisible[row][col] != 1){
            console.log("And here the next step",row,col)
            this.matrixVisible[row][col] = 1;
            if(this.mineFieldArray[row][col] == 0) {
                console.log("Here the calculate step")
                let neighbors = [];
                if(row == 0) {
                    if(col == 0) {
                        neighbors.push([row+1,col],[row+1,col+1],[row,col+1]);
                    }
                    else if(col == this.mineFieldArray[0].length) {
                        neighbors.push([row+1,col],[row+1,col-1],[row,col-1]);
                    }
                    else {
                        neighbors.push([row,col-1],[row,col+1],[row+1,col-1],[row+1,col],[row+1,col+1]);
                    }
                }
                else if(row == this.mineFieldArray.length) {
                    if(col == 0) {
                        neighbors.push([row-1,col],[row-1,col+1],[row,col+1]);
                    }
                    else if(col == 9) {
                        neighbors.push([row-1,col],[row-1,col-1],[row,col-1]);
                        
                    }
                    else {
                        neighbors.push([row,col-1],[row,col+1],[row-1,col-1],[row-1,col],[row-1,col+1]);
                    }
                }
                else {
                    neighbors.push([row-1,col-1],[row-1,col],[row-1,col+1],[row,col-1],[row,col+1],[row+1,col-1],[row+1,col],[row+1,col+1]);
                }

                neighbors.forEach(element => {
                    this.openCell(element[0],element[1]);
                });
                console.log(neighbors);
            }
        }
        console.log(this.matrixVisible);
        return this.matrixVisible
    }

    deleteBorder(a) {
        a.shift();
        a.pop();
        for (let i = 0; i < a.length; i++) {
            a[i].shift()
            a[i].pop()
        }
        return a;
    }

    shuffle() {
        for (let i = this.mineFieldArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.mineFieldArray[i], this.mineFieldArray[j]] = [this.mineFieldArray[j], this.mineFieldArray[i]];
        }
    }

    createField(a,size) {
        let subarray = [];
        for (let i = 0; i < Math.ceil(a.length/size); i++){
            subarray[i] = a.slice((i*size), (i*size) + size)
            subarray[i].unshift(0);
            subarray[i].push(0);
        }
        let k = subarray[0].length;
        subarray.push(new Array(k));
        subarray.unshift(new Array(k));
        subarray = this.checkNeighbor(subarray);
        subarray = this.deleteBorder(subarray);
        return subarray
    }

    // getRandomArbitrary(min, max) {
    //     return Math.random() * (max - min) + min;
    // }

    // randomMineCoord = (x_min,x_max,y_min,y_max) => {                // Узнаем координаты случайных мин
    //     mineCordX = getRandomArbitrary(x_min-1, x_max+1);
    //     mineCordY = getRandomArbitrary(y_min-1, y_max+1);   
    //     return [mineCordX,mineCordY];
    // };

    // field = [-40,40]

    // // let i = [getRandomArbitrary(0,-10),getRandomArbitrary(0,10)]     // В том случае, если начало
    // // let ii = [getRandomArbitrary(0,10),getRandomArbitrary(0,10)]     // начинается строго с (0;0)
    // // let iii = [getRandomArbitrary(0,10),getRandomArbitrary(0,-10)]   // Тогда эти четверти будут 
    // // let iv = [getRandomArbitrary(0,-10),getRandomArbitrary(0,-10)]   // т.н. "островом", в котором
    //                                                                     // не может быть бомб.

    // i = [-10,10];
    // ii = [10,10];
    // iii = [10,-10];
    // iv = [-10,-10];

    // game_zone = (i,ii,iii,iv);
    // safety_zone = game_zone;

    // dynamic_field_i = [-20,20]
    // dynamic_field_ii = [20,20]
    // dynamic_field_iii = [20,-20]
    // dynamic_field_iv = [-20,-20]

    // x_min = 0
    // y_min = 0
    // x_max = 0
    // y_max = 0

    // start = [0,0]

    // mc = randomMines(10)
}