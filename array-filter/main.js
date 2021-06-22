const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const evenNumbers = numbers.filter(numbers => numbers % 2 === 0);
const overFive = numbers.filter(numbers => numbers > 5);
console.log(evenNumbers);
console.log(overFive);

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const startwithE = names.filter(names => names.startsWith("E"));
console.log(startwithE);
const haveD = names.filter(names => names.includes("D") || names.includes("d"));
console.log(haveD);
