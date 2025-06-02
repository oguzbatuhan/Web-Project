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
const duration = document.querySelector("#duration");
const curentTime = document.querySelector("#curent-time");
const progressBar = document.querySelector(".progress-bar");
const volume = document.querySelector("#volume");
const volumeBar = document.querySelector("#volume-bar");

const Player = new MusicPlayer(MusicList);

window.addEventListener("load", () => {
  let music = Player.getMusic();
  displayMusic(music);
});

const displayMusic = (music) => {
  title.innerText = music.title;
  singer.innerText = music.singer;
  musicİmage.src = "img/" + music.img;
  audio.src = "mp3/" + music.file;
};

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

const prevMusic = () => {
  Player.prev();
  let music = Player.getMusic();
  displayMusic(music);
  playMusic();
};

const nextMusic = () => {
  Player.next();
  let music = Player.getMusic();
  displayMusic(music);
  playMusic();
};

const pauseMusic = () => {
  container.classList.remove("playing");
  play.classList = "fa-solid fa-play";
  audio.pause();
};

const playMusic = () => {
  container.classList.add("playing");
  play.classList = "fa-solid fa-pause";
  audio.play();
};

const calculateTime = (seconds) => {
  const minute = Math.floor(seconds / 60);
  const second = Math.floor(seconds % 60);
  const controlSecond = second < 10 ? `0${second}` : `${second}`;
  return `${minute}:${controlSecond}`;
};

audio.addEventListener("loadedmetadata", () => {
  duration.textContent = calculateTime(audio.duration);
  progressBar.max = Math.floor(audio.duration);
});

audio.addEventListener("timeupdate", () => {
  progressBar.value = Math.floor(audio.currentTime);
  curentTime.textContent = calculateTime(progressBar.value);
});

let sesDurumu = "sesli";

volumeBar.addEventListener("input", (e) => {
  const value = e.target.value;
  audio.volume = value / 100;
  if (audio.volume === 0) {
    audio.muted = true;
    sesDurumu = "sessiz";
    volume.classList = "fa-solid fa-volume-xmark";
  } else {
    audio.muted = false;
    sesDurumu = "sesli";
    volume.classList = "fa-solid fa-volume-high";
  }
});

volume.addEventListener("click", () => {
  if (sesDurumu === "sesli") {
    audio.muted = true;
    sesDurumu = "sessiz";
    volume.classList = "fa-solid fa-volume-xmark";
    volumeBar.value = "0";
  } else {
    audio.muted = false;
    sesDurumu = "sesli";
    volume.classList = "fa-solid fa-volume-high";
    volumeBar.value = "100";
  }
});

progressBar.addEventListener("input", () => {
  curentTime.textContent = calculateTime(progressBar.value);
  audio.currentTime = progressBar.value;
});
