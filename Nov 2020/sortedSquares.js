var sortedSquares = function(arr) {
    for(let i = 0; i < arr.length; i++){
        const num = arr[i]
        arr[i] = num * num
    }
    return arr.sort((a, b) => a-b)
};