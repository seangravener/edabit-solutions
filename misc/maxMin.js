arr = [1, 2, 3, 4, 5].sort();

function maxMin(arr) {
  const result = [];
  let left = 0;
  let right = arr.length - 1;

  for (const [i, value] of arr.entries()) {
    if (i % 2) {
      result.push(arr[left]);
      left++;
    } else {
      result.push(arr[right]);
      right--;
    }
  }

  return result;
}

console.log(
  maxMin(arr) // should be => [5,1,4,2,3]
);
