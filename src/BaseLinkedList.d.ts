import Node from './LinkedListNode';
export default class BaseLinkedList<T> {
    headNode: Node<T> | null | undefined;
    constructor();
    get firstNode(): Node<T> | null | undefined;
    get lastNode(): null | Node<T>;
    get listSize(): number;
    checkIndex(index: number): boolean;
    clearNodeList(): void;
    getNodeElement(index: number): Node<T> | null;
}
