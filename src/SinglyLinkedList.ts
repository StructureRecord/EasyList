import BaseLinkedList from './BaseLinkedList';
import Node from './LinkedListNode';
export default class SinglyLinkedList extends BaseLinkedList {
  constructor() {
    super();
  }

  insertNodeAtStart(data: any): boolean {
    const newNode = new Node({data: data, next: null}, 'singly');
    if (!this.listSize) {
      this.headNode = newNode;
    } else {
      this.headNode = new Node(data, this.headNode);
    }
    return true;
  }

  insertNodeAtEnd(data: any): boolean {
    const insertionNode = new Node({data: data, next: null}, 'singly');
    if (this.headNode === null) {
      this.headNode = insertionNode;
      return this.headNode;
    }

    this.lastNode.next = insertionNode;
    return this.headNode;
  }

  insertNodeAtIndex(data: any, index: number): boolean {
    if (this.checkIndex(index)) {
      return false;
    }
    if (index === 0) {
      return this.insertNodeAtStart(data);
    }
    if (index === this.listSize - 1) {
      return this.insertNodeAtEnd(data);
    }
    const previousNode = this.getNodeElement(index - 1);
    const newNode = new Node({data: data, next: null}, 'singly');
    newNode.next = previousNode.next;
    previousNode.next = newNode;

    return true;
  }

  deleteFirstNode(): boolean {
    if (!this.firstNode) {
      return false;
    }
    if (this.listSize === 1) {
      this.clearNodeList();
      return false;
    }
    this.headNode = this.headNode.next;
    return true;
  }

  deleteLastNode(): boolean {
    if (!this.lastNode) {
      return false;
    }
    if (!this.firstNode.next) {
      this.clearNodeList();
      return true;
    }
    const previousNode = this.getNodeElement(this.listSize - 2);
    previousNode.next = null;
    return this.headNode;
  }

  deleteNodeAtIndex(index: number): boolean {
    if (this.checkIndex(index)) {
      return false;
    }
    if (index === 0) {
      return this.deleteFirstNode();
    }
    if ((index && this.listSize) === 1) {
      console.log('No element present at index position 1');
      return false;
    }
    const indexNode = this.getNodeElement(index);
    if (indexNode === this.lastNode) {
      return this.deleteLastNode();
    }
    const previousNode = this.getNodeElement(index - 1);
    previousNode.next = previousNode.next.next;
    return true;
  }
}
