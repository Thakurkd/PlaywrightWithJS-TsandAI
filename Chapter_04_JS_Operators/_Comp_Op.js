//Comparison operator will always return boolean value true or false
// Assignment operator
let x= 50;
let y= 60;
// =,==,=== diffrence between == and === is that == will check only value but === will check value and data type both
console.log(x==50); //true
console.log(x===50); //true bcz both value and data type is same
console.log(x== "50"); //true
console.log(x=== "50"); //false bcz value is same but data type is different
// > , < , >= , <= 
console.log(x>y); //false
console.log(x<y); //true
console.log(x>=y); //false
console.log(x<=y); //true
// ! -> not char
console.log(!(x>y)); //true bcz x is not greater than y
console.log(!(x<y)); //false bcz x is less than y
console.log(!(x==y)); //true bcz x is not equal to y