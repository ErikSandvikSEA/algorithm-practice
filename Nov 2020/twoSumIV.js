var findTarget = function(root, k) {
    const catalog = {}
    return traverse(root, k, catalog)
};

function traverse(node, target, catalog){
    if(!node) return false
    const possible = target - node.val
    if(possible in catalog){
        return true
    }
    catalog[node.val] = true
    return traverse(node.left, target, catalog) || traverse(node.right, target, catalog)
}