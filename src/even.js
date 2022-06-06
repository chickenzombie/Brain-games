import readlineSync from 'readline-sync';
import randomNumber from './rng.js';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = randomNumber(1, 50);
    const evenNumber = number % 2 === 0;
    console.log('Question: ', number);

    const answer = readlineSync.question('Answer: ');
    const rightAnswer = (answer === 'yes' ? 'no' : 'yes');
    if ((evenNumber && answer === 'yes') || (!evenNumber && answer === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer :(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default brainEven();

