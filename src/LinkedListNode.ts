class Node<T> {
  data: T;
  next?: Node<T> | null;
  previous?: Node<T> | null;
  constructor(obj: Node<T>, type: string) {
    const {data, next, previous} = obj;
    if (type === 'doubly') {
      this.previous = previous;
    }
    this.data = data;
    this.next = next;
  }
}

export default Node;
