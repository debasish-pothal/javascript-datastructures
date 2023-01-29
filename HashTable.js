class HashNode {
  constructor(key, value, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

class HashTable {
  constructor(size) {
    this.bucket = Array(size);
    this.numBuckets = this.bucket.length;
  }

  hash(key) {
    return (
      key.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0) %
      this.numBuckets
    );
  }

  insert(key, value) {
    const index = this.hash(key);

    if (!this.bucket[index]) {
      this.bucket[index] = new HashNode(key, value);
    } else {
      let node = this.bucket[index];

      while (node.next) {
        node = node.next;
      }

      node.next = new HashNode(key, value);
    }
  }

  search(key) {
    const index = this.hash(key);

    if (!this.bucket[index]) {
      return null;
    } else {
      let node = this.bucket[index];

      while (node) {
        if (node.key === key) {
          return node;
        }

        node = node.next;
      }

      return null;
    }
  }
}

const hashtable = new HashTable(40);
hashtable.insert("John", "john@gmail.com");
hashtable.insert("Smith", "smith@gmail.com");
console.log(hashtable.search("Bean"));
console.log(hashtable.search("Smith"));
