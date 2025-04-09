// functions aplication

function textLoop(text, number) {
  for (let i = 0; i < number; i++) {
    console.log(text);
  }
}
textLoop("Hi there", 5);

function dikdörtgenAlanVeÇevreHesabi(x, y) {
  console.log(`X: ${x}, Y: ${y}`);
  console.log(`Alani: ${x * y}`);
  console.log(`Çevresi: ${(x + y) * 2}`);
}
console.log(dikdörtgenAlanVeÇevreHesabi(5, 2));

function yaziTuraAt() {
  return Math.random() < 0.5 ? "Yazi" : "Tura";
}
console.log(yaziTuraAt());

function tamBölen(x) {
  let tambölenler = [];
  for (let i = 1; i <= x; i++) {
    if (x % i === 0) {
      tambölenler.push(i);
    }
  }
  console.log(`${x} sayisinin tam bölenleri ${tambölenler}`);
}
tamBölen(20);

function toplam(...numbers) {
  return numbers.reduce((toplam, sayi) => toplam + sayi, 0);
}
console.log(toplam(1, 5, 10));
