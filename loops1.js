














































// while(end);
let j = 12 // start
do {
console.log("do while loop: ", j); // code
j++; // change (condition)
} while (j < 28) // while check after executing code block (end)
// // break
for (let k = 1; k <= 201; k++) {
console.log("Loop with break", k);
if (k="30") {
break;
}
}

//// break
for (let k = 1; k <= 201; k++) {
console.log("Loop with break", k);
if (k === 30) {
break; 
}
}

//// continue
for (let a = 1; a <= 10; a++) {
if (a===5) {
continue;
}
console.log(a);
}