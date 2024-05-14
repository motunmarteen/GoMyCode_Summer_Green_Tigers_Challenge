// Program Flow: Functions: Write a JavaScript function that takes two parameters and returns their sum.

let num1 = Number(prompt("Enter a number"))
let num2 = Number(prompt("Enter another number"))

function sum(a, b) {
  return a + b;
}

let sums = sum(num1, num2);
console.log(sums);