//NEED TO FINSIH
const MAGIC_NUMBERS = {
    ZERO: 0
}

class Node {
    constructor(data = null, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}
class LinkedList {
    #head = null;
    #tail = null;
    #size = 0;
    constructor(iterables) {
        if(iterables === undefined) return;
        if(iterables && typeof iterables[Symbol.iterator] !== 'function') {
            iterables = new Array(iterables);
        } 
        for(const item of iterables) {
            this.push_back(item);
        }
    }
    
    size() {
        return this.#size;
    }
    
    isEmpty() {
        return this.#size === MAGIC_NUMBERS.ZERO;
    }
    clear() {
        this.#head = this.#tail = null;
        this.#size = 0;
    }
    push_front(value) {
        const n = new Node(value);
        if(!this.#size) {
            this.#head = n;
            this.#tail = n;
        }  else {
        n.next = this.#head;
        this.#head.prev = n;
        }
        this.#head = n;
        this.#size++;
    }
    push_back(value) {
        const n = new Node(value);
        if(!this.#size) {
            this.#head = n;
        } else {
            n.prev = this.#tail;
            this.#tail.next = n;
        }

        this.#tail = n;
        this.#size++;
    }
    pop_front() {
        if(!this.#size) return null;
        const n = this.#head.data;
        if(this.#size > 1) {
            this.#head = this.#head.next;

        } else {
            this.#head = this.#tail = null;
        }
        this.#size--;
        return n;
    }
    pop_back() {
    }
    front() {
    }
    back() {
    }
    at(index) {
    }
    insert(index, value) {
    }
    erase(index) {
    }
    remove(value, equals = Object.is) {
    }
    reverse() {
    }
    sort(compareFn) {
        this.#head = this.mergeSort(this.#head);
    }

    merge(left, rigth) {
        if()
    }

    mergeSort(head) {
        if(this.#size < 2) return head;

        let slow = head;
        let fast = head.next;

        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let mid = slow;
        slow = null;

        this.mergeSort(head);
        this.mergeSort(mid);
        this.merge(head, mid);
    }

    print() {
        let curr = this.#head;

        while(curr) {
            console.log(curr.data);
            curr = curr.next;
        }
    }
  }

  const list = new LinkedList([10, 5, 12, 53, 23]);
console.log(list.print());
