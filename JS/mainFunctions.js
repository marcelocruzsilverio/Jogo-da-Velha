import handleBoardClick from "./handleBoardClick.js";
import addClassWinner from "./handleClassWinner.js";

let noWinner = -1;

export default function getWinner() {
  const span1 = document.getElementById("span1");
  const span2 = document.getElementById("span2");
  const span3 = document.getElementById("span3");
  const span4 = document.getElementById("span4");
  const span5 = document.getElementById("span5");
  const span6 = document.getElementById("span6");
  const span7 = document.getElementById("span7");
  const span8 = document.getElementById("span8");
  const span9 = document.getElementById("span9");

  if (
    span1.innerText === span2.innerText &&
    span2.innerText === span3.innerText &&
    span1.innerText !== ""
  ) {
    addClassWinner(span1, span2, span3);
    stopGame();
  }
  if (
    span4.innerText === span5.innerText &&
    span5.innerText === span6.innerText &&
    span4.innerText !== ""
  ) {
    addClassWinner(span4, span5, span6);
    stopGame();
  }
  if (
    span7.innerText === span8.innerText &&
    span8.innerText === span9.innerText &&
    span7.innerText !== ""
  ) {
    addClassWinner(span7, span8, span9);
    stopGame();
  }
  if (
    span1.innerText === span4.innerText &&
    span4.innerText === span7.innerText &&
    span1.innerText !== ""
  ) {
    addClassWinner(span1, span4, span7);
    stopGame();
  }
  if (
    span2.innerText === span5.innerText &&
    span5.innerText === span8.innerText &&
    span2.innerText !== ""
  ) {
    addClassWinner(span2, span5, span8);
    stopGame();
  }
  if (
    span3.innerText === span6.innerText &&
    span6.innerText === span9.innerText &&
    span3.innerText !== ""
  ) {
    addClassWinner(span3, span6, span9);
    stopGame();
  }
  if (
    span1.innerText === span5.innerText &&
    span5.innerText === span9.innerText &&
    span1.innerText !== ""
  ) {
    addClassWinner(span1, span5, span9);
    stopGame();
  }
  if (
    span3.innerText === span5.innerText &&
    span5.innerText === span7.innerText &&
    span5.innerText !== ""
  ) {
    addClassWinner(span3, span5, span7);
    stopGame();
  } else {
    noWinner++;
    console.log(noWinner);
  }

  if (noWinner === 9) {
    stopGame();
    noWinner++;
    console.log(noWinner);
  }
}

export function stopGame() {
  const spanTurnPlayer = document.getElementById("turnPlayer");
  const startBtn = document.getElementById("startBtn");
  const allBoardRegions = document.querySelectorAll(
    "#gameBoard-container span"
  );
  const inputPlayer1 = document.getElementById("player1");
  const inputPlayer2 = document.getElementById("player2");

  const h2 = document.querySelector(".h2Title");

  startBtn.remove();
  if (noWinner === 9) {
    spanTurnPlayer.innerText = "🚫 Empate!";
    h2.innerText = "";
  }
  allBoardRegions.forEach(function (element) {
    element.removeEventListener("click", handleBoardClick);
    if (element.classList.contains("winner") && element.innerText === "X") {
      spanTurnPlayer.classList.add("winner");
      h2.innerText = "";
      spanTurnPlayer.innerText = "Vencedor(a): " + inputPlayer1.value;
    } else if (
      element.classList.contains("winner") &&
      element.innerText === "O"
    ) {
      spanTurnPlayer.classList.add("winner");
      h2.innerText = "";
      spanTurnPlayer.innerText = "Vencedor(a): " + inputPlayer2.value;
    }
  });
}

export function cleanGame() {
  const spanTurnPlayer = document.getElementById("turnPlayer");
  const startBtn = document.getElementById("startBtn");
  const allBoardRegions = document.querySelectorAll(
    "#gameBoard-container span"
  );
  const inputPlayer1 = document.getElementById("player1");
  const inputPlayer2 = document.getElementById("player2");
  const initializeBtn = document.getElementById("initializeBtn");
  const h2 = document.querySelector(".h2Title");
  const divStartButton = document.querySelector(".start-button");

  let turnPlayer = "";
  initializeBtn.addEventListener("click", function () {
    spanTurnPlayer.innerText = "";
    noWinner = 0;
    spanTurnPlayer.classList.remove("winner");
    divStartButton.appendChild(startBtn);
    h2.innerText = "Vez de:";
    inputPlayer1.value = "";
    inputPlayer2.value = "";
    turnPlayer = "player1";
    allBoardRegions.forEach(function (element) {
      element.removeEventListener("click", handleBoardClick);
      element.innerText = "";
      element.style.cursor = "pointer";
      element.classList.remove("winner");
    });
  });
}
