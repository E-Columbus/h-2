/**
 * mediante el while for agregar los números 1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [1,2,3,4,5]
 */
let result = [];

/* SOLUCION 1 

var index = 0;

while (true) {
    if(index == 0) {
     result.push([1,2,3,4,5]);
     console.log(result[index]);
    }else{
     break
    }
    index++;
  }

*/

/* SOLUCION 2 - ACEPTADA POR ROBOT*/

let index = 1

while(index <= 5){
  result.push(index)
  index++
}

console.log (result)

//export result
module.exports = result;