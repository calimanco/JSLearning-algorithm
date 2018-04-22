/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "sequentialSearch" }] */

function sequentialSearch(_arr, aim) {
  const arr = _arr;
  let aimIndex = -1;
  arr.some((i, index) => {
    if (i === aim) {
      aimIndex = index;
      return true;
    }
    return false;
  });
  return aimIndex;
}
