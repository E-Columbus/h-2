/**
 * mediante el loop for agregar los números 1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [1,2,3,4,5]
 */
let result = [];


let arrayAgregar = [0,1,2,3,4,5]

for (let index = 1; index < arrayAgregar.length; index++) {
    result.push(arrayAgregar[index]);
}
  
console.log(result);

//export result
module.exports = result;