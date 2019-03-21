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
const getRandomInteger = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);

const isNumEven = num => num % 2 === 0;

export const isEven = () => {
  sayWelcome();
  console.log('Answer "yes" if number even otherwise answer "no"');
  const name = sayHello();

  const round = 3;
  let wins = 0;
  for (let i = 0; i < round; i += 1) {
    const question = getRandomInteger(1, 100);
    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');
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

let correctAnswer = 0;
// eslint-disable-next-line consistent-return
const getRandomExpression = () => {
  const operand1 = getRandomInteger(1, 11);
  const operand2 = getRandomInteger(1, 11);
  const operator = getRandomInteger(1, 4);
  if (operator === 1) {
    correctAnswer = operand1 + operand2;
    return `${operand1} + ${operand2}`;
  }
  if (operator === 2) {
    correctAnswer = operand1 - operand2;
    return `${operand1} - ${operand2}`;
  }
  if (operator === 3) {
    correctAnswer = operand1 * operand2;
    return `${operand1} * ${operand2}`;
  }
};

export const calculator = () => {
  sayWelcome();
  console.log('What is the result of the expression?');
  const name = sayHello();

  const round = 3;
  let wins = 0;
  for (let i = 0; i < round; i += 1) {
    const question = getRandomExpression();
    console.log(`Question: ${question}`);
    const answer = Number(readlineSync.question('Your answer: '));

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
