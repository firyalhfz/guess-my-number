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

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    
    if(!guess){
        document.querySelector('.message').textContent = 'No number!!'
    }else{
        document.querySelector('.message').textContent = 'Exist'
    }
});
