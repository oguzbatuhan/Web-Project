// arrys method

let student = ["oguz", "batuhan", "sude"];

console.log(student.length);
console.log(student.toString());
console.log(student.join(" "));
console.log(student.join("-"));

// element delete

console.log(student.pop());
console.log(student);
student = ["oguz", "batuhan", "sude"];

console.log(student.shift());
console.log(student);
student = ["oguz", "batuhan", "sude"];

// element push

console.log(student.push("sude"));
console.log(student);

console.log(student.unshift("sude"));
console.log(student);

// element search

student = ["oguz", "batuhan", "sude", "oguz"];

console.log(student.indexOf("oguz"));
console.log(student.lastIndexOf("oguz"));

student = ["oguz", "batuhan", "sude"];

console.log(student.includes("oguz"));

// delete and push

console.log(student.splice(0, 0, "bulut", "limon"));
console.log(student);
