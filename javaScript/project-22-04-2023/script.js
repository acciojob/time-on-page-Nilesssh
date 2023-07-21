const arr = [];
var id2 = -1;
var count = 0;
appending(arr);
document.getElementById("name").value = "";
document.getElementById("profession").value = "";
document.getElementById("age").value = "";

function addData() {
  let a = document.getElementById("name").value;
  let b = document.getElementById("profession").value;
  let c = document.getElementById("age").value;
  let name = a.trim();
  let profession = b.trim();
  let age = c.trim();

  let filterarr = arr.filter((element) => element.id == id2 + 1);

  if (filterarr.length === 1) {
    console.log("entered in edit form");
    let id = id2 + 1;
    let name = document.getElementById("name").value;
    let profession = document.getElementById("profession").value;
    let age = document.getElementById("age").value;
    arr[id2] = { id, name, profession, age };
    document.getElementById("professionnn").innerHTML = "";
    id2 = -1;
    console.log(arr);
    appending(arr);
    document.getElementById("name").value = "";
    document.getElementById("profession").value = "";
    document.getElementById("age").value = "";
    editeditrate();
    deleteItrate();
  } else {
    if (name !== "" && profession !== "" && age !== "") {
      let id = ++count;
      arr.push({ id, name, profession, age });
      document.getElementById("professionnn").innerHTML = "";
      appending(arr);
      document.getElementById("name").value = "";
      document.getElementById("profession").value = "";
      document.getElementById("age").value = "";
    }
    editeditrate();
    deleteItrate();
  }
}
function editeditrate() {
  var editButton = document.querySelectorAll(".editbttn");
  for (let i = 0; i < editButton.length; i++) {
    editButton[i].addEventListener("click", () => {
      editFunction(i);
    });
  }
}

function filtered() {
  console.log("filtered called");
  var e = document.getElementById("select").value;

  if (e === "") {
    alert("Please Select the Profession");
  } else {
    document.getElementById("professionnn").innerHTML = "";
    let newarr = arr.filter((user) => user.profession.toLowerCase() === e);
    document.getElementById("profession").innerHTML = "";

    appending(newarr);
    editeditrate();
    deleteItrate();
  }
}

function appending(abc) {
  abc.forEach((user) => {
    let data1 = document.createElement("p");
    data1.className = "col1";
    data1.innerText = user.id+".";
    let data2 = document.createElement("b");
    data2.className = "col1";
    data2.innerText = "Name : " +  user.name;
    let data3 = document.createElement("b");
    data3.className = "col1";
    data3.innerText = "Profession : " +  user.profession;
    let data4 = document.createElement("p");
    data4.className = "col1";
    data4.innerText = "Age : " +  user.age;
    let div = document.createElement("div");
    div.className = "row";
    let btn = document.createElement("button");
    btn.className = "editbttn";
    btn.id = "editBtn";
    btn.innerText = "Edit";
    let btn1 = document.createElement("button");
    btn1.className = "deletebttn";
    btn1.id = "deleteBtn";
    btn1.innerText = "Delete";
    div.append(data1, data2, data3, data4);
    let note = document.getElementById("professionnn");
    note.append(div);
  });
}

function deleteItrate() {
  let deleteListner = document.querySelectorAll(".deletebttn");
  console.log(deleteListner);
  for (let i = 0; i < deleteListner.length; i++) {
    deleteListner[i].addEventListener("click", () => {
      deleteFunction(i);
    });
  }
}

function deleteFunction(delind) {
  if (
    confirm("Are you sure you want to delete this thing from the database?")
  ) {
    console.log("Thing was deleted from the database.");
    console.log("delete function called");
    arr.splice(delind, 1);
    document.getElementById("professionnn").innerHTML = "";
    appending(arr);
    deleteItrate();
  } else {
    // Do nothing!
    editeditrate();
    deleteItrate();
    console.log("Thing was not saved to the database.");
  }
}

function clearFilterData() {
  document.getElementById("select").value = "";
  document.getElementById("professionnn").innerHTML = "";
  console.log("clearFilterData called");
  appending(arr);
  editeditrate();
  deleteItrate();
}
editeditrate();
deleteItrate();

function editFunction(ind) {
  console.log("edit function called");
  id2 = ind;
  document.getElementById("name").value = arr[ind].name;
  document.getElementById("age").value = arr[ind].age;
  document.getElementById("profession").value = arr[ind].profession;
  editeditrate();
  deleteItrate();
}

let filterBtn = document.getElementById("filter");
submit.addEventListener("click", addData);
filterBtn.addEventListener("click", filtered);

let clearFilter = document.getElementById("niceto");
clearFilter.addEventListener("click", clearFilterData);
