//this is to check if the 2d arr is valid in sudoku
export function isValidSudoku(board) {
    let temp = board[0];
    let firstThree = temp.slice(0, 3);

    //i = 1 to skip the first row
    for (let i = 1; i < 9; i++) {
        
    }
    return firstThree === temp.slice(0, 3);
}