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

var DecomposedArray = str.split('')
var LengthdeDecomposed = DecomposedArray.length

for (let index = 0; index < LengthdeDecomposed; index++) {
  result.push(DecomposedArray[index]);
}

console.log(result);

//export result
module.exports = result;