var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import BaseLinkedList from './BaseLinkedList';
import Node from './LinkedListNode';
var SinglyLinkedList = /** @class */ (function (_super) {
    __extends(SinglyLinkedList, _super);
    function SinglyLinkedList() {
        return _super.call(this) || this;
    }
    SinglyLinkedList.prototype.insertNodeAtStart = function (data) {
        var newNode = new Node({ data: data, next: undefined }, 'singly');
        if (!this.listSize) {
            this.headNode = newNode;
        }
        else {
            this.headNode = new Node({ data: data, next: this.headNode }, 'singly');
        }
        return true;
    };
    SinglyLinkedList.prototype.insertNodeAtEnd = function (data) {
        var insertionNode = new Node({ data: data, next: undefined }, 'singly');
        if (this.headNode === null) {
            this.headNode = insertionNode;
            return true;
        }
        this.lastNode.next = insertionNode;
        return true;
    };
    SinglyLinkedList.prototype.insertNodeAtIndex = function (data, index) {
        if (this.checkIndex(index)) {
            return false;
        }
        if (index === 0) {
            return this.insertNodeAtStart(data);
        }
        if (index === this.listSize - 1) {
            return this.insertNodeAtEnd(data);
        }
        var previousNode = this.getNodeElement(index - 1);
        var newNode = new Node({ data: data, next: undefined }, 'singly');
        newNode.next = previousNode.next;
        previousNode.next = newNode;
        return true;
    };
    SinglyLinkedList.prototype.deleteFirstNode = function () {
        if (!this.firstNode) {
            return false;
        }
        if (this.listSize === 1) {
            this.clearNodeList();
            return false;
        }
        this.headNode = this.headNode.next;
        return true;
    };
    SinglyLinkedList.prototype.deleteLastNode = function () {
        if (!this.lastNode) {
            return false;
        }
        if (!this.firstNode.next) {
            this.clearNodeList();
            return true;
        }
        var previousNode = this.getNodeElement(this.listSize - 2);
        previousNode.next = null;
        return true;
    };
    SinglyLinkedList.prototype.deleteNodeAtIndex = function (index) {
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
        var indexNode = this.getNodeElement(index);
        if (indexNode === this.lastNode) {
            return this.deleteLastNode();
        }
        var previousNode = this.getNodeElement(index - 1);
        previousNode.next = previousNode.next.next;
        return true;
    };
    return SinglyLinkedList;
}(BaseLinkedList));
export default SinglyLinkedList;
