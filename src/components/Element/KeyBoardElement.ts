export default class KeyBoardElement {
  protected element: HTMLElement;

  constructor(name: string, position: string, parent: HTMLElement) {
    this.element = document.createElement("div");
    this.element.className =
      name.lastIndexOf("_") === -1 ? "keyboard" : `keyboard${name}`;
    this.element.innerText = position;

    parent.appendChild(this.element);
  }
}
