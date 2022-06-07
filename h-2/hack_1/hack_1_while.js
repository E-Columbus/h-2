/**
 * mediante el loop while agregar los números 0,1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [0,1,2,3,4,5]
 */
let result = [];

/* SOLUCION 1

var index = 0;

while (true) {
  if(index == 0) {
   result.push([0,1,2,3,4,5]);
   console.log(result[index]);
    }else{
   break
  }
index++;
}

/* SOLUCION 2

result.push([0,1,2,3,4,5])
let LengthDelArray = result.length
let index = 0

while (index < LengthDelArray){
   console.log(result[index])
   index++
}

*/

/* SOLUCION 3 - ACEPTADA POR ROBOT*/

let index = 0

while(index <= 5){
  result.push(index)
  index++
}

console.log (result)

//export result
module.exports = result;