var twoSumBSTs = function(root1, root2, target) {
    const catalog = {}
    inOrderTraverse(root1, catalog)
    return includesMatch(root2, catalog, target)
}

function includesMatch(node, catalog, target){
    if(!node){
        return false
    }
    const possible = target - node.val
    if(possible in catalog){
        return true
    }
    return includesMatch(node.left, catalog, target) || includesMatch(node.right, catalog, target)
}

function inOrderTraverse(node, catalog){
    if(node){
        inOrderTraverse(node.left, catalog)
        catalog[node.val] = true
        inOrderTraverse(node.right, catalog)
    }
}