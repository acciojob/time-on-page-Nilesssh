const name = document.querySelector("#name");
const profession = document.querySelector("#profession");
const age = document.querySelector("#age");
const list = document.querySelector(".list");
const addBtn = document.querySelector(".addUser");
const message = document.querySelector(".userAddedDetails");
addBtn.addEventListener("click", ()=>{
    if(name.value!=="" && age.value!=="" && profession.value!==""){
        addUser();
    }
});
let UserArr = [{
    name : "nilesh",
    profession : "Developer",
    age : "24"
}];

function addUser(){
    UserArr.push({
        name: name.value,
        profession : profession.value,
        age : age.value
    })
    render();
}
console.log(UserArr);
render();
function render(){

    if(UserArr.length!==0){
        message.style.display ="none";
    }


        list.innerHTML = "";

        UserArr.forEach(item => {
            list.insertAdjacentHTML("beforeend",`<span class="employeeDetail col-6 text-white">${item.name +" "+ item.profession+" "+item.age}</span><button class="delete-btn bg-white text-black">Delete</button>`)
        })
}