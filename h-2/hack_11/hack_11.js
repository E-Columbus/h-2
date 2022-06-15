/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 *             
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */

let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];

result = numberArray.concat(stringArray) // spread operator would work as well.

result.unshift("h@ck")
result.push("h@ck")

for (let index = 0; index < result.length; index++){
  if (result[1] == 1){
    result[1] = "one";
  }
  if (result[3] == 3){
    result[3] = "three";
  }
  if (result[5] == 5){
    result[5] = "five";
  }
  if (result[6] == "foo"){
    result.splice(6,0,"h@ck")
  }
  if (result[7] == "foo"){
    result[7] = "f00";
  }
  if (result[8] == "bar"){
    result[8] = "Bar"
  }
  if (result[9] == "baz"){
    result[9] = "b@z"
  }
  if (result[10] == "qux"){
    result[10] = "quX"
  }
  if (result[11] == "echo"){
    result[11] = "3ch0"
  }
}

console.log(result) 

//export result
module.exports = result;