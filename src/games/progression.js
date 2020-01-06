import { cons } from '@hexlet/pairs';
import { playGame } from '..';
import getRandomNum from '../utils';

const description = 'What number is missing in the progression?';

const progressionLength = 10;
const minNum = 1;
const maxNum = 50;
const minStep = 1;
const maxStep = 10;

const getQuestionAndAnswer = (beginingNum, hidePosition, step) => {
  const emptyAcc = '';
  const iter = (counter, acc, currentNum) => {
    if (counter === progressionLength) return acc;
    if (counter === hidePosition) {
      return cons(iter(counter + 1, `${acc} ..`, currentNum + step), String(currentNum));
    }
    return iter(counter + 1, `${acc} ${currentNum}`, currentNum + step);
  };
  return iter(0, emptyAcc, beginingNum);
};

const getRoundData = () => {
  const beginingNum = getRandomNum(minNum, maxNum);
  const hiddenElementPosition = getRandomNum(minNum, progressionLength);
  const progStep = getRandomNum(minStep, maxStep);
  const result = getQuestionAndAnswer(beginingNum, hiddenElementPosition, progStep);
  return result;
};

const playEvenGame = () => playGame(getRoundData, description);

export default playEvenGame;
