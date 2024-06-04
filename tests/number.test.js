const { isPrime, getRandomNumber, factorial } = require('../src/number');

let retryCount = 0;

function waitFor(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe('Number Utilities', () => {
  test('isPrime should check if a number is prime', async () => {
    await waitFor(1000);
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(1)).toBe(false);
    expect(isPrime(0)).toBe(false);
  });

  test('getRandomNumber should generate a random number between a given range', async () => {
    await waitFor(1120);
    const randomNumber = getRandomNumber(1, 10);
    expect(randomNumber).toBeGreaterThanOrEqual(1);
    expect(randomNumber).toBeLessThanOrEqual(10);
  });

  jest.retryTimes(1);
  test('factorial should calculate the factorial of a number', async () => {
    await waitFor(820);
    expect(factorial(5)).toBe(120);
    expect(factorial(0)).toBe(1);
    expect(factorial(3)).toBe(6);
    expect(factorial(-1)).toBe(NaN);
    if (retryCount === 0) {
      retryCount++;
      throw new Error('Test failed');
    }
  });
});
