// https://edabit.com/challenge/o7TwicAHWuMkjbDqQ
function whichIsLarger(f, g) {
  const [a, b] = [f(), g()];
  if (a === b) {
    return "neither";
  }

  return a > b ? "f" : "g";
}

whichIsLarger(
  () => 5,
  () => 10
); // "g"
whichIsLarger(
  () => 25,
  () => 25
); // "neither"
whichIsLarger(
  () => 505050,
  () => 5050
); // "f"
