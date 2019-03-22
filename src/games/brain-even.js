import even from '..';
import getRandomInteger from '../generator';

const gameDescription = 'Answer "yes" if number even otherwise answer "no"';
const isEven = num => num % 2 === 0;
const question = () => getRandomInteger(0, 100);
const correctAnswer = num => (isEven(num) ? 'yes' : 'no');

export default () => even(gameDescription, question, correctAnswer);
