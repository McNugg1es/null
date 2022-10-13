const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]


// Den "platta" metoden skapar en ny array med alla sub-array-element 
// sammanlänkade i den rekursivt upp till det specificerade djupet.