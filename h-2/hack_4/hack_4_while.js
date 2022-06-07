/**
 * mediante el while for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = []

/* SOLUCION 1 

var index = 0;

while (true) {
  if(index == 0) {
   result.push([1,3,5,7]);
   console.log(result[index]);
  }else{
   break
  }
  
  index++;
}

*/

/* SOLUCION 2 - ACEPTADA POR ROBOT*/

let index = 1

while(index <= 7){
  if (index % 2 == 1)
  result.push(index)
  index++
}

console.log (result)

//export result
module.exports = result;