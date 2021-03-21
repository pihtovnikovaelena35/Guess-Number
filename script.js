'use strict';
let secretNumber;
let score;
let highscore=0;


function init() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);
    score = 20;
    document.querySelector('.score').textContent = score;


}
init();
document.querySelector('.check').addEventListener
    ('click', function () {
        let guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);
        if (!guess) {
            document.querySelector('.message').textContent = 'No number';
        } else if (guess === secretNumber) {
            document.querySelector('.message').textContent = 'Correct Number!';
            document.querySelector('.number').textContent = secretNumber;

            document.querySelector('.message').style.fontSize = '5rem';
            document.querySelector('body').style.backgroundColor = '#b00000';
            document.querySelector('.number').style.width = '30rem';

            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }


        } else if (guess > secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = 'Too high!';
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'You lost the game';
                document.querySelector('.score').textContent = 0;
            }
        } else if (guess < secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = 'Too low!';
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'You lost the game';
                document.querySelector('.score').textContent = 0;
            }


        }
    }
    );
let goessNow;
document.querySelector('.again').addEventListener
    ('click', function () {
        document.querySelector('body').style.backgroundColor = '#000';
        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.message').style.fontSize = '2rem';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('.number').style.width = '16rem';

        init();
    }
    );
