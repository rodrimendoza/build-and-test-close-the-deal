const { capitalize, reverseString, countVowels } = require('../src/string');

function waitFor(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe('String Utilities', () => {
  test('capitalize should capitalize the first letter of a string', async () => {
    await waitFor(1000);
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
    expect(capitalize('')).toBe('');
  });

  test('reverseString should reverse a string', async () => {
    await waitFor(3000);
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
    expect(reverseString('')).toBe('');
  });

  test('countVowels should count the number of vowels in a string', async () => {
    await waitFor(4500);
    expect(countVowels('hello')).toBe(2);
    expect(countVowels('world')).toBe(1);
    expect(countVowels('')).toBe(0);
  });

  // **Failing test**: remove me!
  // trigger CI 4
  test('countVowels should count the number of consonant in a string', () => {
    expect(countVowels('hello')).toBe(2);
  });
});
