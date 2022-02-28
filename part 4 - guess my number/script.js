'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent =
  'Bravo Kralju, pogodio si broj✔👍';

document.querySelector('.number').textContent = 14;
document.querySelector('.score').textContent = 8;

document.querySelector('.guess').value = 44;
console.log(document.querySelector('.guess').value);
*/

//definicija tajnog broja koji se trazi

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    //document.querySelector('.message').textContent = '❌ Nema broja!';
    //kako bi skratili poreces kucanja, svaki put isto mi smo napravili funckiju koji kasnije samo pozivamo i ona izvrsava radnju koju smo joj zadali kao u ovom slucaju 'displayMessage'
    displayMessage('❌ Nema broja!');
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '🙌 Bravo pogodio si!';
    displayMessage('🙌 Bravo pogodio si!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //Kada je guess pogresan, medjutim ovo je skracena verzija koda da se ne bi kucalo 2 puta ista situacija kao u odeljku koji je komentarisan dole
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent =
      //guess > secretNumber ? ' 📈 Preveliki broj!' : ' 📉 Premali broj!';
      displayMessage(
        guess > secretNumber ? ' 📈 Preveliki broj!' : ' 📉 Premali broj!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = '💥 Izgubili ste igru!';
      displayMessage('💥 Izgubili ste igru!');
      document.querySelector('.score').textContent = 0;
    }
  }
  //Kada je broj za pogadjanje preveliki
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = ' 📈 Preveliki broj!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 Izgubili ste igru!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // //Kada je broj za pogadjanje premali
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = ' 📉 Premali broj!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 Izgubili ste igru!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
