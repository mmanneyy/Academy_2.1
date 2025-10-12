class Stack {
    #size = 0;
    #arr = [];
    #capacity = 0;

    constructor(cap = 6) {
        this.#capacity = cap;
    }

    isEmpty() {
        if(!this.#size) return true;
        return false;
    }

    isFull() {
        if(this.#size === this.#capacity) return true;
        return false;
    }

    _push(val) {
        if(this.isFull()) {
            throw new Error("Maximum size exceeded");
        }
        this.#arr.push(val);
        this.#size++;
    }

    _pop() {
        if(this.isEmpty()) {
            throw new Error("Stack underflow");
        }
        let res = this.#arr[this.#size - 1];
        this.#size--;
        this.#arr.length = this.#size;
        return res;
    }

    print() {
        for(let i of this.#arr) {
            console.log(i);
            
        }
    }
}

let arr = new Stack();
