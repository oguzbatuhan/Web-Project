const messages = document.getElementById("messages");
const button = document.querySelector("button");

function message() {
  console.log(messages.value);
  messages.value = "";
}

button.addEventListener("click", message);
