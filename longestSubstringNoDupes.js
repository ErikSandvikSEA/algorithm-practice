var lengthOfLongestSubstring = function(s) {
    let lastDupe = 0;
    let maxLength = 0;
    for(let i = 0; i < s.length; i++) {
        for (let j = lastDupe; j < i; j++) {
            if (s[i] === s[j]) {
                lastDupe = j + 1;
                break;
            }
        }
        const current = i - lastDupe + 1
        if (current > maxLength) {
            maxLength = i - lastDupe + 1;
        }
    }
    return maxLength;
};