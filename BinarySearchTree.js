class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value <= this.value) {
      if (!this.left) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(value) {
    if (value === this.value) {
      return true;
    }

    if (value < this.value) {
      if (!this.left) {
        return false;
      }

      return this.left.contains(value);
    } else {
      if (!this.right) {
        return false;
      }

      return this.right.contains(value);
    }
  }

  deptchFirstPreOrder(res = []) {
    const result = res;

    result.push(this.value);

    if (this.left) {
      this.left.deptchFirstPreOrder(result);
    }

    if (this.right) {
      this.right.deptchFirstPreOrder(result);
    }

    return result;
  }

  deptchFirstInorder(res = []) {
    const result = res;

    if (this.left) {
      this.left.deptchFirstInorder(result);
    }

    result.push(this.value);

    if (this.right) {
      this.right.deptchFirstInorder(result);
    }

    return result;
  }

  deptchFirstPostorder(res = []) {
    const result = res;

    if (this.left) {
      this.left.deptchFirstPostorder(result);
    }

    if (this.right) {
      this.right.deptchFirstPostorder(result);
    }

    result.push(this.value);

    return result;
  }

  bredthFirst() {
    const queue = [this];
    const result = [];

    while (queue.length) {
      const node = queue.shift();

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }

      result.push(node.value);
    }

    return result;
  }
}

const bst = new BST(50);
bst.insert(70);
bst.insert(30);
bst.insert(20);
bst.insert(45);
bst.insert(60);
bst.insert(100);
bst.insert(10);
bst.insert(35);
bst.insert(59);
bst.insert(85);
bst.insert(105);
console.log(bst.bredthFirst());
