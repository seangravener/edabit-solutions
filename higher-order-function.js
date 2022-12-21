// https://edabit.com/challenge/o7TwicAHWuMkjbDqQ
function whichIsLarger(f, g) {
  if (f() === g()) {
    return "neither";
  }

  return f() > g() ? "f" : "g";
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
