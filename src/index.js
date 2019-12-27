import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const welcome = 'Welcome to the Brain Games!';

export const showWelcomAndRules = (rules) => {
  console.log(welcome);
  if (rules) {
    console.log(rules);
  }
};

export const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

const gameProcess = (playerName, roundCounter, getRoundData) => {
  if (roundCounter === 3) {
    return true;
  }
  const data = getRoundData();
  const question = car(data);
  const correctAnswer = cdr(data);
  console.log(`Question: ${question} `);
  const playerAnswer = readlineSync.question('Your answer: ');
  if (playerAnswer === correctAnswer) {
    console.log('Correct!');
    return gameProcess(playerName, roundCounter + 1, getRoundData);
  }
  console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export const playGame = (getRoundData, currentRules) => {
  showWelcomAndRules(currentRules);
  const playerName = getName();
  const gameResult = gameProcess(playerName, 0, getRoundData);
  if (gameResult) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
};
