// Sum of Resistance in Series Circuits
// https://edabit.com/challenge/JDkyQJqNfJNhvjmRW

function seriesResistance(arr) {
  const total = arr.reduce((total, current) => total + current, 0);
  const unit = total <= 1 ? "ohm" : "ohms";

  return `${total} ${unit}`;
}

seriesResistance([1, 5, 6, 3]); // "15 ohms"
seriesResistance([16, 3.5, 6]); // "25.5 ohms"
seriesResistance([0.5, 0.5]); // "1.0 ohm"
