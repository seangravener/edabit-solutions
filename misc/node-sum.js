arr = [1, 10, 5, 1, 0, 6];

const solution = (arr) => {
  // Type your solution here
  let sums = [0, 0];
  let root = arr[0];
  let offset = 0;

  let sumL = 0;
  let sumR = 0;

  arr.forEach((v, i) => {
    if (v === -1) offset = -1;
    if (i + (offset % 2) === 0) sumR += v;
    if (i + (offset % 2) === 1) sumL += v;
  });

  console.log(sumL, sumR);

  if (sums[0] === sums[1]) return "";

  if (Math.max(...sums) === sums[0]) {
    return "Left";
  } else {
    return "Right";
  }
};

solution(arr);
