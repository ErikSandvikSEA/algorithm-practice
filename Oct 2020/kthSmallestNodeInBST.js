function kthSmallest(root, k) {
    return inOrderTraversal(root,k, [])
};

function inOrderTraversal(node,k, arr){
    if(arr.length === k){
        return arr[k-1]
    }
    if(node){
        inOrderTraversal(node.left, k, arr)
        arr.push(node.val)
        inOrderTraversal(node.right, k, arr)
    }
    return arr[k-1]
}

