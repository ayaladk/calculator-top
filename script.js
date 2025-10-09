const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(number1, number2, operator) {
	if (operator == '+') {
		return add(number1, number2);
	}
	else if (operator == '-') {
		return substract(number1, number2);
	}
	else if (operator == '*') {
		return multiply(number1, number2);
	}
	else if (operator == '/') {
		return divide(number1, number2);
	}
}

let number1 = 1
let number2 = 2
let operator = '-'

console.log(operate(number1, number2, operator))