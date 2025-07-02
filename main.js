/* 1. Use readlineSync.question() to prompt a user for input
2. Prompt a user for an index number to find the character at that index
3. Use bracket notation to access the character
4. Print out the character */

const readline = require("readline-sync");

/* Asks for their name.
Prints back their name.
Asks for a number.
Uses that number to pick a character.
 Prints back the character.*/

let name = readline.question("What is your first name?  ");
let nameAnswer = "You answered: " + name;
console.log(nameAnswer);
let numPick = readline.questionInt(
  name + ", Please pick a number between one and three. "
);
let pickAnswer = "You picked: " + numPick;
console.log(pickAnswer);

let reveal =
  "'" +
  nameAnswer[numPick + 13] +
  "'" +
  " is the letter from your name you chose! It's MAGIC!";
console.log(reveal);
