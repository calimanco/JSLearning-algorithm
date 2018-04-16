/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "[BinarySearchTree, Node]" }] */

/**
 * 节点类
 * @class Representing a node.
 */
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

/**
 * 二叉搜索树
 * @class Representing a binarySearchTree.
 */
class BinarySearchTree {
  constructor(..._arr) {
    this.treeRoot = null;
    Object.defineProperty(this, 'size', {
      get() {
        return this.count();
      },
    });
    Object.defineProperty(this, 'max', {
      get() {
        const maxNode = this.findMaxNode();
        return maxNode ? maxNode.key : null;
      },
    });
    Object.defineProperty(this, 'min', {
      get() {
        const minNode = this.findMinNode();
        return minNode ? minNode.key : null;
      },
    });
    if (_arr.length !== 0) {
      let arr = _arr;
      if (Array.isArray(arr[0])) {
        arr = [...arr[0]];
      }
      arr.forEach((i) => {
        this.insert(i);
      });
    }
  }
  count(_root = this.treeRoot) {
    let size = 0;
    (function countNode(_node) {
      if (_node !== null) {
        size += 1;
        countNode(_node.left);
        countNode(_node.right);
      }
    }(_root));
    return size;
  }
  insert(_key) {
    const newNode = new Node(_key);
    function insertNode(_node, _nNode) {
      const node = _node;
      const nNode = _nNode;
      if (newNode.key < node.key) {
        if (node.left === null) {
          node.left = nNode;
        } else {
          insertNode(node.left, nNode);
        }
      } else if (node.right === null) {
        node.right = nNode;
      } else {
        insertNode(node.right, nNode);
      }
    }
    if (this.treeRoot === null) {
      this.treeRoot = newNode;
    } else {
      insertNode(this.treeRoot, newNode);
    }
    return this;
  }
  search(_key) {
    return (function searchNode(_node, _aimKey) {
      const aimKey = _aimKey;
      if (_node === null) {
        return false;
      }
      if (aimKey < _node.key) {
        return searchNode(_node.left, aimKey);
      } else if (aimKey > _node.key) {
        return searchNode(_node.right, aimKey);
      }
      return true;
    }(this.treeRoot, _key));
  }
  removeNode(_key, _root = this.treeRoot) {
    if (_root === null) {
      return null;
    }
    let node = _root;
    if (_key < node.key) {
      node.left = this.removeNode(_key, node.left);
      return node;
    } else if (_key > node.key) {
      node.right = this.removeNode(_key, node.right);
      return node;
    }
    if (node.left === null && node.right === null) {
      return null;
    }
    if (node.left === null) {
      node = node.right;
      return node;
    } else if (node.right === null) {
      node = node.left;
      return node;
    }
    const aux = this.findMinNode(node.right);
    node.key = aux.key;
    node.right = this.removeNode(aux.key, node.right);
    return node;
  }
  findMinNode(_root = this.treeRoot) {
    let node = _root;
    while (node && node.left !== null) {
      node = node.left;
    }
    return node || null;
  }
  findMaxNode(_root = this.treeRoot) {
    let node = _root;
    while (node && node.right !== null) {
      node = node.right;
    }
    return node || null;
  }
  preOrderTraverse(_cb, _root = this.treeRoot) {
    (function preOrderTraverseNode(_node, _callback) {
      if (_node !== null) {
        _callback(_node.key);
        preOrderTraverseNode(_node.left, _callback);
        preOrderTraverseNode(_node.right, _callback);
      }
    }(_root, _cb));
  }
  inOrderTraverse(_cb, _root = this.treeRoot) {
    (function inOrderTraverseNode(_node, _callback) {
      if (_node !== null) {
        inOrderTraverseNode(_node.left, _callback);
        _callback(_node.key);
        inOrderTraverseNode(_node.right, _callback);
      }
    }(_root, _cb));
  }
  postOrderTraverse(_cb, _root = this.treeRoot) {
    (function postOrderTraverseNode(_node, _callback) {
      if (_node !== null) {
        postOrderTraverseNode(_node.left, _callback);
        postOrderTraverseNode(_node.right, _callback);
        _callback(_node.key);
      }
    }(_root, _cb));
  }
}
