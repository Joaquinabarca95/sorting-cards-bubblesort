/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let drawButton = document.querySelector(".draw");
  drawButton.addEventListener("click", drawRandomCards);

  let amount = document.querySelector(".amount");

  function drawRandomCards() {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "number");
    let parent = document.querySelector(".parent");
    parent.append(cardDiv);
    document.querySelector(".card").classList.add(randomSuitGenerator());
    document.querySelector(".number").innerHTML = randomNumberGenerator();

    function randomNumberGenerator() {
      let numbers = [
        "A",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K"
      ];
      let randomNumber = Math.floor(Math.random() * numbers.length);
      return numbers[randomNumber];
    }

    function randomSuitGenerator() {
      let suits = ["spade", "club", "diamond", "heart"];
      let randomSuits = Math.floor(Math.random() * suits.length);
      return suits[randomSuits];
    }
  }
};
