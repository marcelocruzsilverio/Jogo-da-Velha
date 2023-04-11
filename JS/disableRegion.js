import handleBoardClick from "./handleBoardClick.js";

export default function disableRegion(element) {
  element.style.cursor = "default";
  element.removeEventListener("click", handleBoardClick);
}
