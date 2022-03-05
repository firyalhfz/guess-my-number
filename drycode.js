'use strict';

//here we will make the code from script.js become more dry

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//todo5
const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}
const displayNumber = function(number){
  document.querySelector('.number').textContent = number
}
const displayScore = function(score){
  document.querySelector('.score').textContent = score
}

//todo1
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when no number
  if (!guess) {
    displayMessage('No number!!');

    //when guess is right
  } else if (guess === secretNumber) {
    displayMessage('Corrext Number');
    displayNumber(secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //todo4
    //set highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low');
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game!');
      displayScore(0);
    }
  }
});

//todo3
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayScore(score);
  document.querySelector('.guess').value = '';
  displayMessage( 'Start guessing...');
  displayNumber('?');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
