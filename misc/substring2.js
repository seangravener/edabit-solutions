// Performance:
// The function's time complexity is O(n) since it loops through the string once. 

const str = "nndNfdfdf";
const solution2 = (str) => {
  const positions = {};
  let result = 0;
  let prevPosition = 0;

  for (const [i, char] of str.split("").entries()) {
    // Seen this character before?
    if (positions[char]) {
      // Update prev with current position
      prevPosition = Math.max(prevPosition, positions[char]);
    }

    // Select result or calc distance from last seen position (+1 to offset indices)
    result = Math.max(result, i - prevPosition + 1);
    console.log(i, prevPosition, 1);

    // Track the last seen position
    positions[char] = i + 1;
  }

  return result;
};

console.log("solution 2: ", solution2(str));
