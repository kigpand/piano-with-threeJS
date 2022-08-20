export default class KeyBoardElement {
    protected element: HTMLElement;

    constructor(name: string, parent: HTMLElement) {
        this.element = document.createElement('div');
        this.element.className = name.lastIndexOf('_') === -1 ? 'keyboard' : `keyboard${name}`;
        this.element.innerText = name;

        parent.appendChild(this.element);
    }
}