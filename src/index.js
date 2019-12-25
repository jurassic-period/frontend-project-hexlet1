import readlineSync from 'readline-sync';

export const showWelcomAndRules = (rules) => {
  if (rules) {
    console.log('Welcome to the Brain Games!');
    console.log(rules);
  } else {
    console.log('Welcome to the Brain Games!');
  }
};

export const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const getRandomNum = () => Math.floor(Math.random() * 101) + 1;
