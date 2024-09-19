/* 
  Linked List

  A linked list is a data structure that consists of a sequence of nodes. Each node contains a value and a reference (in other words, a link) to the next node in the sequence.

  In computer science, a linked list is a data structure consisting of a sequence of elements, where each element contains a reference to the next element in the sequence. The last element in the sequence has a reference to null, indicating the end of the list.

  Linked lists can be implemented using various data structures, such as arrays, objects, and classes. The choice of data structure depends on the specific problem and the operations that need to be performed on the list.

*/

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(element) {
    const node = new Node(element);
    if (!this.head) {
      this.head = node;
      this.length++

    } else {
      node.next = this.head;
      this.head = node;
      this.length++
    }
  }

  pop() {
    if (!this.head) {
      return null;
    }

    const node = this.head;
    this.head = this.head.next;
    this.length--
    return node.element;
  }

  size() {
    return this.length;
  }
}

export default LinkedList;