import { LinkedList } from "./LinkedList.js";

let linkedList;

describe("LinkedList", () => {
  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it("is created", () => expect(linkedList).toBeInstanceOf(LinkedList));
  it("should be initially empty", () =>
    expect(linkedList.isEmpty()).toBe(true));

  test("adds 1 + 2 to equal 3", () => {
    expect(3).toBe(3);
  });
});
