import { cons } from '@hexlet/pairs';
import playGame from '..';
import getRandomNum from '../utils';

const description = 'What is the result of the expression?';

const minNum = 0;
const maxNum = 10;
const operations = ['-', '+', '*'];

const getAnswer = (operand, firstNum, secondNum) => {
  switch (operand) {
    case '+': {
      return firstNum + secondNum;
    }
    case '-': {
      return firstNum - secondNum;
    }
    case '*': {
      return firstNum * secondNum;
    }
    default: break;
  }
  return null;
};

const getRoundData = () => {
  const maxIndexOperation = operations.length - 1;
  const randomOperand = operations[getRandomNum(minNum, maxIndexOperation)];
  const firstNum = getRandomNum(minNum, maxNum);
  const secondNum = getRandomNum(minNum, maxNum);
  const question = `${firstNum} ${randomOperand} ${secondNum}`;
  const correctAnswer = getAnswer(randomOperand, firstNum, secondNum);
  return cons(question, String(correctAnswer));
};

const playCalcGame = () => playGame(getRoundData, description);

export default playCalcGame;
