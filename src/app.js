/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let drawButton = document.querySelector(".drawBtn");
  drawButton.addEventListener("click", drawRandomCards);
  let sortButton = document.querySelector(".sortBtn");
  sortButton.addEventListener("click", bubbleSortCards);

  let inputAmount = document.querySelector(".amount");
  let cardAmount = [];
  function drawRandomCards() {
    let amount = parseInt(inputAmount.value);
    // console.log(amount);

    for (let i = 0; i < amount; i++) {
      let newCard = document.createElement("div");
      newCard.classList.add("card", "number", randomSuitGenerator());
      newCard.setAttribute("style", "display:flex;");
      newCard.innerHTML = randomNumberGenerator();
      let parent = document.querySelector(".cardsDiv");
      parent.append(newCard);
      cardAmount.push(newCard);
      // console.log(cardAmount);
      if (newCard != undefined) {
        function disableBtn() {
          document.getElementById("draw").disabled = true;
        }
        disableBtn();
      }
    }

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

  function bubbleSortCards(arr) {
    console.log(cardAmount);
    arr = cardAmount;
    let wall = arr.length - 1;
    while (wall > 0) {
      let index = 0;
      while (index < wall) {
        if (arr[index] > arr[index + 1]) {
          let aux = arr[index];
          arr[index] = arr[index + 1];
          arr[index + 1] = aux;
        }
        index++;
      }
      wall--;
    }
    console.log(arr);
    return arr;
  }
};
