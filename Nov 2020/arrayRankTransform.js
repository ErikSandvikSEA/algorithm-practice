var arrayRankTransform = function(arr) {
    const orderedArr = [...arr].sort((a,b) => a-b)
    const catalog = {}
    let count = 1
    for(let i = 0; i < orderedArr.length; i++){
        const num = orderedArr[i]
        if(!catalog[num]) {
            catalog[num] = count
            count++
        }
    }
    for(let i = 0; i < arr.length; i++){
        arr[i] = catalog[arr[i]]
    }
    return arr
};