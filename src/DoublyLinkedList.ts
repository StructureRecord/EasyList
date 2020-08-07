import BaseLinkedList from './BaseLinkedList';
import Node from './LinkedListNode';

export default class DoublyLinkedList extends BaseLinkedList {
  tailNode: Node<T> | null;
  constructor() {
    super();
    this.tailNode = null;
  }

  insertNodeAtStart(data: T): boolean {
    const newNode = new Node({previous: null, data: data, next: null}, 'doubly' );
    if (!this.firstNode) {
      this.headNode = newNode;
      this.tailNode = newNode;
    } else {
      const nextNode = this.headNode;
      this.headNode = new Node({previous: null, data: data, next: nextNode}, 'doubly' );
      nextNode.previous = this.headNode;
    }
    return true;
  }

  insertNodeAtEnd(data: T): boolean {
    if (!this.firstNode) {
      return this.insertNodeAtStart(data);
    } else {
      const newNode = new Node({previous: this.tailNode, data: data, next: null}, 'doubly' );
      this.tailNode.next = newNode;
      this.tailNode = newNode;
    }
    return true;
  }

  insertNodeAtIndex(data: T, index: number): boolean {
    if (this.checkIndex(index)) {
      return false;
    }
    const indexNode = this.getNodeElement(index);
    if (index === 0) {
      return this.insertNodeAtStart(data);
    }
    if (indexNode === this.lastNode) {
      return this.insertNodeAtEnd(data);
    }
    const previousNode = this.getNodeElement(index - 1);
    const newNode = new Node({previous: previousNode, data: data, next: indexNode}, 'doubly' );
    previousNode.next = newNode;
    indexNode.previous = newNode;

    return true;
  }

  deleteFirstNode(): boolean {
    if (!this.firstNode) {
      return false;
    }
    if (!this.firstNode.next) {
      this.clearNodeList();
      return false;
    }
    this.headNode = this.headNode.next;
    this.headNode.previous = null;
    return true;
  }

  deleteLastNode(): boolean {
    if (!this.lastNode) {
      return false;
    }
    if (!this.firstNode.next) {
      this.clearNodeList();
      return false;
    }
    this.tailNode = this.tailNode.previous;
    this.tailNode.next = null;
    return true;
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
    indexNode.previous.next = indexNode.next;
    indexNode.next.previous = indexNode.previous;
    return true;
  }
}
