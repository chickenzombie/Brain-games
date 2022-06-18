import randomNumberGenerator from '../rng.js';
import gameEngine from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const brainProgression = () => {
  const progression = [];
  const progressionSize = randomNumberGenerator(5, 10);
  const progressionStep = randomNumberGenerator(1, 5);
  let progressionElement = 0;

  for (let i = 0; i < progressionSize; i += 1) {
    progressionElement += progressionStep;
    progression.push(progressionElement);
  }
  const hiddenNumber = randomNumberGenerator(1, progression.length - 2);
  const rightAnswer = String(progression[hiddenNumber]);
  progression[hiddenNumber] = '..';
  const question = progression.join(' ');
  return [question, rightAnswer];
};

export const startBrainProgression = gameEngine(gameDescription, brainProgression);

export default brainProgression;
