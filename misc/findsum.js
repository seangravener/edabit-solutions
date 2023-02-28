function findSum(arr, value) {
  let result = false;

  for (let [i, a] of arr.entries()) {
    const prevA = a;

    for (let [i, b] of arr.entries()) {
      const prevB = b;

      if (a + b === value) {
        result = [a, b];
        break;
      }
    }

    if (result) {
      break;
    }
  }

  return result;
}

console.log(findSum([1, 21, 3, 14, 5, 60, 7, 6], 81));
