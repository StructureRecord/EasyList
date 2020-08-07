var BaseLinkedList = /** @class */ (function () {
    function BaseLinkedList() {
        this.headNode = null;
    }
    Object.defineProperty(BaseLinkedList.prototype, "firstNode", {
        get: function () {
            return this.headNode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseLinkedList.prototype, "lastNode", {
        get: function () {
            if (!this.listSize) {
                return null;
            }
            return this.getNodeElement(this.listSize - 1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseLinkedList.prototype, "listSize", {
        get: function () {
            var currentHead = this.headNode;
            var count = 0;
            while (currentHead) {
                currentHead = currentHead.next;
                count++;
                // for circular linked list
                if (currentHead === this.headNode) {
                    break;
                }
            }
            return count;
        },
        enumerable: false,
        configurable: true
    });
    BaseLinkedList.prototype.checkIndex = function (index) {
        try {
            if (index < 0) {
                throw 'Index should not be less than 0';
            }
            if (index > this.listSize) {
                throw 'Index value is greater than linked list list size';
            }
        }
        catch (err) {
            console.log(err);
            return true;
        }
        return false;
    };
    BaseLinkedList.prototype.clearNodeList = function () {
        this.headNode = null;
    };
    BaseLinkedList.prototype.getNodeElement = function (index) {
        this.checkIndex(index);
        var currentHead = this.headNode;
        var count = 0;
        while (currentHead) {
            if (count === index) {
                return currentHead;
            }
            count++;
            currentHead = currentHead.next;
        }
        return null;
    };
    return BaseLinkedList;
}());
export default BaseLinkedList;
