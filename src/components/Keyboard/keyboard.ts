import KeyBoardElement from '../Element/KeyBoardElement';

export default class KeyBoard extends KeyBoardElement{
    private name: string;
    private music: string;
    private parent: HTMLElement;

    constructor(name: string, music: string, parent: HTMLElement) {
        super(name, parent);
        this.name = name;
        this.music = music;
        this.parent = parent;
    }

    getName() {
        return this.name;
    }

    play() {
        // play music
    }
}