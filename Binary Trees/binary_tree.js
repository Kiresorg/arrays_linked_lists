const Node = require('./node');

class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    // Insert a new node into the binary tree
    insert(data) {
      const newNode = new Node(data);
  
      // If the tree is empty, make the new node the root
      if (this.root === null) {
        this.root = newNode;
      } else {
        // Otherwise, find the correct position for the new node
        this._insertNode(this.root, newNode);
      }
    }
  
    // Helper function to insert a node into the tree recursively
    _insertNode(node, newNode) {
      if (newNode.data < node.data) {
        // Go left if the new node is smaller
        if (node.left === null) {
          node.left = newNode;
        } else {
          this._insertNode(node.left, newNode);
        }
      } else {
        // Go right if the new node is larger or equal
        if (node.right === null) {
          node.right = newNode;
        } else {
          this._insertNode(node.right, newNode);
        }
      }
    }
  
    // In-order traversal: Left -> Root -> Right
    inorderTraversal(node = this.root) {
      if (node !== null) {
        this.inorderTraversal(node.left);
        console.log(node.data);
        this.inorderTraversal(node.right);
      }
    }
  
    // Pre-order traversal: Root -> Left -> Right
    preorderTraversal(node = this.root) {
      if (node !== null) {
        console.log(node.data);
        this.preorderTraversal(node.left);
        this.preorderTraversal(node.right);
      }
    }
  
    // Post-order traversal: Left -> Right -> Root
    postorderTraversal(node = this.root) {
      if (node !== null) {
        this.postorderTraversal(node.left);
        this.postorderTraversal(node.right);
        console.log(node.data);
      }
    }
  
    // Search for a node with a given data value
    search(data, node = this.root) {
      if (node === null) {
        return null;  // Node not found
      }
  
      if (data < node.data) {
        return this.search(data, node.left);  // Search in the left subtree
      } else if (data > node.data) {
        return this.search(data, node.right);  // Search in the right subtree
      } else {
        return node;  // Node found
      }
    }
  }

  module.exports = BinaryTree;