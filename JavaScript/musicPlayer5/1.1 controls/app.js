const container = document.querySelector(".container");
const musicİmage = document.querySelector("#music-image");
const audio = document.querySelector("#audio");
const musicDetails = document.querySelector("#music-details");
const title = document.querySelector("#music-details .title");
const singer = document.querySelector("#music-details .singer");
const controls = document.querySelector("#controls");
const prev = document.querySelector("#controls #prev");
const play = document.querySelector("#controls #play");
const next = document.querySelector("#controls #next");

const Player = new MusicPlayer(MusicList);

window.addEventListener("load", () => {
  let music = Player.getMusic();
  displayMusic(music);
});

function displayMusic(music) {
  title.innerText = music.title;
  singer.innerText = music.singer;
  musicİmage.src = "img/" + music.img;
  audio.src = "mp3/" + music.file;
}

play.addEventListener("click", () => {
  const isMusicPlay = container.classList.contains("playing");
  isMusicPlay ? pauseMusic() : playMusic();
});

prev.addEventListener("click", () => {
  prevMusic();
});

next.addEventListener("click", () => {
  nextMusic();
});

function prevMusic() {
  Player.prev();
  let music = Player.getMusic();
  displayMusic(music);
  playMusic();
}

function nextMusic() {
  Player.next();
  let music = Player.getMusic();
  displayMusic(music);
  playMusic();
}

function pauseMusic() {
  container.classList.remove("playing");
  play.classList = "fa-solid fa-play";
  audio.pause();
}

function playMusic() {
  container.classList.add("playing");
  play.classList = "fa-solid fa-pause";
  audio.play();
}
