const arrayProduct = (arr) => arr.reduce((a, b) => a * b);

function findProduct(arr) {
  return arr.map((digit, i) => arrayProduct(arr.filter((d) => d !== digit)));
}

console.log(
  findProduct([1, 2, 3, 4]) // => [24,12,8,6]
);
