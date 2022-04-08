'use strict';

//selecting items
const message = document.querySelector('.message');
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;

//Check  if the number is correct
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //checks the score to continue the game
  if (score > 0) {
    // check if the value is number
    if (!guess) {
      message.innerText = 'No Number Found!';
    }
    //user wins
    else if (guess == randomNumber) {
      message.innerText = '🎉 You WIN!';
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').innerText = randomNumber;

      //records high score
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').innerText = highScore;
      }
    } else if (guess > randomNumber) {
      message.innerText = 'Go Lower!';
      score--;
      document.querySelector('.score').innerText = score;
    } else if (guess < randomNumber) {
      message.innerText = 'Go Higher!';
      score--;
      document.querySelector('.score').innerText = score;
    }
  } else {
    message.innerText = `Oh no you've lost the game 😥`;
  }
});

//resets game while keeping Highscore
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  message.innerText = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').innerText = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').innerText = '?';
  document.querySelector('.guess').value = '';
  console.log(randomNumber);
});
