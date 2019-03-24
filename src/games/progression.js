import progression from '..';
import getRandomInteger from '../generator';


const gameDescription = 'What number is missing in the progression?';

const getQuestion = (beginOfSequence, length, step, correctAnswer) => {
  let str = '';
  const endOfSequence = beginOfSequence + length * step;
  for (let i = beginOfSequence; i < endOfSequence; i += step) {
    if (i === correctAnswer) {
      str = `${str} ..`;
    } else {
      str = `${str} ${i}`;
    }
  }
  return str;
};

const getQuestionAndAnswer = () => {
  const beginOfSequence = getRandomInteger(0, 100);
  const step = 2;
  const length = 10;
  const correctAnswer = getRandomInteger(0, length) * step + beginOfSequence;
  const question = getQuestion(beginOfSequence, length, step, correctAnswer);
  return [question, String(correctAnswer)];
};

export default () => progression(gameDescription, getQuestionAndAnswer);
