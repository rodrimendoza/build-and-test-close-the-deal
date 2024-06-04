// Function to find the maximum value in an array
function findMax(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  return Math.max(...arr);
}

// Function to find the minimum value in an array
function findMin(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  return Math.min(...arr);
}

// Function to calculate the average of numbers in an array
function calculateAverage(arr) {
  // **INTELLIGENT TEST RUNNER**: Uncomment this line to test Intelligent Test Runner
  if (!Array.isArray(arr) || arr.length === 0) return null;
  const sum = arr.reduce((a, b) => a + b, 0);
  return sum / arr.length;
}

function flakyIsNull(value) {
  if (Math.random() < 0.4) return false;
  if (value === null) return true;
}

module.exports = {
  findMax,
  findMin,
  calculateAverage,
  flakyIsNull,
};
