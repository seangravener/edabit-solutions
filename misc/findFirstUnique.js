function findFirstUnique(arr) {
  let counts = {};

  // Add counts to hash table
  for (let d of arr) {
    counts[d] = counts[d] ? counts[d] + 1 : 1;
  }

  // Return first count of 1
  for (let d of arr) {
    if (counts[d] === 1) {
      return d;
    }
  }

  return -1;
}

console.log(findFirstUnique([9, 2, 3, 2, 6, 6]));
