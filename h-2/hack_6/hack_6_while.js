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


/* SOLUCION 1

var DecomposedArray = str.split('')
var index = 0;

while (true) {
  if(index == 0) {
   result.push(DecomposedArray)
   console.log(result[index]);
  }else{
   break
  }
  
  index++;
}

*/

/* SOLUCION 2

let index = 0

while(index < 7){
  result.push(str[index])
  index++
}

console.log (result)

*/

/* SOLUCION 3 - ACEPTADA POR ROBOT*/

let lenStr = str.length
let index = 0

while(index < lenStr){
  result.push(str[index])
  index++
}

console.log (result)

//export result
module.exports = result;