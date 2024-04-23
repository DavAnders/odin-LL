class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0; // maintain length of list
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = node;
    }
    this.length++;
  }

  prepend(value) {
    const node = new Node(value);
    node.nextNode = this.head;
    this.head = node;
    this.length++;
  }

  size() {
    return this.length;
  }

  head() {
    return this.head;
  }

  tail() {
    let current = this.head;
    while (current && current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    let current = this.head;
    let counter = 0;
    while (current !== null && counter < index) {
      current = current.nextNode;
      counter++;
    }
    return current;
  }

  pop() {
    if (!this.head) {
      return null;
    }
    if (!this.head.nextNode) {
      const toPop = this.head;
      this.head = null;
      this.length--;
      return toPop;
    }
    let current = this.head;
    let prev = null;
    while (current.nextNode) {
      prev = current;
      current = current.nextNode;
    }
    prev.nextNode = null;
    this.length--;
    return current;
  }

  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let current = this.head;
    let result = "";
    while (current) {
      result += `(${current.value}) -> `;
      current = current.nextNode;
    }
    result += "null";
    return result;
  }
}

class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(5);
console.log(list.toString()); // (5) -> (10) -> (20) -> null
console.log("Size:", list.size()); // Size: 3
console.log("Contains 10:", list.contains(10)); // Contains 10: true
console.log("Find 20:", list.find(20)); // Find 20: 2
