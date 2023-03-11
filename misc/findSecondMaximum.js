function findSecondMaximum(arr) {
  let max = -Infinity,
    result = -Infinity;

  for (const value of arr) {
    num = Number(value);

    if (num > max) {
      [result, max] = [max, num]; // reassign max to num and result to the previous value of max
    } else if (num < max && num > result) {
      result = num;
    }
  }

  return result;
}

console.log(findSecondMaximum([9, 2, 3, 6]));
console.log(findSecondMaximum([2, 3, 3, 3, 3]));
