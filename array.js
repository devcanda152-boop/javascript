// variable_name = [values]
let arr = [1, 2, 3, 4];
console.log("unchanged old array: "+ arr);
// access
// position = [0123]
// access
// array_name [position / index]
arr[0]; 
// modify
// array_name [position] = new value
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
arr[3] = 40;

console.log("changed new array: "+ arr);

// Array Methods:
// push, pop, shift, unshift, splice, slice, reverse, sort
// push -> add values to the end of the array
let a = [1, 2, 3, 4, 5, 6];
console.log("a initial:", a);
a.push(7, 8, 9);
console.log("after push:", a);

// pop -> remove the last value from the array
a.pop();
console.log("after pop:", a);

// shift -> remove the first value from the array
let c = [30, 40, 50, 60];
console.log("c initial:", c);
c.shift();
console.log("after shift:", c);

// unshift -> add value(s) to the beginning of the array
let d = [52, 35, 65, 85];
console.log("d initial:", d);
d.unshift(20);
console.log("after unshift:", d);

// splice -> remove or add values at a specific index
let e = [50, 60, 30, 40, 10];
console.log("e initial:", e);
// remove 2 elements starting from index 3
e.splice(3, 2);
console.log("after splice remove (index 3, count 2):", e);
// insert values at index 3 without removing
e.splice(3, 0, 50, 100);
console.log("after splice insert at index 3:", e);

// use case: remove multiple messages at once (e.g., selected messages)
let messages = ['msg1', 'msg2', 'msg3', 'msg4', 'msg5'];
console.log("messages initial:", messages);
// remove 'msg2' and 'msg3' -> starting at index 1 remove 2 items
messages.splice(1, 2);
console.log("messages after removing multiple:", messages);

// slice -> copy a portion of the array (start inclusive, end exclusive)
let fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];
let slice1 = fruits.slice(1, 4);
console.log('fruits:', fruits);
console.log('fruits.slice(1, 4):', slice1);

// reverse -> reverse the order of elements in place
//let abc= [1, 2, 3, 4, 5];
//console.log('rev initial:', rev);
//rev.abc();
//console.log('after reverse:', rev);

// sort -> default sorts elements as strings; provide compare function for numeric sort
let nums = [3, 1, 4, 10, 2];
console.log('nums initial:', nums);
nums.sort();
console.log('after default sort (lexicographic):', nums);
nums.sort((x, y) => x - y);
console.log('after numeric sort:', nums);

// sort --set into ascending order
let h = [50, 20, 80, 10, 40] ;
h.sort();
// let h = [11, 62, 3, 4, 25] ;
// let sr = h.sort(function(a, b) {
//return a b; // ascending order
// })
h.reverse();
I