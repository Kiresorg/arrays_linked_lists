const Node = require('./node');
const LinkedList = require('./linked_list')

const list = new LinkedList();

// Append elements to the linked list
list.append(10);
list.append(20);
list.append(30);

// Prepend an element to the linked list
list.prepend(5);

// Print the linked list
console.log("Linked List:");
list.printList();

// Remove an element from the linked list
list.remove(20);

// Check if the list contains a specific value
console.log("Contains 30:", list.contains(30));  // true
console.log("Contains 50:", list.contains(50));  // false

// Print the size of the linked list
console.log("Size of the list:", list.getSize());