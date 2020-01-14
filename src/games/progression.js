import { cons } from '@hexlet/pairs';
import playGame from '..';
import getRandomNum from '../utils';

const description = 'What number is missing in the progression?';

const progressionLength = 10;
const minNum = 1;
const maxNum = 50;
const minStep = 1;
const maxStep = 10;
const maxHidenPosition = 9;

const getQuestion = (beginingNum, hidePosition, step) => {
  const emptyAcc = '';
  const iter = (counter, acc, currentNum) => {
    if (counter === progressionLength) return acc;
    if (counter === hidePosition) {
      return iter(counter + 1, `${acc} ..`, currentNum + step);
    }
    return iter(counter + 1, `${acc} ${currentNum}`, currentNum + step);
  };
  return iter(0, emptyAcc, beginingNum);
};

const getRoundData = () => {
  const beginingNum = getRandomNum(minNum, maxNum);
  const hiddenElementPosition = getRandomNum(minNum, maxHidenPosition);
  const progressionStep = getRandomNum(minStep, maxStep);
  const question = getQuestion(beginingNum, hiddenElementPosition, progressionStep).slice(1);
  const correctAnswer = beginingNum + (hiddenElementPosition * progressionStep);
  return cons(question, String(correctAnswer));
};

const playEvenGame = () => playGame(getRoundData, description);

export default playEvenGame;
