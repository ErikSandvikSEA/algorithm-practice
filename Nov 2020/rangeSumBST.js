var rangeSumBST = function(root, low, high) {
    if(!root) return 0
    let sum = 0
    let stack = [root]
    while(stack.length){
        const current = stack.pop()
        if(current.val >= low && current.val <= high){
            sum += current.val
        }
        if(current.left){
            stack.push(current.left)
        }
        if(current.right){
            stack.push(current.right)
        }
    }
    return sum
};