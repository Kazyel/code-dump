/*
  Stack

  A stack is a data structure that follows the Last-In-First-Out (LIFO) principle. This means that the last element added to the stack is the first one to be removed.

  A stack is a collection of elements that can be added to or removed from only one end, called the top of the stack. The most recently added element is always at the top of the stack.

  Stacks are useful for solving problems that require keeping track of the order of elements, such as function calls, undo operations, and parsing expressions.

  In computer science, a stack is an abstract data type that serves as a collection of elements, with two principal operations:

  push: adds an element to the collection
  pop: removes the most recently added element that was not yet removed

*/

import LinkedList from "./linked-list.js";

const stack = new LinkedList();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack)

console.log(stack.pop()); // 3
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1
console.log(stack.pop()); // null