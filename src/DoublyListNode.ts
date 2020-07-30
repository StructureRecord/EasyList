export default class LinkedListNode {
    data: any;
    next: any;
    previous: any;
    constructor(previous: any, data: any, next: any) {
      this.data = data;
      this.next = next;
      this.previous = previous;
    }
  }