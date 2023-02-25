arr = [1, 2, 3];
arr2 = [1, 2, 3, 5, 6];

function solution(A) {
  const set = new Set(A);

  for (let i = 1; i < A.length + 1; i++) {
    if (!set.has(i)) {
      return i;
    } else if (i >= arr.length) {
      return i + 1;
    }
  }
}

console.log(solution(arr));
console.log(solution(arr2));
