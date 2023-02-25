// Find the Smallest and Biggest Numbers
// https://edabit.com/challenge/Q3n42rEWanZSTmsJm

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

minMax([1, 2, 3, 4, 5]); // [1, 5]
minMax([2334454, 5]); // [5, 2334454]
minMax([1]); // [1, 1]
