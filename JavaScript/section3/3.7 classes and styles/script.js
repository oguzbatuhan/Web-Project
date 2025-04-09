const h1 = document.querySelector("h1");
const button = document.querySelector("button");
const items = document.querySelectorAll(".items li");

function fn() {
  const h1 = document.querySelector("h1");

  // h1.innerText = "yeni title";
  // h1.className = "f22";
  // h1.classList.add("red");
  // h1.classList.remove("f20");
  // h1.classList.toggle("red");
  // h1.classList.replace("f20", "f22");

  for (let i = 0; i < items.length; i++) {
    // items[i].classList.add("active");
    items[i].style.color = "red";
  }
}

button.addEventListener("click", fn);

console.log(h1.classList);
console.log(h1.className);
