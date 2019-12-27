import { cons } from '@hexlet/pairs';
import { getRandomNum, playGame } from '../index';

const rules = 'What number is missing in the progression?';

const items = 10;
const minNum = 1;
const maxNum = 50;

const getQuestionAndAnswer = (beginingNum, hidePosition) => {
  const row = '';
  const step = getRandomNum(minNum, minNum + 10);
  const iter = (counter, acc, currentNum) => {
    if (counter === items) return acc;
    if (counter === hidePosition) {
      return cons(iter(counter + 1, `${acc} ..`, currentNum + step), String(currentNum));
    }
    return iter(counter + 1, `${acc} ${currentNum}`, currentNum + step);
  };
  return iter(0, row, beginingNum);
};

const getRoundData = () => {
  const beginingNum = getRandomNum(minNum, maxNum);
  const hidePosition = getRandomNum(minNum, minNum + 9);
  const result = getQuestionAndAnswer(beginingNum, hidePosition);
  return result;
};

const playEvenGame = () => playGame(getRoundData, rules);

export default playEvenGame;
