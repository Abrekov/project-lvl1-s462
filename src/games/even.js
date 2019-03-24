import even from '..';
import getRandomInteger from '../generator';

const rounds = 3;
const gameDescription = 'Answer "yes" if number even otherwise answer "no"';
const isEven = num => num % 2 === 0;
const getQuestionAndAnswer = () => {
  const question = getRandomInteger(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => even(gameDescription, getQuestionAndAnswer, rounds);
