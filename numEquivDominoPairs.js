var numEquivDominoPairs = function(dominoes) {
    let arr = Array(100).fill(0)
    let pairCount = 0;
    
    for(const domino of dominoes){
        const num = domino[0] < domino[1] ? domino[0] * 10 + domino[1] : domino[1] * 10 + domino[0];
        pairCount += arr[num];
        arr[num]++;
    }
    
    return pairCount;
};