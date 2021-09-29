var MinIntHeap = /** @class */ (function () {
    function MinIntHeap(items) {
        this.items = [];
        this.items = items;
    }
    MinIntHeap.prototype.hasLeftChild = function (index) {
        return this.getLeftChildIndex(index) < this.items.length;
    };
    MinIntHeap.prototype.hasRightChild = function (index) {
        return this.getRightChildIndex(index) < this.items.length;
    };
    MinIntHeap.prototype.hasParent = function (index) {
        return this.getParentIndex(index) >= 0;
    };
    MinIntHeap.prototype.getParentIndex = function (index) {
        return Math.ceil(index / 2) - 1;
    };
    MinIntHeap.prototype.getLeftChildIndex = function (index) {
        return index * 2 + 1;
    };
    MinIntHeap.prototype.getRightChildIndex = function (index) {
        return index * 2 + 2;
    };
    MinIntHeap.prototype.swap = function (i1, i2, arr) {
        var temp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = temp;
    };
    MinIntHeap.prototype.peek = function () {
        if (this.items.length === 0)
            throw new Error();
        return this.items[0];
    };
    MinIntHeap.prototype.poll = function () {
        if (this.items.length === 0)
            throw new Error();
        var item = this.items[0];
        this.items[0] = this.items[this.items.length - 1];
        this.items.pop();
        this.heapifyDown();
        return item;
    };
    MinIntHeap.prototype.add = function (item) {
        this.items.push(item);
        this.heapifyUp();
    };
    MinIntHeap.prototype.heapifyDown = function () {
        var index = 0;
        while (this.hasLeftChild(index)) {
            if (this.items[index] > this.items[this.getLeftChildIndex(index)]) {
                this.swap(index, this.getLeftChildIndex(index), this.items);
                index = this.getLeftChildIndex(index);
                continue;
            }
            if (this.items[index] > this.items[this.getRightChildIndex(index)]) {
                this.swap(index, this.getRightChildIndex(index), this.items);
                index = this.getRightChildIndex(index);
                continue;
            }
            break;
        }
    };
    MinIntHeap.prototype.heapifyUp = function () {
        var index = this.items.length - 1;
        while (this.hasParent(index) &&
            this.items[this.getParentIndex(index)] > this.items[index]) {
            this.swap(index, this.getParentIndex(index), this.items);
            index = this.getParentIndex(index);
        }
    };
    return MinIntHeap;
}());
var heap = new MinIntHeap([10, 15, 20, 17, 25, 1]);
heap.poll();
console.log(heap);
