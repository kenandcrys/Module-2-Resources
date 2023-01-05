// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;

  }

  insert(val, currentNode=this.root) {
    const newNode = new TreeNode(val);
    if (!currentNode) {
      this.root = newNode;
      return this;
    }
    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = newNode;
      } else {
        return this.insert(val, currentNode.left);
      }
    }
    if (val > currentNode.val) {
      if (!currentNode.right) {
        currentNode.right = newNode;
      } else {
        return this.insert(val, currentNode.right);
      }
    }
  }

  search(val) {
    if (!this.root) return false;
    let curr = this.root;
    while (curr) {
      if (val < curr.val) {
        curr = curr.left;
      } else if (val > curr.val) {
        curr = curr.right;
      } else {
        return true
      }

    }
   return false

  }


  preOrderTraversal(currentNode = this.root) {
    if (currentNode !== null) {
      console.log(currentNode.val);
      this.preOrderTraversal(currentNode.left);
      this.preOrderTraversal(currentNode.right);
    }
  }


  inOrderTraversal(currentNode = this.root) {
    if (currentNode !== null) {
      this.inOrderTraversal(currentNode.left);
      console.log(currentNode.val);
      this.inOrderTraversal(currentNode.right);
    }
  }


  postOrderTraversal(currentNode = this.root) {
    if (currentNode !== null) {
      this.postOrderTraversal(currentNode.left);
      this.postOrderTraversal(currentNode.right);
      console.log(currentNode.val);
    }
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    if (!this.root) return this;
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      const curr = queue.shift();

      console.log(curr.val);
      if (curr.left) queue.push(curr.left)
      if (curr.right) queue.push(curr.right)
    }
    return this;
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    if (!this.root) return this;
    const stack = [];
    stack.push(this.root);
    while (stack.length) {
      const curr = stack.pop();

      console.log(curr.val);
      if (curr.left) stack.push(curr.left)
      if (curr.right) stack.push(curr.right)
    }
    return this;
}
}

module.exports = { BinarySearchTree, TreeNode };
