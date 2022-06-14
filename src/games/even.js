import randomNumberGenerator from '../rng.js';
import gameEngine from '../index.js';

const gameDescription = ('Answer "yes" if the number is even, otherwise answer "no".');

const isNumberEven = (number) => number % 2 === 0;

const brainEven = () => {
  const randomNumber = randomNumberGenerator(1, 50);
  const rightAnswer = isNumberEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, rightAnswer];
};

const startBrainEven = gameEngine(gameDescription, brainEven);

export default startBrainEven;
