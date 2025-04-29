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

ui.btnNext.addEventListener("click", function () {
  if (quiz.soruIndex < soruListesi.length) {
    ui.sorugoster(quiz.soruGetir());
    ui.soruSayisiniGöster(quiz.soruIndex + 1, quiz.sorular.length);
  } else {
    console.log("Quiz bitti.");
  }
});

function optionSelected(e) {
  let selectedElement = e.target;

  if (selectedElement.nodeName == "SPAN") {
    selectedElement = selectedElement.parentElement;
  }

  const cevap = e.target.textContent[0];
  const soru = quiz.soruGetir();

  if (soru.cevabiKontrolEt(cevap)) {
    selectedElement.classList.add("correct");
    selectedElement.insertAdjacentHTML("beforeend", ui.correctIcon);
  } else {
    selectedElement.classList.add("incorrect");
    selectedElement.insertAdjacentHTML("beforeend", ui.inCorrectIcon);
  }
  quiz.soruIndex += 1;

  ui.disableAllOption();
}
