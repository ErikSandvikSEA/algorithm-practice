function isAlienSorted(words, order) {
    const catalog = {}
    for(let i = 0; i<order.length; i++){
        const char = order[i]
        catalog[char] = i
    }
    for(let i = 0; i<words.length-1; i++){
        const word = words[i]
        if(!isInOrder(word, words[i+1], catalog)){
            return false
        }
    }
    return true
};

function isInOrder(word1, word2, catalog){
    if(word1.length === 0 || word2.length === 0){
        return word1.length === 0
    }
    if(word1[0] === word2[0]){
        return isInOrder(word1.slice(1), word2.slice(1), catalog)
    }
    if(catalog[word1[0]] < catalog[word2[0]]){
        return true
    } else {
        return false
    }
}

