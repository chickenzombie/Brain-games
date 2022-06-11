import readlineSync from 'readline-sync';

const gameEngine = (gameDescription, gameInfo) => {
    console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameQuestion);
}

for (let i = 0; i < 3; i += 1) {
    [question, answer] = gameInfo();
    console.log(`Question: ${gameDescription}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === rightAnswer) {
        console.log('Correct!');
    } else {
        console.log(`'${answer}' is wrong answer :(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
        return;
      };
    console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;

