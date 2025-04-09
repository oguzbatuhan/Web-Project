const shoppinglist = document.querySelector(".shopping-list");
const shoppingForm = document.querySelector(".shopping-form");
const filterButtons = document.querySelectorAll(".filter-buttons button");

document.addEventListener("DOMContentLoaded", function () {
  LoadItems();

  shoppingForm.addEventListener("submit", HandleFormSubmit);

  for (let button of filterButtons) {
    button.addEventListener("click", HandleFilterSelection);
  }
});

function SaveTols() {
  const listItems = shoppinglist.querySelectorAll("li");

  const list = [];

  for (let li of listItems) {
    const id = li.getAttribute("item-id");
    const name = li.querySelector(".item-name").textContent;
    const completed = li.hasAttribute("item-completed");

    list.push({ id, name, completed });
  }

  localStorage.setItem("shoppingItems", JSON.stringify(list));
}

function LoadItems() {
  const items = JSON.parse(localStorage.getItem("shoppingItems") || []);

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

  UpdateFilterİtems();

  SaveTols();
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

function ToggleCompleted(e) {
  const li = e.target.parentElement;
  li.toggleAttribute("item-completed", e.target.checked);

  UpdateFilterİtems();

  SaveTols();
}

function RemoveItem(e) {
  const li = e.target.parentElement;
  shoppinglist.removeChild(li);

  SaveTols();
}

function OpenEditMode(e) {
  const li = e.target.parentElement;
  if (li.hasAttribute("item-completed") == false) {
    e.target.contentEditable = true;
  }
}

function CloseEditMode(e) {
  e.target.contentEditable = false;

  SaveTols();
}

function CancelEnter(e) {
  if (e.key == "Enter") {
    e.preventDefault();
    CloseEditMode(e);
  }
}

function CreateListItem(item) {
  // checkbox
  const input = document.createElement("input");
  input.type = "checkbox";
  input.classList.add("form-check-input");
  input.checked = item.completed;
  input.addEventListener("change", ToggleCompleted);

  // item
  const div = document.createElement("div");
  div.textContent = item.name;
  div.classList.add("item-name");
  div.addEventListener("click", OpenEditMode);
  div.addEventListener("blur", CloseEditMode);
  div.addEventListener("keydown", CancelEnter);

  // delete icon
  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fs-3 bi bi-x text-danger delete-icon";
  deleteIcon.addEventListener("click", RemoveItem);

  // li
  const li = document.createElement("li");
  li.setAttribute("item-id", item.id);
  li.className = "border rounded px-3 py-1 mb-1";
  li.toggleAttribute("item-completed", item.completed);

  li.appendChild(input);
  li.appendChild(div);
  li.appendChild(deleteIcon);

  return li;
}

function HandleFilterSelection(e) {
  const filterBtn = e.target;

  for (let button of filterButtons) {
    button.classList.add("btn-secondary");
    button.classList.remove("btn-primary");
  }

  filterBtn.classList.add("btn-primary");
  filterBtn.classList.remove("btn-secondary");

  filterItems(filterBtn.getAttribute("item-filter"));
}

function filterItems(filterType) {
  const li_items = shoppinglist.querySelectorAll("li");

  for (let li of li_items) {
    li.classList.remove("d-block");
    li.classList.remove("d-none");

    const completed = li.hasAttribute("item-completed");

    if (filterType == "completed") {
      li.classList.toggle(completed ? "d-flex" : "d-none");
    } else if (filterType == "incompleted") {
      li.classList.toggle(completed ? "d-none" : "d-flex");
    } else {
      li.classList.toggle("d-flex");
    }
  }
}

function UpdateFilterİtems() {
  const activeFilter = document.querySelector(".btn-primary[item-filter]");

  filterItems(activeFilter.getAttribute("item-filter"));
}
