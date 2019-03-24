import gcd from '..';
import getRandomInteger from '../generator';


const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (a, b) => {
  if (b === 0) {
    return String(a);
  }
  return getGreatestCommonDivisor(b, a % b);
};

const getQuestionAndAnswer = () => {
  const number1 = getRandomInteger(1, 100);
  const number2 = getRandomInteger(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = getGreatestCommonDivisor(number1, number2);

  return [question, correctAnswer];
};

export default () => gcd(gameDescription, getQuestionAndAnswer);
