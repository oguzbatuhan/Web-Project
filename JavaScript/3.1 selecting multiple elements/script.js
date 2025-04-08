let output = "";

output = document.getElementsByClassName("item");
// output = document.getElementsByClassName("item")[0];

// const items = document.getElementsByClassName("item");

// const group1 = document.getElementById("group1");
// const items = group1.getElementsByTagName("li");

const items = document.querySelectorAll("#group2 li");

// for (let i = 0; i < items.length; i++) {
//   console.log(items[i]);
// }

for (let item of items) {
  item.style.color = "orange";
  item.style.fontSize = "45px";
  item.style.display = "inline";
  item.style.margin = "50px";
  item.innerText = "element";

  console.log(item);
}

console.log(output);
