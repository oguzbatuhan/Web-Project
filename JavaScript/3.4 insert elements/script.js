// 1- insert adjacent element

function insertElemnt() {
  const ul = document.querySelector("#myList");

  const h1 = document.createElement("h1");
  h1.textContent = "insert adjacent element";
  h1.style.color = "red";

  ul.insertAdjacentElement("beforebegin", h1);
}
// insertElemnt();

// 2- insert adjecent text
function insertText() {
  const item = document.querySelector("li:first-child");

  item.insertAdjacentText("afterbegin", "insert adjecent text");
}
// insertText();

// 3- insert adjecet html
function insertHtml() {
  const item = document.querySelector("li:nth-child(2)");

  item.insertAdjacentHTML("beforebegin", "<h2>insert adjecet html<h2>");
}
// insertHtml();

// 4- insert before
function insertBefore() {
  const ul = document.querySelector("#myList");

  const li = document.createElement("li");
  li.textContent = "insert before";

  const secondLi = document.querySelector("li:nth-child(2)");
  ul.insertBefore(li, secondLi);
}
insertBefore();

/* 
<!-- beforebegin -->
  <div>
    <!-- afterbegin -->
    item
    <!-- beforeend -->
  </div>
<!-- afterend -->
*/
