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
var DoublyLinkedList = /** @class */ (function (_super) {
    __extends(DoublyLinkedList, _super);
    function DoublyLinkedList() {
        var _this = _super.call(this) || this;
        _this.tailNode = null;
        return _this;
    }
    DoublyLinkedList.prototype.insertNodeAtStart = function (data) {
        var newNode = new Node({ previous: undefined, data: data, next: undefined }, 'doubly');
        if (!this.firstNode) {
            this.headNode = newNode;
            this.tailNode = newNode;
        }
        else {
            var nextNode = this.headNode;
            this.headNode = new Node({ previous: undefined, data: data, next: nextNode }, 'doubly');
            nextNode.previous = this.headNode;
        }
        return true;
    };
    DoublyLinkedList.prototype.insertNodeAtEnd = function (data) {
        if (!this.firstNode) {
            return this.insertNodeAtStart(data);
        }
        else {
            var newNode = new Node({ previous: this.tailNode, data: data, next: null }, 'doubly');
            this.tailNode.next = newNode;
            this.tailNode = newNode;
        }
        return true;
    };
    DoublyLinkedList.prototype.insertNodeAtIndex = function (data, index) {
        if (this.checkIndex(index)) {
            return false;
        }
        var indexNode = this.getNodeElement(index);
        if (index === 0) {
            return this.insertNodeAtStart(data);
        }
        if (indexNode === this.lastNode) {
            return this.insertNodeAtEnd(data);
        }
        var previousNode = this.getNodeElement(index - 1);
        var newNode = new Node({ previous: previousNode, data: data, next: indexNode }, 'doubly');
        previousNode.next = newNode;
        indexNode.previous = newNode;
        return true;
    };
    DoublyLinkedList.prototype.deleteFirstNode = function () {
        if (!this.firstNode) {
            return false;
        }
        if (!this.firstNode.next) {
            this.clearNodeList();
            return false;
        }
        this.headNode = this.headNode.next;
        this.headNode.previous = null;
        return true;
    };
    DoublyLinkedList.prototype.deleteLastNode = function () {
        if (!this.lastNode) {
            return false;
        }
        if (!this.firstNode.next) {
            this.clearNodeList();
            return false;
        }
        this.tailNode = this.tailNode.previous;
        this.tailNode.next = null;
        return true;
    };
    DoublyLinkedList.prototype.deleteNodeAtIndex = function (index) {
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
        indexNode.previous.next = indexNode.next;
        indexNode.next.previous = indexNode.previous;
        return true;
    };
    return DoublyLinkedList;
}(BaseLinkedList));
export default DoublyLinkedList;
