import readlineSync from 'readline-sync';
import { getRandomNum } from '../index';

const question = 'Question: ';
const correct = 'Correct!';

const isEven = (num) => num % 2 === 0;
const isCorrectAnswer = (answer, num) => {
  const evenNum = isEven(num);
  if (evenNum) {
    return answer === 'yes';
  }
  return answer === 'no';
};

const playEvenGame = (playerName, counter = 0) => {
  if (counter === 3) {
    console.log(`Congratulations, ${playerName}!`);
    return;
  }
  const currentNum = getRandomNum();
  console.log(`${question}${currentNum} `);
  const answer = readlineSync.question('Your answer: ');
  const result = isCorrectAnswer(answer, currentNum);
  if (result) {
    console.log(correct);
    playEvenGame(playerName, counter + 1);
  } else {
    const correctAnswer = isEven(currentNum) ? 'yes' : 'no';
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${playerName}!`);
  }
};

export default playEvenGame;
