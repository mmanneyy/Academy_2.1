import Queue from '../queue.js';
import Stack from '../stack.js'

class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(data = null) {
        this.root = data ? new TreeNode(data) : null;
    }

        //helper
    _remove(node, val) {
        if(!node) return undefined;
        if(val < node.data) {
            node.left = this._remove(node.left, val);
        } else if(val > node.data) {
            node.right = this._remove(node.right, val);
        } else {
            if(!node.left) {
                return node.right;
            }
            if(!node.right) {
                return node.left;
            } 
            else {
                let s = this.getMin(node.right);
                node.data = s.data;
                node.right = this._remove(node.right, s.data);
            }
        }
        return node;
    }

    getMin(node) {
        while(node.left) {
            node = node.left;
        }
        return node;
    }

    insert(val) {
        const insertNode = (node, val) => {
            if (!node) return new Node(val);
            if (val < node.data) node.left = insertNode(node.left, val);
            else if (val > node.data) node.right = insertNode(node.right, val);
            return node;
        };
    }

    contains(key) {
        let current = this.root;
        while(current) {
            if(key === current.data) return true;
            if(key < current.data) {
                current = current.left;
            } else {
                current = current.right;
            } 
        }
        return false;
    }

    levelOrder() { 
        if(!this.root) return undefined;
        let node = this.root;
        const q = new Queue();
        q.enqueue(node);
        let res = [];

        let helper = () => {
            if(q.isEmpty()) return;

            node = q.dequeue();
            res.push(node.data);

            if(node.left) q.enqueue(node.left);
            if(node.right) q.enqueue(node.right);
            helper();
        }

        helper();
        return res;
    }

    inOrder() { 
       if(!this.root) return undefined;
       let node = this.root;
        let res = [];
       const foo= (node) => {
        if(!node) return;
        if(node.left) foo(node.left);
        res.push(node.data);
        if(node.right) foo(node.right); 
        }
       foo(node);
       return res;
    }

    preorder(node = this.root, res = []) {
        if (!node) return res;
        res.push(node.data);
        this.preorder(node.left, res);
        this.preorder(node.right, res);
        return res;
    }

    postorder(node = this.root, res = []) {
        if (!node) return res;
        this.postorder(node.left, res);
        this.postorder(node.right, res);
        res.push(node.data);
        return res;
    }


    getHeight(node = this.root, height = 0) { 
        if(!node) return 0;
        return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }

    remove(val) {
        this.root = this._remove(this.root, val);
    }

    
    
    print(node = this.root) {
    if (!node) return;
    this.print(node.left);
    console.log(node.data);
    this.print(node.right);
    }

    printTree(node = this.root, space = 0, levelSpace = 4) {
    if (!node) return;
    space += levelSpace;
    this.printTree(node.right, space);
    console.log(' '.repeat(space - levelSpace) + node.data);
    this.printTree(node.left, space);
    }
}

