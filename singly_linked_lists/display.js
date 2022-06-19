/*

Display
Use the JavaScript language for this challenge. All examples are done in order, starting with a new instance of the SLL class.

Create display() that uses a while loop and a runner to return a string containing all list values. 
Build what you wish console.log(myList) did!


Examples:

SLL1 = new SLL()
SLL1.addFront(76) => Node { data: 76, next: null }
SLL1.addFront(2) => Node { data: 2, next: Node { data: 76, next: null } }
SLL1.display() => "2, 76"
SLL1.addFront(11.41) => Node { data: 11.41, next: Node { data: 2, next: Node { data: 76, next: null } } }
SLL1.display() => "11.41, 2, 76"

*/

class SLLNode {
  // The Singly-Linked-List Node class

  constructor(val) {
    this.value = val; // Holds the value for this node
    this.next = null;
  }
}

class SLL {
  // The Singly-Linked-List class

  constructor() {
    // Will start with no nodes
    this.head = null; //
  }

  addFront(value) {
    var newNode = new SLLNode(value); // defining an instance of the SLLNode class and passing in value
    newNode.next = this.head;
    this.head = newNode;
    return this.head; // Also can be written as return this;
  }

  removeFront() {
    if (this.head == null) {
      // if the list is empty there is nothing to remove
      return this.head;
    }

    var removedNode = this.head; // Have a variable hold the node we are removing
    this.head = removedNode.next; // moves the head of the list to the second node, which will become new head
    removedNode.next = null; // the removed node will be caught by garbage collection
    return this.head;
  }

  front() {
    // return the value at the front (head) of the list
    // account for the edge case where the list is empty / return null (rather than TypeError)
    // if (this.head == null) {
    //   return null;
    // } else {
    //   // the list is not empty
    //   return this.head.value;
    // written with a ternary statement
    // }
    // Ternary operator: condition ? value_if_true : value_if_false
    // return this.head == null ? null : this.head.value;
    // shortening the ternary statement
    // return this.head ? this.head.value : null; // truthy value, null is a falsey value
  }

  // Display the values of all the nodes in the list

  display() {
    var listStr = ""; // empty string contains the values of the list
    // edge case: this list is an empty list
    if (this.head == null) {
      // return listStr; // or we can return that it is an empty list
      return "Empty list";
    }
    // We have at least one node (assumed)
    listStr += this.head.value; // concat the first value in the list

    // for the second node onward, we'll add comma separation ", " + value
    // for this process we will use a runner
    // we'll start with the runner pointed to the second node in the list
    var runner = this.head.next;

    while (runner != null) {
      listStr += ", " + runner.value; // Add the node's value to the list
      runner = runner.next; // Increment/ move the runner to the next node
    }
    return listStr;
  }
}
// Test Output below:

var mySLL = new SLL(); // starting with empty list
// console.log(mySLL.display());
mySLL.addFront("times!");
mySLL.addFront("7");
mySLL.addFront("6");
mySLL.addFront("5");

mySLL.addFront("Come on Baby Say you Love me!");
mySLL.addFront("4");
mySLL.addFront("3");
mySLL.addFront("2");
mySLL.addFront("1");

// mySLL.addFront(5);
console.log(mySLL.display());

// mySLL.addFront(3);
// console.log(mySLL.front());
// mySLL.removeFront();

// mySLL.addFront(10);
// mySLL.addFront(5);
// mySLL.addFront(3);
// console.log(mySLL);

// OUTPUT 1: nothing is displayed

// OUTPUT 2: After adding the return statement with empty list text
// Empty list

// OUTPUT 3: After adding a new node with a value of 10
// 10

// OUTPUT 4: After adding 3 nodes to the front of the list with values of
// 10, 20, and 40 in order to see the comma inserted

// 40, 20, 10

// OUTPUT 5: Using Strings as node values Hello + My + friend

// friend, My, Hello

// FINAL OUTPUT:
// 1, 2, 3, 4, Come on Baby Say you Love me!, 5, 6, 7, times!
