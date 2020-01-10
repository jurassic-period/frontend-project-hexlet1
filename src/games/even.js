import { cons } from '@hexlet/pairs';
import playGame from '..';
import getRandomNum from '../utils';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';
const minNum = 1;
const maxNum = 101;

const isEven = (num) => num % 2 === 0;

const getRoundData = () => {
  const question = getRandomNum(minNum, maxNum);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const playEvenGame = () => playGame(getRoundData, description);

export default playEvenGame;
