export default class Node {
  // data: Record<'a', string> = {a: 'string'};
  data: any;
  next: any;
  previous: any;
  constructor(obj: any, type: string) {
    const {data, next, previous} = obj;
    if (type === 'doubly') {
      this.previous = previous;
    }
    this.data = data;
    this.next = next;
  }
}
