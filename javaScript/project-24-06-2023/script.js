let name = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");
let errorMsg = document.querySelector(".errorMsg");
let successMsg = document.querySelector(".successMsg");
let form = document.querySelector("#form");
let message = document.querySelector(".message");
// message.insertAdjacentHTML(
//   "beforeend",
//   '<div class="errorMsg">Error: All the fields are mandatory</div><br>'
// );
form.addEventListener("submit", () => {
  if(!name.value || !email.value || !password.value || !confirmPassword.value) {
    if (!name.value || !email.value || !password.value || !confirmPassword.value) {
      message.innerHTML = "";
      event.preventDefault();
      message.insertAdjacentHTML(
        "beforeend",
        '<div class="errorMsg">Error: All the fields are mandatory</div><br>'
      );
    } else if (password.value != confirmPassword.value) {
      event.preventDefault();
      message.innerHTML = "";
      message.insertAdjacentHTML(
        "beforeend",
        '<div class="errorMsg">Error: Password are not Matched</div><br>'
      );
    }
  }else if (password.value != confirmPassword.value) {
    event.preventDefault();
    message.innerHTML = "";
    message.insertAdjacentHTML(
      "beforeend",
      '<div class="errorMsg">Error: Password are not Matched</div><br>'
    );
  }else if (password.value == confirmPassword.value) {
    checking();
  }
  
  
  
});

function checking() {

    function generateToken() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let token = '';
        
        for (let i = 0; i < 16; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          token += characters.charAt(randomIndex);
        }
        
        return token;
      }
      
      const token = generateToken();
    let localstorageobj = {
        name:name.value,
        email: email.value,
        password: password.value, 
        confirmPassword:confirmPassword.value,
        token: token
    }
    localStorage.setItem("userStatus",JSON.stringify(localstorageobj));
  if (name.value && email.value && password.value && confirmPassword.value) {
    message.innerHTML = "";
    message.insertAdjacentHTML(
      "beforeend",
      '<div class="successMsg">Successfully Signed Up!</div><br>'
    );
    
  } else {
    message.innerHTML = "";
    message.insertAdjacentHTML(
      "beforeend",
      '<div class="errorMsg">Error: All the fields are mandatory</div><br>'
    );
    
  }
  if (message.textContent === "Successfully Signed Up!") {
    let attri = document.querySelector("#form");
    attri.setAttribute("action", "profile.html");

    

    // let user = email.value;
    // let objUser = {
    //     name: name.value,
    //     email: email.value,
    //     password: password.value
    // }
    // localStorage.setItem("user"`${user}`,JSON.stringify(objUser));

    // profileEmail.innerText = localStorage.getItem("email");
    // profileName.innerText = localStorage.getItem("name");
    // profilePassword.innerText = localStorage.getItem("password");
  }
}
