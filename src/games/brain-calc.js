import calc from '..';
import getRandomInteger from '../generator';

const gameDescription = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const question = () => {
  const a = getRandomInteger(0, 10);
  const b = getRandomInteger(0, 10);
  const operator = operators[getRandomInteger(0, 3)];
  return `${a} ${operator} ${b}`;
};
const correctAnswer = (str) => {
  const array = str.split(' ');
  if (array[1] === '+') {
    return Number(array[0]) + Number(array[2]);
  }
  if (array[1] === '-') {
    return Number(array[0]) - Number(array[2]);
  }
  return Number(array[0]) * Number(array[2]);
};

export default () => calc(gameDescription, question, correctAnswer);
