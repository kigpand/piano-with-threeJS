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
    this.keyboardList.push(new KeyBoard("Do", "a", this.paino));
    this.keyboardList.push(new KeyBoard("Do_", "w", this.paino));
    this.keyboardList.push(new KeyBoard("Re", "s", this.paino));
    this.keyboardList.push(new KeyBoard("Re_", "e", this.paino));
    this.keyboardList.push(new KeyBoard("Me", "d", this.paino));
    this.keyboardList.push(new KeyBoard("Pa", "f", this.paino));
    this.keyboardList.push(new KeyBoard("Pa_", "t", this.paino));
    this.keyboardList.push(new KeyBoard("Sol", "g", this.paino));
    this.keyboardList.push(new KeyBoard("Sol_", "y", this.paino));
    this.keyboardList.push(new KeyBoard("Ra", "h", this.paino));
    this.keyboardList.push(new KeyBoard("Ra_", "u", this.paino));
    this.keyboardList.push(new KeyBoard("Si", "j", this.paino));
    this.keyboardList.push(new KeyBoard("HighDo", "k", this.paino));
  }

  getKeyBoard(key: string) {
    return this.keyboardList.find(
      (keyboard: KeyBoard) => keyboard.name === key
    );
  }
}
