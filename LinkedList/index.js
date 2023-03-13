// Demo of a singly linked-list
import { LinkedList } from "./LinkedList.js";

let headList = new LinkedList();
let tailList = new LinkedList();
console.log(headList.isEmpty, tailList.isEmpty);

for (var i = 0; i < 10; i++) {
  headList = headList.insertAtHead(i);
}

for (var i = 0; i < 10; i++) {
  tailList = tailList.insertAtTail(i);
}

console.log(headList.printList());
console.log(tailList.printList());
