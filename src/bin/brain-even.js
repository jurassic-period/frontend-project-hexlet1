#!/usr/bin/env node
import { showWelcomAndRules, getName } from '../index';
import playEvenGame from '../games/even';

const rules = 'Answer "yes" if the number is even, otherwise answer "no"';

showWelcomAndRules(rules);
const playerName = getName();
playEvenGame(playerName);
