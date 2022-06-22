import startGameEngine from '../index.js';
import randomNumberGenerator from '../utilities.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isNumberEven = (number) => number % 2 === 0;

const prepareGameData = () => {
  const randomNumber = randomNumberGenerator(1, 50);
  const rightAnswer = isNumberEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, rightAnswer];
};

const startBrainEven = startGameEngine(gameDescription, prepareGameData);

export default startBrainEven;
