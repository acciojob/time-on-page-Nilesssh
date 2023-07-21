/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  console.log(arr.map(element => {
    if(element.marks>50){
     return element;
    }
  }));
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(element => {
    if(element.marks>50){
      console.log(element);
    }
  });

}

function addData() {
  //Write your code here, just console.log
  arr.push({id:4,name:"susan",age:"20",marks:45})
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  console.log(arr.filter(element => element.marks>50));

}

function concatenateArray() {
  //Write your code here, just console.log
  const arr1 = [
    { id: 5, name: "vishal", age: "23", marks: 70 },
    { id: 6, name: "keshav", age: "12", marks: 55 },
    { id: 7, name: "narayan", age: "16", marks: 39 },
  ];
  console.log([...arr,...arr1]);
}
