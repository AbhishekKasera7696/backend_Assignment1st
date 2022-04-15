const add = require('./add');
const divide = require('./divide');
const multiply = require('./multiply');
const substract = require('./substract');

let number1 = 20;
let number2 = 10;

let addition = add(number1, number2);
console.log(addition);

let subtraction = substract(number1, number2);
console.log(subtraction);

let multiplication = multiply(number1, number2);
console.log(multiplication);

let division = divide(number1, number2);
console.log(division);