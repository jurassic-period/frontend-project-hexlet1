import { cons } from '@hexlet/pairs';
import { getRandomNum, playGame } from '../index';

const rules = 'What is the result of the expression?';

const minNum = 0;
const maxNum = 101;
const operandsNum = 3;

const getRoundData = () => {
  const randomOperand = Math.floor(Math.random() * operandsNum) + 1;
  const firstNum = getRandomNum(minNum, maxNum);
  const secondNum = getRandomNum(minNum, maxNum);

  switch (randomOperand) {
    case 1: {
      const question = `${firstNum} + ${secondNum}`;
      const correctAnswer = firstNum + secondNum;
      return cons(question, String(correctAnswer));
    }
    case 2: {
      const question = firstNum > secondNum ? `${firstNum} - ${secondNum}` : `${secondNum} - ${firstNum}`;
      const correctAnswer = firstNum > secondNum ? firstNum - secondNum : secondNum - firstNum;
      return cons(question, String(correctAnswer));
    }
    default: {
      const question = `${firstNum} * ${secondNum}`;
      const correctAnswer = firstNum * secondNum;
      return cons(question, String(correctAnswer));
    }
  }
};

const playCalcGame = () => playGame(getRoundData, rules);

export default playCalcGame;
