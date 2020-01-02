import { cons } from '@hexlet/pairs';
import { playGame } from '..';
import getRandomNum from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const minNum = 1;
const maxNum = 30;

const gcd = (num1, num2) => {
  if (num2 === 0) return num1;
  const newNum1 = num1 % num2;
  return newNum1 > num2 ? gcd(newNum1, num2) : gcd(num2, newNum1);
};

const getRoundData = () => {
  const firstNum = getRandomNum(minNum + 1, maxNum);
  const secondNum = getRandomNum(minNum, firstNum);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = gcd(firstNum, secondNum);
  return cons(question, String(correctAnswer));
};

const playEvenGame = () => playGame(getRoundData, description);

export default playEvenGame;
