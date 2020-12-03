class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function binaryTreeDiameter(tree) {
    return getTreeInfo(tree).diameter
  }
  
  function getTreeInfo(tree){
      if(!tree){
          return new TreeInfo(0, 0)
      }
      
      const leftTree = getTreeInfo(tree.left)
      const rightTree = getTreeInfo(tree.right)
      
      const longest = leftTree.height + rightTree.height
      const maxDiameter = Math.max(leftTree.diameter, rightTree.diameter)
      const currentDiameter = Math.max(longest, maxDiameter)
      const currentHeight = 1 + Math.max(leftTree.height, rightTree.height)
      
      return new TreeInfo(currentDiameter, currentHeight)
  }
  
  class TreeInfo {
      constructor(diameter, height){
          this.diameter = diameter
          this.height = height
      }
  }
  