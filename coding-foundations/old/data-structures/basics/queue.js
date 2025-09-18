/*
  Queue

  A queue is a data structure that follows the First-In-First-Out (FIFO) principle. This means that the first element added to the queue is the first one to be removed.

  A queue is a collection of elements that can be added to the back of a queue and removed from the front. The first element added to the queue will be the first one to be removed.

  Queues are useful for solving problems that require processing elements in the order they were added, such as job scheduling, event handling, and breadth-first search.

  In computer science, a queue is an abstract data type that serves as a collection of elements, with two principal operations:

  enqueue: adds an element to the collection
  dequeue: removes the element at the front of the collection

*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(element) {
    const node = new Node(element)
    this.length++;

    if (!this.front) {
      this.front = node;
      this.rear = node;
      return;
    }

    this.rear.next = node;
    this.rear = node;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    this.length--;
    const node = this.front;
    this.front = this.front.next;

    if (!this.front) {
      this.rear = null;
    }

    return node.data
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue)
console.log(queue.dequeue()); // 1
console.log(queue)
console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 1
console.log(queue)