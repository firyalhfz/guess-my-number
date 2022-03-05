'use strict';

// // for get the class message
// console.log(document.querySelector('.message').textContent);

// //get the class message and change into correct number
// document.querySelector('.message').textContent = 'Correct Number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;

//TODO1 get the id of check button. and then when clicked we will get the guess id then change the value, change the type of guess become number because whenever we get somthinf from interface it will become string and then next we do the check condition with if. if the guess is not exist. (false) so will print message no number.

//TOD02 so here we gonna check if we input the guess number too low, so the message will be appear too low, and if we input the guess number too high so the message will be appear too high. and if we click the check every false, so our score will be lower and lower, if our score is spent, so will game over. and for now we gonna dont care about dry code, as long as our code is success, its okay, we will fix it later. anyway in todo2 we gonna use math trunc and mth random because, we want to get random number that not decimal between 1-20, so we will add +1 in the end, because, if not add 1 so the range number is just about 0-19.

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when no number
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!!';

    //when guess is right
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Corrext Number';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //when guess is too high
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    //when guess is too low
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK 😀
*/

document.querySelector('.again').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (guess === secretNumber) {
    document.querySelector('.score').textContent = 0;
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  }
});
