const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here
const linkedList = new LinkedList();



let number = 100000;

const adder = num => {
    
    for (let i = 0; i < num; i++){
      linkedList.addToTail(i)
    }
    console.log(linkedList.print())
}
console.time(`adder`)
adder(number)
console.timeEnd(`adder`)
