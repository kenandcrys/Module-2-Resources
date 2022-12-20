const [addNums, addManyNums] = require("./phase-1");

function addNums10(increment) {
  let sums = [];
  for (let i = increment; i <= 10 * increment; i += increment) sums.push(addNums(i));
  return sums;
};

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  let sums = [];
  for (let i = increment; i <= 10 * increment; i += increment) sums.push(addManyNums(i));
  return sums;
};

module.exports = [addNums10, addManyNums10];
