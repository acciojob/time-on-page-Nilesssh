const arr = [];
let allData = "";
function addData(){
    allData = "";
    console.log("addData called");
    let name = document.getElementById("name").value;
    let profession = document.getElementById("profession").value;
    let age = document.getElementById("age").value;

    arr.push({name,profession,age});
    
    console.log(arr);
    

    arr.forEach(user => {
        allData += `<tr>
        <td class="col1 SrNo">${arr.indexOf(user)+1}</td>
        <td class="col1 name">${user.name}</td><td class="col1 profession">${user.profession}</td>
        <td class="col1 age">${user.age}</td>
        </tr>`;
    })

    document.getElementById("data").innerHTML = allData;
}

function filtered(){
    console.log("filtered called");
    // let selet = document.getElementById("profession-select").value;
    // let newarr = arr.filter(user=> user.profession===selet);
    var e = document.getElementById("profession-select").value;
    console.log(e)
    let newarr = arr.filter(user=> user.profession.value===e);
    allData ="";
    console.log(newarr);

    newarr.forEach(user => {
        allData += `<tr>
        <td class="col1 SrNo" value="name">${newarr.indexOf(user)+1}</td>
        <td class="col1 name">${user.name}</td><td class="col1 profession" value="profession">${user.profession}</td>
        <td class="col1 age" value="age">${user.age}</td>
        </tr>`;
    })
    console.log(allData);
    document.getElementById("data").innerHTML = allData;
}

