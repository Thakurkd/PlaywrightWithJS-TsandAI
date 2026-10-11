// ---------- 1. Empty string vs 0 vs "0"  (transitivity broken) ----------
console.log(""==0);//true
console.log(0=="0");//true
console.log(""=="0");//false

//reason is that when we compare "" and 0, the empty string is converted to a number, which is 0, so the comparison becomes 0==0, which is true. When we compare 0 and "0", the string "0" is converted to a number, which is also 0, so the comparison becomes 0==0, which is true. However, when we compare "" and "0", both are strings, so no type conversion occurs, and the comparison becomes ""=="0", which is false because they are not equal.
//this property of equality is called transitivity, which means that if a==b and b==c, then a==c. In this case, the transitivity is broken because ""==0 and 0=="0" are both true, but ""=="0" is false.
// Now check with ===
console.log(""===0);//false
console.log(0==="0");//false
console.log(""==="0");//false
//reason for this is that the strict equality operator (===) does not perform type conversion, so the comparison is done based on both value and type. In this case, "" is a string, 0 is a number, and "0" is also a string, so all three comparisons are false because they are not of the same type.
