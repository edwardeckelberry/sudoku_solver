import { isValidSudoku } from './check.js';
import { readFileSync } from 'fs';
let puzzle = "";

    //gets puzzle from txt file

try {
    const data = readFileSync('read.txt', 'utf8');

        //put puzzle in string
    puzzle = data;
} catch (err) {
    console.error(err);
}

    //gets puzzle and turns it into a 2D int arr

const og = puzzle.trim()
    .split('\n')
    .map(row => row.trim().split('').map(Number));
//console.log("oomf");
//console.log(og);

const temp = [og[0].splice(0, 3), og[1].splice(0, 3), og[2].splice(0, 3)];
//console.log(temp);

//this is to compare top left 3x3 square and first row
//if one of each number is in both arrays, then return true, else false
function checkTopLeftSquareAndFirstRow(arr) {
    let repNum = 0;
    //console.log(temp.length * 3);
    for (let i = 0; i < arr.length * 3 ; i++) {
        let findNum = og[i][repNum]
        console.log(findNum);
        for(let j = 0; j <= arr.length; j++) {
            if( j === arr.length) {
                return false;
            }
            if( arr[j].includes(findNum)) {
                console.log("found");
                break;
            } else {
                console.log("not found");
                continue;
            }
        }
        repNum++;
    }
    return true;
}

console.log(chicken(temp));

function organize(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[0][0] !== 1 && arr.contains(1) ) {
                arr[0][0] = 1;
            }
        }
    }

}
//console.log(organize(temp));
/*for (let i = 0; i < 9; i++) {
    let row = [];
    for (let j = 0; j < 9; j++) {
        row += 0;
    }
    console.log(row.trim());
}

for(let i = 0; i < 9; i++) {
    for(let j = 0; j < 9; j++) {
        console.log("0");
    }
    console.log("\n");
}*/



/*
function checkIfCorrect() {
    let puzzle = "";

    //gets puzzle from txt file

    try {
        const data = readFileSync('read.txt', 'utf8');

        //put puzzle in string
        puzzle = data;
    } catch (err) {
        console.error(err);
    }

    //gets puzzle and turns it into a 2D int arr

    const og = puzzle
        .trim()
        .split('\n')
        .map(row => row.trim().split('').map(Number));

    return 0;
}
*/
