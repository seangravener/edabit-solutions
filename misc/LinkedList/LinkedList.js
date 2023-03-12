import { Node } from "./Node.js";

export class LinkedList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head === null;
  }

  insertAtHead(data) {
    const node = new Node(data);
    node.nextElement = this.head;
    this.head = node;

    return this;
  }

  printList() {
    let currentHead = this.head;
    let messages = [];

    if (this.isEmpty()) return;

    while (currentHead !== null) {
      messages.push(currentHead.data);
      currentHead = currentHead.nextElement;
    }

    console.log(messages.join(" -> "));
  }
}
