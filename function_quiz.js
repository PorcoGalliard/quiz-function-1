function isOdd(num) {
    return num % 2 !== 0;
  }
  
function isEven(num) {
    return num % 2 === 0;
}
  
function reverseStringBuiltIn(str) {
    return str.split("").reverse().join("");
}
  
function reverseStringLoop(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      result = str[i] + result;
    }
    return result;
}
  
function toUppercaseString(str) {
    return str.toUpperCase();
}
  
function calculateLuasLingkaran(num) {
    return (Math.PI * num * num).toFixed(3);
}
  
console.log(isOdd(3));
console.log(isEven(4));
console.log(reverseStringBuiltIn("hello"));
console.log(reverseStringLoop("hello"));
console.log(toUppercaseString("hello"));
console.log(calculateLuasLingkaran(7));
  