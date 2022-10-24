let BASE_URL = "https://634c0ee3317dc96a30906a1a.mockapi.io/";
let container = document.getElementById("literation-list");

getLiterateList = async () => {
  try {
    let response = await fetch(`${BASE_URL}/literation`);
    let literation = await response.json();
    console.log(literation);
    literation.forEach((item) => {
      console.log(item);
      container.innerHTML += `<li class="shadow-sm my-3" onclick="getId(${item.id})">${item.title}</li>`;
    });
  } catch (error) {
    return error;
  }
};

getLiterateList();

getId = (id) => {
  localStorage.setItem("id", id);
  location.href = "text-quiz.html";
};
