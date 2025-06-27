import { isValidSudoku } from './check.js';
import { readFileSync } from 'fs';

for(let i = 0; i < 9; i++) {
    for(let j = 0; j < 9; j++) {
        console.log(0);
    }
    console.log("\n");
}

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

    return isValidSudoku(og);
}

