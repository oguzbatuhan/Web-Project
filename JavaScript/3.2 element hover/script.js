let output;

// parent element
const parent = document.querySelector(".parent");

output = parent.children;
output = parent.children[0];
output = parent.children[0].innerText;
output = parent.children[0].className;
output = parent.children[0].nodeName;

parent.children[1].innerText = "child two";
parent.children[1].style.color = "red";

// first elemnt
output = parent.firstElementChild;
parent.firstElementChild.style.color = "orange";
parent.firstElementChild.innerText = "child one";

// last element
output = parent.lastElementChild;
parent.lastElementChild.style.color = "pink";
parent.lastElementChild.innerText = "child three";

// child element
const child = document.querySelector(".child");

output = child; // child
output = child.parentElement; // parent
output = child.parentElement.parentElement; // container
output = child.parentElement.parentElement.parentElement; // body
output = child.parentElement.parentElement.parentElement.parentElement; // html

// output = child.nextElementSibling; // next
output = child.nextElementSibling.nextElementSibling; // next

output = child.nextElementSibling.previousElementSibling; // prev

console.log(output);
