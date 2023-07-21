let checkbox = document.querySelector("#checkbox");
let name = document.querySelector("#username");
let form = document.querySelector("form")
let password = document.querySelector("#password");
form.addEventListener("submit",function(){
    if(checkbox.checked){
        if(name && password){
            localStorage.setItem("name",username.value);
            localStorage.setItem("password",password.value);
        }else{
            alert("Fill the Empty Fields");
        }
    }else{
        localStorage.removeItem("name");
        localStorage.removeItem("password");
    }
})