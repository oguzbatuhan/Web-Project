// soru constructoru
function soru(sorutext, cevapsecenekleri, dogrucevap) {
  this.sorutext = sorutext;
  this.cevapsecenekleri = cevapsecenekleri;
  this.dogrucevap = dogrucevap;
}

soru.prototype.cevabiKontrolEt = function (cevap) {
  return cevap === this.dogrucevap;
};

const sorular = [
  new soru(
    "Hangisi programlama dilidir?",
    {
      a: "HTML",
      b: "CSS",
      c: "SASS",
      d: "Python",
    },
    "d"
  ),
  new soru(
    "Hangisi programlama dilidir?",
    {
      a: "HTML",
      b: "C#",
      c: "SASS",
      d: "Bootstrap",
    },
    "b"
  ),
  new soru(
    "Hangisi programlama dilidir?",
    {
      a: "C++",
      b: "npm",
      c: "SASS",
      d: "Excell",
    },
    "a"
  ),
  new soru(
    "Hangisi programlama dilidir?",
    {
      a: "HTML",
      b: "CSS",
      c: "Reackt",
      d: "JavaScript",
    },
    "d"
  ),
];

/*
for (let i = 0; i < sorular.length; i++) {
  console.log(
    `${sorular[i].sorutext} \n A) ${sorular[i].cevapsecenekleri.a} \n B) ${sorular[i].cevapsecenekleri.b} \n C) ${sorular[i].cevapsecenekleri.c} \n D) ${sorular[i].cevapsecenekleri.d}`
  );
}
*/
