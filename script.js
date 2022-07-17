"use strict";
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct number!';
// document.querySelector('.number').textContent = 15;
// document.querySelector('.score').textContent = 18;
// document.querySelector('.guess').value = 10;
// console.log(document.querySelector('.guess').value);
// const secretNumber = Math.trunc(Math.random() * 20 + 1);
// let score = 20;
// document.querySelector('.number').textContent = secretNumber;
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);
//   if (!guess) {
//     document.querySelector('.message').textContent = '⛔️ Not a number!';
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = '🎉Exactly!!!';
//   } else if (guess > secretNumber) {
//     document.querySelector('.message').textContent = '🥹Too high!!!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else if (guess < secretNumber) {
//     document.querySelector('.message').textContent = '😅Too low!!!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   }
// });
let secretNumber = Math.trunc(Math.random() * 20) + 1; //Ẩn số của trò chơi
let score = 20; //Giá trị cho điểm mà có thể thay đổi được
// document.querySelector('.number').textContent = secretNumber;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value); //Dùng Number để giá trị thu được là number chứ không phải string.
  console.log(typeof guess, guess);
  //When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ Not a number!";
  } else if (guess > secretNumber) {
    //When guess is too high
    if (score > 1) {
      document.querySelector(".message").textContent = "🥹Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😈 You lost a game!";
    }
    //When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "🥲Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😈 You lost a game!";
    }
    //When a player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉Exactly!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = "20";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
