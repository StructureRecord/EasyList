var Node = /** @class */ (function () {
    function Node(obj, type) {
        var data = obj.data, next = obj.next, previous = obj.previous;
        if (type === 'doubly') {
            this.previous = previous;
        }
        this.data = data;
        this.next = next;
    }
    return Node;
}());
export default Node;
