/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "[bubbleSort, modifiedBubbleSort]" }] */

function bubbleSort(_arr) {
  const arr = [].slice.call(_arr);
  const len = arr.length;
  for (let i = 0; i < len; i += 1) {
    for (let f = 0; f < len - 1; f += 1) {
      if (arr[f] > arr[f + 1]) {
        arr[f] += arr[f + 1];
        arr[f + 1] = arr[f] - arr[f + 1];
        arr[f] -= arr[f + 1];
      }
    }
  }
  return arr;
}

function modifiedBubbleSort(_arr) {
  const arr = [].slice.call(_arr);
  const len = arr.length;
  for (let i = 0; i < len; i += 1) {
    for (let f = 0; f < len - i - 1; f += 1) {
      if (arr[f] > arr[f + 1]) {
        arr[f] += arr[f + 1];
        arr[f + 1] = arr[f] - arr[f + 1];
        arr[f] -= arr[f + 1];
      }
    }
  }
  return arr;
}
