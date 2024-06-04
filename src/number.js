// Function to check if a number is prime
function isPrime(num) {
  if (typeof num !== 'number' || num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Function to generate a random number between a given range
function getRandomNumber(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number') return NaN;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to calculate the factorial of a number
function factorial(num) {
  if (typeof num !== 'number' || num < 0) return NaN;
  return num === 0 ? 1 : num * factorial(num - 1);
}

module.exports = {
  isPrime,
  getRandomNumber,
  factorial,
};
