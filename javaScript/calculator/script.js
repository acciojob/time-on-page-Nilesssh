// const createCounter = () => {
//     let counterA = 0;
//     let counterB = 0;
  
//     const incrementA = () => {
//       counterA++;
//       checkWinner();
//     };
  
//     const incrementB = () => {
//       counterB++;
//       checkWinner();
//     };
  
//     const decrementA = () => {
//       counterB--;
//       checkWinner();
//     };
  
//     const decrementB = () => {
//       counterA--;
//       checkWinner();
//     };
  
//     const checkWinner = () => {
//       if (counterA >= 10) {
//         console.log('Player A wins!');
//       } else if (counterB >= 10) {
//         console.log('Player B wins!');
//       }
//     };
  
//     const getCounterA = () => {
//       return counterA;
//     };
  
//     const getCounterB = () => {
//       return counterB;
//     };
  
//     return {
//       incrementA,
//       incrementB,
//       decrementA,
//       decrementB,
//       getCounterA,
//       getCounterB
//     };
//   };
  
//   // Usage:
//   const counter = createCounter();
  
//   // Player A button click
//   counter.incrementA();
  
//   // Player B button click
//   counter.incrementB();
  
//   // Player A button click
//   counter.incrementA();
  
//   // Player B button click
//   counter.decrementB();
  
//   console.log('Counter A:', counter.getCounterA()); // Output: Counter A: 2
//   console.log('Counter B:', counter.getCounterB()); // Output: Counter B: 1
  


//complete this code
class Person {
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	getName() {
    return this.name;
  }

  setAge(age) {
    this.age = age;
  }
}

class Student extends Person {
	study(){
		console.log(`${this.name} is studying`)
	}
	
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching`)
	}
}
const student = new Student("John", 20);
student.study(); // Output: John is studying.

const teacher = new Teacher("Smith", 35);
teacher.teach(); // Output: Smith is teaching.
// Do not change the code below this line
// window.Person = Person;
// window.Student = Student;
// window.Teacher = Teacher;
