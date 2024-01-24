"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let remanningscore = 20;

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".remanningscore").textContent = remanningscore;
console.log(secretNumber);
document.querySelector(".guess").addEventListener("click", function () {
  let input1 = Number(document.querySelector(".input1").value);

  //cant be empty
  if (!input1) {
    displayMessage("Field can`t be Empty or Zero(0)");

    //when condition is matched
  } else if (input1 === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number You Win";
    document.querySelector(".Secretnumber").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#33ff58f2";
    if (remanningscore > highScore) {
      highScore = remanningscore;
      document.querySelector(".highScore").textContent = highScore;
    }

    //when user input is high
  } else if (input1 !== secretNumber) {
    if (remanningscore > 1) {
      let compare =
        input1 > secretNumber
          ? "Your Number is Too High"
          : "Your Number is Too Low";
      document.querySelector(".message").textContent = compare;
      remanningscore--;
      document.querySelector(".remanningscore").textContent = remanningscore;
    } else {
      document.querySelector(".message").textContent = "You lost The Game";
      document.querySelector(".remanningscore").textContent = "0";
    }

    //when user input is low
  } else if (input1 < secretNumber) {
    document.querySelector(".message").textContent = "Your Number is Too low";

    remanningscore--;
    document.querySelector(".remanningscore").textContent = remanningscore;
  }
});

document.querySelector(".reset").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  remanningscore = 20;
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".remanningscore").textContent = remanningscore;
  document.querySelector(".input1").value = "";
  document.querySelector(".Secretnumber").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#000000";
});
