// --------------------------------------------------------
// 3. NUMERIC SEPARATORS (ES2021+)
// --------------------------------------------------------


let million = 1_000_000;
let binarySep = 0b1010_0001;
let hexSep = 0xFF_FF;
// --------------------------------------------------------
// 4. BIGINT - For arbitrarily large integers
// --------------------------------------------------------
let bigIntNum = 1234567890123456789012345678901234567890n; // 'n' at the end indicates BigInt
console.log("bigIntNum:", bigIntNum);
console.log("Type of bigIntNum:", typeof bigIntNum); // "bigint"
let bigIntNum2=BigInt("1234567890123456789012345678901234567890");
console.log("bigIntNum2:", bigIntNum2);
console.log("Type of bigIntNum2:", typeof bigIntNum2); // "bigint"
let bigIntIndex = BigInt(55);
console.log("bigIntIndex:", bigIntIndex);
console.log("Type of bigIntIndex:", typeof bigIntIndex); // "bigint"