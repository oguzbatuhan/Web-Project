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
  title.innerText = music.getName();
  singer.innerText = music.singer;
  musicİmage.src = "img/" + music.img;
  audio.src = "mp3/" + music.file;
}

play.addEventListener("click", () => {
  audio.play();
});
