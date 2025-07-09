def isValid(grid, r, c, k):
    notInRow = k not in grid[r]
    notInColumn = k not in [grid[i][c] for i in range(9)]
    notInBox = k not in [grid[i][j] for i in range(r // 3 * 3, r // 3 * 3 + 3) 
                         for j in range(c // 3 * 3, c // 3 * 3 + 3)]
    return notInRow and notInColumn and notInBox

def solve(grid, r=0, c=0):
    if r == 9:
        return True
    elif c == 9:
        return solve(grid, r+1, 0)
    elif grid[r][c] != 0:
        return solve(grid, r, c+1)
    else:
        for k in range(1,10):
            if isValid(grid, r, c, k):
                grid[r][c] = k
                if solve(grid, r, c+1):
                    return True
                grid[r][c] = 0
        return False