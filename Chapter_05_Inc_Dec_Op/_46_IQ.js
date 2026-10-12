/*
//What is the output of the following expressions. Answer in the comments below.


2.
let a = 37;

console.log(—a + a—);

console.log(a);

3.
let a = 5; 
let b = a-- - --a; 
console.log(b, a);

4.
let i = 1; 

let r = i++ > 1 ? i++ : ++i; 
console.log(r, i);



*/


let a = 100;

console.log(a++ + ++a +a++ + ++a);

console.log(a);

// let a1 = 37;

// console.log(—a1 + a1—);

// console.log(a1);

let a2 = 5; 
let b = a2-- - --a2; 
console.log(b, a2);//1

let i = 1; 

let r = i++ > 1 ? i++ : ++i; 
console.log(r, i);
