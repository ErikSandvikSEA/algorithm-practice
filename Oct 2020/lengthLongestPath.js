function lengthLongestPath(input){
    let stack = []
    let maxFound = 0
    let currentLength = 0;
    const arr = input.split('\n')
    
    for(let folder of arr){
        const level = folder.lastIndexOf('\t') + 1;
        while(level < stack.length){
            currentLength -= stack.pop(); 
        }
        const lengthOfSegment = folder.length - level;

        if(!folder.includes('.')){ //is directory, not .ext
            stack.push(lengthOfSegment)
            currentLength += lengthOfSegment;
        } else {
            maxFound = Math.max(maxFound, currentLength + lengthOfSegment + level);
        }
    }
    return maxFound;
};