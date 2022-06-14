import gameEngine from '../index.js';
import randomNumberGenerator from '../rng.js';

const gameDescription = ('What is the result of the expression?');

const operators = ['+', '-', '*'];

const calcLogic = (firstNumber, operator, secondNumber) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return 'Unknown operator';
  }
};

const brainCalc = () => {
  const firstNumber = randomNumberGenerator(1, 10);
  const secondNumber = randomNumberGenerator(1, 10);
  const randomOperator = operators[randomNumberGenerator(0, operators.length - 1)];
  const question = `${firstNumber} ${randomOperator} ${secondNumber}`;
  const rightAnswer = String(calcLogic(firstNumber, randomOperator, secondNumber));
  return [question, rightAnswer];
};

const startBrainCalc = gameEngine(gameDescription, brainCalc);

export default startBrainCalc;
