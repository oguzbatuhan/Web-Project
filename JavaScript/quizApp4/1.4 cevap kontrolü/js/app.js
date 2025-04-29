const soruListesi = [
  new soru(
    "1- Hangisi programlama dilidir?",
    {
      a: "HTML",
      b: "CSS",
      c: "SASS",
      d: "Python",
    },
    "d"
  ),
  new soru(
    "2- Hangisi programlama dilidir?",
    {
      a: "HTML",
      b: "C#",
      c: "SASS",
      d: "Bootstrap",
    },
    "b"
  ),
  new soru(
    "3- Hangisi programlama dilidir?",
    {
      a: "C++",
      b: "npm",
      c: "SASS",
      d: "Excell",
    },
    "a"
  ),
  new soru(
    "4- Hangisi programlama dilidir?",
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
  } else {
    btnSoruGetir.classList.add("d-none");
    console.log("Quiz bitti.");
  }
});

function optionSelected(e) {
  const cevap = e.target.textContent[0];
  const soru = quiz.soruGetir();

  if (soru.cevabiKontrolEt(cevap)) {
    e.target.classList.add("correct");
    e.target.insertAdjacentHTML("beforeend", ui.correctIcon);
  } else {
    e.target.classList.add("incorrect");
    e.target.insertAdjacentHTML("beforeend", ui.inCorrectIcon);
  }
  quiz.soruIndex += 1;

  ui.disableAllOption();
}
