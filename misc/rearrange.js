function reArrange(arr) {
  let left = [],
    right = [];

  for (const value of arr) {
    const num = Number(value);
    if (num >= 0) {
      right.push(num);
    } else {
      left.push(num);
    }
  }

  return [...left, ...right];
}

console.log(reArrange([10, -1, 20, 4, 5, -9, -6])); // => [-1,-9,-6,10,20,4,5]
