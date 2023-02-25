// https://stackoverflow.com/questions/59097524/how-to-solve-this-parse-and-balance-angle-brackets-problem-javascript
// https://www.tutorialspoint.com/parse-and-balance-angle-brackets-problem-in-javascript

const str = "><><><>";

const solution = (angles) => {
  // Type your solution here

  let openTags = 0;
  let addTags = 0;

  for (const a of angles) {
    if (a === ">") {
      if (openTags === 0) {
        addTags++;
      } else {
        openTags--;
      }
    } else {
      openTags++;
    }
  }

  return [">".repeat(addTags), angles, ">".repeat(openTags)].join("");
};

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
