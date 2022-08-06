import KeyBoard from '../Keyboard/keyboard';

export default class PainoBody {
    private paino: HTMLElement;
    keyboardList: KeyBoard[];

    constructor() {
        this.paino = document.createElement('div');
        this.paino.className = 'paino';
        this.keyboardList = [];

        document.body.appendChild(this.paino);
    }

    init() {
        this.keyboardList.push(new KeyBoard('Do', this.paino));
        this.keyboardList.push(new KeyBoard('Do_', this.paino));
        this.keyboardList.push(new KeyBoard('Re', this.paino));
        this.keyboardList.push(new KeyBoard('Re_', this.paino));
        this.keyboardList.push(new KeyBoard('Me', this.paino));
        this.keyboardList.push(new KeyBoard('Pa', this.paino));
        this.keyboardList.push(new KeyBoard('Pa_', this.paino));
        this.keyboardList.push(new KeyBoard('Sol', this.paino));
        this.keyboardList.push(new KeyBoard('Sol_', this.paino));
        this.keyboardList.push(new KeyBoard('Ra', this.paino));
        this.keyboardList.push(new KeyBoard('Ra_', this.paino));
        this.keyboardList.push(new KeyBoard('Si', this.paino));
        this.keyboardList.push(new KeyBoard('HighDo', this.paino));
    }

    getKeyBoard(key: string) {
        return this.keyboardList.find((keyboard: KeyBoard) => keyboard.name === key);
    }
}