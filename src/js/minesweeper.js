export class MineField {
    static field(rows,cols,mines){
        let r = rows || 10;
        let c = cols || 10;
        let m = mines || 10;
        let mineFieldArray = new Array(r*c);
        mineFieldArray.fill(0);
        for (let i = 0; i < m; i++) {
            mineFieldArray[i] = 'x';
        }
        this.shuffle(mineFieldArray);
        mineFieldArray = this.createField(mineFieldArray);
        mineFieldArray = this.checkNeighbor(mineFieldArray);
        return mineFieldArray;
    }

    static checkNeighbor(field) { // КРАЯ НЕ ПОДСЧИТЫВАЕТ
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

    static addEmptyRows(arr) {
        arr.push(new Array(arr.length));
        return 0;
    }

    static rotateLeft(arr) {
        return 0;
    }

    static delEmptyRows(arr) {
        return 0;
    }
    // static checkNeighbor(field) {
    //     for (let n = 1; n < field[0]-1; n++) {
    //         for (let m = 1; m < field.length-1; m++) {
                
    //             // cell_1 cell_2 cell_3
    //             // cell_4 cell_5 cell_6
    //             // cell_7 cell_8 cell_9

    //             let cell_1 = field[n-1][m-1];
    //             let cell_2 = field[n][m-1];
    //             let cell_3 = field[n+1][m-1]

    //             let cell_4 = field[n-1][m]
    //             let cell_5 = field[n][m]
    //             let cell_6 = field[n+1][m]

    //             let cell_7 = field[n-1][m+1]
    //             let cell_8 = field[n][m+1]
    //             let cell_9 = field[n+1][m+1]

    //         }
    //     }
    // }

    static shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    static createField(a) {
        let size = 10;
        let subarray = [];
        for (let i = 0; i < Math.ceil(a.length/size); i++){
            subarray[i] = a.slice((i*size), (i*size) + size);
        }
        return subarray;
    }
}