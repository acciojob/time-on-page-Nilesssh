
var count = 0;
let person1 = [];
let person2 = [];


let clickable = document.querySelectorAll(".clickable");
console.log(clickable);
function nice (){
    ++count;
    let x = this.value;
    if(count%2==0){
        console.log(x,"red");
        person2[x] == 1;
        document.getElementById(x).style.backgroundColor= "red";
    }else{
        console.log(x,"green");
        person1[x] == 1;
        document.getElementById(x).style.backgroundColor= "green";
    }
}

clickable.addEventListener("click", nice);

