var maxSubArrayLen = function(nums, k) {
    let len = 0
    let sum = 0
    const catalog = {0: -1}
    
    for(let i = 0; i < nums.length; i++){
        const num = nums[i]
        sum += num
        if(!(sum in catalog)){
            catalog[sum] = i
        }
        if((sum-k) in catalog){
            len = Math.max(len, i - catalog[sum-k])
        }
    }
    return len
};