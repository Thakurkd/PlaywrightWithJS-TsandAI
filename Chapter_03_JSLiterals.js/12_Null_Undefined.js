// ============================================================
// Topic: null vs undefined in JavaScript
// ============================================================

/*
  SIMPLE DEFINITIONS:

  undefined  ->  A variable exists, but it has not been assigned any value yet.
                 JavaScript itself sets this automatically.

  null       ->  A variable exists, but the developer explicitly assigns 
                "no value" or "empty".
                 It is intentional absence of any value.
*/
var x;
console.log(x); // undefined

var y = null;
console.log(y); // null

var bmw = null;
console.log(bmw); // null

let userName;
console.log(userName); // undefined
console.log(typeof userName); // undefined
// declartion then assign
let xv;
xv=10;
console.log(xv); // 10
// NUll
let value= null;
console.log(value); // null
console.log(typeof value); // object