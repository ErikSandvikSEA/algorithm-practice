function countBattleships(board){
    if(!board) return 0
    let numShips = 0
    for(let row = 0; row < board.length; row++){
        for(let col = 0; col < board[row].length; col++){
            if(board[row][col] === '.') continue
            if(row > 0 && board[row-1][col] === "X") continue
            if(col > 0 && board[row][col-1]=== 'X') continue
            numShips++
        }
    }
    return numShips
}
