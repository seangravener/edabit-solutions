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
  const [a, b] = str;
  const result = [a, b];
  sequence = fibSeq(n);

  for (let i = 0; i <= sequence.length - 1; i++) {
    const n1 = i;
    const n2 = i - 1;

    console.log(`i=${i}`, n1, n2);
    result.push(`${a}${b}`.repeat(parseInt(sequence[i], 10)));
  }

  console.log(sequence);
  console.log(result);
}

fibStr(3, ["j", "h"]); // "j, h, hj"
fibStr(5, ["e", "a"]); // "e, a, ae, aea, aeaae"
fibStr(6, ["n", "k"]); // "n, k, kn, knk, knkkn, knkknknk"
