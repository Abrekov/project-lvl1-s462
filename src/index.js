import readlineSync from 'readline-sync';

export const sayWelcome = () => {
  console.log('Welcome to the Brain Games!');
};
export const sayHello = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

// eslint-disable-next-line max-len
const getRandomNumber = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);

const checkEven = number => number % 2 === 0;

export const isEven = () => {
  sayWelcome();
  console.log('Answer "yes" if number even otherwise answer "no"');
  const name = sayHello();

  const numOfQuestion = 3;
  let wins = 0;
  for (let i = 0; i < numOfQuestion; i += 1) {
    const question = getRandomNumber(1, 100);
    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = checkEven(question) ? 'yes' : 'no';

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
