import randomNumberGenerator from '../rng.js';
import gameEngine from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcdLogic = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return firstNumber;
  }
  if (secondNumber > firstNumber) {
    return gcdLogic(secondNumber, firstNumber);
  }
  return gcdLogic(secondNumber, firstNumber % secondNumber);
};

const brainGCD = () => {
  const firstNumber = randomNumberGenerator(1, 50);
  const secondNumber = randomNumberGenerator(1, 50);
  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = `${gcdLogic(firstNumber, secondNumber)}`;
  return [question, rightAnswer];
};

export const startBrainGCD = gameEngine(gameDescription, brainGCD);

export default brainGCD;
