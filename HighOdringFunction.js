// Common JavaScript Higher-Order Functions

// map()
// filter()
// reduce()
// forEach()
// find()
// sort()
// every()
// some()

const numbersMap = [1, 2, 3, 4, 5];
const squared = numbersMap.map(num => num * num);
console.log(squared);

const numbersFilter = [1, 2, 3, 4, 5];
const evenNumbers = numbersFilter.filter(num => num % 2 === 0);
console.log(evenNumbers);

const numbersReduce = [1, 2, 3, 4, 5];
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

const numbersForEach = [1, 2, 3, 4, 5];
numbersForEach.forEach(num => console.log(num));

const numbersFind = [1, 2, 3, 4, 5];
const result = numbersFind.find(num => num > 3);
console.log(result);

const numbersSort = [3, 1, 4, 1, 5, 9];
const sortedNumbers = numbersSort.sort((a, b) => a - b);
console.log(sortedNumbers);

const numbersEvery = [2, 4, 6, 8];
const allEven = numbersEvery.every(num => num % 2 === 0);
console.log(allEven);

const numbersSome = [1, 3, 5, 7, 8];
const hasEven = numbersSome.some(num => num % 2 === 0);
console.log(hasEven);