class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVL {
    constructor(data) {
        if(data === undefined || data === null) {
            this.root = null;
            return;
        }
        this.root = new Node(data);
    }
    //helper functions 
    _getHeight(node) {
        return node ? node.height : 0;
    }

    _updateHeight(node) {
        return 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
    }

    _balanceFactor(node) {
        return this._getHeight(node.left) - this._getHeight(node.right);
    }

    _search(node, val) {
        if(!node) return false;
        if(val === node.data) return true;
        else if(val < node.data) {
            return this._search(node.left, val);
        } else {
            return this._search(node.right, val);
        }
        return false;
    }

    getMin(node) {
        while(node.left) {
            node = node.left;
        }
        return node;
    }

    _remove(node, value) {
        if(!node) return null;
        if(value < node.data) {
            node.left = this._remove(node.left, value);
        } else if(value > node.data) {
            node.right = this._remove(node.right, value);
        } else {
            
            if(!node.left) return node.right;
            if(!node.right) return node.left;
            else {
                let s = this.getMin(node.right);
                node.data = s.data;
                node.right = this._remove(node.right, s.data);
            }
        }
        node.height = this._updateHeight(node);
        let bf = this._balanceFactor(node);

        if (bf > 1) {
            if (this._balanceFactor(node.left) >= 0) {
                node = this._rightRotate(node);       
            } else {
                node.left = this._leftRotate(node.left); 
                node = this._rightRotate(node);
            }
        }

        if (bf < -1) {
            if (this._balanceFactor(node.right) <= 0) {
                node = this._leftRotate(node);        
            } else {
                node.right = this._rightRotate(node.right); 
                node = this._leftRotate(node);
            }
        }
        return node;
    }

    _rightRotate(node) {
        let newRoot = node.left;
        node.left = newRoot.right;
        newRoot.right = node;
        node.height = this._updateHeight(node);
        newRoot.height = this._updateHeight(newRoot);
        return newRoot;
    }

    _leftRotate(node) {
        let newRoot = node.right;
        node.right = newRoot.left;
        newRoot.left = node;
        node.height = this._updateHeight(node);
        newRoot.height = this._updateHeight(newRoot);
        return newRoot;
    }


    _insert(node, value) {
        if(!node) return new Node(value);
        if(value < node.data) {
            node.left = this._insert(node.left, value);
        } else if(value > node.data) {
            node.right = this._insert(node.right, value);
        } else {
            return node;
        }

        node.height = this._updateHeight(node);
        let bf = this._balanceFactor(node);
        if(bf > 1 && node.left.left) {
            node = this._rightRotate(node)
        } 
        else if(bf < -1 && node.right.right) {
            node = this._leftRotate(node);
        } 
        else if(bf < -1 && node.right.left) {
            node.right = this._rightRotate(node.right);
            node = this._leftRotate(node);
        } 
        else if(bf > 1 && node.left.right){
            node.left = this._leftRotate(node.left);
            node = this._rightRotate(node);
        }
        return node;
    }


    //interface functions 
    insert(value) {
        this.root = this._insert(this.root, value);
    }

    search(value) {
        return this._search(this.root, value);
    }

    remove(value) {
        this.root = this._remove(this.root, value);
    }

    //for printing 
    level_order() {
        if (!this.root) return;
        const q = [this.root];
        let out = '';

        while (q.length) {
            const node = q.shift();
            out += node.data + ' ';
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
        console.log(out);
    }
}

