/* Question 1: Write a method that accepts a value and create a new node, 
assign it to the list head, and return a pointer to the new head node.

Examples:

SLL1 = new SLL()
SLL1.addFront(18) => Node { data: 18, next: null }
SLL1.addFront(5) => Node { data: 5, next: Node { data: 18, next: null } }
SLL1.addFront(73) => Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }

*/
// Solution 1

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
  // All of class's built-in methods here
  addFront(value) {
    var newNode = new SLLNode(value); // defining an instance of the SLLNode class and passing in value
    newNode.next = this.head;
    this.head = newNode;
    return this.head; // Also can be written as return this;
  }

  /* 
        We creat a node containing this value, we connect node to the list and make
        the node the head of the list
    */
}
// testing output

var mySLL = new SLL(); // starting with empty list
mySLL.addFront(10);
mySLL.addFront(5);
mySLL.addFront(3);
console.log(mySLL);
console.log(mySLL.head.next);
// OUTPUT1:
// SLL { head: SLLNode { value: 10, next: null } }

// OUTPUT 2:
// SLL {
//  head: SLLNode { value: 5, next: SLLNode { value: 10, next: null } }
//}

// SLL {
//     head: SLLNode { value: 3, next: SLLNode { value: 5, next: [SLLNode] } }
//   }
//   SLLNode { value: 5, next: SLLNode { value: 10, next: null } }

// ----------------------------------------------------------------
