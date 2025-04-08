// const li = document.createElement("li");

// li.className = "item";
// li.id = "item1";
// li.setAttribute("data-url", "5");
// li.innerText = "item 4";

// const ch = document.createElement("input");
// ch.type = "checkBox";

// document.getElementById("mylist").appendChild(li).appendChild(ch);

// console.log(li);

// function

function className(text) {
  const li = document.createElement("li");

  const ch = document.createElement("input");
  ch.type = "checkBox";

  li.className = "item";
  li.id = "item1";
  li.setAttribute("data-url", "5");
  li.innerText = text;

  document.getElementById("mylist").appendChild(li).appendChild(ch);
}

// console.log(className("item 4"));
// console.log(className("item 5"));

function createListItem(className, text) {
  const li = document.createElement("li");
  li.className = className;
  li.innerHTML = `${text} <input type='checkbox'>`;

  document.getElementById("mylist").appendChild(li);
}

console.log(createListItem("item4", "item 4"));
