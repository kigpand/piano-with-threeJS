import KeyBoard from '../Keyboard/keyboard';

export default class PainoBody {
    private paino: HTMLElement;

    constructor() {
        this.paino = document.createElement('div');
        this.paino.className = 'paino';

        document.body.appendChild(this.paino);
    }

    init() {
        const Do = new KeyBoard('Do', 'Do', this.paino);
        const Do_ = new KeyBoard('Do_', 'Do_', this.paino);
        const Re = new KeyBoard('Re', 'Re', this.paino);
        const Re_ = new KeyBoard('Re_', 'Re_', this.paino);
        const Me = new KeyBoard('Me', 'Me', this.paino);
        const Pa = new KeyBoard('Pa', 'Pa', this.paino);
        const Pa_ = new KeyBoard('Pa_', 'Pa_', this.paino);
        const Sol = new KeyBoard('Sol', 'Sol', this.paino);
        const Sol_ = new KeyBoard('Sol_', 'Sol_', this.paino);
        const Ra = new KeyBoard('Ra', 'Ra', this.paino);
        const Ra_ = new KeyBoard('Ra_', 'Ra_', this.paino);
        const Si = new KeyBoard('Si', 'Si', this.paino);
        const HighDo = new KeyBoard('HighDo', 'HighDo', this.paino);
    }
}