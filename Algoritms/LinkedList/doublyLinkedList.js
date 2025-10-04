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
            this.#tail = n;
        } else {
            n.prev = this.#tail;
            this.#tail.next = n;
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
            this.#head.prev = null;
        } else {
            this.#head = this.#tail = null;
        }
        this.#size--;
        return n;
    }
    pop_back() {
        if(!this.#head) return undefined;
        if(this.#size === 1) {
            let res = this.#head;
            this.#head = null; 
            this.#tail = null;
            this.#size--;
            return res;
        }

        let res = this.#tail.data;
        this.#tail = this.#tail.prev;
        this.#tail.next = null;
        return res;
    }

    front() {
        if(!this.#head) return undefined;
        return this.#head.data;
    }

    back() {
        if(!this.#head) return undefined;
        return this.#tail.data;
    }

    at(index) {
        let counter = 0;
        let headCpy = this.#head;
        let tailCpy = this.#tail;
        let mid = Math.floor(this.#size / 2); 
        if(index < mid) {
            while(headCpy) {
                if(counter === index) return headCpy.data;
                counter++;
                headCpy = headCpy.next;
            }
        } else {
            counter = this.#size - 1;
            while(tailCpy) {
                if(counter === index) return tailCpy.data;
                counter--;
                tailCpy = tailCpy.prev;
            }
        }
        return undefined;
    }

    insert(index, value) {
        let counter;
        let newN = new Node();
        newN.data = value;
        newN.next = null;
        newN.prev = null;

        if(index === 0) {
            if(this.#head) this.#head.prev = newN;
            newN.next = this.#head;
            this.#head = newN;
            if(this.#size === 0) this.#tail = newN;
            this.#size++;
            return;
        }

        if(index === this.#size) {
            if(this.#size === 0) {
                this.#head = this.#tail = newN;
                this.#size++;
                return;
            }
            newN.prev = this.#tail;
            this.#tail.next = newN;
            this.#tail = newN;
            this.#size++;
            return;
        }

        let mid = Math.floor(this.#size / 2);
        if(index < mid) {
            let headCpy = this.#head;
            counter = 0;
            while(headCpy) {
                if(index - counter === 1) {
                    let nextNode = headCpy.next;
                    newN.next = nextNode;
                    newN.prev = headCpy;
                    if(nextNode) nextNode.prev = newN;
                    this.#size++;
                    return;
                }
                counter++;
                headCpy = headCpy.next;
            }
        } else {
            let tailCpy = this.#tail;
            counter = this.#size - 1;
            while(tailCpy) {
                if(counter - index === 1) {
                    let prevNode = tailCpy.prev;
                    newN.prev = prevNode;
                    newN.next = tailCpy;
                    if(prevNode) prevNode.next = newN;
                    this.#size++;
                    return;
                }
                counter--;
                tailCpy = tailCpy.prev;
            }
        }
        return undefined;
    }

    erase(index) {
        if(!this.#head) return null;
        if(index == 0) {
            let rmvd = this.#head.data;
            this.#head = this.#head.next;
            this.#head.prev = null;
            if(!this.#head) this.#tail = null;
            this.#size--;
            return rmvd;
        }

        if(index == this.#size - 1) {
            let rmvd = this.#tail.data;
            this.#tail = this.#tail.prev;
            this.#tail.next = null;
            if(!this.#tail) this.#head = null;
            this.#size--;
            return rmvd;
        }

        let mid = Math.floor(this.#size / 2);
        let counter = 0;
        let rmvd = 0;
        if(index < mid) {
            let headCpy = this.#head;
            while(headCpy) {
                if(index - counter == 1) {
                    rmvd = headCpy.next.data;
                    headCpy.next = headCpy.next.next;
                    headCpy.next.prev = headCpy;
                    if(!headCpy.next) this.#tail = headCpy;
                    this.#size--;
                    return rmvd;
                }
                headCpy = headCpy.next;
                counter++;
            }
        } else {
            let tailCpy = this.#tail;
            counter = this.#size - 1;
            while(tailCpy) {
                if(counter - index === 1) {
                    rmvd = tailCpy.prev.data;
                    tailCpy.prev = tailCpy.prev.prev;
                    tailCpy.prev.next = tailCpy;
                    if(!tailCpy.prev) this.#head = tailCpy;
                    this.#size--;
                    return rmvd;
                }
                tailCpy = tailCpy.prev;
                counter--;
            }
        }
    }

    remove(value, equals = Object.is) {
        
    }

    reverse() {
    }
    
    sort(compareFn) {
        this.#head = this.mergeSort(this.#head);
    }

    merge(left, rigth) {
        
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
        return this.merge(head, mid);
    }

    // print() {
    //     let curr = this.#head;

    //     while(curr) {
    //         console.log(curr.data);
    //         curr = curr.next;
    //     }
    // }

    print() {
    let curr = this.#head;
    let result = [];
    while(curr) {
        result.push(curr.data);
        curr = curr.next;
    }
    console.log(result.join(' -> '));
}

  }

const list = new LinkedList();

// Insert into empty list
list.insert(0, 10); 
list.print(); // 10

// Insert at front
list.insert(0, 5);  
list.print(); // 5 -> 10

// Insert at back
list.insert(list.size(), 20); 
list.print(); // 5 -> 10 -> 20

// Insert in the middle
list.insert(1, 7);  
list.print(); // 5 -> 7 -> 10 -> 20

list.insert(2, 8);  
list.print(); // 5 -> 7 -> 8 -> 10 -> 20

// Insert near the end
list.insert(4, 15);  
list.print(); // 5 -> 7 -> 8 -> 10 -> 15 -> 20

// Edge case: insert at size again (back)
list.insert(list.size(), 25);  
list.print(); // 5 -> 7 -> 8 -> 10 -> 15 -> 20 -> 25

