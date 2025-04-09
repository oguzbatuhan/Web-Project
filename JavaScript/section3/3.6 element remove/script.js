// remove
function elementRemove(text) {
  const removeElement = document.querySelector(text);

  removeElement.remove();
}

function removeItem1() {
  const ul = document.querySelector("ul");
  const firstItem = document.querySelector("li:first-child");

  ul.remove(firstItem);
}

function removeItem(number) {
  const ul = document.querySelector("ul");
  const item = document.querySelector(`li:nth-child(${number})`);

  ul.removeChild(item);
}

// removeItem(2);

function removeAll() {
  const ul = document.querySelector("ul");
  ul.innerHTML = "";
}

// removeAll();

function removeAll2() {
  const ul = document.querySelector("ul");
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
}

removeAll2();
