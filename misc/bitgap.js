function findBitGap(N) {
  const str = N.toString(2);

  let currentDigit = undefined;
  let currentGapLength = 0;
  let maxGapLength = 0;

  for (let i = 0; i <= str.length; i++) {
    currentDigit = str.charAt(i);

    if (currentDigit === "1") {
      if (currentGapLength > maxGapLength) {
        maxGapLength = currentGapLength;
      }

      currentGapLength = 0;
    } else {
      // in the middle of a gap
      currentGapLength++;
    }
  }

  return maxGapLength;
}

console.log(
  findBitGap(1041) // 5
)