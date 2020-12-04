var partitionLabels = function(S) {
    let catalog = {};
    
    for(let i = 0; i < S.length; i++) {
        const char = S[i]
        catalog[char] = i
    }

    let start = 0
    let end = 0
    let i=0
    const result = [];
    
    while(i < S.length) {
        const char = S[i]
        if(catalog[char] > end) {
            end = catalog[char];    
        }
        if (i === end) {
            result.push((end + 1) - start);
            start = end + 1;
        }
        i++;        
    }
    return result;
};