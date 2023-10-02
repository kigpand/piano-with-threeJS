import { KeyBoradType, MusicType, keyboardSet } from "../../data/keyboardSet";
import KeyBoard from "../Keyboard/keyboard";

export default class PainoBody {
  private paino: HTMLElement;
  keyboardList: KeyBoard[];

  constructor() {
    this.paino = document.createElement("div");
    this.paino.className = "paino";
    this.keyboardList = [];

    document.querySelector(".container").appendChild(this.paino);
  }

  init() {
    keyboardSet.forEach((board: KeyBoradType) => {
      this.keyboardList.push(new KeyBoard(board.music, board.key, this.paino));
    });
  }

  getKeyBoard(key: MusicType) {
    return this.keyboardList.find(
      (keyboard: KeyBoard) => keyboard.name === key
    );
  }
}
