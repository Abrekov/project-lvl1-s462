import gcd from '..';
import getRandomInteger from '../generator';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const number1 = getRandomInteger(1, 100);
const number2 = getRandomInteger(1, 100);
const grstCommonDivisor = () => {
  const maxDivisor = number1 <= number2 ? number1 : number2;
  if (number1 % maxDivisor === 0 && number2 % maxDivisor === 0) {
    return String(maxDivisor);
  }
  let greatestCommonDivisor = 1;
  for (let i = Math.floor(maxDivisor / 2); i > 1; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      greatestCommonDivisor = i;
      return String(greatestCommonDivisor);
    }
  }
  return String(greatestCommonDivisor);
};

const questionAndAnswer = () => {
  const question = `${number1} ${number2}`;
  const correctAnswer = grstCommonDivisor();

  return [question, correctAnswer];
};

export default () => gcd(gameDescription, questionAndAnswer);
