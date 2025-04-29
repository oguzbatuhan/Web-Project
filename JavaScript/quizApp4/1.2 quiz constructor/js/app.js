const soruListesi = [
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

const quiz = new Quiz(soruListesi);

console.log(quiz);

/*
for (let i = 0; i < soruListesi.length; i++) {
  console.log(quiz.soruGetir());

  quiz.soruIndex = i;
}
*/

const btnSoruGetir = document.getElementById("btnSoruGetir");

document.getElementById("btnSoruGetir").addEventListener("click", function () {
  if (quiz.soruIndex < soruListesi.length) {
    console.log(quiz.soruIndex + 1);
    console.log(quiz.soruGetir());
    quiz.soruIndex += 1;
  } else {
    btnSoruGetir.classList.add("d-none");
    console.log("Quiz bitti.");
  }
});
