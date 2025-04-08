const input = document.getElementById("text");
const h2 = document.getElementById("title");

function onKeypress() {
  console.log("keypress");
}

input.addEventListener("keypress", onKeypress);
