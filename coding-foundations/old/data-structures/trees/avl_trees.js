/* 
  AVL trees
  
  An AVL tree is a self-balancing binary search tree. It maintains a balance factor for each node, which is the difference between the heights of its left and right subtrees. The balance factor of a node is either -1, 0, or 1, and the tree is considered balanced if the absolute value of the balance factors of all leaf nodes is less than or equal to 1.

  AVL trees are commonly used for efficient searching, insertion, and deletion operations. They are also used in other applications, such as representing sets, heaps, and graphs.
*/

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AVLTree {
  constructor() {
    this.root = null
  }

  getHeight(node) {
    return node ? node.height : 0;
  }

  updateHeight(node) {
    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right) + 1)
  }

  getBalanceFactor(node) {
    return this.getHeight(node.left) - this.getHeight(node.right)
  }

  rightRotate(y) {
    const x = y.left
    const T2 = x.right

    x.right = y
    y.left = T2

    this.updateHeight(y)
    this.updateHeight(x)

    return x;
  }

  leftRotate(x) {
    const y = x.right
    const T2 = y.right

    y.left = x
    x.right = T2

    this.updateHeight(x)
    this.updateHeight(y)

    return y
  }


  insert(key) {
    this.root = this._insert(this.root, key);
  }

  _insert(node, key) {
    if (!node) {
      return new Node(key)
    }

    if (key < node.key) {
      node.left = this._insert(node.left, key);
    } else if (key > node.key) {
      node.right = this._insert(node.right, key);
    } else {
      return node
    }

    this.updateHeight(node);

    const balance = this.getBalanceFactor(node)

    if (balance > 1 && key < node.left.key) {
      return this.rightRotate(node)
    }


    if (balance < -1 && key > node.right.key) {
      return this.leftRotate(node);
    }

    if (balance > 1 && key > node.left.key) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    if (balance < -1 && key < node.right.key) {
      node.right = this.rightRotate(node.right)
      return this.leftRotate(node);
    }

    return node
  }

  inorderTraversal(node) {
    if (node) {
      this.inorderTraversal(node.left);
      console.log(node.key)
      this.inorderTraversal(node.right)
    }
  }

  printTree(node, prefix = "", isLeft = true) {
    if (node) {
      console.log(prefix + (isLeft ? "├── " : "└── ") + node.key);
      this.printTree(node.left, prefix + (isLeft ? "│   " : "    "), true);
      this.printTree(node.right, prefix + (isLeft ? "│   " : "    "), false);
    }
  }
}

const avlTree = new AVLTree()

avlTree.insert(10)
avlTree.insert(20)
avlTree.insert(30)
avlTree.insert(15)
avlTree.insert(25)
avlTree.insert(50)
avlTree.insert(60)
avlTree.insert(34)
avlTree.insert(27)

// console.log("Inorder Traversal:");
// avlTree.inorderTraversal(avlTree.root);

avlTree.printTree(avlTree.root)