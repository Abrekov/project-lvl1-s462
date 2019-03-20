import readlineSync from 'readline-sync';

export const userName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export const isEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no"');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  let num = 0;
  let answer = '';
  let correctAnswer = '';

  for (let i = 0; i < 3; i += 1) {
    num = Math.floor(Math.random() * Math.floor(100));
    console.log(`Question: ${num}`);
    answer = readlineSync.question('Your answer: ');
    correctAnswer = num % 2 === 0 ? 'yes' : 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${name}`);
      break;
    }
  }

  if (answer === correctAnswer) {
    console.log(`Congratulations, ${name}!`);
  }
};
