import readlineSync from 'readline-sync';
import getRandomInteger from './generator';

export const sayWelcome = () => {
  console.log('Welcome to the Brain Games!');
};
export const sayHello = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const getAnswer = () => readlineSync.question('Your answer: ');

export const isNumEven = num => num % 2 === 0;

let operand1 = 0;
let operand2 = 0;
let operator = 0;

const generateExpression = () => {
  operand1 = getRandomInteger(1, 11);
  operand2 = getRandomInteger(1, 11);
  operator = getRandomInteger(1, 4);
};

export const getRandomExpression = () => {
  generateExpression();
  if (operator === 1) {
    return `${operand1} + ${operand2}`;
  }
  if (operator === 2) {
    return `${operand1} - ${operand2}`;
  }
  return `${operand1} * ${operand2}`;
};

export const getResultOfExpression = () => {
  if (operator === 1) {
    return operand1 + operand2;
  }
  if (operator === 2) {
    return operand1 - operand2;
  }
  return operand1 * operand2;
};
