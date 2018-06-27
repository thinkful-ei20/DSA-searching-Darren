class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    if (this.key === null) {
      this.key = key;
      this.value = value;
    } else if (key <= this.key) {
      if (this.left === null) {
        this.left = new BinarySearchTree(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    } else {
      if (this.right === null) {
        this.right = new BinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }

  find(key) {
    if (this.key === key) {
      return this.value;
    } else if (key < this.key && this.left) {
      return this.left.find(key);
    } else if (key > this.key && this.right) {
      return this.right.find(key);
    } else {
      throw new Error('Key Error');
    }
  }

  remove(key) {
    if (this.key === key) {
      if (this.left && this.right) {
        const successor = this.right._findMin(); // 4
        this.key = successor.key; // root key is 4
        this.value = successor.value;
        successor.remove(successor.key);
      } else if (this.left) {
        this._replaceWith(this.left);
      } else if (this.right) {
        this._replaceWith(this.right); //4.replace(6)
      } else {
        this._replaceWith(null);
      }
    } else if (key < this.key && this.left) {
      this.left.remove(key);
    } else if (key > this.key && this.right) {
      this.right.remove(key);
    } else {
      throw new Error('Key Error');
    }
  }

  _replaceWith(node) { //u
    if (this.parent) { // y
      if (this === this.parent.left) { //u
        this.parent.left = node;//u = u
      } else if (this === this.parent.right) {
        this.parent.right = node; //root
      }
      if (node) { //u
        node.parent = this.parent; //y = u
      }
    } else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }
}

const preOrderTraversal = (bst) =>{
  console.log(bst.key);
  if(bst.left){
    preOrderTraversal(bst.left);
  }
  if(bst.right){
    preOrderTraversal(bst.right);
  }  
};

const inOrderTraversal = (bst) => {
  if(bst.left){
    inOrderTraversal(bst.left);
  }
  console.log(bst.key);
  if(bst.right){
    inOrderTraversal(bst.right);
  }  
}

const postOrderTraversal = (bst) => {
  if(bst.left){
    postOrderTraversal(bst.left);
  }
  if(bst.right){
    postOrderTraversal(bst.right);
  }  
  console.log(bst.key);
}

let newTree = new BinarySearchTree();
newTree.insert(25);
newTree.insert(15);
newTree.insert(50);
newTree.insert(10);
newTree.insert(24);
newTree.insert(35);
newTree.insert(70);
newTree.insert(4);
newTree.insert(12);
newTree.insert(18);
newTree.insert(31);
newTree.insert(44);
newTree.insert(66);
newTree.insert(90);
newTree.insert(22);
// console.log(newTree);

// preOrderTraversal(newTree);
// inOrderTraversal(newTree);
postOrderTraversal(newTree);
module.exports = BinarySearchTree;
