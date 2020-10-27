function countOptions(people, groups) {
    if(people < groups) return 0
    
    //set up a 2D array filled with zeroes
    const grid = []
    for(let i = 0; i < people+1; i++){
        grid.push(new Array(groups+1).fill(0))
    }
    
    //fill the 2nd column with 1s
    for(let i = 0; i < grid.length; i++){
        grid[i][1] = 1
    }
    
    grid[0][0] = 1
    
    //start at 2nd row
    for(let i = 1; i < grid.length; i++){
        //start at 3rd col (second has already been populated with 1s)
        for(let j = 2; j < grid[0].length; j++){
            //set the current val to whatever is up 1 row and left 1 col
            grid[i][j] = grid[i-1][j-1]
            
            if(i >= 2*j){
            // add the val from i-j rows up
            // this step builds up the number of possibilities
                grid[i][j] += grid[i-j][j]
            }
        }
    }
    
    //return the value in the bottom-right corner of the grid
    return grid[grid.length-1][grid[0].length-1]
}