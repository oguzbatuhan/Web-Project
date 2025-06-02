class MusicPlayer {
  constructor(list) {
    this.list = list;
    this.index = 0;
  }

  getMusic() {
    return this.list[this.index];
  }

  next() {
    if (this.index + 1 != MusicList.length) {
      this.index++;
    } else {
      this.index = 0;
    }
  }

  previous() {
    if (this.index != 0) {
      this.index--;
    } else {
      this.index = MusicList.length - 1;
    }
  }
}
