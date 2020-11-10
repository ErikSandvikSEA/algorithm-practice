var mostCommonWord = function(paragraph, banned) {
    let most = 0
    const catalog = {}
    const sanitized = paragraph.toLowerCase().split(/[ !?',;.]/)
    for(const word of sanitized){
        if(word && !banned.includes(word)){
            catalog[word] = (catalog[word] || 0) + 1
            if(!most || catalog[word] > catalog[most]){
                most = word
            }
        }
    }
    return most
}