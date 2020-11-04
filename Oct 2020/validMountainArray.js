function validMountainArray(arr) {
    let left = 0
    let right = arr.length-1
    while(arr[left] < arr[left+1]){
        left++
    }
    while(arr[right] < arr[right-1]){
        right --
    }
    return left === right && left > 0 && right < arr.length-1
};


