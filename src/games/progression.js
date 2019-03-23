import progression from '..';
import getRandomInteger from '../generator';

const rounds = 3;
const gameDescription = 'What number is missing in the progression?';

const getQuestion = (a, b, c) => {
  let str = '';
  let count = 0;
  for (let i = a; i < b; i += 2) {
    count += 1;
    if (count === c) {
      str = `${str} ..`;
    } else {
      str = `${str} ${i}`;
    }
  }
  return str;
};

const questionAndAnswer = () => {
  const beginOfProgression = getRandomInteger(0, 100);
  const endOfProgression = beginOfProgression + 20;
  const randomInteger = getRandomInteger(1, 11);
  const correctAnswer = String(randomInteger * 2 + beginOfProgression - 2);
  const question = getQuestion(beginOfProgression, endOfProgression, randomInteger);
  return [question, correctAnswer];
};

export default () => progression(gameDescription, questionAndAnswer, rounds);
