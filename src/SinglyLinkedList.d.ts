import BaseLinkedList from './BaseLinkedList';
export default class SinglyLinkedList<T> extends BaseLinkedList<T> {
    constructor();
    insertNodeAtStart(data: T): boolean;
    insertNodeAtEnd(data: T): boolean;
    insertNodeAtIndex(data: T, index: number): boolean;
    deleteFirstNode(): boolean;
    deleteLastNode(): boolean;
    deleteNodeAtIndex(index: number): boolean;
}
