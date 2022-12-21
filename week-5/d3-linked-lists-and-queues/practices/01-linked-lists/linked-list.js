class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    if (this.head === null) {
      this.head = new Node(val);
      return;
      
    }
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;

    }
    curr.next = new Node(val)
    
  }

  removeFromHead() {
    if (this.head) {
      let oldHead = this.head;

      let newHead = oldHead.next;
      this.head = newHead;

      return oldHead;
    }
    this.length--;
    return this.head
  }

  addToTail(val) {
    const newNode = new Node(val);
    this.length++;

    if (!this.head) {
      this.head = newNode;
      return newNode;
    }

    let currNode = this.head;

    while (currNode.next) {
      currNode = currNode.next;
    }

    currNode.next = newNode;
  }

  printNodeVals() {
    let currNode = this.head;

    while (currNode) {
      console.log(` ${currNode.val}`);
      currNode = currNode.next;
    }
  }
}

const list = new LinkedList();
list.addToHead(1);
list.addToHead(2);
list.addToHead(3);
list.addToHead(4);

list.printNodeVals();
list.removeFromHead();
list.printNodeVals();

module.exports = LinkedList;
