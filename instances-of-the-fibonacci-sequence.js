// Instances of the Fibonacci Sequence
// https://edabit.com/challenge/PeDpzoeGyv9TfF5G5

function fibSeq(end) {
  const result = [0];
  let n1 = 0,
    n2 = 1,
    next;

  if (end === 0) {
    return [];
  }

  if (!end) {
    return undefined;
  }

  for (let i = 2; i <= end; i++) {
    next = n1 + n2;
    n1 = n2;
    n2 = next;

    result.push(n1);
  }

  if (result.length === 1) {
    return [0];
  }

  return result;
}

console.log(fibSeq(8));
console.log(fibSeq(0));
console.log(fibSeq());
