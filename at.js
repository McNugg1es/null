const array1 = ["Kevin", "Big Mazz", "McNuggies", "Alexander", "Andrea"];

let index = 1;

console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);
// expected output: "Using an index of 2 the item returned is McNuggies"

index = -3;

console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);
// expected output: "Using an index of -2 item returned is Alexander"

// Metoden "at" tar ett heltalsvärde och returnerar objektet vid det indexet, 
// vilket tillåter positiva och negativa heltal. 
// Negativa heltal räknas tillbaka från det sista objektet i arrayen