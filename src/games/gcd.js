import startGameEngine from '../index.js';
import randomNumberGenerator from '../utilities.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const calculateGCD = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return firstNumber;
  }
  if (secondNumber > firstNumber) {
    return calculateGCD(secondNumber, firstNumber);
  }
  return calculateGCD(secondNumber, firstNumber % secondNumber);
};

const prepareGameData = () => {
  const firstNumber = randomNumberGenerator(1, 50);
  const secondNumber = randomNumberGenerator(1, 50);
  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = `${calculateGCD(firstNumber, secondNumber)}`;
  return [question, rightAnswer];
};

const startBrainGCD = startGameEngine(gameDescription, prepareGameData);

export default startBrainGCD;
