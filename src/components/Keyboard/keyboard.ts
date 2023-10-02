import { PlayList } from "./../utils/playList";
import KeyBoardElement from "../Element/KeyBoardElement";

import { KeyBoradType, keyboardSet } from "../../data/keyboardSet";

export default class KeyBoard extends KeyBoardElement {
  private music: HTMLAudioElement;
  private playList: PlayList;
  name: string;

  constructor(music: string, position: string, parent: HTMLElement) {
    super(music, position, parent);
    this.name = music;
    this.music = this.makeAudio(music);
    this.playList = PlayList.getInstance();
  }

  makeAudio(music: string) {
    const result = keyboardSet.find(
      (item: KeyBoradType) => item.music === music
    );
    if (!result) return;
    return new Audio(result.play);
  }

  getCode() {
    return this.music;
  }

  play() {
    this.element.style.backgroundColor = "pink";
    this.playList.startPlay(this.name);
    setTimeout(() => {
      this.element.style.backgroundColor =
        this.name.lastIndexOf("_") === -1 ? "white" : "black";
      this.playList.finishPlay();
    }, 500);
    const music = this.makeAudio(this.name);
    music.play();
  }
}
