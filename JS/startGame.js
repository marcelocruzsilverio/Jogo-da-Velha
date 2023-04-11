import handleBoardClick from "./handleBoardClick.js";

export let turnPlayer = ``;
export default function startGame() {
  const spanTurnPlayer = document.getElementById("turnPlayer");
  const startBtn = document.getElementById("startBtn");
  const allBoardRegions = document.querySelectorAll(
    "#gameBoard-container span"
  );
  const inputPlayer1 = document.getElementById("player1");

  spanTurnPlayer.style.cursor = "default";
  startBtn.addEventListener("click", function () {
    turnPlayer = "player1";
    spanTurnPlayer.innerText = inputPlayer1.value;
    allBoardRegions.forEach(function (element) {
      element.addEventListener("click", handleBoardClick);
    });
  });
}

export function updateTurnPlayer() {
  const spanTurnPlayer = document.getElementById("turnPlayer");
  const inputPlayer1 = document.getElementById("player1");
  const inputPlayer2 = document.getElementById("player2");

  turnPlayer = turnPlayer === "player1" ? "player2" : "player1";
  spanTurnPlayer.innerText =
    spanTurnPlayer.innerText === inputPlayer1.value
      ? inputPlayer2.value
      : inputPlayer1.value;
}
