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

//export result
module.exports = result;