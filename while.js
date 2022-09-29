/*


// öv:1
for (i = 0; i < 10; i++) {
    console.log(i + 1)
}


*/
/*


// öv:2
var ps = require("prompt-sync");
var prompt = ps();

let n = prompt("give a number: ")
for (k = 0; k < n; k++ ) {
    console.log(k + 1)
}


*/
/*


// öv:3
var ps = require("prompt-sync");
var prompt = ps();

var n2 = parseInt(prompt("give a number: ")) + 1;

var n3 = n2 + 1;

var result = 0;

for (p = 0; p < n2; p++) {
    result = result + p
}
console.log(result)


*/
/*


// öv:4
var ps = require("prompt-sync");
var prompt = ps();

var result2 = parseInt(prompt("give a number: "));

for (h = 0; h < 11; h++) {
    console.log(result2 * h)

}


*/
/*


// öv:5
var ps = require("prompt-sync");
var prompt = ps();

var n3 = parseInt(prompt("give a number: "));
var counter = 0;

while (counter < n3) {
    var b = "";
    for (o = 1; o < n3; o++) {
        b = b + "#"
    }
    console.log(b)
    counter++;
}


*/



// öv:6