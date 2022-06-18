import randomNumberGenerator from '../rng.js';
import gameEngine from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isNumberPrime = (number) => {
  for (let i = 2, max = Math.sqrt(number); i <= max; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const brainPrime = () => {
  const randomNumber = randomNumberGenerator(2, 100);
  const rightAnswer = isNumberPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, rightAnswer];
};

export const startBrainPrime = gameEngine(gameDescription, brainPrime);

export default brainPrime;
