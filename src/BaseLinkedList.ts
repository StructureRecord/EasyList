import Node from './LinkedListNode';
export default class BaseLinkedList<T> {
  headNode: Node<T> | null | undefined;
  constructor() {
    this.headNode = null;
  }

  get firstNode(): Node<T> | null | undefined {
    return this.headNode;
  }

  get lastNode(): null | Node<T>  {
    if (!this.listSize) {
      return null;
    }
    return this.getNodeElement(this.listSize - 1);
  }

  get listSize(): number {
    let currentHead = this.headNode;
    let count = 0;
    while (currentHead) {
      currentHead = currentHead.next;
      count++;
      // for circular linked list
      if (currentHead === this.headNode) {
        break;
      }
    }
    return count;
  }

  checkIndex(index: number): boolean {
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
    return false;
  }

  clearNodeList(): void {
    this.headNode = null;
  }

  getNodeElement(index: number): Node<T> | null {
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

}
