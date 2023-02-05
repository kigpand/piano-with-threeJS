export class PlayList {
  private static instance: PlayList;
  private playList: string[];

  private constructor() {
    this.playList = [];
  }

  static getInstance() {
    if (!PlayList.instance) {
      PlayList.instance = new PlayList();
    }
    return PlayList.instance;
  }

  getPlayList() {
    return this.playList;
  }

  startPlay(keyboard: string) {
    this.playList.push(keyboard);
  }

  finishPlay() {
    this.playList.shift();
  }
}
