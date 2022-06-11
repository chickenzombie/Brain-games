import randomNumber from "../rng";

const gameQuestion = 'What is the result of the expression?';
const operator = ['+', '-', '*'];

const calculations = (number1, number2, operator) => {

let result = 0; 
switch (operator) {
    case '+':
        result = number1 + number2;
        break;
    case '-':
        result = number1 - number2;
        break;
    case '*':
        result = number1 * number2;
        break;
    default: 
        console.log('Invalid operator');
        break;
};
};



let firstNumber = randomNumber(1, 20);
let secondNumber = randomNumber(1, 20);

