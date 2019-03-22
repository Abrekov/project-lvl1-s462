import {
  sayHello, sayWelcome, getAnswer, isNumEven,
} from '..';
import getRandomInteger from '../generator';

const isEven = () => {
  sayWelcome();
  console.log('Answer "yes" if number even otherwise answer "no"');
  const name = sayHello();

  const round = 3;
  let wins = 0;
  for (let i = 0; i < round; i += 1) {
    const question = getRandomInteger(1, 100);
    console.log(`Question: ${question}`);

    const answer = getAnswer();
    const correctAnswer = isNumEven(question) ? 'yes' : 'no';

    if (answer === correctAnswer) {
      console.log('Correct!');
      wins += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${name}`);
      break;
    }
  }

  if (wins === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default isEven;
