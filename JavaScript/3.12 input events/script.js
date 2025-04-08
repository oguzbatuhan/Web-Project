const title = document.getElementById("title");
const input = document.getElementById("input");
const checkbox = document.getElementById("checkbox");

function onInput(e) {
  title.textContent = e.target.value;
  console.log(e.target.value);
  console.log(e.key);
}

function onFocus(e) {
  console.log("on focuse");
}

function onBlue(e) {
  console.log("on blue");
}

input.addEventListener("keydown", onInput);
input.addEventListener("focus", onFocus);
input.addEventListener("blue", onBlue);
