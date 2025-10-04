//NEED TO FINISH (remove)
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class SinglyLinkedList {
    #size;
    #head;
    #tail;
    constructor(iterables = null) {
        this.#head = null;
        this.#tail = null;
        this.#size = 0;

        if(iterables) {
            for(const elem of iterables) {
                this.push_back(elem);
            }
        }




    }

    size() {
        return this.#size
    }

    isEmpty() {
        if(this.#size === 0) return true;
        return false;
    }

    clear() {
        this.#head = null;
        this.#tail = null;
        this.#size = 0;
    }

    //FRONT ACCESS
    front() {
        if(!this.#head) {
            return undefined;
        }
        return this.#head.data;
    }

    //PUSH & POP
    push_back(elem) {
        let newN = new Node(elem);
        if(!this.#head) {
        this.#head = newN;
        this.#tail = newN;
        } else {
        this.#tail.next = newN;
        this.#tail = newN;
        }
        this.#size++;
        
        if(true) {
            console.log(newN);
            
        }
    }

    push_front(elem) {
        let newN = new Node(elem);
        if(!this.#head) {
            this.#head = newN;
            this.#tail = newN;
        } else {
        let headCpy = this.#head;
        this.#head = newN;
        this.#head.next = headCpy;
        }
        this.#size++;
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

        let headCpy = this.#head;

        
        while(headCpy.next !== this.#tail) {
            headCpy = headCpy.next;
        }
        let res = this.#tail.data;
        this.#tail = headCpy;
        headCpy.next = null;   
        this.#tail.next = null;
        this.#size--;
        return res;
    }

    pop_front() {
        if(!this.#head) return null;
        const n = this.#head.data;
        if(this.#size > 1) {
            this.#head = this.#head.next;
        } else {
            this.#head = this.#tail = null;
        }
        this.#size--;
        return n;
    }

    //RANDOM-LIKE OPERATIONS O(n)
    at(idx) {
        let counter = 0;
        let headCpy = this.#head;
        while(headCpy) {
            if(counter === idx) return headCpy.data;
            headCpy = headCpy.next;
            counter++
        }
        return null;
    }

    insert(idx, value) {
        let counter = 0;
        let headCpy = this.#head;
        let newN = new Node();
        newN.data = value;
        newN.next = null;
        if(idx === 0) {
            this.#head = newN;
            this.#head.next = headCpy;
            this.#size++;
            return;
        } 
        if(idx === this.#size) {
            let tailCpy = this.#tail;
            tailCpy.next = newN;
            this.#tail = newN;
            this.#tail.next = null;
            this.#size++;
            return;
        }
        while(headCpy) {
            if(idx - counter === 1) {
                newN.next = headCpy.next;
                headCpy.next = newN;
                this.#size++;
                return;
            }
            counter++;
            headCpy = headCpy.next;
        }
    }

    erase(idx) {
        if(!this.#head) return null;
        if(idx === 0) {
            let rmvd = this.#head.data;
            this.#head = this.#head.next;
            if(!this.#head) this.#tail = null;
            this.#size--;
            return rmvd;
        }
        let headCpy = this.#head;
        let counter = 0;
        while(headCpy) {
            if(idx - counter === 1) {
                let rmvd = headCpy.next.data;
                headCpy.next = headCpy.next.next;
                if(!headCpy.next) this.#tail = headCpy;
                this.#size--;
                return rmvd;
            }
            headCpy = headCpy.next;
            counter++;
        }
        return undefined;
    }

    remove(value, equals) {
        let headCpy = this.#head;
        let prev = null;
        let curr = this.#head;
        while(curr) {
            if(equals) {
                if(equals(curr.data, value)) {
                    prev.next = curr.next;
                } else {
                    if(value === curr.data) {
                        prev.next = curr.next;
                    }
                }
            }
            prev = curr;
            curr = curr.next;
            this.#size--;
        }
        return;
    }

    //ALGORITHMS

    reverse() {
        if(this.#size <= 1) return;
        let headCpy = this.#head;
        let prev = null;
        let n;

        while(headCpy) {
            n = headCpy.next;
            headCpy.next = prev;
            prev = headCpy;
            headCpy = n;
        }
        this.#tail = this.#head;
        this.#head = prev;
        return this.#head;
    }

    merge(left, right) {
        if(!left) return right;
        if(!right) return   
        let dummy = new Node(null);
        let curr = dummy;

        while(left && right) {
            if(left.data <= right.data) {
                curr.next = left;
                left = left.next;
            } else {
                curr.next = right;
                right = right.next;
            }
        }

        if(left) {
            curr.next = left;
        }
        if(right) {
            curr.next = right;
        }
        return dummy.next;
    }

    mergeSort(head) {
        if(!head || !head.next) return head;
        let fast = head.next;
        let slow = head;

        while(fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }

        let mid = slow.next;
        slow.next = null;

        const left = this.mergeSort(head);
        const right = this.mergeSort(mid);

        return this.merge(left, right)
    }
    sort() {
        if(this.#size < 2) return;
        this.#head = this.mergeSort(this.#head);
    }
}


