// Function to capitalize the first letter of a string
function capitalize(str) {
  if (typeof str !== 'string') return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to reverse a string
function reverseString(str) {
  if (typeof str !== 'string') return '';
  return str.split('').reverse().join('');
}

// Function to count the number of vowels in a string
function countVowels(str) {
  if (typeof str !== 'string') return 0;
  return str.match(/[aeiou]/gi)?.length || 0;
}

module.exports = {
  capitalize,
  reverseString,
  countVowels,
};
