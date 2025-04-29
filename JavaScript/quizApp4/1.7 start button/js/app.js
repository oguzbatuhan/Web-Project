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
const ui = new UI();

ui.btnStart.addEventListener("click", function () {
  ui.quizBox.classList.add("active");
  ui.buttonBox.classList.remove("active");
  ui.sorugoster(quiz.soruGetir());
  ui.soruSayisiniGöster(quiz.soruIndex + 1, quiz.sorular.length);
});

ui.btnNext.addEventListener("click", function () {
  if (quiz.soruIndex < soruListesi.length) {
    ui.sorugoster(quiz.soruGetir());
    ui.soruSayisiniGöster(quiz.soruIndex + 1, quiz.sorular.length);
  } else {
    ui.quizBox.classList.remove("active");
    ui.scoreBox.classList.add("active");
    ui.scoruGoster(quiz.dogruCevapsSayisi, quiz.sorular.length);
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
    quiz.dogruCevapsSayisi += 1;
    selectedElement.classList.add("correct");
    selectedElement.insertAdjacentHTML("beforeend", ui.correctIcon);
  } else {
    selectedElement.classList.add("incorrect");
    selectedElement.insertAdjacentHTML("beforeend", ui.inCorrectIcon);
  }
  quiz.soruIndex += 1;

  ui.disableAllOption();
}

ui.btnQuit.addEventListener("click", function () {
  window.location.reload();
});

ui.btnReplay.addEventListener("click", function () {
  quiz.soruIndex = 0;
  quiz.dogruCevapsSayisi = 0;
  // start btn
  ui.btnStart.click();
  ui.scoreBox.classList.remove("active");
});
