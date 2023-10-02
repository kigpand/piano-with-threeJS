import PainoBody from "./components/PainoBody/PainoBody";
import space from "./components/Map/Space/space";
import "./styles/style.css";
import { KeyBoradType, keyboardSet } from "./data/keyboardSet";

function play() {
  const paino = new PainoBody();
  paino.init();

  document.body.addEventListener("keydown", (e) => {
    const board = keyboardSet.find((item: KeyBoradType) => item.key === e.key);
    if (!board) return;
    paino.getKeyBoard(board.music).play();
  });
}

play();
space();
