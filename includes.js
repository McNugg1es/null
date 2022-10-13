const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false

// Metoden "inkluderar" bestämmer om en array inkluderar ett visst värde bland sina poster, 
// vilket returnerar sant eller falskt beroende på vad som är lämpligt.