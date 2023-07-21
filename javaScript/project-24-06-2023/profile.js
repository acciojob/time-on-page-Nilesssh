let spanProfileName = document.querySelector(".spanProfileName");
let spanProfileEmail = document.querySelector(".spanProfileEmail");
let spanProfilePassword = document.querySelector(".spanProfilePassword");
const datauser = JSON.parse(localStorage.getItem('userStatus'));
console.log(datauser);
spanProfileName.innerText = datauser.name;
spanProfileEmail.innerText = datauser.email
spanProfilePassword.innerText = datauser.password;

let logout = document.querySelector(".logout");

logout.addEventListener("click", () => {
  localStorage.clear();
  spanProfileName.innerHTML = "";
  spanProfileEmail.innerHTML = "";
  spanProfilePassword.innerHTML = "";
});
