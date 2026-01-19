// Declare a variable 'a' using var and assign value 10
var a = 10;

// Declare a variable '_a' (underscore is allowed in variable names)
var _a = 20;

// Declare a variable '$a' (dollar sign is also allowed in variable names)
var $a = "hello";

// Declare a block-scoped variable using let
let temp = "world";

// Declare a constant using const (value cannot be changed later)
const pi = 3.14;

var n;   // declare

// Declare and initialize 'd' for the first time
var n= 12;   // declare and initialize


// var adds value into the global window object (in browsers)
// var is function-scoped
// var can be redeclared and reassigned

// Reassign a new value to 'd'
n = 24;   // reassign

// Redeclare 'd' again using var
var n= "Hello";   // redeclare


// Global scope
var c= 23;   // global scope

{
  // Block scope (but 'var' ignores block scope)
  var c = 25;   // still global because var is NOT block-scoped
}

// Function scope
function abc() {
  var c = 30;   // functional scope (only inside abc)
}

console.log(c)
// var  -> function scoped, can be redeclared & reassigned
// let  -> block scoped, cannot be redeclared, can be reassigned
// const-> block scoped, cannot be redeclared or reassigned


// Global scope
let d = 23;   // global

{
  // Block scope
  let d = 25;   // different variable (block only)
}

// Function scope
function xyz() {
  let d = 30;   // function-scoped
}
console.log(d); // 23 (unchanged)

// Global scope
const e = 23;   // global

{
  // Block scope
  const e = 25;   // different variable (block only)
}

// Function scope
function pqr() {
  const e = 30;   // function-scoped
}

console.log(e); // 23 (unchanged)


// TDZ does NOT apply to var

// var example (NO TDZ)
console.log(U);   // undefined
var U = 10;

console.log(U);   // 10


// let example (TDZ exists)
let t = 20;       // declare first
console.log(t);   // 20

// Hoisting Impact

// JS breaks this into two parts:
// 1) Declaration goes UP
// 2) Initialization stays DOWN

console.log(temp_d);   //  undefined (no error)

var temp_d = 12;

// Internally JS sees it like this:
// var temp_d;          // declaration moved up
// console.log(temp_d); // undefined
// temp_d = 12;         // initialization stays here

console.log(temp_d);   //  12 (after initialization)            

 let temp_e = 15;
console.log(temp_e);   // ReferenceError: Cannot access 'temp_e' before initialization

//let variable is hoisted but not initialized
//if you use console.log before initialization, it throws ReferenceError
//hosting Impace on var and let 

/*
var -->hoist --> undefined
let --> hoist --> TDZ (temporal dead zone)
*/

// Example 1:

// console.log(nm);
// let nm = "JavaScript";
// ans or error: ReferenceError: Cannot access 'nm' before initialization
// why: tmz

// ex:2

// console.log(age);
// var age = 25;
// // ans or error: undefined
// // why: hoisting

// ex:3
// var x=1;
// {var x=2;}
// console.log(x); //2
//ans:2
// why: var is function scoped not block scoped


// ex:4
// let y=1;
// {let y=2;}          
// console.log(y); //1
//ans:1
// why: let is block scoped

ex:5

// const person = {name: "Alice"};
// console.log(person)
// person.name =   "Bob"; // Allowed: modifying property of object
// console.log(person)
// person={};
// console.log(person)
// why: TypeError: Assignment to constant variable.
// // ans: TypeError
