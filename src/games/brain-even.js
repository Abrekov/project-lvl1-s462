import even from '..';
import getRandomInteger from '../generator';

const gameDescription = 'Answer "yes" if number even otherwise answer "no"';
const isEven = num => num % 2 === 0;
const questionAndAnswer = () => {
  const question = getRandomInteger(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => even(gameDescription, questionAndAnswer);
