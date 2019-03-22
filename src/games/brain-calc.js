import {
  sayHello, sayWelcome, getAnswer, getRandomExpression, getResultOfExpression,
} from '..';

const calculator = () => {
  sayWelcome();
  console.log('What is the result of the expression?');
  const name = sayHello();

  const round = 3;
  let wins = 0;
  for (let i = 0; i < round; i += 1) {
    const question = getRandomExpression();
    console.log(`Question: ${question}`);
    const answer = Number(getAnswer());
    const correctAnswer = getResultOfExpression();

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

export default calculator;
