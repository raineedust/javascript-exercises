const sumAll = function (min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    return "ERROR";
  }
  if (min < 0 || max < 0) {
    return "ERROR";
  }
  if (min > max) {
    let tempSum = min;
    min = max;
    max = tempSum;
  }
  let sum = 0;
  for (let i = min; i < max + 1; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;

// Thinking process
// 1. Take two input numbers
// 2. Determine if both integers more than zero
// 3. Add numbers including and in between the 2 args
// 4. Asssign variable to final sum
// 5. Return
