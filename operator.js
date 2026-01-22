1 // operators
2 // Arithmetic, comparison, logical, assignment, unary, ternary
3 // Arithmetic:
4 // +, -, /, *, **, %
5 //+--> Add and concatenation
6 // ex. 1+2 --> Add
7 // "user" -+- "name" --> concat
8 // 5 + "5" --> concat, 5 +5 --> Add
9 // -
10 // ex. 2-1
11 ///, *
12 // ex. 240/2, 25*2
13 // % (modulus) (sheshfal) (reminder)
14 // ex. 12%4 --> 0
15 // ex. 9%2 --> 1
16 // ** (square) (exposination)
17 // ex. 2**3 --> 8



// Comparison (ans: true, false)
//==
// ex. 12 == 13, 12 == "12" (don't check type, only check value, not strict comparison)
// ===
// ex. 12 === "12" (check type and value, strict comparaison)
// !=
// ex. 12 != 13 (reverse of ==, not strict comparison)
// !==
// ex. 12!== "12" (reverse of
// >=
// ex. 22 >= 22
// <=
// ex. 13 <= 13
// <
I // ex. 12 < 113, 12 < 9, 22 < 22
// >
// ex. 12 > 113, 12 > 9, 13 > 13


 // assignment
 // =
 // give a value, value assignment operator
 // ex. let a = 12;
 // +=
 // ex. a += 3; (add value into old value and save it into a)
 // -=
 //ex. a = 4; (subtract value into old value and save it into a)
 // *=
 // ex. a *= 2;
 ///=
 // ex. a l = 2
 // %=
 // ex. a %= 2; (give remainder)

 
 // logical
// && (AND)
// ex. true && true-> true 12<13 && 14<15--> true
// false && true --> false 12<10 && 14 <15--> false
// ture && false --> false
// false && false --> false
// || (OR)
// ex. true || true --> true
// false || true --> true
// ture || false --> true
// false || false --> false
// ! (NOT)
// ex. ! true --> false
// ! false --> true
I
// 112 --> false --> !!12 --> true
// unary


// Unary Oprator
//+! typeof ++
// +
// covert string to number
// ex. +"5" --> 5
// +"Name" --> NaN
// "5" +5 --> 55
I
// +"5" +5 --> 10
//-
// ex. -5
// !
// ex. 112 --> false
// typeof
// ex. typeof "name" --> string
// ++
// ex. let a = 12
// a++ --> 12 // post ex. a+++ a => 25






// Ternary
//?:
// condition? true thase to print thase false thase to print thase
//leta a = 12 > 13 ? console.log("true"): console.log("false");
// typeof null --> object
// typeof [] --> object, let a = []; a instanceof Array --> true
// instanceof --> check type of reference data type // don't use typeof for reference data type
// typeof NaN --> number
// typeof --> premitive data type mate use karvo
// instanceof --> reference data type mate use karvo