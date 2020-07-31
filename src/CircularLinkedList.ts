import BaseLinkedList from './BaseLinkedList';
import LinkedListNode from './LinkedListNode';
export default class CircularLinkedList extends BaseLinkedList {
  constructor() {
    super();
  }

  insertNodeAtStart(data: any) {
    const newNode = new LinkedListNode({data: data, next: null}, 'circularList');
    if (!this.listSize) {
      this.headNode = newNode;
      this.headNode.next = this.headNode;
    } else {
      newNode.next = this.headNode;
      this.lastNode.next = newNode;
      this.headNode = newNode;
    }
    return this.headNode;
  }

  insertNodeAtEnd(data: any) {
    const insertionNode = new LinkedListNode({data: data, next: null}, 'circularList');
    if (!this.listSize) {
      this.insertNodeAtStart(data);
      return;
    }

    insertionNode.next = this.headNode;
    this.lastNode.next = insertionNode;
    return this.headNode;
  }

  insertNodeAtIndex(data: any, index: number) {
    if (this.checkIndex(index)) {
      return;
    }
    if (index === 0) {
      return this.insertNodeAtStart(data);
    }
    if (index === this.listSize - 1) {
      return this.insertNodeAtEnd(data);
    }
    const previousNode = this.getNodeElement(index - 1);
    const newNode = new LinkedListNode({data: data, next: null}, 'circularList');
    newNode.next = previousNode.next;
    previousNode.next = newNode;

    return this.headNode;
  }

  deleteFirstNode() {
    if (!this.firstNode) {
      return;
    }
    if (this.listSize === 1) {
      this.clearNodeList();
      return;
    }
    this.lastNode.next = this.headNode.next;
    this.headNode = this.headNode.next;
    return this.headNode;
  }

  deleteLastNode() {
    if (!this.lastNode) {
      return;
    }
    if (this.listSize === 1) {
      this.clearNodeList();
      return;
    }
    const previousNode = this.getNodeElement(this.listSize - 2);
    previousNode.next = this.headNode;
    return this.headNode;
  }

  deleteNodeAtIndex(index: number) {
    if (this.checkIndex(index)) {
      return;
    }
    if (index === 0) {
      return this.deleteFirstNode();
    }
    if ((index && this.listSize) === 1) {
      console.log('No element present at index position 1');
      return;
    }
    const indexNode = this.getNodeElement(index);
    if (indexNode === this.lastNode) {
      this.deleteLastNode();
      return;
    }
    const previousNode = this.getNodeElement(index - 1);
    previousNode.next = previousNode.next.next;
    return this.headNode;
  }
}
