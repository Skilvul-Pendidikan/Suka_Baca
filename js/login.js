let login = document.getElementById("login");

login.addEventListener("click", async (event) => {
  event.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let res = await fetch("https://6350d00e3e9fa1244e4dbdc5.mockapi.io/users");
  let data = await res.json();
  // console.log(data);
  data.find(findUsers);

  function findUsers(data) {
    if (username == data.name && password == data.password) {
      location.href = "quiz.html";
    }
  }
});
