var simplifyPath = function(path) {
    const arr = path.split("/") 
    
    const stack = []
    for(const ci of arr){
        if(ci === ".."){
            stack.pop()
        } else if (ci !== "." && ci !== ""){
            stack.push(ci)
        }
    }
    return "/" + stack.join("/")
};