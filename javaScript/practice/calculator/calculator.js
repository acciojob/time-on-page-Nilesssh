var str = "";
var newStr ="";
function calc(omg) {
    let calculated = eval(str += omg) ;
    newStr = str.replaceAll("*","x");
    document.getElementById("string").innerHTML = newStr;
    document.getElementById("ans").innerHTML = calculated;
}

function hope(){
    document.getElementById("string").innerHTML = 0;
    document.getElementById("ans").innerHTML = 0;
    str = "";
}

// let n =5;
// let str = "";
// for(let i=1; i<=n; i++){
//     for(let j=n-1; j>=i; j--){
//          str += " ";
//     }
//     for(let k=1; k<=i; k++){
//         if(i==n){
//             str +="* "
//         }
//         else if(k==1 || k==i){
//             str += "* ";
//         }else{
//             str +="  ";
//         }
//     }
//     console.log(str);
//     str = "";
// }


// function fot13(str) {
// 	let nice = [];
// 	for(let i=0; i<str.length; i++){
// 		if(str[i]>='A' && str[i]<='M'){
// 			nice.push(String.fromCharCode(str.charCodeAt(i)+13));
// 		}else if(str[i]>='N'&&str[i]<='Z'){
// 			nice.push(String.fromCharCode(str.charCodeAt(i)-13));
// 		}else{
// 			nice.push(str[i]);
// 		}
// 	}
//     let ans = nice.join("");
//     return ans;
// }
// console.log(fot13("ABLLN"));

// let fibo = 0;
// function fibonacci(num) {
// // your code here
// 	if(num == 0 || num ==1 ){
//         return num;
//     }

//  return  fibonacci(num - 1)+fibonacci(num-2);
    
// }

// console.log(fibonacci(12));


// let line  ="hello world";
// let a = "world";
// let b = "kaustubh"
// let ans = line.replace(a,b);
// console.log(ans);