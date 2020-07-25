export class MineField {
    static field(rows,cols,mines){
        let r = rows || 10;
        let c = cols || 10;
        let m = mines || 10;
    
        // let minesCoord = []
        // for (let  = 0;  < array.length; ++) {
        //     const element = array[];
            
        // }
        // let minesCoord = [Math.floor((Math.random() * r)), Math.floor((Math.random() * r))];
        // console.log(minesCoord);
        let mineFieldArray = new Array(r*c);

        mineFieldArray.fill(0);
        mineFieldArray.fill('x',0,m);
        this.shuffle(mineFieldArray);
        console.log(mineFieldArray);
        mineFieldArray = this.createField(mineFieldArray);
        //this.hideCells(mineFieldArray);
        return mineFieldArray;
    }

    static compareValue(r,c){
        return value
    }

    static checkNeighbor(field) {
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
            subarray[i] = a.slice((i*size), (i*size) + size)
            subarray[i].unshift(0);
            subarray[i].push(0);
        }
        let k = subarray[0].length;
        subarray.push(new Array(k));
        subarray.unshift(new Array(k));
        subarray = this.checkNeighbor(subarray);
        subarray = this.deleteBorder(subarray);
        return subarray;
    }

    static deleteBorder(a) {
        a.shift();
        a.pop();
        for (let i = 0; i < a.length; i++) {
            a[i].shift()
            a[i].pop()
        }
        return a;
    }

    // static hideCells(field) {
    //     for (let i = 0; i < field.length; i++) {
    //         for (let j = 0; j < field[0].length; j++) {
    //             field[i][j].
    //         }
    //     }
    // }
}