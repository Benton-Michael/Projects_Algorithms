/* Question 1: 

method addFront()

Write a method that accepts a value and create a new node, 
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
    return this.head == null ? null : this.head.value;
    // shortening the ternary statement
    // return this.head ? this.head.value : null; // truthy value, null is a falsey value
  }
}
// testing output

var mySLL = new SLL(); // starting with empty list
mySLL.addFront(10);
mySLL.addFront(5);
mySLL.addFront(3);
console.log(mySLL.front());
mySLL.removeFront();

// mySLL.addFront(10);
// mySLL.addFront(5);
// mySLL.addFront(3);
console.log(mySLL);
// console.log(mySLL.head.next);
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

/* 
Question 2: Remove Front
method removeFront()

Write a method to remove the head node and return the new list head node. 
If the list is empty, return null.

Examples:

SLL1.removeFront() => Node { data: 5, next: Node { data: 18, next: null } }
SLL1.removeFront() => Node { data: 18, next: null }
*/

// OUTPUT 1:
/* Error related to edge case for problem 2:

this.head = removedNode.next; // moves the head of the list to the second node, which will become new head
--> the list was empty to begin with so we want to add a condition to check if the list is empty before
we attempt the operation
*/

// OUTPUT 2: after adding the if check for an empty list
// SLL { head: null }

// OUTPUT 3: after adding front(10)
// SLL { head: null }

// OUTPUT 4: after adding the console.log

// SLL { head: SLLNode { value: 5, next: null } }
// SLL { head: null }

// OUTPUT 5: after adding the second node with value 5

// SLL {
//     head: SLLNode { value: 5, next: SLLNode { value: 10, next: null } }
//   }
//   SLL { head: SLLNode { value: 10, next: null } }

// Final OUTPUT after adding 3 nodes

// SLL {
//     head: SLLNode { value: 3, next: SLLNode { value: 5, next: [SLLNode] } }
//   }
//   SLL {
//     head: SLLNode { value: 5, next: SLLNode { value: 10, next: null } }
//   }

/*

Problem 2 summary: key is the confirm the list is not empty before trying to 
remove the head

*/

// --------------------------------

// Question 3
/*

Write a method to return the value (not the node) at the head of the list. 
If the list is empty, return null.

Examples:

SLL1.front() => 18
SLL1.removeFront() => null
SLL1.front() => null

Solution:
OUTPUT 1: 3

OUTPUT 2: 
3
SLL {
  head: SLLNode { value: 5, next: SLLNode { value: 10, next: null } }
}


OUTPUT 3: Using ternary operator

3
SLL {
  head: SLLNode { value: 5, next: SLLNode { value: 10, next: null } }
}

*/
