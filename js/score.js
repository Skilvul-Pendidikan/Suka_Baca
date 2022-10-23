function preventBack() {
  window.history.forward();
}
setTimeout("preventBack()", 0);
window.onunload = function () {
  null;
};

let point = document.getElementById("point");
let alertNotif = document.getElementById("alert");
let ket = document.getElementById("ket");
let img = document.getElementById("img-emoticon");

point.innerText = localStorage.getItem("score");

if (parseInt(localStorage.getItem("score")) < 100) {
  alertNotif.classList.add("alert-danger");
  alertNotif.classList.remove("alert-success");
  alertNotif.innerText = "Kamu harus meningkatkan literasimu.";

  img.src = "../assets/icon/sad.png";

  ket.innerHTML = "Jangan putus asa, terus tingkatkan literasi membacamu.";
} else {
  alertNotif.classList.add("alert-success");
  alertNotif.classList.remove("alert-danger");
  alertNotif.innerText = "Kamu telah menyelesaikan quiz dengan baik.";

  img.src = "../assets/icon/smiling.png";

  ket.innerHTML = "Tetap semangat dan terus tingkatkan literasi membacamu.";
}
