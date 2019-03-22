import readlineSync from 'readline-sync';

export default (gameDescription, question, correctAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const round = 3;
  for (let i = 0; i < round; i += 1) {
    const data = question();
    console.log(`Question: ${data}`);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = String(correctAnswer(data));
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
