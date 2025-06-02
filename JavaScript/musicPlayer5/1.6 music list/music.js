class Music {
  constructor(title, singer, img, file) {
    this.title = title;
    this.singer = singer;
    this.img = img;
    this.file = file;
  }

  getName() {
    return this.title + " - " + this.singer;
  }
}

const MusicList = [
  new Music("Güneşten parlak.", "Aleyna Tilki", "1.webp", "1.m4a"),
  new Music("Seni yazdım.", "Aleyna Tilki", "2.webp", "2.m4a"),
  new Music("Yok hiç bir bekleyenim.", "Aleyna Tilki", "3.jpg", "3.m4a"),
  new Music("We’re dancing in the dark", "Aleyna Tilki", "4.jpg", "4.m4a"),
];
