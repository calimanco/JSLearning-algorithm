function bubbleSort(_arr) {
  const arr = [].slice.call(_arr);
  for (let i = 0; i < arr.length; i += 1) {
    for (let f = 0; f < arr.length - 1; f += 1) {
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
  for (let i = 0; i < arr.length; i += 1) {
    for (let f = 0; f < arr.length - i - 1; f += 1) {
      if (arr[f] > arr[f + 1]) {
        arr[f] += arr[f + 1];
        arr[f + 1] = arr[f] - arr[f + 1];
        arr[f] -= arr[f + 1];
      }
    }
  }
  return arr;
}
