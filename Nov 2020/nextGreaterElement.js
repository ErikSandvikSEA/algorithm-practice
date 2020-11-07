var nextGreaterElement = function(nums1, nums2) {
    for(let k = 0; k< nums1.length; k++){
        const i = nums2.indexOf(nums1[k])
        let found = false
        for(let j = i+1; j < nums2.length; j++){
            if(nums2[j] > nums1[k]){
                nums1[k] = nums2[j]
                found = true
                break
            }
        }
        if(!found){
            nums1[k] = -1
        }
    }
    return nums1
};