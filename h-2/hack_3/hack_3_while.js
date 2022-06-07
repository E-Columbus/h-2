/**
 * mediante el loop while agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 *  output => [5,4,3,2,1]
 */
let result = [];

/* SOLUCION 1

var index = 0;

while (true) {
  if(index == 0) {
   result.push([1,2,3,4,5].reverse());
   console.log(result[index]);
  }else{
   break
  }
  
  index++;
}

*/

/* SOLUCION 2 - ACEPTADA POR ROBOT

let index2 = 1

while(index2 <= 5){
  result.push(index2)
  index2++
}

result.reverse()

console.log (result)

*/

/* SOLUCION 3 - ACEPTADA POR ROBOT */

let index3 = 5

while(index3 >= 1){
   result.push(index3);
   index3--; 
}

console.log(result)


//export result
module.exports = result;