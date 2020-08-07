declare class Node<T> {
    data: T;
    next?: Node<T> | null;
    previous?: Node<T> | null;
    constructor(obj: Node<T>, type: string);
}
export default Node;
