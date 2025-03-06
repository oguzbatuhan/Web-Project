let fruit = ["kiraz", "karpuz", "kavun", "erik"];

console.log(fruit.length);
console.log(fruit[0], fruit[3]);
console.log(fruit.includes("kavun"));
console.log(fruit.push("çilek"));
console.log(fruit);
console.log(fruit.splice(3, 2));
console.log(fruit);

let students = [
  ["oguz", 2003, [60, 90, 80]],
  ["batuhan", 2004, [70, 80, 80]],
  ["sude", 2005, [60, 50, 80]],
];

let years = 2025;

console.log(
  `student 1: ${students[0][0]} ${years - students[0][1]} ${(
    (students[0][2][0] + students[0][2][1] + students[0][2][2]) /
    3
  ).toFixed(1)}`
);
console.log(
  `student 2: ${students[1][0]} ${years - students[1][1]} ${(
    (students[1][2][0] + students[1][2][1] + students[1][2][2]) /
    3
  ).toFixed(1)}`
);
console.log(
  `student 3: ${students[2][0]} ${years - students[2][1]} ${(
    (students[2][2][0] + students[2][2][1] + students[2][2][2]) /
    3
  ).toFixed(1)}`
);
