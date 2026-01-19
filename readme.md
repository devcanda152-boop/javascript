# JavaScript Variables, Scope, Hoisting & TDZ

This README explains `var`, `let`, and `const` in JavaScript with
examples.

------------------------------------------------------------------------

## Variable Declarations

``` js
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
```

------------------------------------------------------------------------

## var Redeclaration & Reassignment

``` js
var n;        // declare
var n = 12;   // declare and initialize
n = 24;       // reassign
var n = "Hello"; // redeclare
```

------------------------------------------------------------------------

## Scope Examples

### var Scope

``` js
var c = 23;   // global

{
  var c = 25; // still global
}

function abc() {
  var c = 30; // function-scoped
}

console.log(c); // 25
```

### let Scope

``` js
let d = 23;   // global

{
  let d = 25; // block-scoped
}

function xyz() {
  let d = 30; // function-scoped
}

console.log(d); // 23
```

### const Scope

``` js
const e = 23;   // global

{
  const e = 25; // block-scoped
}

function pqr() {
  const e = 30; // function-scoped
}

console.log(e); // 23
```

------------------------------------------------------------------------

## Hoisting

### var Hoisting

``` js
console.log(U); // undefined
var U = 10;
console.log(U); // 10
```

### let Hoisting (TDZ)

``` js
// console.log(t); // ReferenceError
let t = 20;
console.log(t); // 20
```

------------------------------------------------------------------------

## Temporal Dead Zone (TDZ)

``` js
console.log(temp_d); // undefined
var temp_d = 12;

console.log(temp_d); // 12

// console.log(temp_e); // ReferenceError
let temp_e = 15;
console.log(temp_e); // 15
```

------------------------------------------------------------------------

## Summary

``` text
var   -> function scoped, hoisted, initialized as undefined, no TDZ
let   -> block scoped, hoisted, TDZ exists
const -> block scoped, hoisted, TDZ exists
```

------------------------------------------------------------------------

## Best Practices

-   Prefer `const` by default
-   Use `let` when reassignment is needed
-   Avoid `var` in modern JavaScript
