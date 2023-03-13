import { LinkedList } from "./LinkedList";

export function removeDuplicates(list) {
  const newList = new LinkedList();
  let currentHead = list.head;
  const found = [];

  while (!list.isEmpty && currentHead !== null) {
    const value = currentHead.data;
    if (!found.includes(value)) {
      found.push(value);
      newList.insertAtTail(value);
    }

    currentHead = currentHead.nextElement;
  }

  return newList;
}
