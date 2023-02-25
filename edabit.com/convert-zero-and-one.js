// Convert Zero and One

const namedNum = { one: 1, zero: 0 };
const getNamedNum = (name) => namedNum[name];

function textToNumberBinary(str) {
  const candidates = str
    .split(" ")
    .map((a) => (/^zero|one$/i.test(a) ? a.toLowerCase() : ""))
    .filter((a) => Boolean(a));

  const results = candidates.map((a) => getNamedNum(a)).join("");
  return results.slice(0, results.length - (results.length % 8));
}

console.log(
  textToNumberBinary(
    "one Zero zero one zero zero one one one one one zero oNe one one zero one zerO"
  )
);
console.log(1001001111101110);

console.log(textToNumberBinary("one zero one"));

console.log(
  textToNumberBinary("one zero zero one zero ten one one one one two")
);
console.log("10010111");
