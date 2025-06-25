puzzle = "string";
const fs = require('node:fs');
try {
    const data = fs.readFileSync('read.txt', 'utf8');
    puzzle = data;
} catch (err) {
    console.error(err);
}

console.log(puzzle);
