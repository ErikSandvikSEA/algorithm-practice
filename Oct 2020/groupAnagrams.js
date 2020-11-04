function groupAnagrams(strs) {
    const catalog = {}
    const result = []
    for(let str of strs){
        const canonStr = getCanon(str)
        if(catalog[canonStr]){
            catalog[canonStr].push(str)
        } else {
            catalog[canonStr] = [str]
        }
    }
    for(const key in catalog){
        result.push(catalog[key])
    }
    return result
}

function getCanon (str) {
    return str
        .split("")
        .sort()
        .join("");
};

