/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map(element => {
      if(element.profession==="developer"){
        console.log(element);
      }
    });
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(element => {
      if(element.profession==="developer"){
        console.log(element);
      }
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    arr.push({id: 4, name: "nilesh", age: '23', profession: "developer"});
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    const removedAdmin = arr.filter(element => element.profession!=="admin");
    console.log(removedAdmin);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    const newArr = [
      {id: 5, name: "shivali", age: "25", profession: "cofounder"},
      {id: 6, name: "avali", age: "26", profession: "founder"},
      {id: 7, name: "kohli", age: "29", profession: "instructor"}
    ];
    const concatenatedArray =[...arr,...newArr];
    console.log(concatenatedArray);
  }