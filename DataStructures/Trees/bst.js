import Queue from '../queue.js';
import Stack from '../stack.js';

class Node {
    constructor(data) {
        this.data = data;
        this.right = null;
        this.left = null;
    }
}

class BST {
    constructor(data = null) {
        this.root = data ? new Node(data) : null;
    }



    getHeight() {
        if(!this.root) return undefined;
        let height = 0;
        let q = new Queue();
        q.enqueue(this.root);
        while(!q.isEmpty()) {
            let lvlSize = q.getSize();
            for(let i = 0; i < lvlSize; i++) {
                let node = q.dequeue();
                if(node.left) q.enqueue(node.left);
                if(node.right) q.enqueue(node.right);
            }
            height++;
        }
        return height;
    }

    insert(val) {
        if(!this.root) return this.root = new Node(val);
        let curr = this.root;
        while(curr){
            if(val === curr.data) return;
            if(val < curr.data) {
                if(!curr.left) { 
                    curr.left = new Node(val);
                }
                curr = curr.left;
            } else {
                if(!curr.right) {
                    curr.right = new Node(val);
                }
                curr = curr.right;
            }
        }
    }

    

    remove(key) {
        if(!this.root) return;
        let parent = null;
        let current = this.root;
        while(current && current.data !== key) {
            parent = current;
            if(key < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        if(!current) return false;

        if(!current.left && !current.right) {
            if(!parent) this.root = null;
            else if(parent.left === current) parent.left = null;
            else parent.right = null;
        }

        else if(!current.left ||!current.right) {
            let child = current.right || current.left;
            if(!parent) this.root = null;
            else if(parent.left === current) parent.left = child;
            else parent.right = child;
        }

        else {
            let successorParent = current;
            let successor = current.right;

            while(successor.left) {
                successorParent = successor;
                successor = successor.left;
            }

            current.data = successor.data;

            if(successorParent.left === successor) successorParent.left = successor.right;
            else successorParent.right = successor.right;
        }
    }
    contains(val) {
        if(!this.root) return undefined;
        let curr = this.root;
        while(curr) {
            if(val === curr.data) return true;
            if(val < curr.data) {
                curr = curr.left;
            } else {
                curr = curr.right;
            }
        }
        return false;
    }

    levelOrder() {
        if(!this.root) return undefined;
        let curr = this.root;
        let res = [];
        let q = new Queue();
        q.enqueue(curr);
        while (!q.isEmpty()) {
            let tmp = q.dequeue();
            res.push(tmp.data);
            if(tmp.left) q.enqueue(tmp.left);
            if(tmp.right) q.enqueue(tmp.right);
        }
        return res;
    }

    inorder() {
        if(!this.root) return undefined;
        let stack = new Stack();
        let res = [];
        let curr = this.root;
        while(!stack.isEmpty() || curr) {
            while(curr) {
                stack._push(curr);
                curr = curr.left;
            }
            curr = stack._pop();
            res.push(curr.data);
            curr = curr.right;
        }
        return res;
    }

    postorder() {
        if(!this.root) return undefined;
        let curr = this.root;
        let s = [curr];
        let res = [];
        while (s.length) {
            let node = s.pop();
            res.unshift(node.data);
            if(node.left) s.push(node.left);
            if(node.right) s.push(node.right);
        }
        return res;
    }

    preorder() {
        if(!this.root) return undefined;
        let curr = this.root;
        let s = [curr];
        let res = [];
        while (s.length) {
            let node = s.pop();
            res.push(node.data);
            if(node.right) s.push(node.right);
            if(node.left) s.push(node.left);
        }
        return res;
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

