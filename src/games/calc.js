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

  switch (randomOperand) {
    case '+': {
      const question = `${firstNum} + ${secondNum}`;
      const correctAnswer = firstNum + secondNum;
      return cons(question, String(correctAnswer));
    }
    case '-': {
      const question = firstNum > secondNum ? `${firstNum} - ${secondNum}` : `${secondNum} - ${firstNum}`;
      const correctAnswer = firstNum > secondNum ? firstNum - secondNum : secondNum - firstNum;
      return cons(question, String(correctAnswer));
    }
    case '*': {
      const question = `${firstNum} * ${secondNum}`;
      const correctAnswer = firstNum * secondNum;
      return cons(question, String(correctAnswer));
    }
    default: {
      return null;
    }
  }
};

const playCalcGame = () => playGame(getRoundData, description);

export default playCalcGame;
