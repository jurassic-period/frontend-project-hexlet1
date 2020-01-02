import { cons } from '@hexlet/pairs';
import { playGame } from '..';
import getRandomNum from '../utils';

const description = 'What number is missing in the progression?';

const progressionLength = 10;
const minNum = 1;
const maxNum = 50;

const getQuestionAndAnswer = (beginingNum, hidePosition) => {
  const emptyAcc = '';
  const progressionStep = getRandomNum(minNum, progressionLength);
  const iter = (counter, acc, currentNum) => {
    if (counter === progressionLength) return acc;
    if (counter === hidePosition) {
      return cons(iter(counter + 1, `${acc} ..`, currentNum + progressionStep), String(currentNum));
    }
    return iter(counter + 1, `${acc} ${currentNum}`, currentNum + progressionStep);
  };
  return iter(0, emptyAcc, beginingNum);
};

const getRoundData = () => {
  const beginingNum = getRandomNum(minNum, maxNum);
  const hidePosition = getRandomNum(minNum, progressionLength);
  const result = getQuestionAndAnswer(beginingNum, hidePosition);
  return result;
};

const playEvenGame = () => playGame(getRoundData, description);

export default playEvenGame;
