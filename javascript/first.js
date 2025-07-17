//data types
//string
//bollean
//number
//null
//undefined
//object alwaYS WITH key and valuee

//type of:find for check datatype
console.log(typeof("hello"))
console.log(typeof(123))
console.log(typeof(true))
console.log(typeof(undefined))

console.log(typeof(1+"string"))
console.log(1+"new")
console.log(5/"hyy")


console.log(4-"new")


// variable declaration 
let abc = 4567
console.log("your value is",abc)
//let var const


var fname="myname";//assignation
console.log(fname)
var fname="newname"
console.log(fname)
let bcd="neewe"
console.log(bcd)
const new1 = "hello";
console.log(new1)


let no1=10;
let no2=30;
console.log("my value is",no1+no2)
console.log(10+20)

console.log(9-8)
console.log(10/5)
console.log(10*4)
console.log(8*9+3-9)
//relational operator

// >,<,>=,<=,==,===
3<10
10>3
//== checks only value
//=== checks value and data types both
let a=10
let b=20
console.log(a===b)
2>=2
3<=2
// !==

let a1=10;
let b1=20;

if(a1>b1){
    console.log(false)
}else{
    console.log(true)
}

let num1=43
if(num1%=0){
console.log("odd")
}else{
console.log("even")
}

// let num12=-1
// if(num12>0){
//     console.log("negative")

// }else if{


// }else if{

// }
let age = 22;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Allowed to enter.");
} else {
  console.log("Not allowed to enter.");
}

let hasTicket = false;
let isVIP = true;

if (hasTicket || isVIP) {
  console.log("You can attend the event.");
} else {
  console.log("Access denied.");
}

// let no1 =10;
// let no2 =20;
// function abc(){
//   let result= no1 +no2
//   console.log(result)
// }

function multiply(x, y) {
  return x * y; 
}
  let answer = multiply(5, 2); 
  console.log(answer);