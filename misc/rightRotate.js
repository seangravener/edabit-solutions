function rightRotate(arr, n) {
  const last = arr.slice(-n);
  const rest = arr.slice(0, arr.length - n);
  rest.unshift(...last);

  return rest;
}

function rightRotate2(arr, n) {
  return arr.splice(arr.length - n).concat(arr.splice(0, arr.length));
}
console.log(rightRotate([1, 2, 3, 4, 5], 3));
