import BaseLinkedList from './BaseLinkedList';
import LinkedListNode from './LinkedListNode';

export default class DoublyLinkedList extends BaseLinkedList {
  tailNode: any;
  constructor() {
    super();
    this.tailNode = null;
  }

  insertNodeAtStart(data: any) {
    const newNode = new LinkedListNode({previous: null, data: data, next: null}, 'doublyList' );
    if (!this.firstNode) {
      this.headNode = newNode;
      this.tailNode = newNode;
    } else {
      const nextNode = this.headNode;
      this.headNode = new LinkedListNode({previous: null, data: data, next: nextNode}, 'doublyList' );
      nextNode.previous = this.headNode;
    }
    return this.headNode;
  }

  insertNodeAtEnd(data: any) {
    if (!this.firstNode) {
      return this.insertNodeAtStart(data);
    } else {
      const newNode = new LinkedListNode({previous: this.tailNode, data: data, next: null}, 'doublyList' );
      this.tailNode.next = newNode;
      this.tailNode = newNode;
    }
    return this.headNode;
  }

  insertNodeAtIndex(data: any, index: number) {
    if (this.checkIndex(index)) {
      return;
    }
    const indexNode = this.getNodeElement(index);
    if (index === 0) {
      return this.insertNodeAtStart(data);
    }
    if (indexNode === this.lastNode) {
      return this.insertNodeAtEnd(data);
    }
    const previousNode = this.getNodeElement(index - 1);
    const newNode = new LinkedListNode({previous: previousNode, data: data, next: indexNode}, 'doublyList' );
    previousNode.next = newNode;
    indexNode.previous = newNode;

    return this.headNode;
  }

  deleteFirstNode() {
    if (!this.firstNode) {
      return;
    }
    if (!this.firstNode.next) {
      this.clearNodeList();
      return;
    }
    this.headNode = this.headNode.next;
    this.headNode.previous = null;
    return this.headNode;
  }

  deleteLastNode() {
    if (!this.lastNode) {
      return;
    }
    if (!this.firstNode.next) {
      this.clearNodeList();
      return;
    }
    this.tailNode = this.tailNode.previous;
    this.tailNode.next = null;
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
    indexNode.previous.next = indexNode.next;
    indexNode.next.previous = indexNode.previous;
    return this.headNode;
  }
}
