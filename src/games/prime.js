import startGameEngine from '../index.js';
import randomNumberGenerator from '../utilities.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isNumberPrime = (number) => {
  for (let i = 2, max = Math.sqrt(number); i <= max; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const prepareGameData = () => {
  const randomNumber = randomNumberGenerator(2, 100);
  const rightAnswer = isNumberPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, rightAnswer];
};

const startBrainPrime = startGameEngine(gameDescription, prepareGameData);

export default startBrainPrime;
