const div = document.querySelector("div");

div.style.backgroundColor = "blue";
div.style.border = "10px solid orange";

function OnClick() {
  console.log("On Click");
}

function DblOnClick() {
  console.log("dbl click");
}

function ContextMenu() {
  console.log("Context Menu");
}

function mousedown() {
  console.log("mouse down");
}

function mouseenter() {
  console.log("mouse enter");
}

function mousemove() {
  console.log("mouse move");
}

div.addEventListener("click", OnClick);
div.addEventListener("dblclick", DblOnClick);
div.addEventListener("contextmenu", ContextMenu);
div.addEventListener("mousedown", mousedown);
div.addEventListener("mouseenter", mouseenter);
div.addEventListener("mousemove", mousemove);
