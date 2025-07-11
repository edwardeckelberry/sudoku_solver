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
            if(k != grid[i][c]){
                continue;
            }
            else{
                break;
            }
        }
        for(let j = r / 3 * 3; j < r / 3 * 3 + 3; j++){
            for(let l = c / 3 * 3; l < c / 3 * 3 + 3; l++){
                if(k != grid[i][c]){
                continue;
            }
            else{
                break;
            }
            }
        }
        return true;
    }
    return false;
}
