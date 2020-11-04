var licenseKeyFormatting = function(S, K) {
    const arr = []
    for(let i = S.length-1; i >= 0; i--){
        const char = S[i]
        if(char !== "-"){
            arr.push(char.toUpperCase())
        }
    }
    let result = ""
    for(let i = arr.length-1; i >= 0; i--){
        result += arr[i]
        if(i % K === 0 && i !== 0){
            result += "-"
        }
    }
    return result
};