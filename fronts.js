// Built the Node Class:
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
// Built the SSL Class:
class SLL {
    constructor() {
        this.head = null;
    }
    
// Writing a method that accepts a value and creates a new node, assign it to the list head, and return a pointer to the new head node.
    addFront(value) {
        let newNode = new Node(value);
        
        if(!this.head) {
            this.head = newNode;
            return this;
        }

        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    // Writing a method to remove the head node and return the new list head node. If the list is empty, return null.
    removeFront() {
        if(this.head == null) {   //Edge case if list is empty
        return this.head;
    }

        let removedNode = this.head;
        this.head = removedNode.next;
        removedNode.next = null;
        return this.head;
    }

    front() {
        if(this.head == null) { //Edge case if list is empty
            return null;
        } else {
        return this.head.value;
        }
    }
 }

let mySLL = new SLL();
console.log(mySLL.front());
mySLL.addFront(12);
console.log(mySLL)
mySLL.addFront(5);
mySLL.addFront(6);
// mySLL.front();
console.log(mySLL);
console.log(mySLL.front());
// mySLL.removeFront();
// console.log(mySLL);

