function rotateArray(A, K) {
  const k = Math.max(K, 1000);

  const last = A.slice(-K);
  // const rotated = A.slice(0, Math.min(Math.max(A.length - K, 0), A.length));
  const rotated = A.slice(A.length - K > 0 ? A.length - K : A.length);
  rotated.unshift(...last);

  console.log("K", K, "A.len", A.length, "A.length - K", A.length - K);

  K > A.length + 1 ? A.length : K, A.length;

  return A.length === 1 ? A : rotated;
}

// console.log(rotateArray([3, 8, 9, 7, 6], 3));
// console.log(rotateArray([0, 0, 0], 1)); // 0,0,0
// console.log(rotateArray([1, 2, 3, 4], 4)); // 1234
// console.log(rotateArray([-1, -2, -3, -4], 4)); // 1234

// console.log(rotateArray([-1, -2, -3, -4], 1)); //
// console.log(rotateArray([1, 2, 3, 4], 5)); //
// console.log(rotateArray([-4], 0)); // -4

// console.log(
//   rotateArray([1, 1, 2, 3, 5], 42) // got [1, 1, 2, 3, 5] expected [3, 5, 1, 1, 2]
// );

// got .., -4, -5, -8, -4, -4, 4, 6, 0, 0, -2, 10.. expected .., -4, -5, -8, -4, -4]

function rightRotate2(arr, n) {
  return arr.splice(arr.length - n).concat(arr.splice(0, arr.length));
}
console.log(rightRotate2([3, 8, 9, 7, 6], 3));
console.log(rightRotate2([0, 0, 0], 1)); // 0,0,0
console.log(rightRotate2([1, 2, 3, 4], 4)); // 1234
console.log(rightRotate2([-1, -2, -3, -4], 4)); // 1234

console.log(rightRotate2([-1, -2, -3, -4], 1)); //
console.log(rightRotate2([1, 2, 3, 4], 5)); //
console.log(rightRotate2([-4], 0)); // -4

console.log(
  rightRotate2([1, 1, 2, 3, 5], 42) // got [1, 1, 2, 3, 5] expected [3, 5, 1, 1, 2]
);
