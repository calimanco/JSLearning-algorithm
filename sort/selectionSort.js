/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "selectionSort" }] */
/* global swap */

function selectionSort(_arr) {
  const arr = [].slice.call(_arr);
  const len = arr.length;
  for (let i = 0; i < len - 1; i += 1) {
    let indexMin = i;
    for (let f = i + 1; f < len; f += 1) {
      if (arr[indexMin] > arr[f]) {
        indexMin = f;
      }
    }
    if (indexMin !== i) {
      swap(arr, indexMin, i);
    }
  }
  return arr;
}
