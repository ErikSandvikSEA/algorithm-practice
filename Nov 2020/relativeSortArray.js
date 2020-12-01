var relativeSortArray = function(arr1, arr2) {
    const result = []
    const catalog = {}
    const uniques = []
    for(const val of arr1){
        if(!(arr2.includes(val))){
            uniques.push(val)
        } else {
            catalog[val] = (catalog[val] || 0) + 1        
        }
    }
    for(const val of arr2){
        if(catalog[val]){
            while(catalog[val]){
                result.push(val)
                catalog[val]--
            }            
        }

    }
    return result.concat(uniques.sort((a, b) => a-b))
};