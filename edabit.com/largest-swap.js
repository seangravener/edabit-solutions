// Largest Swap
// https://edabit.com/challenge/hD3euqPHM82Cbr7R8

function largestSwap(num) {
  let [a, b] = num.toString().split("");
  const ab = parseInt(a + b, 10);
  const ba = parseInt(b + a, 10);

  return ab >= ba;
}

console.log(largestSwap(14));
console.log(largestSwap(53));
console.log(largestSwap(99));

largestSwap(14); // false
largestSwap(53); // true
largestSwap(99); // true
