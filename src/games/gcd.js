import { cons } from '@hexlet/pairs';
import { getRandomNum, playGame } from '..';

const description = 'Find the greatest common divisor of given numbers.';

const minNum = 1;
const maxNum = 30;

const getAnswer = (num1, num2) => {
  if (num2 === 0) return num1;
  const newNum1 = num1 % num2;
  return newNum1 > num2 ? getAnswer(newNum1, num2) : getAnswer(num2, newNum1);
};

const getRoundData = () => {
  const firstNum = getRandomNum(minNum + 1, maxNum);
  const secondNum = getRandomNum(minNum, firstNum);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = getAnswer(firstNum, secondNum);
  return cons(question, String(correctAnswer));
};

const playEvenGame = () => playGame(getRoundData, description);

export default playEvenGame;
