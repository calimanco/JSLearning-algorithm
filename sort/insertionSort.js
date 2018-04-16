/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "insertionSort" }] */

function insertionSort(_arr) {
  const arr = [].slice.call(_arr);
  const len = arr.length;
  for (let i = 1; i < len; i += 1) {
    let f = i;
    const temp = arr[i];
    while (f > 0 && arr[f - 1] > temp) {
      arr[f] = arr[f - 1];
      f -= 1;
    }
    arr[f] = temp;
  }
  return arr;
}
