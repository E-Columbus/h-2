/**
 * mediante el while for iterar cada una de las letras del string "fooziman"
 * debes anexar los caracteres de string al array result
 * ["f","o","o","z","i","m","a","n"] 
 *
 *
 * output => ["f","o","o","z","i","m","a","n"]
 */
let str = "fooziman";
let result = [];
let index = 0

/* SOLUTION 1 */
let lenStr = str.length

while(index < lenStr){ // <= 7 / < 8 would work as well
  result.push(str[index])
  index++
}

/* SOLUTION 2
var DecomposedArray = str.split('')
var len = DecomposedArray.length

while (index < len){
  result.push(DecomposedArray[index]);
  index++
} */

console.log (result)

//export result
module.exports = result;