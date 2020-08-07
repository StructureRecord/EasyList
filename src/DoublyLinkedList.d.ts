import BaseLinkedList from './BaseLinkedList';
import Node from './LinkedListNode';
export default class DoublyLinkedList<T> extends BaseLinkedList<T> {
    tailNode: Node<T> | null | undefined;
    constructor();
    insertNodeAtStart(data: T): boolean;
    insertNodeAtEnd(data: T): boolean;
    insertNodeAtIndex(data: T, index: number): boolean;
    deleteFirstNode(): boolean;
    deleteLastNode(): boolean;
    deleteNodeAtIndex(index: number): boolean;
}
