import KeyBoard from '../Keyboard/keyboard';

export default class PainoBody {
    private paino: HTMLElement;

    constructor() {
        this.paino = document.createElement('div');
        this.paino.className = 'paino';

        document.body.appendChild(this.paino);
    }

    init() {
        const Do = new KeyBoard('do', 'do', this.paino);
        const Re = new KeyBoard('re', 're', this.paino);
    }
}