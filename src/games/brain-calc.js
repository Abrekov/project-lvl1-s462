import calc from '..';
import getRandomInteger from '../generator';

const gameDescription = 'What is the result of the expression?';
const rounds = 3;
const operations = new Map();
operations.set('+', (a, b) => a + b);
operations.set('-', (a, b) => a - b);
operations.set('*', (a, b) => a * b);

const operators = ['+', '-', '*'];

const questionAndAnswer = () => {
  const a = getRandomInteger(0, 10);
  const b = getRandomInteger(0, 10);
  const operator = operators[getRandomInteger(0, operators.length)];
  const question = `${a} ${operator} ${b}`;
  const correctAnswer = String(operations.get(operator)(a, b));
  return [question, correctAnswer];
};

export default () => calc(gameDescription, questionAndAnswer, rounds);
