/*
  Trees
  
  A tree is a hierarchical data structure that consists of nodes connected by edges. Each node in a tree can have zero or more child nodes, except for the root node, which has no parent.

  Trees are used to represent hierarchical relationships between elements, such as the structure of a file system, organization of a company, or the family tree of a person.

  In computer science, a tree is an abstract data type that is used to represent hierarchical relationships between elements. Each node in a tree can have zero or more child nodes, except for the root node, which has no parent.

*/

class Node {
  constructor(element) {
    this.element = element;
    this.left = null;
    this.right = null;
  }
}

/*
  Binary Search Tree

  A binary search tree (BST) is a binary tree in which each node's value is greater than all values in its left subtree and less than all values in its right subtree.

  Binary search trees are commonly used for efficient searching, insertion, and deletion operations. They are also used in other applications, such as representing sets, heaps, and graphs.
*/
class BinarySearchTree {
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

  search(data) {
    let currentNode = this.root;
    while (currentNode) {
      if (data === currentNode.element) {
        return true;
      }

      if (data < currentNode.element) {
        currentNode = currentNode.left;
        continue;
      }
      currentNode = currentNode.right;
    }
    return false;
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

const tree = new BinarySearchTree();

tree.insert(1).insert(2).insert(3).insert(4).insert(5).toObject();
