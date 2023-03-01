function findSecondMaximum(arr) {
  return arr.sort()[arr.length - 2];
}

console.log(findSecondMaximum([9, 2, 3, 6]));
console.log(findSecondMaximum([2, 3, 3, 3, 3]));
