function preventBack() {
  window.history.forward();
}
setTimeout("preventBack()", 0);
window.onunload = function () {
  null;
};

let id = localStorage.getItem("id");

let id_literation = localStorage.getItem("id");
let btn_finish = document.getElementById("btn-finish");
btn_finish.addEventListener("click", (event) => {
  event.preventDefault();
  location.href = "quiz.html";
});

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
      localStorage.setItem("id", `${id}`);
      location.href = "quiz.html";
    }
  }, 1000);
}

window.onload = function () {
  var minutes = 60 * 5,
    display = document.querySelector("#timer");
  startTimer(minutes, display);
  localStorage.setItem("id", `${id}`);
};
// end timer

let BASE_URL = "https://634c0ee3317dc96a30906a1a.mockapi.io/";
let literation_title = document.getElementById("literation-title");
let text_title = document.getElementById("text-title");
let literation_text = document.getElementById("literation-text");
let literations = [];

// get literation
let getLiterationById = async () => {
  try {
    let response = await fetch(`${BASE_URL}/literation/${id}`);
    let literations = await response.json();
    literation_title.innerText = `${literations.title}`;
    text_title.innerText = `${literations.title}`;
    literation_text.innerText = `${literations.text}`;
  } catch (error) {
    console.log(error);
  }
};

getLiterationById();
