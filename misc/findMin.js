function findMinimum(arr) {
  return Math.min(...arr);
}

function findMinimumSort(arr) {
  return arr.sort((a, b) => a - b)[0];
}
