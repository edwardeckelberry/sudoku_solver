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

export function checkPuzzle(grid, r, c, k) {
    if(k != grid[r]){
        for(let i = 0; i < 9; i++){
            if(k != grid[i][c]) continue;
        }
        
    }
}
