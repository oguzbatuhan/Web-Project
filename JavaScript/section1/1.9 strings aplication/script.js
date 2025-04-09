let url = "https://github.com";
let userName = "Oğuz Batuhan";

console.log(url.length);
console.log(userName.split(" ").length);
console.log(url.startsWith("http"));
console.log(userName.includes("Oğuz"));
console.log(`${url}/${userName.replaceAll(" ", "")}`);
