function fibSeq(end) {
  const result = [0];
  let n1 = 0,
    n2 = 1,
    next;

  for (let i = 2; i <= end; i++) {
    next = n1 + n2;
    n1 = n2;
    n2 = next;

    result.push(n1);
  }

  return result;
}

function fibStr(n, str) {
  const fib = fibSeq(n);
  const [a, b] = str;
  const result = [a, b];

  for (let n1 = 2; n1 <= fib.length - 1; n1++) {
    const n2 = n1 - 1;
    result.push(result[n2] + result[n2 - 1]);
  }

  return result.join(", ");
}

fibStr(3, ["j", "h"]); // "j, h, hj"
fibStr(5, ["e", "a"]); // "e, a, ae, aea, aeaae"
fibStr(6, ["n", "k"]); // "n, k, kn, knk, knkkn, knkknknk"
