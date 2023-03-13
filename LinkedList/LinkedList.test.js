import { LinkedList } from "./LinkedList.js";

let linkedList;

describe("LinkedList", () => {
  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it("is created", () => expect(linkedList).toBeInstanceOf(LinkedList));
  it("should be initially empty", () => expect(linkedList.isEmpty).toBe(true));

  it("insertAtHead", () => {
    linkedList.insertAtHead(0);
    linkedList.insertAtHead(1);
    linkedList.insertAtHead(2);

    expect(linkedList.printList()).toEqual("2 -> 1 -> 0");
  });

  it("insertAtTail", () => {
    linkedList.insertAtTail(0);
    linkedList.insertAtTail(1);
    linkedList.insertAtTail(2);

    expect(linkedList.printList()).toEqual("0 -> 1 -> 2");
  });

  it("search", () => {
    linkedList.insertAtTail(0);
    linkedList.insertAtTail(1);
    linkedList.insertAtTail(2);

    const results = [
      linkedList.search(1),
      linkedList.search(2),
      linkedList.search(11),
      linkedList.search(0),
    ];
    
    expect(results).toEqual([true, true, false, true]);
  });

  it("deleteAtHead", () => {
    linkedList.insertAtTail(0);
    linkedList.insertAtTail(1);
    linkedList.insertAtTail(2);
    expect(linkedList.printList()).toEqual("0 -> 1 -> 2");

    linkedList.deleteAtHead();
    linkedList.deleteAtHead();
    expect(linkedList.printList()).toEqual("2");
  });

  it("deleteValue", () => {
    linkedList.insertAtTail(0);
    linkedList.insertAtTail(1);
    linkedList.insertAtTail(2);
    expect(linkedList.printList()).toEqual("0 -> 1 -> 2");

    linkedList.deleteValue(1);
    expect(linkedList.printList()).toEqual("0 -> 2");

    linkedList.deleteValue(6);
    linkedList.deleteValue(-6);
    expect(linkedList.printList()).toEqual("0 -> 2");

    linkedList.deleteValue(2);
    expect(linkedList.printList()).toEqual("0");

  });
});
