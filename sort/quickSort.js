/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "[quickSort, modifiedQuickSort]" }] */

function quickSort(_arr) {
  const arr = [].slice.call(_arr);
  function partition(low, high) {
    const pivotkey = arr[low];
    let i = low;
    let j = high;
    while (i < j) {
      while (i < j && arr[j] >= pivotkey) {
        j -= 1;
      }
      arr[i] = arr[j];
      while (i < j && arr[i] <= pivotkey) {
        i += 1;
      }
      arr[j] = arr[i];
    }
    arr[i] = pivotkey;
    return i;
  }
  (function QSort(low, high) {
    if (low < high) {
      const pivotloc = partition(low, high);
      QSort(low, pivotloc - 1);
      QSort(pivotloc + 1, high);
    }
  }(0, arr.length - 1));
  return arr;
}

function modifiedQuickSort(_arr) {
  const arr = [].slice.call(_arr);
  function swap(i, j) {
    if (i === j) {
      return;
    }
    arr[i] += arr[j];
    arr[j] = arr[i] - arr[j];
    arr[i] -= arr[j];
  }
  function selectPivotMedianOfThree(low, high) {
    const mid = Math.floor((low + high) / 2);
    // 使用三数取中法选择枢轴
    if (arr[mid] > arr[high]) {
      swap(mid, high);
    }
    if (arr[low] > arr[high]) {
      swap(low, high);
    }
    if (arr[mid] > arr[low]) {
      swap(mid, low);
    }
  }
  function partition(low, high) {
    const pivotkey = arr[low];
    let i = low;
    let j = high;
    let right = high;
    let left = low;
    let rightLen = 0;
    let leftLen = 0;
    while (i < j) {
      while (i < j && arr[j] >= pivotkey) {
        if (arr[j] === pivotkey) {
          swap(right, j);
          right -= 1;
          rightLen += 1;
        }
        j -= 1;
      }
      arr[i] = arr[j];
      while (i < j && arr[i] <= pivotkey) {
        if (arr[i] === pivotkey) {
          swap(left, i);
          left += 1;
          leftLen += 1;
        }
        i += 1;
      }
      arr[j] = arr[i];
    }
    arr[i] = pivotkey;
    let near = i - 1;
    left -= 1;
    while (left >= low && arr[near] !== pivotkey) {
      swap(near, left);
      left -= 1;
      near -= 1;
    }
    near = i + 1;
    right += 1;
    while (right <= high && arr[near] !== pivotkey) {
      swap(near, right);
      right += 1;
      near += 1;
    }
    return {
      pivotloc: i,
      rightLen,
      leftLen,
    };
  }
  selectPivotMedianOfThree();
  (function QSort(low, high) {
    if (low < high) {
      const { pivotloc, rightLen, leftLen } = partition(low, high);
      QSort(low, pivotloc - 1 - leftLen);
      QSort(pivotloc + 1 + rightLen, high);
    }
  }(0, arr.length - 1));
  return arr;
}
