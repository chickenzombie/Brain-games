import startGameEngine from '../index.js';
import randomNumberGenerator from '../utilities.js';

const gameDescription = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculateExpressions = (firstNumber, operator, secondNumber) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const prepareGameData = () => {
  const firstNumber = randomNumberGenerator(1, 10);
  const secondNumber = randomNumberGenerator(1, 10);
  const randomOperator = operators[randomNumberGenerator(0, operators.length - 1)];
  const question = `${firstNumber} ${randomOperator} ${secondNumber}`;
  const rightAnswer = String(calculateExpressions(firstNumber, randomOperator, secondNumber));
  return [question, rightAnswer];
};

const startBrainCalc = startGameEngine(gameDescription, prepareGameData);

export default startBrainCalc;
