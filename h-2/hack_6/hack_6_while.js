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

let i = 0;
let len = 1;

while(i < len){
    result.push(...str)
    console.log(result);
   i++;
}

//export result
module.exports = result;