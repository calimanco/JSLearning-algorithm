function selectionSort(_arr) {
  const arr = [].slice.call(_arr);
  const len = array.length;
  for (let i = 0; i < len - 1; i += 1) {
    let indexMin = i;
    for (let f = i; f < len; f += 1) {
      if (arr[indexMin] > arr[f]) {
        indexMin = f;
      }
    }
    if (indexMin !== i) {
      arr[indexMin] += arr[i];
      arr[i] = arr[indexMin] - arr[i];
      arr[indexMin] -= arr[i];
    }
  }
  return arr;
}
