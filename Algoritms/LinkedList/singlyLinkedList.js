//NEED TO FINISH
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
        let res = 0;
        if(!this.#head) return undefined;
        if(this.#size === 1) {
            res = this.#head;
            this.#head = null;
            this.#tail = null;
            this.#size--;
            return res;
        }

        let headCpy = this.#head;

        while(headCpy) { 
            if(headCpy.next === this.#tail) {
                let res = this.#tail.data;
                this.#tail = headCpy;
                headCpy.next = null;   
                this.#tail.next = null;
            }
        }
        return res;
    }

    pop_front() {

    }


}


