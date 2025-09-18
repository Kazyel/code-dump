/**
 *  Leet Code - Middle of a Linked List - Easy - 876
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function middleNode(head: ListNode | null): ListNode | null {
  let current = head;
  let listLength = 0;
  let middleIndex = 0;

  while (current!.next !== null) {
    current = current!.next;
    listLength++;
  }

  middleIndex = listLength / 2;
  current = head;

  for (let i = 0; i < middleIndex; i++) {
    current = current!.next;
  }

  return current;
}
