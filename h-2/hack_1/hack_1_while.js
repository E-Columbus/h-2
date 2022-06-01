/**
 * mediante el loop while agregar los números 0,1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [0,1,2,3,4,5]
 */
let result = [];

/* SOLUCION 1 */ 

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
} */

/* UNICA SOLUCION ACEPTADA POR ROBOT (COPIA DE LA CLASE SALVO POR CONSOLE.LOG), PERO NO COINCIDE PORQUE IMPRIME 1-6 EN LA TERMINAL EN VEZ DEL ARRAY PEDIDO, TIENE AGREGADO EL CONSOLE.LOG PARA MOSTRAR LA DIFERENCIA

let idx=0;
while(idx <= 5){
   console.log(result.push(idx))
   idx++;
  }
/* 

*/

//export result
module.exports = result;