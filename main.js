
puzzle = "";

//gets puzzle from txt file
const fs = require('node:fs');
try {
    const data = fs.readFileSync('read.txt', 'utf8');

    //put puzzle in string
    puzzle = data;
} catch (err) {
    console.error(err);
}

//console.log(puzzle);

const og = puzzle
    .trim()
    .split('\n')
    .map(row => row.trim().split('').map(Number));

//og = parseInt(puzzle);
console.log(og);
