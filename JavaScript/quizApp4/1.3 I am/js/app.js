const soruListesi = [
  new soru(
    "bu gün günlerden ne?",
    {
      a: "Pazartesi",
      b: "Salı",
      c: "Çarşamba",
      d: "Perşembe",
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
    "Bugün hangisini yaptın?",
    {
      a: "Uyandım",
      b: "Hepsi",
      c: "Yemek yedim",
      d: "Su içtim",
    },
    "a"
  ),
  new soru(
    "Nerede yaşıyorsun?",
    {
      a: "Antalya",
      b: "Dünya",
      c: "Evren",
      d: "Hepsinde",
    },
    "d"
  ),
];

const quiz = new Quiz(soruListesi);

console.log(quiz);

const btnSoruGetir = document.getElementById("btnSoruGetir");

document.getElementById("btnSoruGetir").addEventListener("click", function () {
  if (quiz.soruIndex < soruListesi.length) {
    console.log(quiz.soruIndex + 1);
    console.log(quiz.soruGetir());

    function soruIskelet() {
      const div = document.createElement("div");
      const h3 = document.createElement("h3");
      const ul = document.createElement("ul");

      const soruIskeleti = document.getElementById("soruIskeleti");
      soruIskeleti.innerHTML = "";
      soruIskeleti.appendChild(div);
      div.classList =
        "border border-secondary p-2 m-2 border-end-0 border-start-0";
      div.appendChild(h3);
      h3.textContent = quiz.soruGetir().sorutext;
      div.appendChild(ul);
      ul.style.padding = "0px";
      for (let i = 0; i < 4; i++) {
        const li = document.createElement("li");
        li.style.listStyleType = "none";
        ul.appendChild(li);
        if (i < 1) {
          li.textContent = `A) ${quiz.soruGetir().cevapsecenekleri["a"]}`;
        } else if (i < 2) {
          li.textContent = `B) ${quiz.soruGetir().cevapsecenekleri["b"]}`;
        } else if (i < 3) {
          li.textContent = `C) ${quiz.soruGetir().cevapsecenekleri["c"]}`;
        } else if (i < 4) {
          li.textContent = `D) ${quiz.soruGetir().cevapsecenekleri["d"]}`;
        }
      }
    }
    soruIskelet();

    quiz.soruIndex += 1;
  } else {
    btnSoruGetir.classList.add("d-none");
    soruIskeleti.innerHTML = "";
    const h3 = document.createElement("h3");
    soruIskeleti.appendChild(h3);
    h3.textContent = "Quiz bitti.";
    h3.classList = "text-danger text-center";
    console.log("Quiz bitti.");
  }
});
