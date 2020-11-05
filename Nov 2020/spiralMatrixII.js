let generateMatrix = function(n) {
    let board = []
    for(let i=0;i<n;i++) {
        board.push(new Array(n))
    }
    fillOutline(board, 0,0, n, 1)
    return board
};

let fillOutline = function(board, row, col, len, val) {
    if(len <= 0) {
        return 
    }
    board[row][col] = val
    // top 
    for(let i=0;i<len-1;i++) {
        board[row][col+i] = val
        val++
    }
    // right
    for(let i=0;i<len-1;i++) {
        board[row+i][col+len-1] = val
        val++
    }
    // bottom
    for(let i=len-1;i>0;i--) {
        board[row+len-1][col+i] = val
        val++
    }
    // left
    for(let i=len-1;i>0;i--) {
        board[row+i][col] = val
        val++
    }
    fillOutline(board, row+1, col+1 , len-2, val)
};