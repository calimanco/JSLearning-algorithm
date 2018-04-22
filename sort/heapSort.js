/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "heapSort" }] */

function heapSort(_arr) {
  const arr = [].slice.call(_arr);
  let heapSize = arr.length;

  function heapify(_array, _size, i) {
    const left = (i * 2) + 1;
    const right = (i * 2) + 2;
    const array = _array;
    const size = _size;
    let largest = i;
    if (left < size && array[left] > array[largest]) {
      largest = left;
    }
    if (right < size && array[right] > array[largest]) {
      largest = right;
    }
    if (largest !== i) {
      array[i] += array[largest];
      array[largest] = array[i] - array[largest];
      array[i] -= array[largest];
      heapify(array, size, largest);
    }
  }

  for (let i = Math.floor(heapSize / 2); i >= 0; i -= 1) {
    heapify(arr, heapSize, i);
  }
  while (heapSize > 1) {
    heapSize -= 1;
    arr[0] += arr[heapSize];
    arr[heapSize] = arr[0] - arr[heapSize];
    arr[0] -= arr[heapSize];
    heapify(arr, heapSize, 0);
  }
  return arr;
}
