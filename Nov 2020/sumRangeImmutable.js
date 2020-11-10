var NumArray = function(nums) {
    this.nums = nums
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    let sum = 0
    while(i <= j){
        sum += this.nums[i]
        i++
    }
    return sum
};