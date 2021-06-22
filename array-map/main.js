const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const doubled = numbers.map(x => x * 2);
console.log(doubled);
const prices = numbers.map(x => '$' + x.toPrecision() + '.00');
console.log(prices);

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const upperCased = languages.map(x => x.toUpperCase());
console.log(upperCased);
const firstLetter = languages.map(x => x.charAt(0));
console.log(firstLetter);
