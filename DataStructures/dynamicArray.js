class DArray {
  #size = 0;
  #capacity = 0;
  #arr = null;
  #CAP_EXPONENT = 2;

  constructor(cap = 0) {
    this.#capacity = cap > 0 ? cap : 1;
    // this.#capacity = cap;
    this.#arr = new Uint32Array(this.#capacity);
  }

  size() {
    return this.#size;
  }

  capacity() {
    return this.#capacity;
  }

  empty() {
    if(this.#size === 0) return true;
    return false;
  }
  resize(new_cap, fill = 0) {
    const tmp = new Uint32Array(new_cap);
    for (let i = 0; i < this.#size; ++i) {
      tmp[i] = this.#arr[i];
    }

    for (let i = this.#size; i < new_cap; ++i) {
      tmp[i] = fill;
    }
    this.#capacity = new_cap;

    this.#arr = tmp;
  }

  reserve(new_cap) {
    if(new_cap > this.#capacity) {
        let tmp = new Uint32Array(new_cap);
        for(let i = 0; i < this.#size; i++) {
            tmp[i] = this.#arr[i];
        }
        this.#arr = tmp;
        this.#capacity = new_cap;
    }
  }

  shrinkToFit() {
    const tmp = new Uint32Array(this.#size);
    for(let i = 0; i < this.#size; i++) {
        tmp[i] = this.#arr[i];
    }
    this.#arr = tmp;
    this.#capacity = this.#size;
  }

  clear() {
    this.#size = 0;
  }

  at(i) {
    return this.#arr[i];
  }

  set(i, value) {
    this.#arr[i] = value;
  }

  front() {
    return this.#arr[0];
  }

  back() {
    return this.#arr[this.#size - 1];
  }

  toArray() {
    return Array.from(this.#arr).slice(0, this.#size);
  }

  push_back(elem) {
    if (this.#size === this.#capacity) {
      this.resize(this.#capacity * this.#CAP_EXPONENT);
    }
    this.#arr[this.#size++] = elem;
  }

  pop_back() {
    // let tmp = new Uint32Array(this.#capacity - 1);
    // for(let i = 0; i < tmp.length; i++) {
    //     tmp[i] = this.#arr[i];
    // }
    // this.#arr = tmp;
    // this.#capacity = this.#capacity - 1;
    // this.#size = this.#size - 1;
    // this.resize(this.#capacity - 1, this.#arr);
    let rmvd = this.#arr[this.#size - 1];
    this.#size--;
    return rmvd;
  }

  [Symbol.iterator]() {
    const collection = this.#arr;
    const collection_length = this.#size;
    let index = 0;
    return {
      next() {
        if (index < collection_length) {
          return {
            value: collection[index++],
            done: false,
          };
        }
        return { value: undefined, done: true };
      },
    };
  }

  insert(pos, value) {
    // console.log("insert called", { pos, size: this.#size, cap: this.#capacity });

    if(this.#size === this.#capacity) {
      this.resize(this.#capacity * this.#CAP_EXPONENT);
    }
    for(let i = this.#size; i > pos; i--) {
      this.#arr[i] = this.#arr[i - 1];
    }
    this.#arr[pos] = value;
    this.#size++;
  }

  erase(pos) {
    for(let i = pos; i < this.#size - 1; i++) {
      this.#arr[i] = this.#arr[i + 1];
    }
    this.#size--;
  }

  swap(i, j) {
    [this.#arr[i], this.#arr[j]] = [this.#arr[j], this.#arr[i]]; 
  }

  static from(iterable) {
    let arr = new DArray();
    for(let i = 0; i < iterable.length; i++) {
        arr.push_back(iterable[i]);
    }
    return arr;
  }

  values() {
    let idx = 0;
    const size = this.#size;
    const arr = this.#arr;
    return {
      next() {
        if(idx < size) {
          return {value: arr[idx++], done: false};
        }
        return {value: undefined, done: true};
      },
      [Symbol.iterator]() { return this; }
    }
  }

  keys() {
    let idx = 0; 
    const size = this.#size;
    const arr = this.#arr;

    return {
      next() {
        if(idx < size) {
          return {value: idx++, done: false};
        }
        return {value: undefined, done: true};
      },
      [Symbol.iterator]() {return this}
    }
  }

  entries() {
    let idx = 0; 
    let size = this.#size;
    let arr = this.#arr;

    return {
      next() {
        if(idx < size) {
          return {value: [idx, arr[idx++]], done: false};
        }
        return {value: undefined, done: true};
      }, 
      [Symbol.iterator]() {return this}
    }
  }

  forEach(fn) {
    for(let i = 0; i < this.#size; i++) {
      fn(this.#arr[i], i, this);
    }
  }


  map(fn) {
    let res = new DArray();
    for(let i = 0; i < this.#size; i++) {
      res.push_back(fn(this.#arr[i], i, this));
    }
    return res;
  }

  filter(fn) {
    let res = new DArray;

    for(let i = 0; i < this.#size; i++) {
      if(fn(this.#arr[i], i, this)) {
        res.push_back(this.#arr[i]);
      }
    }
    return res;
  }

  reduce(fn, init = 0) {
    let acc = init;
    for(let i = 0; i < this.#size; i++) {
      acc = fn(acc, this.#arr[i], this);
    }
    return acc;
  }

  some(fn) {
    for(let i = 0; i < this.#size; i++) {
    if(fn(this.#arr[i], i, this)) return true;
    }
    return false;
  }

  every(fn) {
    for(let i = 0; i < this.#size; i++) {
      if(!fn(this.#arr[i], i, this)) return false;
    }
    return true;
  }

  find(fn) {
    for(let i = 0; i < this.#size; i++) {
      if(fn(this.#arr[i], i, this)) return this.#arr[i];
    }
    return undefined;
  }

  includes(value) {
    for(let i = 0; i < this.#size; i++) {
      if(this.#arr[i] === value) return true;
    }
    return false;
  }
}

const da = new DArray(2);
da.push_back(10);
da.push_back(20);
da.push_back(30); // triggers resize
da.insert(1, 99); // [10, 99, 20, 30]
da.erase(2); // [10, 99, 30]
console.log([...da]); // [10, 99, 30]
const squares = da.map(x => x * x);
console.log(squares.toArray()); // [100, 9801, 900]
const sum = da.reduce((acc, x) => acc + x, 0);
console.log(sum); // 139