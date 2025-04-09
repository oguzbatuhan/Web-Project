// for loop

for (let x = 1; x <= 5; x++) {
  console.log(x);
}

let y = ["xy", 1, 2, 3, 4, 5, 6, 7, 8, 9, "xy"];
for (let index = 0; index < y.length; index++) {
  console.log(y[index]);
}

let toplam = 0;
for (index = 0; index < y.length; index++) {
  toplam += index;
}
console.log(toplam);
