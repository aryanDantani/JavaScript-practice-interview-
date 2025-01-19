// The spread operator, represented by three dots (...),
// expands an iterable object (like an array, string, or object literal) into its individual elements. This allows you to conveniently perform operations

// 1. Concatenating arrays:

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

const combinedNumbers = [...numbers1, ...numbers2];
console.log(combinedNumbers);

// 2. Creating shallow copies of arrays:

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray);
copiedArray.push(4);
console.log(originalArray);
console.log(copiedArray);

// 3. Merging objects:

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }

// 4. Spreading function arguments:

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
const result = sum(...numbers);

console.log(result); // Output: 6
