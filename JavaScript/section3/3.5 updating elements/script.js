// replace ıtem 1
function replaceItem1() {
  const firstItem = document.querySelector("li:first-child");

  const li = document.createElement("li");
  li.textContent = "update item";
  li.style.color = "orange";
  li.style.fontWeight = "bold";

  firstItem.replaceWith(li);
}
replaceItem1();

//  replace ıtem 2
function replaceItem2() {
  const item = document.querySelector("li:nth-child(2");

  item.outerHTML = "<li>H1 tag</li>";
}
replaceItem2();

// replace all
function replaceAllItems() {
  const items = document.querySelectorAll("li");

  for (let i = 0; i < items.length; i++) {
    // items[i].outerHTML = "<li>replace all</li>";

    if (i == 1) {
      items[i].innerText = "oguz";
      items[i].style.color = "blue";
      items[i].style.fontStyle = "italic";
    } else {
      items[i].innerText = "serhat";
      items[i].style.color = "orange";
    }
  }
}
replaceAllItems();
