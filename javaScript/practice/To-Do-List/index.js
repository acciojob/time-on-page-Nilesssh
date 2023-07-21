
let arr = [];
let count  =0;
let noo = ``;
function addData(){
    noo =``;
    let task = document.getElementById("task").value;
    let tt = document.getElementById("hhh").value;
    console.log(task);
    let obj = {
    SrNo : arr.length,
    Task : task,
    Time : tt,
    }
    console.log(obj);
if(obj.Task!==""){
    arr.push(obj);
}
console.log(arr);

arr.forEach(element => {
    
    let a = element.Task;
    let time = element.Time;
    if(a!==""){
        count = arr.indexOf(element)+1;
        var t = element.Task;
        noo += `<tr>
        <td class="col1">${element.SrNo}</td>
        <td>${time}</td><td class="col2">${a}</td>
        <td><button id="btnDel" onclick="del(${element.SrNo})">Delete</button></td>
        </tr>`;
    }
    
})

console.log(noo);
document.getElementById("data").innerHTML = noo;

}

// let removeEle = document.
function del(abc){
    console.log(abc);
    alert("del called");
    const newArr = arr.filter(element=>(abc!==element.SrNo));
    arr = newArr;
    console.log(newArr);
    deletedEle(newArr);

}



function deletedEle(arr){
    alert("deletedEle called");

    noo = "";
    arr.forEach(element => {
        let m = element.Task;
        let n = element.Time;
        count = arr.indexOf(element)+1;
        noo += `<tr>
        <td class="col1">${arr.indexOf(element)+1}</td>
        <td>${n}</td><td class="col2">${m}</td>
        <td><button id="btnDel" onclick="del(count)">Delete</button></td>
        </tr>`;
 })
 if(arr.length>=1){
    document.getElementById("data").innerHTML = noo;
 }else{
    document.getElementById("data").innerHTML = "";
 }
}








