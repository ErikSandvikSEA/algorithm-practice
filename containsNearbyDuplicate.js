function containsNearbyDuplicate(arr, k) {
    const catalog = {}
    for(let i = 0; i < arr.length ; i++){
        const num = arr[i]
        if(!catalog[num]){
            catalog[num] = [i]
        } else {
            const numArr = catalog[num]            
            numArr.push(i)
            for(let j = 0; j < numArr.length; j++){
                const idx = numArr[j]
                if(numArr[j+1] - idx <= k ){
                    return true
                }
            }
        }
    }
    return false
}



