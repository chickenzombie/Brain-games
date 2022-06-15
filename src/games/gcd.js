import randomNumberGenerator from '../rng.js';
import gameEngine from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcdLogic = (firstNumber, secondNumber) => {
  while (secondNumber) {
    const gcd = secondNumber;
    secondNumber = firstNumber % secondNumber;
    firstNumber = gcd;
  }
  return firstNumber;
};

const brainGCD = () => {
  const firstNumber = randomNumberGenerator(1, 50);
  const secondNumber = randomNumberGenerator(1, 50);
  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = `${gcdLogic(firstNumber, secondNumber)}`;
  return [question, rightAnswer];
};

const startBrainGCD = gameEngine(gameDescription, brainGCD);

export default startBrainGCD;
