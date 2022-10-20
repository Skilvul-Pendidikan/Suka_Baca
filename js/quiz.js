// timer
function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      location.href = "text-quiz.html";
    }
  }, 1000);
}

window.onload = function () {
  var minutes = 60 * 1,
    display = document.querySelector("#timer");
  startTimer(minutes, display);
  localStorage.setItem("id", `${id}`);
};
// end timer

let id = localStorage.getItem("id");
let quiz = document.getElementById("quiz");
let literation_title = document.getElementById("literation-title");
let quizz = [];
let BASE_URL = "https://634c0ee3317dc96a30906a1a.mockapi.io/";

let getQuiz = async () => {
  response = await fetch(`${BASE_URL}/literation/${id}`);
  quizz = await response.json();

  literation_title.innerText = `${quizz.title}`;
  let btn_finsih = document.getElementById("btn-finish");
  btn_finsih.addEventListener("click", (event) => {
    event.preventDefault();

    let correctAnswer = quizz.quiz.question.answerCorrect;
    const answer = document.querySelector('input[name="answer"]:checked');
    if (answer != null) {
      let savedAnswer = answer.getAttribute("data-id");

      if (savedAnswer == correctAnswer) {
        Swal.fire("Good job!", "Jawabanmu Benar", "success");
        setTimeout(() => {
          location.href = "text-quiz.html";
        }, 1200);
        // alert("Selamat Jawaban anda Betul");
      } else {
        Swal.fire("Sorry", "Jawabanmu Kurang Tepat", "error");
        setTimeout(() => {
          location.href = "text-quiz.html";
        }, 1200);
        // alert("Jawaban Anda Salah");
      }
    } else {
      alert("Harap click");
    }
  });
  quiz.innerHTML = `${quizz.quiz.question.question1}`;

  document.getElementById("choiceText0").innerHTML = `${quizz.quiz.question.answer[0]}`;
  document.getElementById("choiceText1").innerHTML = `${quizz.quiz.question.answer[1]}`;
  document.getElementById("choiceText2").innerHTML = `${quizz.quiz.question.answer[2]}`;
  document.getElementById("choiceText3").innerHTML = `${quizz.quiz.question.answer[3]}`;
};

getQuiz();
