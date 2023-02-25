b9 = 1001;
b529 = 1000010001;
b1041 = 10000010001;
b15 = 1111;
b32 = 100000;
b20 = 10100;

function solution(N) {
  let binStr = N.toString(2);

  let zeroGroups = Array.from(binStr).reduce((prev, next, i, arr) => {
    if (prev.join("").includes("1")) {
      prev.push(next.length);
    }

    return prev;
  }, []);

  if (zeroGroups[zeroGroups.length - 1] > 0) {
    return 0;
  }

  // return the max length or 0 if there are no groups of 0s
  return zeroGroups.length > 0 ? Math.max(...zeroGroups) : 0;
}

// function solution(N) {
//   let sp = N.toString().split("1");
//   let sp2 = Array.from(N.toString());

//   sp2 = sp2.reduce((prev, next) => {
//     console.log(prev, next);
//     return next;
//   });

//   let groups = sp.map((group) => group.length);

//   console.log(N.toString(), N.toString().split("1"), groups);

//   if (groups[groups.length - 1] > 0) {
//     return 0;
//   }

//   return groups.length ? Math.max(...groups) : 0;
// }

// function solution(N) {
//   // convert to binary string
//   let binStr = N.toString();

//   // split on 1s and get the lengths of each 0s group
//   let zeroGroups = binStr.split("1").map((group) => group.length);

//   // remove first and last element if they are 0 (no surrounding 1s)
//   if (zeroGroups[0] === 0) {
//     zeroGroups.shift();
//   }
//   if (zeroGroups[zeroGroups.length - 1] === 0) {
//     zeroGroups.pop();
//   }

//   // return the max length or 0 if there are no groups of 0s
//   return zeroGroups.length > 0 ? Math.max(...zeroGroups) : 0;
// }

console.log(9, solution(b9));
console.log(529, solution(b529));
console.log(1041, solution(b1041));
console.log(15, solution(b15));
console.log(32, solution(b32));
console.log(20, solution(b20));

// A binary gap within a positive integer N is any maximal sequence of consecutive
// zeros that is surrounded by ones at both ends in the binary representation of N.
// given a positive integer N, returns the length of its longest binary gap.
// The function should return 0 if N doesn't contain a binary gap.
