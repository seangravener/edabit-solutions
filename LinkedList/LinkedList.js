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

  search(value) {
    let currentHead = this.head;
    let result = false;

    if (this.isEmpty) return this;
    while (currentHead !== null) {
      result = currentHead.data === value ? true : false;
      currentHead = currentHead.nextElement;

      if (result) {
        break;
      }
    }

    return result;
  }

  deleteAtHead() {
    if (this.isEmpty) return this;
    this.head = this.head.nextElement;
  }

  deleteAtTail() {
    if (this.isEmpty) return this;
    let currentHead = this.head;

    if (currentHead.nextElement === null) {
      this.deleteAtHead();
      return this;
    }

    while (currentHead.nextElement.nextElement !== null) {
      currentHead = currentHead.nextElement;
    }

    currentHead.nextElement = null;
  }

  deleteValue(value) {
    if (this.isEmpty) return false;
    let currentHead = this.head;

    if (currentHead.data === value) {
      currentHead = currentHead.nextElement;
      return true;
    }

    while (currentHead.nextElement !== null) {
      if (currentHead.nextElement.data === value) {
        currentHead.nextElement = currentHead.nextElement.nextElement;
        return true;
      }

      currentHead = currentHead.nextElement;
    }

    return false;
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
