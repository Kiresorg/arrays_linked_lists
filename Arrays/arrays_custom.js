// Custom Array Implementation
class CustomArray {
    constructor() {
        this.data = {};
        this.length = 0;
    }

    // Accessing an element
    get(index) {
        return this.data[index];
    }

    // Updating an element
    set(index, value) {
        if (index >= 0 && index < this.length) {
            this.data[index] = value;
        } else {
            console.error("Index out of bounds.");
        }
    }

    // Inserting an element at the end
    push(value) {
        this.data[this.length] = value;
        this.length++;
    }

    // Inserting an element at the beginning
    unshift(value) {
        this._shiftElementsRight(0);
        this.data[0] = value;
        this.length++;
    }

    // Inserting an element in the middle (at a specific index)
    insert(index, value) {
        if (index >= 0 && index <= this.length) {
            this._shiftElementsRight(index);
            this.data[index] = value;
            this.length++;
        } else {
            console.error("Index out of bounds.");
        }
    }

    // Deleting the last element
    pop() {
        if (this.length === 0) return undefined;
        const value = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return value;
    }

    // Deleting the first element
    shift() {
        if (this.length === 0) return undefined;
        const value = this.data[0];
        this._shiftElementsLeft(0);
        delete this.data[this.length - 1];
        this.length--;
        return value;
    }

    // Deleting an element at a specific index
    delete(index) {
        if (index >= 0 && index < this.length) {
            const value = this.data[index];
            this._shiftElementsLeft(index);
            delete this.data[this.length - 1];
            this.length--;
            return value;
        } else {
            console.error("Index out of bounds.");
        }
    }

    // Searching for an element
    indexOf(value) {
        for (let i = 0; i < this.length; i++) {
            if (this.data[i] === value) return i;
        }
        return -1;
    }

    // Traversing (iterate and print)
    traverse() {
        for (let i = 0; i < this.length; i++) {
            console.log(`Element at index ${i}:`, this.data[i]);
        }
    }

    // Sorting elements (simple bubble sort for demonstration)
    sort() {
        for (let i = 0; i < this.length; i++) {
            for (let j = 0; j < this.length - i - 1; j++) {
                if (this.data[j] > this.data[j + 1]) {
                    // Swap
                    let temp = this.data[j];
                    this.data[j] = this.data[j + 1];
                    this.data[j + 1] = temp;
                }
            }
        }
    }

    // Helper method to shift elements right (used for insertion)
    _shiftElementsRight(index) {
        for (let i = this.length; i > index; i--) {
            this.data[i] = this.data[i - 1];
        }
    }

    // Helper method to shift elements left (used for deletion)
    _shiftElementsLeft(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
    }
}

// Usage
const myArray = new CustomArray();

// Inserting elements
myArray.push(5);
myArray.push(8);
myArray.push(2);
myArray.push(9);
console.log("Array after pushing elements:");
myArray.traverse();

// Accessing an element
console.log("Access element at index 1:", myArray.get(1));

// Updating an element
myArray.set(2, 7);
console.log("Array after updating element at index 2:");
myArray.traverse();

// Inserting an element at the beginning
myArray.unshift(3);
console.log("Array after unshifting (inserting at the beginning):");
myArray.traverse();

// Inserting an element in the middle
myArray.insert(3, 6);
console.log("Array after inserting 6 at index 3:");
myArray.traverse();

// Deleting the last element
myArray.pop();
console.log("Array after popping (removing last element):");
myArray.traverse();

// Deleting the first element
myArray.shift();
console.log("Array after shifting (removing first element):");
myArray.traverse();

// Deleting an element in the middle
myArray.delete(2);
console.log("Array after deleting element at index 2:");
myArray.traverse();

// Searching for an element
console.log("Index of element 7:", myArray.indexOf(7));

// Sorting the array
myArray.sort();
console.log("Array after sorting:");
myArray.traverse();