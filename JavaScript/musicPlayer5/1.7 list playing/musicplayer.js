class MusicPlayer {
  constructor(list) {
    this.list = list;
    this.index = 0;
  }

  getMusic() {
    return this.list[this.index];
  }

  next() {
    if (this.index + 1 < this.list.length) {
      this.index++;
    } else {
      this.index = 0;
    }
  }

  prev() {
    if (this.index !== 0) {
      this.index--;
    } else {
      this.index = this.list.length - 1;
    }
  }
}
