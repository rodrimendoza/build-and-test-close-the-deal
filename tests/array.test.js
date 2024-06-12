const {
  findMax,
  findMin,
  calculateAverage,
  flakyIsNull,
} = require('../src/array');

describe('Array Utilities', () => {
  test('findMax should return the maximum value in an array', async () => {
    expect(findMax([1, 2, 3, 4, 5])).toBe(5);
    expect(findMax([-1, -2, -3, -4, -5])).toBe(-1);
    expect(findMax([])).toBe(null);
  });

  test('findMin should return the minimum value in an array', async () => {
    expect(findMin([1, 2, 3, 4, 5])).toBe(1);
    expect(findMin([-1, -2, -3, -4, -5])).toBe(-5);
    expect(findMin([])).toBe(null);
  });

  test('calculateAverage should return the average of numbers in an array', async () => {
    expect(calculateAverage([1, 2, 3, 4, 5])).toBe(3);
    expect(calculateAverage([10, 20, 30])).toBe(20);
  });

  // **EARLY FLAKE DETECTION**: uncomment this test to test Early Flake Detection
  test('flakyIsNull should return true if the value is null', () => {
    expect(flakyIsNull(null)).toBe(true);
  });
});
