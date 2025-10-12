class Queue {
    #arr;
    #front = 0;
    #rear = 0;
    #size = 0;
    #capacity = 0;

    constructor(cap = 6) {
        this.#capacity = cap;
        this.#arr = new Array(this.#capacity).fill(null);
    }

    isEmpty() {
        if(!this.#size) return true;
        return false;
    }

    isFull() {
        if(this.#size === this.#capacity) return true;
        return false;
    }

    getSize() {
        return this.#size;
    }

    enqueue(val) {
        if(this.isFull()) throw new Error("Queue is full");
        this.#arr[this.#rear] = val;
        this.#rear = (this.#rear + 1) % this.#capacity;
        this.#arr.length = ++this.#size;
    }

    dequeue() {
        if(this.isEmpty()) throw new Error("datark a");
        let res = this.#arr[this.#front];
        for(let i = 0; i < this.#arr.size; i++) {
            this.#arr[i] = this.#arr[i + 1];
        }
        this.#arr.length = --this.#size;
        return res;
    }

    print() {
        for(let i of this.#arr) {
            console.log(i);
            
        }
    }
}
