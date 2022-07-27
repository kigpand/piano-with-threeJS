export default class KeyBoardElement {
    protected element: HTMLElement;

    constructor(name: string, parent: HTMLElement) {
        this.element = document.createElement('div');
        this.element.className = 'keyboard';
        this.element.innerText = name;

        parent.appendChild(this.element);
    }
}