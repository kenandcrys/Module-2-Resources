class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }


  addToHead(val) {
    const newNode = new DoublyLinkedListNode(val, null);
    newNode.next = this.head;
    this.head = newNode;
    if (!this.head) {
      newNode.next = this.head;
      this.head = newNode;
      return newNode
    }
  }

  addToTail(val) {

    const newNode = new DoublyLinkedListNode(val, null);
    this.length++;

    if (!this.head) {
      this.tail = newNode
      return newNode
    }
    let currNode = this.head;

    while (currNode.next) {
      currNode = currNode.next;
    }

    currNode.next = newNode;
  }


  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
