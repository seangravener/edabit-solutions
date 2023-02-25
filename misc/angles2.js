const solution = (str) => {
  let openCount = 0;
  let additionalLeadingOpenTags = 0;
  for (const char of str) {
    if (char === ">") {
      if (openCount === 0) {
        additionalLeadingOpenTags++;
      } else {
        openCount--;
      }
    } else {
      openCount++;
    }
  }

  console.log(additionalLeadingOpenTags, openCount);
  return "<".repeat(additionalLeadingOpenTags) + str + ">".repeat(openCount);
};

console.log("Input 1: ><<><");

result = solution("><<><");

console.log("Output 1: " + result);
console.log("Expected Output 1: " + "<><<><>>");

console.log("Input 2: <><<");

result = solution("<><<");

console.log("Output 2: " + result);

console.log("Input 1: ><<><");

result = solution("><<><");

console.log("Output 1: " + result);
console.log("Expected Output 1: " + "<><<><>>");

console.log("Input 2: <><<");

result = solution("<><<");

console.log("Output 2: " + result);

console.log("Expected Output 2: " + "<><<>>");

console.log("Input 3: <><<<>");

result = solution("<><<<>");

console.log("Output 3: " + result);

console.log("Expected Output 3: " + "<><<<>>>");

console.log("Input 4: <><<<><");

result = solution("<><<<><");

console.log("Output 4: " + result);

console.log("Expected Output 4: " + "<><<<><>>>");

console.log("Input 5: ><<>");

result = solution("><<>");

console.log("Output 5: " + result);

console.log("Expected Output 5: " + "<><<>>");

console.log("Input 6: ><<<");

result = solution("><<<");

console.log("Output 6: " + result);


console.log("Expected Output 2: " + "<><<>>");

console.log("Input 3: <><<<>");

result = solution("<><<<>");

console.log("Output 3: " + result);

console.log("Expected Output 3: " + "<><<<>>>");

console.log("Input 4: <><<<><");

result = solution("<><<<><");

console.log("Output 4: " + result);

console.log("Expected Output 4: " + "<><<<><>>>");

console.log("Input 5: ><<>");

result = solution("><<>");

console.log("Output 5: " + result);

console.log("Expected Output 5: " + "<><<>>");

console.log("Input 6: ><<<");

result = solution("><<<");

console.log("Output 6: " + result);
