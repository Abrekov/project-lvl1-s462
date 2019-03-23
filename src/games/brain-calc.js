import calc from '..';
import getRandomInteger from '../generator';

const gameDescription = 'What is the result of the expression?';

const operatorsAndFunctions = new Map();
operatorsAndFunctions.set('+', (a, b) => a + b);
operatorsAndFunctions.set('-', (a, b) => a - b);
operatorsAndFunctions.set('*', (a, b) => a * b);

const operators = ['+', '-', '*'];

const questionAndAnswer = () => {
  const a = getRandomInteger(0, 10);
  const b = getRandomInteger(0, 10);
  const operator = operators[getRandomInteger(0, operators.length)];
  const question = `${a} ${operator} ${b}`;
  const correctAnswer = String(operatorsAndFunctions.get(operator)(a, b));
  return [question, correctAnswer];
};

export default () => calc(gameDescription, questionAndAnswer);
