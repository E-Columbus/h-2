/**
 * mediante el loop for iterar cada una de las letras del string "fooziman"
 * debes anexar los caracteres de string al array result
 * ["f","o","o","z","i","m","a,"n"] 
 *
 *
 * output => ["f","o","o","z","i","m","a,"n"]
 */
let str = "fooziman";
let result = [];

/* SOLUTION 1 */
let lenStr = str.length

for (let index = 0; index < lenStr; index++){ // <= 7 / < 8 would work as well
  result.push(str[index])
} 

/* SOLUTION 2
var DecomposedArray = str.split('')
var len = DecomposedArray.length

for (let index = 0; index < len; index++) {
  result.push(DecomposedArray[index]);
} */

console.log(result);

//export result
module.exports = result;