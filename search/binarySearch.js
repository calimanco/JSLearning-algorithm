/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "binarySearch" }] */

function binarySearch(_arr, aim) {
  const arr = _arr;
  const len = arr.length;
  let high = len - 1;
  let low = 0;
  while (high >= low) {
    const mid = Math.floor((high + low) / 2);
    if (arr[mid] < aim) {
      low = mid + 1;
    } else if (arr[mid] > aim) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}
