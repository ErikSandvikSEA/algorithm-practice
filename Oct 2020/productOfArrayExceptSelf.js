function productExceptSelf(nums) {
    let output = nums.map(n => {
      return  1
    })
    let product = 1
    
    //multiply from left
    for(let i=0; i< nums.length; i++){
        output[i] *= product;
        product *= nums[i]
    }
    product = 1
    
    //multiply from right
    for(let j= nums.length-1; j >=0; j--){
        output[j] *= product;
        product *= nums[j]
    }
    
    return output
};

