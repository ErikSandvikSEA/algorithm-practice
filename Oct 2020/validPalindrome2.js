function validPalindrome(s) {
    let left = 0
    let right = s.length - 1
    while(left <= right){
        if(s[left] !== s[right]){
            return checkPal(s, left+1, right) || checkPal(s, left, right-1)
        }
        left++
        right--
    }    
    return true
};

function checkPal(s, left, right){
    while(left <= right){
        if(s[left] !== s[right]){
            return false
        }
        left++
        right--
    }
    return true
}

