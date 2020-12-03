var gcdOfStrings = function(str1, str2) {
    let longest = ""
    
    for(const char of str1){
        if(!(str2.includes(char))){
            return ""
        }
    }
    
    const long = str1.length > str2.length ? str1 : str2
    const short = str1.length < str2.length ? str1 : str2
    
    let j = 0
    while(j < short.length){
        const sub = short.slice(0, j+1)
        
        const divided = long.length / sub.length
        const shortDivide = short.length / sub.length

        if(!(Number.isInteger(divided)) || !(Number.isInteger(shortDivide))){
            j++
            continue
        }
        
        if(sub.repeat(divided) === long && sub.repeat(shortDivide) === short && short.length % sub.length === 0){
            if(longest.length < sub.length){
                longest = sub
            }
        }
        j++
    }
    return longest    
};