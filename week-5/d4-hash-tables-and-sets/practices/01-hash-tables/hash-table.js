const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    // Your code here
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
  }

  hash(key) {
    // Your code here
    // const hash = sha256(key);
    // const first8 = hash.slice(0, 8);
    // const decimal = parseInt(first8, 16);
    // return decimal;
    return parseInt(sha256(key).slice(0, 8), 16);
  }

  hashMod(key) {
    // Your code here
    // const hashMod = this.hash(key) % this.capacity;
    // console.log(hashMod);
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    // Your code here
    const newPair = new KeyValuePair(key, value);
    const index = this.hashMod(key);
    // console.log(index);

    if (this.data[index]) throw new Error('hash collision or same key/value pair already exists!')
    this.data[index] = newPair;
    this.count++;
  }

  insertWithHashCollisions(key, value) {
    // Your code here
    const newPair = new KeyValuePair(key, value);
    const index = this.hashMod(key);

    // if(!this.data[index]) {
    //   this.data[index] = newPair;
    // } else {
    //   newPair.next = this.data[index];
    //   this.data[index] = newPair;
    // }
    if (this.data[index]) newPair.next = this.data[index];
    this.data[index] = newPair;
    this.count++;
  }

  insert(key, value) {
    const index = this.hashMod(key)
    // grab a reference to the first node of the linked list
    // this could be null
    let currentPair = this.data[index]
    // Loop through the list until current node is null
    // or we find a kvp with the key that matches the argument
    while (currentPair && currentPair.key !== key) {
      currentPair = currentPair.next
    }
    // if the kvp exists overwrite its value
    if (currentPair) {
      currentPair.value = value
      return
    }
    // otherwise create the new kvp
    const newPair = new KeyValuePair(key, value)
    // if there is something in the bucket
    if (this.data[index]) {   // point the new kvp at the head
      newPair.next = this.data[index] // point the newPair to the next index, inserts newPair to the tail of linked list in bucket
    }
    this.data[index] = newPair // point the head at the top
    this.count++ // increment the count

  }

}


module.exports = HashTable;
