var reverseVowels = function(s) {
    const vowels = "aeiouAEIOU"
    const arr = s.split("")
    let left = 0
    let right = arr.length-1
    while(left < right){
        if(vowels.includes(arr[left]) && vowels.includes(arr[right])){
            swap(arr, left, right)
            left++
            right--
        }
        if(!vowels.includes(arr[left])){
            left++
        }
        if(!vowels.includes(arr[right])){
            right--
        }
    }
    return arr.join("")
};
    
function swap(arr, i, j){
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}