import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const welcome = 'Welcome to the Brain Games!';
const amountRounds = 3;

export const showWelcomAndRules = (rules) => {
  console.log(welcome);
  console.log(rules);
};

const gameProcess = (playerName, roundCounter, getRoundData) => {
  if (roundCounter === amountRounds) {
    return true;
  }
  const data = getRoundData();
  const question = car(data);
  const correctAnswer = cdr(data);
  console.log(`Question: ${question} `);
  const playerAnswer = readlineSync.question('Your answer:');
  if (playerAnswer === correctAnswer) {
    console.log('Correct!');
    return gameProcess(playerName, roundCounter + 1, getRoundData);
  }
  console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export const playGame = (getRoundData, description) => {
  showWelcomAndRules(description);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  const roundCounter = 0;
  const gameResult = gameProcess(playerName, roundCounter, getRoundData);
  if (gameResult) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
};
