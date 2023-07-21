const arr = [
    {id:1,name:"john",age:"18",profession:"developer"},{id:2, name:"jack",age:"20", profession:"developer"},{id:3, name:"kane", age:"19",profession:"admin"}
];
arr.forEach(user => {
    let data1 = document.createElement("p");
    data1.className = "col1";
    data1.innerText = arr.indexOf(user)+1;
    let data2 = document.createElement("b");
    data2.className = "col1";
    data2.innerText = user.name;
    let data3 = document.createElement("b");
    data3.className = "col1";
    data3.innerText = user.profession;
    let data4 = document.createElement("p");
    data4.className = "col1";
    data4.innerText = user.age;
    let div = document.createElement("div");
    div.className = "row";
    div.append(data1,data2,data3,data4);
    let note = document.getElementById("professionnn");
    note.append(div);
    document.getElementById("name").value = "";
    document.getElementById("profession").value = "";
    document.getElementById("age").value = "";
    });

    




function addData(){
    let a = document.getElementById("name").value
    let b = document.getElementById("profession").value;
    let c = document.getElementById("age").value;
    let name = a.trim();
    let profession = b.trim();
    let age = c.trim();
    
    if(name!=="" && profession!=="" && age!==""){
        arr.push({name,profession,age});
    document.getElementById("professionnn").innerHTML = "";
    arr.forEach(user => {
        let data1 = document.createElement("p");
        data1.className = "col1";
        data1.innerText = arr.indexOf(user)+1;
        let data2 = document.createElement("b");
        data2.className = "col1";
        data2.innerText = user.name;
        let data3 = document.createElement("b");
        data3.className = "col1";
        data3.innerText = user.profession;
        let data4 = document.createElement("p");
        data4.className = "col1";
        data4.innerText = user.age;
        let div = document.createElement("div");
        div.className = "row";
        div.append(data1,data2,data3,data4);
        let note = document.getElementById("professionnn");
        note.append(div);
        document.getElementById("name").value = "";
        document.getElementById("profession").value = "";
        document.getElementById("age").value = "";
    })
    }
     

}

function filtered(){
    console.log("filtered called");
    // let selet = document.getElementsByClassName("profession-select").value;
    // let newarr = arr.filter(user=> user.profession===selet);
    var e = document.getElementById("select").value;
    // let nice = "";
    // if(e==="developer"){
    //     nice = "Developer";
    // }else{
    //     nice = "Admin";
    // }
    
    if(e===""){
        alert("Please Select the Profession");
    }else{
        document.getElementById("professionnn").innerHTML = "";
        let newarr = arr.filter(user=> user.profession.toLowerCase()===e);
    document.getElementById("profession").innerHTML = "";
    newarr.forEach(user => {
        let data1 = document.createElement("p");
        data1.className = "col1";
        data1.innerText = arr.indexOf(user)+1;
        let data2 = document.createElement("b");
        data2.className = "col1";
        data2.innerText = user.name;
        let data3 = document.createElement("b");
        data3.className = "col1";
        data3.innerText = user.profession;
        let data4 = document.createElement("p");
        data4.className = "col1";
        data4.innerText = user.age;
        let div = document.createElement("div");
        div.className = "row";
        div.append(data1,data2,data3,data4);
        let note = document.getElementById("professionnn");
    note.append(div);
    })
    }
}




