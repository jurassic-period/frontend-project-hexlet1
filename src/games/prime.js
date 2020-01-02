import { cons } from '@hexlet/pairs';
import { playGame } from '..';
import getRandomNum from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const minNum = 2;
const maxNum = 102;
const startDivisor = 2;

const isPrime = (number) => {
  const iter = (divisor, num) => {
    if (divisor > num / 2) return true;
    if (num % divisor === 0) return false;
    return iter(divisor + 1, num);
  };
  return iter(startDivisor, number);
};

const getRoundData = () => {
  const question = getRandomNum(minNum, maxNum);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const playEvenGame = () => playGame(getRoundData, description);

export default playEvenGame;
