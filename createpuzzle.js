export function createPuzzle(grid) {
    for(let i = 0; i < 9; i++) {
        const row = [];
        for(let j = 0; j < 9; j++){
            row.push(Math.floor(Math.random() * 10));
        }
        grid.push(row);
    }
    return grid;
}