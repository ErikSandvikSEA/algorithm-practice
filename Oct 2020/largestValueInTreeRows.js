function largestValues(root) {
    if(!root) return []
    const larges = []
    let q = [root]
    while(q.length){
        const nextRow = []
        let maxVal = -Infinity
        for(const node of q){
            if(node.left){
                nextRow.push(node.left)
            }
            if(node.right){
                nextRow.push(node.right)
            }
            maxVal = Math.max(maxVal, node.val)
        }
        larges.push(maxVal)
        q = nextRow
    }
    return larges
};