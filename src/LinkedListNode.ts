export default class Node<T> {
  data: T;
  next?: Node<T>;
  previous?: Node<T>;
  constructor(obj: Node<T>, type: string) {
    const {data, next, previous} = obj;
    if (type === 'doubly') {
      this.previous = previous;
    }
    this.data = data;
    this.next = next;
  }
}
