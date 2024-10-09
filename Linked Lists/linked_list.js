const Node = require('./node');

class LinkedList {
    constructor() {
      this.head = null;  // The head is the first node in the list, initially set to null
      this.size = 0;     // Keep track of the size of the list
    }
  
    // Insert a node at the end of the list
    append(data) {
      const newNode = new Node(data);
  
      if (this.head === null) {
        // If the list is empty, set the new node as the head
        this.head = newNode;
      } else {
        // Traverse to the end of the list and add the new node
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.size++;
    }
  
    // Insert a node at the beginning of the list
    prepend(data) {
      const newNode = new Node(data);
      newNode.next = this.head;  // Point the new node to the current head
      this.head = newNode;       // Set the new node as the new head
      this.size++;
    }
  
    // Remove a node from the list (by value)
    remove(data) {
      if (!this.head) {
        return null;  // If the list is empty, return null
      }
  
      // If the node to remove is the head
      if (this.head.data === data) {
        this.head = this.head.next;  // Set the head to the next node
        this.size--;
        return;
      }
  
      // Otherwise, traverse the list to find the node
      let current = this.head;
      let previous = null;
      while (current !== null && current.data !== data) {
        previous = current;
        current = current.next;
      }
  
      if (current === null) {
        return null;  // Node not found
      }
  
      previous.next = current.next;  // Unlink the node to remove it
      this.size--;
    }
  
    // Check if a value exists in the list
    contains(data) {
      let current = this.head;
      while (current !== null) {
        if (current.data === data) {
          return true;
        }
        current = current.next;
      }
      return false;
    }
  
    // Print all nodes in the list
    printList() {
      let current = this.head;
      while (current !== null) {
        console.log(current.data);
        current = current.next;
      }
    }
  
    // Get the size of the list
    getSize() {
      return this.size;
    }
  }

  module.exports = LinkedList;