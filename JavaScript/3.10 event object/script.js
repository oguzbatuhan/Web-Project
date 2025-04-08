const div = document.querySelectorAll("div");

function onClick(e) {
  // console.log(e.target);
  // console.log(e.timestamp);
  // console.log(e.clientX);
  // console.log(e.clientY);
  console.log(e.offsetX);
  console.log(e.offsetY);
}

for (let i = 0; i < div.length; i++) {
  div[i].addEventListener("click", onClick);
}

document.querySelector("a").addEventListener("click", function (e) {
  console.log("click tıklandı.");
  e.preventDefault();
});
