/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-function */
export default class BaseLinkedList {
  headNode: any;
  constructor(headNode = null) {
    this.headNode = headNode;
  }

  get firstNode(): any {
    return this.headNode;
  }

  get lastNode() {
    if (!this.listSize) {
      return;
    }
    return this.getNodeElement(this.listSize - 1);
  }

  get listSize() {
    let currentHead = this.headNode;
    let count = 0;
    while (currentHead) {
      currentHead = currentHead.next;
      count++;
    }
    return count;
  }

  checkIndex(index: number) {
    try {
      if (index < 0) {
        throw 'Index should not be less than 0';
      }
      if (index > this.listSize) {
        throw 'Index value is greater than linked list list size';
      }
    } catch (err) {
      console.log(err);
      return true;
    }
  }

  clearNodeList(): void {
    this.headNode = null;
  }

  getNodeElement(index: number) {
    this.checkIndex(index);
    let currentHead = this.headNode;
    let count = 0;
    while (currentHead) {
      if (count === index) {
        return currentHead;
      }
      count++;
      currentHead = currentHead.next;
    }
    return null;
  }

  insertNode = (data: any, index: number) => {}

  deleteNode = (index: number) => {}

  insertNodeAtStart(data: any) {}

  insertNodeAtEnd(data: any) {}

  insertNodeAtIndex(data: any, index: number) {}

  deleteFirstNode() {}

  deleteLastNode() {}

  deleteNodeAtIndex(index: number) {}
}
