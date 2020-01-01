import { cons } from '@hexlet/pairs';
import { getRandomNum, playGame } from '..';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const minNum = 1;
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
  const num = getRandomNum(minNum, maxNum);
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return cons(num, correctAnswer);
};

const playEvenGame = () => playGame(getRoundData, rules);

export default playEvenGame;
