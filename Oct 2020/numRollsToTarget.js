var numRollsToTarget = function(d, f, target) {
    let current = new Array(target + 1).fill(0)
    current[0] = 1
    for(let i = 1; i <=d; i++){
        let prev = [...current]
        current.fill(0)
        for(let j = 1; j <= target; j++){
            for(let k = 1; k <= f; k++){
                if(j - k >= 0){
                    current[j] = (current[j] + prev[j-k]) % (1e9 + 7)
                } else {
                    break
                }
            }
        }
    }
    return current[target]
};