// if/else

let x = 60,
  y = 50,
  z = 40;

if (50 <= x && x <= 100) {
  console.log("uygun.");
} else {
  console.log("uygun değil.");
}

if (y % 2 == 0 && y >= 0) {
  console.log("sayı çift ve pozitiftir.");
} else {
  console.log("sayı uygun değil.");
}

if (x > y && x > z) {
  console.log("x en büyüktür.");
} else if (y > x && y > z) {
  console.log("y en büyüktür.");
} else if (z > y && z > x) {
  console.log("z en büyüktür.");
} else {
  console.log("tanımsız");
}

let vize = 10,
  final = 70;
let ortalama = vize * 0.4 + final * 0.6;
if ((ortalama >= 50 && final >= 50) || final >= 70) {
  console.log(ortalama);
  console.log("geçti.");
} else {
  console.log(ortalama);
  console.log("kaldı");
}
