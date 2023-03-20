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

export function union(list1, list2) {
  if (list1.isEmpty) {
    return list2;
  } else if (list2.isEmpty) {
    return list1;
  }

  let currentHead = list1.head;

  while (currentHead.nextElement !== null) {
    currentHead = currentHead.nextElement;
  }

  currentHead.nextElement = list2.head;
  return list1;
}
