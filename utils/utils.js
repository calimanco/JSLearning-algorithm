/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "[getRandomArray, costClock]" }] */

function getRandomArray(len = 10000, min = 0, max = 100) {
  const array = [];
  const w = max - min;
  for (let i = 0; i < len; i += 1) {
    array.push(parseInt((Math.random() * w) + min, 10));
  }
  return array;
}

function costClock(fn) {
  const now = new Date().getTime();
  const data = fn();
  const pass = new Date().getTime() - now;
  return {
    data,
    cost: pass,
  };
}

function swap(_arr, index1, index2) {
  const arr = _arr;
  arr[index1] += arr[index2];
  arr[index2] = arr[index1] - arr[index2];
  arr[index1] -= arr[index2];
}
