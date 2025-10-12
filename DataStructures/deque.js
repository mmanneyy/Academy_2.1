//ask John if there can be empty spots inbetween the elements,
class Deque {
    #map = null;
    constructor(initialBlockSize = 8, initialBucketSize = 4) {
        if(initialBucketSize < 2) {
            throw new Error("Error");
        }

        let mid = Math.floor(initialBucketSize / 2);
        this.blockSize = initialBlockSize;
        this.#map = new Array(initialBucketSize).fill(0)
        this.headBlock = mid - 1;
        this.headIdx = initialBlockSize - 1;
        this.tailBlock = mid;
        this.tailIdx = 0;
        this.size = 0;
    }

    ensureBucketExists(block) {
        const bucket = this.#map[block];
        if(!bucket) {
            this.#map[block] = new Array(this.blockSize).fill(null);
        }
    }

    copy(b, i) {
        return {block: b, index: i};
    }

    inc(p) {
        if(p.index === this.blockSize - 1) {
            if(p.block > this.#map.length - 1) {
                let offset = this.resize();
                p.block += offset;
            }
            p.block++;
            p.index = 0;
        } else {
            p.index++;
        }
    }

    dec(p) {
        if(p.index === 0) {
            if(p.block === 0) {
                let offset = this.resize();
                p.block += offset;
            }
            p.block--;
            p.index = this.blockSize - 1;
        } else {
            p.index--;
        }
    }

    resize() {
        let old = this.#map;
        let newLength = old.length * 2;
        let newMap = new Array(newLength).fill(null);
        const offset = Math.floor((newLength - old.length) / 2);

        for(let i = 0; i < old.length; i++) {
            newMap[i + offset] = old[i];
        }

        this.#map = newMap;
        this.headBlock += offset;
        this.tailBlock += offset;
        return offset;
    }

    read(p){
        this.ensureBucketExists(p.block);
        return this.#map[p.block][p.index];
    }

    write(p, value) {
        this.ensureBucketExists(p.block);
        this.#map[p.block][p.index] = value;
    }

    at(index) {
        if(index < 0 || index >= this.size) throw new Error("Error");


    }

    push_back(value) {
        const p = this.copy(this.tailBlock, this.tailIdx);
        this.write(p, value);
        this.inc(p);
        this.tailBlock = p.block;
        this.tailIdx = p.index;
        this.size++;
    }

    push_front(value) {
        const p = this.copy(this.headBlock, this.headIdx);
        this.write(p, value);
        this.dec(p);
        this.headBlock = p.block;
        this.headIdx = p.index;
        this.size++;
    }

    [Symbol.iterator]() {
        const p = this.copy(this.headBlock, this.headIdx);
        this.inc(p);
        let count = 0;
        return{
            next() {
                if(count >= this.size) {
                    return {done: true};
                }

                let value = this.read(p);
                this.inc(p);
                count++;

                return {value, done: false};
            }
        }
    }
}