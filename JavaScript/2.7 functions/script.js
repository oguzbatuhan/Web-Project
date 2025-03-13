// functions

function oldCalculator(yearOfBirth) {
  let now = new Date().getFullYear();
  return now - yearOfBirth;
}

// console.log(oldCalculator(2003));

function emeklilik(yearOfBirth, name) {
  let now = new Date().getFullYear();
  let remainder = 65 - oldCalculator(yearOfBirth);

  if (remainder > 0 && yearOfBirth <= now) {
    console.log(`İsim ${name}, emekliliğe kalan yil: ${remainder}`);
  } else if (yearOfBirth > now) {
    console.log(`Henüz ${yearOfBirth} yilina girmedik.`);
  } else {
    console.log("Zaten emeklisiniz.");
  }
}
emeklilik(2003, "Oğuz Batuhan");
