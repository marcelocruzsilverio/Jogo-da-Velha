import disableRegion from "./disableRegion.js";
import getWinner from "./mainFunctions.js";
import { updateTurnPlayer } from "./startGame.js";
import { turnPlayer } from "./startGame.js";

export default function handleBoardClick(ev) {
  const span = ev.currentTarget;

  if (turnPlayer === "player1") {
    span.innerText = "X";
  } else {
    span.innerText = "O";
  }
  disableRegion(span);
  updateTurnPlayer();
  getWinner();
}
