import KeyBoardElement from '../Element/KeyBoardElement';
import Do from '../../audio/do.mp3';
import Do_ from '../../audio/do_.mp3';
import HighDo from '../../audio/highDo.mp3';
import Re from '../../audio/re.mp3';
import Re_ from '../../audio/re_.mp3';
import Me from '../../audio/me.mp3';
import Pa from '../../audio/pa.mp3';
import Pa_ from '../../audio/pa_.mp3';
import Sol from '../../audio/sol.mp3';
import Sol_ from '../../audio/sol_.mp3';
import Ra from '../../audio/ra.mp3';
import Ra_ from '../../audio/ra_.mp3';
import Si from '../../audio/si.mp3';

export default class KeyBoard extends KeyBoardElement{
    private music: HTMLAudioElement;
    name: string;

    constructor(music: string, parent: HTMLElement) {
        super(music, parent);
        this.name = music;
        this.music = this.makeAudio(music);
    }

    makeAudio(music: string) {
        switch (music){
            case 'Do':
                return new Audio(Do);
            case 'Do_':
                return new Audio(Do_);
            case 'HighDo':
                return new Audio(HighDo);
            case 'Re':
                return new Audio(Re);
            case 'Re_':
                return new Audio(Re_);
            case 'Me':
                return new Audio(Me);
            case 'Pa':
                return new Audio(Pa);
            case 'Pa_':
                return new Audio(Pa_);
            case 'Sol':
                return new Audio(Sol);
            case 'Sol_':
                return new Audio(Sol_);
            case 'Ra':
                return new Audio(Ra);
            case 'Ra_':
                return new Audio(Ra_);
            case 'Si':
                return new Audio(Si);
        }
    }

    getCode() {
        return this.music;
    }

    play() {
        const music = this.makeAudio(this.name);
        music.play();
    }
}