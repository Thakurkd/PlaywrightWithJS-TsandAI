// ============================================================
// Topic: All Number Types in JavaScript
/*
  In JavaScript, numbers are ALWAYS of type "number" (except BigInt).
  There is no separate int, float, double, etc.
*/

// --------------------------------------------------------
// 1. INTEGER LITERALS
//Decimal (Base 10)-->Most Common
let decimal =42;
console.log("decimal:", decimal); // 42
//Binary (Base 2)-->ES6 start with 0b or 0B
let binary = 0b101010;
console.log("binary:", binary);
//Octal (Base 8)-->ES6 start with 0o or 0O
let octal = 0o52;
console.log("octal:", octal);
//Hexadecimal (Base 16)-->ES6 start with 0x or 0X
let hexadecimal = 0x2A;
console.log("hexadecimal:", hexadecimal);   

//Folating Point Literals

let float1=3.14;
let float2=-2.5;
console.log("float1:", float1);
console.log("float2:", float2);
//Exponential Notation starts with e or E
let exp1= 1.5e3;        
console.log("exp1:", exp1); // 1500
let exp2= 2.5e-3;       
console.log("exp2:", exp2); // 0.0025   