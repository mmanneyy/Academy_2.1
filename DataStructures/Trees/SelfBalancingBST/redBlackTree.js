let RED = "red";
let BLACK = "black";
// for print
const reset = '\x1b[0m';
const redColor = '\x1b[31m';
const blackColor = '\x1b[30m';
const bold = '\x1b[1m';
class Node {
    constructor(data, color = RED, parent = null, left = null, right = null) {
        this.data = data;
        this.color = color;
        this.parent = parent;
        this.left = left;
        this.right = right;
    }
}

class RBT {
    constructor() {
        this.nil = new Node(null);
        this.nil.color = BLACK;
        this.root = this.nil;
    }

     // ─────────── Core Operations ───────────

    insert(value) {
        let node = new Node(value);
        let parentNode = this.nil;
        let current = this.root;

        while(current !== this.nil) {
            parentNode = current;
            if(node.data < current.data) {
                current = current.left;
            } else if(node.data > current.data) {
                current = current.right;
            } else {
                return;
            }
        }

        if(parentNode === this.nil) {
            this.root = node;
        } else if(node.data < parentNode.data) {
            parentNode.left = node;
        } else {
            parentNode.right = node;
        }

        node.parent = parentNode;
        node.left = node.right = this.nil;
        this.insertFixup(node);
    }

    delete(node) {
        let current = this.search(node);
        let parent = current.parent;
        let minElem = this.minimum(node);
        while(current !== this.nil) {
            if(!current.left && !current.right) {
                if(current.color === BLACK) {
                    //double black, delete fixup
                } else {
                    if(current === current.parent.left) {
                        current.parent.left = this.transplant(current, this.nil);
                        return;
                    } else {
                        current.parent.right = this.transplant(current, this.nil);
                        return;
                    }
                }
            }
        }
    }

    //------helpers for deletion 

    search(value) {
        let current = this.root;
        while(current !== this.nil) {
            if(value === current.data) break;
            if(value < current.data) current = current.left;
            else if(value > current.data) current = current.right;
            else return;
        }
        return current;
    }

    

    minimum(node) {
        while(node.left !== this.nil) {
            node = node.left;
        }
        return node;
    }

    transplant(u, v) {
        if(u.parent === this.nil) this.root = v;
        else if(u === u.parent.left ) u.parent.left = v;
        else u.parent.right = v;
        if(v !== this.nil) v.parent = u.parent;
    }

    // ─────────── Fix-Up Procedures ───────────

    insertFixup(node) {
        while(node.parent.color === RED)  {
            let grandParent = node.parent.parent;
            if(node.parent === grandParent.left) { 
                let uncleNode = grandParent.right;
                if(uncleNode.color === RED) {//CASE1 
                node.parent.color = BLACK;
                uncleNode.color = BLACK;
                grandParent.color = RED;
                node = grandParent;
                } else {
                    if(uncleNode.color === BLACK && node === node.parent.left) { //CASE2 left-left
                        this.rightRotate(grandParent);
                    }
                    grandParent.color = RED;
                    node.parent.color = BLACK;
                }
            } else {
                if(node.parent === grandParent.right) {
                    let uncleNode = grandParent.left;
                    if(uncleNode.color === RED) { //CASE1
                        node.parent.color = BLACK;
                        uncleNode.color = BLACK;
                        grandParent.color = RED;
                        node = grandParent;
                    } else {
                        if(uncleNode.color === BLACK && node === node.parent.right) { //CASE2 right-right
                            this.leftRotate(grandParent);
                        }
                    grandParent.color = RED;
                    node.parent.color = BLACK;
                    }
                }
            }

            
        }
        this.root.color = BLACK;
    }

    leftRotate(node) {
        let pivot = node.right;
        let parentNode = node.parent;
        if(node === this.root) this.root = pivot;
        if(node === node.parent.right) parentNode.right = pivot;
        else parentNode.left = pivot;
        node.right = pivot.left;
        if(pivot.left !== this.nil) pivot.left.parent = node;
        pivot.left = node;
        pivot.parent = parentNode;
        node.parent = pivot;
    }

    rightRotate(node) {
        let pivot = node.left;
        let parentNode = node.parent;
        if(node === this.root) this.root = pivot;   
        if(node === node.parent.left) parentNode.left = pivot;
        else parentNode.right = pivot;
        node.left = pivot.right;
        if(pivot.right !== this.nil) pivot.right.parent = node;
        pivot.right = node;
        pivot.parent = parentNode;
        node.parent = pivot;
    }

    //--------------- Printing -----------

    _printTree(node, indent = '', isLeft = true) {
        if (!node) return;

        if (node.right) {
          this._printTree(node.right, indent + (isLeft ? '     ' : '│    '), false);
        }

        const colorCode = node.color === RED ? redColor : blackColor;
        const colorSymbol = node.color === RED ? 'R' : 'B';
        const nodeLabel = `${bold}${colorCode}(${
          node.data ? node.data : 'nil'
        }, ${colorSymbol})${reset}`;

        console.log(indent + (isLeft ? '└──' : '┌──') + nodeLabel);

        if (node.left) {
          this._printTree(node.left, indent + (isLeft ? '     ' : '│    '), true);
        }
    }

    print() {
        if (this.root === this.nil) {
          console.log('Empty tree');
          return;
        }
        this._printTree(this.root);
    }
}

let rb = new RBT();
rb.insert(30);
rb.insert(20);
rb.insert(40);
rb.insert(50);
rb.insert(60);
rb.print();
rb.delete(60);
rb.print();