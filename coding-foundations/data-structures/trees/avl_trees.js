/* 
  AVL trees
  
  An AVL tree is a self-balancing binary search tree. It maintains a balance factor for each node, which is the difference between the heights of its left and right subtrees. The balance factor of a node is either -1, 0, or 1, and the tree is considered balanced if the absolute value of the balance factors of all leaf nodes is less than or equal to 1.

  AVL trees are commonly used for efficient searching, insertion, and deletion operations. They are also used in other applications, such as representing sets, heaps, and graphs.
*/

class Node {
  constructor(element) {
    this.element = element;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    if (!this.root) {
      this.root = new Node(data);
      return this;
    }

    let currentNode = this.root;
    while (true) {
      if (data < currentNode.element) {
        if (!currentNode.left) {
          currentNode.left = new Node(data);
          break;
        }

        currentNode = currentNode.left;
        continue;
      }

      if (!currentNode.right) {
        currentNode.right = new Node(data);
        break;
      }
      currentNode = currentNode.right;
    }
    return this;
  }

  balance(node) {
    if (!node) {
      return;
    }

    if (node.height > 1) {
      if (node.left.height > node.right.height) {
        if (node.left.left.height > node.left.right.height) {
          this.rotateRight(node);
        } else {
          this.rotateLeft(node);
        }
      } else {
        if (node.right.left.height > node.right.right.height) {
          this.rotateLeft(node);
        } else {
          this.rotateRight(node);
        }
      }
    }
  }

  rotateLeft(node) {
    const temp = node.right;
    node.right = temp.left;
    temp.left = node;

    this.balance(node.right);
    this.balance(node);
  }

  rotateRight(node) {
    const temp = node.left;
    node.left = temp.right;
    temp.right = node;

    this.balance(node.left);
    this.balance(node);
  }

  toObject() {
    const object = {};

    if (!this.root) {
      return object;
    }

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }

      object[node.element] = {
        left: node.left,
        right: node.right
      };
    }

    traverse(this.root);
    console.log(object)
    return object;
  }
} 