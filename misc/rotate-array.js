function rotateArray(A, K) {
  const last = A.slice(-K);
  const rotated = A.slice(0, A.length - K);
  rotated.unshift(...last);

  return rotated;
}

console.log(rotateArray([3, 8, 9, 7, 6], 3));
