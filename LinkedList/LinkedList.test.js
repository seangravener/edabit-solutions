import { LinkedList } from "./LinkedList.js";

let linkedList;

describe("LinkedList", () => {
  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it("is created", () => expect(linkedList).toBeInstanceOf(LinkedList));
  it("should be initially empty", () =>
    expect(linkedList.isEmpty).toBe(true));

  it("insertAtHead", () => {
    linkedList.insertAtHead(0);
    linkedList.insertAtHead(1);
    linkedList.insertAtHead(2);

    expect(linkedList.printList()).toBe("2 -> 1 -> 0");
  });

  it("insertAtTail", () => {
    linkedList.insertAtTail(0);
    linkedList.insertAtTail(1);
    linkedList.insertAtTail(2);

    expect(linkedList.printList()).toBe("0 -> 1 -> 2");
  });
});
