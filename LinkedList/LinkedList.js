import { Node } from "./Node.js";

export class LinkedList {
  get isEmpty() {
    return this.head === null;
  }

  constructor() {
    this.head = null;
  }

  insertAtHead(data) {
    const node = new Node(data);
    node.nextElement = this.head;
    this.head = node;

    return this;
  }

  insertAtTail(data) {
    const node = new Node(data);
    let tail = this.head;

    if (this.isEmpty) {
      this.head = node;
      return this;
    }

    while (tail.nextElement !== null) {
      tail = tail.nextElement;
    }
    tail.nextElement = node;

    return this;
  }

  printList() {
    let currentHead = this.head;
    let messages = [];

    if (this.isEmpty) return this;
    while (currentHead !== null) {
      messages.push(currentHead.data);
      currentHead = currentHead.nextElement;
    }

    return messages.join(" -> ");
  }
}
