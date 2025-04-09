// while loop

let x = 1;
while (x <= 10) {
  console.log(x);
  x++;
}

console.log(" ");

let y = 1;
while (y <= 10) {
  if (y % 2 == 0) {
    console.log(y);
  }
  y++;
}

console.log(" ");

var z = 1;
while (z <= 10) {
  if (z % 2 == 1) {
    console.log(z);
  }
  z++;
}

console.log(" ");

var z = 1;
while (z <= 10) {
  z++;
  if (z % 2 == 1) {
    continue; // continue
  }
  console.log(z);
}
console.log("continue");

console.log(" ");

var z = 1;
while (z <= 10) {
  z++;
  if (z % 2 == 1) {
    break; // break
  }
  console.log(z);
}
console.log("break");

console.log(" ");

let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);
