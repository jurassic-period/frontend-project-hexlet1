import { cons } from '@hexlet/pairs';
import { getRandomNum, playGame } from '../index';

const rules = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => num % 2 === 0;

const getRoundData = () => {
  const question = getRandomNum(1, 101);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const playEvenGame = () => playGame(getRoundData, rules);

export default playEvenGame;
