import { cons } from '@hexlet/pairs';
import { playGame } from '..';
import getRandomNum from '../utils';

const description = 'What is the result of the expression?';

const minNum = 0;
const maxNum = 10;
const operations = ['-', '+', '*'];

const getRoundData = () => {
  const randomOperand = operations[getRandomNum(minNum, operations.length)];
  const firstNum = getRandomNum(minNum, maxNum);
  const secondNum = getRandomNum(minNum, maxNum);
  const question = `${firstNum} ${randomOperand} ${secondNum}`;
  const makeData = (qstn, correctAnswer) => cons(qstn, String(correctAnswer));

  switch (randomOperand) {
    case '+': {
      const correctAnswer = firstNum + secondNum;
      return makeData(question, correctAnswer);
    }
    case '-': {
      const correctAnswer = firstNum - secondNum;
      return makeData(question, correctAnswer);
    }
    case '*': {
      const correctAnswer = firstNum * secondNum;
      return makeData(question, correctAnswer);
    }
    default: {
      return null;
    }
  }
};

const playCalcGame = () => playGame(getRoundData, description);

export default playCalcGame;
