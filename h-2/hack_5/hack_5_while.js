/**
 * mediante el loop while agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];


/*SOLUCION 1

var index = 0;

while (true) {
  if(index == 0) {
   result.push([1,3,5,7].reverse());
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

result.reverse()

console.log (result)

//export result
module.exports = result;