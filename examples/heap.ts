class MinIntHeap {
  constructor(items: number[]) {
    this.items = items;
  }

  items: number[] = [];

  hasLeftChild(index): boolean {
    return this.getLeftChildIndex(index) < this.items.length;
  }
  hasRightChild(index): boolean {
    return this.getRightChildIndex(index) < this.items.length;
  }

  hasParent(index): boolean {
    return this.getParentIndex(index) >= 0;
  }

  getParentIndex(index: number): number {
    return Math.ceil(index / 2) - 1;
  }
  getLeftChildIndex(index: number): number {
    return index * 2 + 1;
  }
  getRightChildIndex(index: number): number {
    return index * 2 + 2;
  }

  swap(i1: number, i2: number, arr: number[]): void {
    const temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
  }

  peek(): number {
    if (this.items.length === 0) throw new Error();
    return this.items[0];
  }

  poll(): number {
    if (this.items.length === 0) throw new Error();
    const item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.heapifyDown();
    return item;
  }

  add(item: number): void {
    this.items.push(item);
    this.heapifyUp();
  }

  heapifyDown() {
    let index = 0;
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
  }

  heapifyUp() {
    let index = this.items.length - 1;
    while (
      this.hasParent(index) &&
      this.items[this.getParentIndex(index)] > this.items[index]
    ) {
      this.swap(index, this.getParentIndex(index), this.items);
      index = this.getParentIndex(index);
    }
  }
}

const heap = new MinIntHeap([10, 15, 20, 17, 25, 1]);

heap.poll();

console.log(heap);
