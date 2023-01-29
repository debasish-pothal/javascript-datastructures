class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  head = null;
  tail = null;

  traverse() {
    let node = this.head;
    const result = [];

    while (node) {
      result.push(node.value);
      node = node.next;
    }

    return result;
  }

  search(value) {
    let node = this.head;

    while (node) {
      if (node.value === value) {
        return node;
      }

      node = node.next;
    }

    return null;
  }

  addToHead(value) {
    const node = new Node(value, this.head, null);

    if (this.head) {
      this.head.prev = node;
    } else {
      this.tail = node;
    }

    this.head = node;
  }

  removeHead() {
    if (!this.head) {
      return null;
    }

    const val = this.head.value;

    this.head = this.head.next;

    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }

    return val;
  }

  addToTail(value) {
    const node = new Node(value, null, this.tail);

    if (this.tail) {
      this.tail.next = node;
    } else {
      this.head = node;
    }

    this.tail = node;
  }

  removeTail() {
    if (!this.tail) {
      return null;
    }

    const val = this.tail.value;
    this.tail = this.tail.prev;

    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }

    return val;
  }
}

const ll = new LinkedList();
ll.addToHead(2);
ll.addToHead(1);
ll.addToHead(0);
ll.addToTail(3);
ll.addToTail(4);

console.log(ll.traverse());
console.log(ll.search(4));
console.log(ll.search(0));
