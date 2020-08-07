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
var CircularLinkedList = /** @class */ (function (_super) {
    __extends(CircularLinkedList, _super);
    function CircularLinkedList() {
        return _super.call(this) || this;
    }
    CircularLinkedList.prototype.insertNodeAtStart = function (data) {
        var newNode = new Node({ data: data, next: null }, 'singly');
        if (!this.listSize) {
            this.headNode = newNode;
            this.headNode.next = this.headNode;
        }
        else {
            newNode.next = this.headNode;
            this.lastNode.next = newNode;
            this.headNode = newNode;
        }
        return true;
    };
    CircularLinkedList.prototype.insertNodeAtEnd = function (data) {
        var insertionNode = new Node({ data: data, next: null }, 'singly');
        if (!this.listSize) {
            return this.insertNodeAtStart(data);
        }
        insertionNode.next = this.headNode;
        this.lastNode.next = insertionNode;
        return true;
    };
    CircularLinkedList.prototype.insertNodeAtIndex = function (data, index) {
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
        var newNode = new Node({ data: data, next: null }, 'singly');
        newNode.next = previousNode.next;
        previousNode.next = newNode;
        return true;
    };
    CircularLinkedList.prototype.deleteFirstNode = function () {
        if (!this.firstNode) {
            return false;
        }
        if (this.listSize === 1) {
            this.clearNodeList();
            return true;
        }
        if (this.headNode) {
            this.lastNode.next = this.headNode.next;
            this.headNode = this.headNode.next;
        }
        return true;
    };
    CircularLinkedList.prototype.deleteLastNode = function () {
        if (!this.lastNode) {
            return false;
        }
        if (this.listSize === 1) {
            this.clearNodeList();
            return false;
        }
        var previousNode = this.getNodeElement(this.listSize - 2);
        previousNode.next = this.headNode;
        return true;
    };
    CircularLinkedList.prototype.deleteNodeAtIndex = function (index) {
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
    return CircularLinkedList;
}(BaseLinkedList));
export default CircularLinkedList;
