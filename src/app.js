/* eslint-disable */
import "bootstrap";
import "./style.css";

// botones + eventlistener
let drawButton = document.querySelector(".drawBtn");
let sortButton = document.querySelector(".sortBtn");
drawButton.addEventListener("click", drawRandomCards);
sortButton.addEventListener("click", bubbleSort);

// funcion cantidad de cartas aleatoria drawbutton
let inputAmount = document.querySelector(".amount");
let cards = [];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function drawRandomCards() {
  let amount = parseInt(inputAmount.value);
  for (let i = 0; i < amount; i++) {
    let newCard = document.createElement("div");
    let cardSuit = randomSuitGenerator();
    let cardNumber = randomNumberGenerator();
    newCard.classList.add("card", "number", cardSuit);
    newCard.setAttribute("style", "display:flex;");
    newCard.innerHTML = changeValue(cardNumber);
    let parent = document.querySelector(".cardsDiv");
    parent.append(newCard);
    cards.push({ cardSuit, cardNumber });
  }

  // funcion numero aleatorio para innerHTML
  function randomNumberGenerator() {
    let randomNumber = Math.floor(Math.random() * numbers.length);
    return numbers[randomNumber];
  }

  // funcion pinta aleatoria para clase
  function randomSuitGenerator() {
    let suits = ["spade", "club", "diamond", "heart"];
    let randomSuits = Math.floor(Math.random() * suits.length);
    return suits[randomSuits];
  }

  // asignar valor cartas
  function changeValue(value) {
    if (value === 1) return "A";
    if (value === 11) return "J";
    if (value === 12) return "Q";
    if (value === 13) return "K";
    return value;
  }
  console.log("this are the unsorted cards", cards);
}

// funcion orden de array para sortbutton
function bubbleSort(arr) {
  arr = cards;
  let wall = arr.length - 1;
  while (wall >= 0) {
    let index = 0;
    while (index < wall) {
      if (arr[index].cardNumber > arr[index + 1].cardNumber) {
        let aux = arr[index + 1];
        arr[index + 1] = arr[index];
        arr[index] = aux;
      }
      index++;
    }
    wall--;
  }
  return arr;
}
