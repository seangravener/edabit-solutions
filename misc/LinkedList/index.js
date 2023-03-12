// Demo of a singly linked-list

import { Node } from "./Node.js";
import { LinkedList } from "./LinkedList.js";

let list = new LinkedList();
console.log(list.isEmpty());


for (var i = 0; i < 10; i++) {
  list = list.insertAtHead(i);
}

console.log(list);
list.printList()