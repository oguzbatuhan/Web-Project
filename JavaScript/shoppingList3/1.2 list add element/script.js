const shoppinglist = document.querySelector(".shopping-list");
const shoppingForm = document.querySelector(".shopping-form");

LoadItems();
shoppingForm.addEventListener("submit", HandleFormSubmit);

function LoadItems() {
  const items = [
    // { id: 1, name: "Egg", completed: false },
    // { id: 2, name: "Fish", completed: true },
    // { id: 3, name: "Milk", completed: false },
    // { id: 4, name: "Oil", completed: false },
  ];

  shoppinglist.innerHTML = "";

  for (let item of items) {
    const li = CreateListItem(item);
    shoppinglist.appendChild(li);
  }
}

function additem(input) {
  const id = generateId();
  console.log(id);
  const newItem = CreateListItem({
    id: id,
    name: input.value,
    completed: false,
  });

  shoppinglist.prepend(newItem);

  input.value = "";
}

function generateId() {
  return Date.now().toString();
}

function HandleFormSubmit(e) {
  e.preventDefault();

  const input = document.getElementById("item_name");

  if (input.value.trim().length === 0) {
    alert("Enter value!");
    return;
  }

  additem(input);
}

function CreateListItem(item) {
  // checkbox
  const input = document.createElement("input");
  input.type = "checkbox";
  input.classList.add("form-check-input");
  input.checked = item.completed;

  // item
  const div = document.createElement("div");
  div.textContent = item.name;
  div.classList.add("item-name");

  // delete icon
  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fs-3 bi bi-x text-danger delete-icon";

  // li
  const li = document.createElement("li");
  li.className = "border rounded p-3 mb-1";

  li.appendChild(input);
  li.appendChild(div);
  li.appendChild(deleteIcon);

  return li;
}
