function getRandomArray(len = 100, min = 0, max = 100) {
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
