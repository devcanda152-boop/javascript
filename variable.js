// var ,let and cosnt --line by linee comparsion
// var (ess)

var a = "temp";
var _123 = "hello";
var $123 = "hello";
// var 123 = "number";
// to print 
  console.log(a);
  console.log(_123);
  console.log($123);
b = 24; // nvr use
// let
//let temp = "abc";
//const
const temp_const = "hello world !!";


// declarations and initialization
var d; // declare
var temp_d = 12; // declare and initialize for first time
// var add value into window
// var is function scoped
// var can be redeclared and reassigned
var name = "username";
let name1 = "username";


// Reassignment, redeclaration
var temp = 12;
temp = "number"; // Reassignment
var temp = "text"; // redeclaration
// let temp_a= 24;
// let temp_a= 34; // you cannot redeclare using let
const temp_b = "name";
//temp_b = "username"; // you cannot reassign const




// scope (global, Block, functional)
var e= 23; // global scope
  console.log("Global Scope "+ e);
{
var e= 25; // block scope
  console.log("block Scope " + e);
}
function abc() {
var e = 30 // functional scope
  console.log("functional scope + e");
}
//abc();
console.log("outside " + e);

let f = 23 ; // global scope
console.log("Global Scope Let variable "+ f);
{
  let f = 25 // block scope
  console.log("block Scope Let variable" + f);
}
function abc() {
  let f = 30 // functional scope
  console.log("functional scope Let variable" + f);
}
abc();
console.log("Outside Let Variable" + f);



// Temporal Dead Zone (TDZ)
console.log(temp_d);
var temp_d = 24;

// console.log(g);
console.log(j);
let j = 12;

//Hoisting Imapact
// Hoisting --> when your create a vaiable into js that braek
//into two part first is declare part that go to up and there initialization part that go down
var temp_d = 12;
// var temp_d; --> undefined; --> that go to up
// temp_d = 12; --> that go to down (means stuck into line 66)
// if you use console.log before initialization that give you undefined
let temp_d_let = 24;
// let variable not use before initialization
// if you use console.log before initialization that give y error;
// Hoisting Impact on var, let, const
/*
var --> hoist --> undefined
let --> hoist --> error
const --> hoist --> error
*/