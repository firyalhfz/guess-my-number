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
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Corrext Number';
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }else if(guess < secretNumber){
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
