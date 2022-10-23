let register = document.getElementById("register");

register.addEventListener("click", async (event) => {
  event.preventDefault();
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirm = document.getElementById("confirm-password").value;

  if (username == "" || email == "" || password == "" || confirm == "") {
    Swal.fire("Gagal!", "Data Tidak Boleh Kosong!", "error");
    setTimeout(1200);
  } else if (password != confirm) {
    Swal.fire("Gagal!", "Password Tidak Sesuai!", "error");
  } else {
    try {
      let res = await fetch(
        "https://6350d00e3e9fa1244e4dbdc5.mockapi.io/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            name: username,
            email: email,
            password: password,
            confirm: confirm,
          }),
        }
      );
      let data = await res.json();
      // console.log(data);
    } catch (error) {
      // console.log(error);
    }
    Swal.fire("Good Job!", "Akun Berhasil Dibuat", "success");
    setTimeout(() => {
      location.href = "index.html";
    }, 1200);
  }
});
