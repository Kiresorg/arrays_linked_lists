// Array declaration
let arr = [5, 8, 2, 9];

// Accessing an element
console.log("Access element at index 1:", arr[1]); // Output: 8

// Updating an element
arr[2] = 7;
console.log("Array after updating index 2:", arr); // Output: [5, 8, 7, 9]

// Inserting an element
// Insert at the end
arr.push(12);
console.log("Array after inserting 12 at the end:", arr); // Output: [5, 8, 7, 9, 12]

// Insert at the beginning
arr.unshift(3);
console.log("Array after inserting 3 at the beginning:", arr); // Output: [3, 5, 8, 7, 9, 12]

// Insert in the middle
arr.splice(3, 0, 6); // Insert 6 at index 3
console.log("Array after inserting 6 at index 3:", arr); // Output: [3, 5, 8, 6, 7, 9, 12]

// Deleting an element
// Delete from the end
arr.pop();
console.log("Array after removing the last element:", arr); // Output: [3, 5, 8, 6, 7, 9]

// Delete from the beginning
arr.shift();
console.log("Array after removing the first element:", arr); // Output: [5, 8, 6, 7, 9]

// Delete from the middle
arr.splice(2, 1); // Remove the element at index 2
console.log("Array after removing element at index 2:", arr); // Output: [5, 8, 7, 9]

// Searching for an element
let index = arr.indexOf(7);
console.log("Index of element 7:", index); // Output: 2

// Traversing the array
console.log("Traversing the array:");
arr.forEach(function(element, i) {
  console.log(`Element at index ${i}:`, element);
});

// Sorting the array
arr.sort((a, b) => a - b);
console.log("Array after sorting in ascending order:", arr); // Output: [5, 7, 8, 9]