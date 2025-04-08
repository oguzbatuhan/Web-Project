const form = document.getElementById("form");

function onSubmit(e) {
  e.preventDefault();

  const inputValue = document.getElementById("input").value;
  const selectValue = document.getElementById("select").value;
  const checkboxValue = document.getElementById("checkbox").checked;

  console.log(inputValue, selectValue, checkboxValue);

  if (inputValue === "" || selectValue === "0") {
    alert("formu doldurunuz");
    return;
  }

  console.log("form submit");
}

function onSubmit2(e) {
  e.preventDefault();

  const formData = new FormData(form);

  const inputValue = formData.get("input");
  const selectValue = formData.get("select");
  const checkboxValue = formData.get("checkbox");

  console.log(inputValue, selectValue, checkboxValue);

  if (inputValue === "" || selectValue === "0") {
    alert("formu doldurunuz");
    return;
  }

  console.log("form submit");
}

// form.addEventListener("submit", onSubmit);
form.addEventListener("submit", onSubmit2);
