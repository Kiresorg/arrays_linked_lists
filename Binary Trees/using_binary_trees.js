const Node = require('./node');
const BinaryTree = require('./binary_tree');

const tree = new BinaryTree();

// Insert nodes into the binary tree
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);
tree.insert(60);
tree.insert(70);
tree.insert(80);

// In-order Traversal: should print nodes in ascending order
console.log("In-order traversal:");
tree.inorderTraversal();

// Pre-order Traversal
console.log("Pre-order traversal:");
tree.preorderTraversal();

// Post-order Traversal
console.log("Post-order traversal:");
tree.postorderTraversal();

// Search for a node
const foundNode = tree.search(7);
console.log(foundNode ? `Node with data ${foundNode.data} found` : "Node not found");