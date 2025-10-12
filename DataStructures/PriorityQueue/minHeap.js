class PriorityQueue {
    constructor() {
      this.heap = [];
    }

    // helpers
    _parent(i) {
      return Math.floor((i - 1) / 2);
    }

    _left(i) {
      return 2 * i + 1;
    }

    _right(i) {
      return 2 * i + 2;
    }

    _shiftUp(i) {
        while(i > 0) {
            let parent = this._parent(i);
            if(this.heap[i] < this.heap[parent]) {
                [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
                i = parent;
            } else {
            break;
            }
        } 
    }

    _shiftDown(i) {
        const n = this.heap.length;

        while(true) {
            const left = this._left(i);
            const right = this._right(i);
            let smallest = i;

            if(left < n && this.heap[left] < this.heap[smallest]) smallest = left;
            if(right < n && this.heap[right] < this.heap[smallest]) smallest = right;

            if(i !== smallest) {
                [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
                i = smallest;
            } else {
                break;
            }
        }
    }

    // interfaces

    size() {
      return this.heap.length;
    }
    empty() {
      return this.heap.length === 0;
    }

    push(elem) {
      this.heap.push(elem);
      this._shiftUp(this.heap.length - 1);
    }

    peek() {
      return this.heap[0];
    }

    pop() {
        if(this.empty()) throw new Error("datark a");
        let root = this.heap[0];
        let last = this.heap.pop();

        if(!this.empty()) {
            this.heap[0] = last;
            this._shiftDown(0);
        }
        return root;
    }

    print() {
      console.log(`[${this.heap}]`);
    }
}
