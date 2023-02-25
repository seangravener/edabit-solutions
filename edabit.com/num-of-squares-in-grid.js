// Number of Squares in an N * N Grid
// https://edabit.com/challenge/RGQXN4TG2CQoBAReQ

function numberSquares(n) {
  let x = 0;
  for (let i = 0; i <= n; i++) {
    x += Math.pow(n - i, 2);
  }

  return x;
}

// help resource: http://coweb.cc.gatech.edu/ice-gt/1363#:~:text=The%20total%20for%20any%20nxn,to%201%20when%20n%3D1.
// console.log(numberSquares(2));
numberSquares(2); // 5
numberSquares(4); // 30
numberSquares(5); // 55
