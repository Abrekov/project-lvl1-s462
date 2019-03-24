import prime from '..';
import getRandomInteger from '../generator';


const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.floor(num / 2); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomInteger(2, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => prime(gameDescription, getQuestionAndAnswer);
