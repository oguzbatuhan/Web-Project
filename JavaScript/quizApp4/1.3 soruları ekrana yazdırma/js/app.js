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

const btnSoruGetir = document.getElementById("btnSoruGetir");
const ui = new UI();

document.getElementById("btnSoruGetir").addEventListener("click", function () {
  if (quiz.soruIndex < soruListesi.length) {
    ui.sorugoster(quiz.soruGetir());
    console.log(quiz.soruIndex + 1);
    quiz.soruIndex += 1;
  } else {
    btnSoruGetir.classList.add("d-none");
    console.log("Quiz bitti.");
  }
});
