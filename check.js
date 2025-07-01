//this is to check if the 2d arr is valid in sudoku
export function isValidSudoku(board) {
    let temp = board[0];
    let firstThree = temp.slice(0, 3);
    
    return firstThree === temp.slice(0, 3);
}