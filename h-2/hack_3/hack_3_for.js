/**
 * mediante el loop for agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 * output => [5,4,3,2,1]
 */
let result = [];

let arrayAgregar = [1,2,3,4,5]

for (let index = 4; index >= 0; index--) {
    result.push(arrayAgregar[index]);
}
  
console.log(result);

//export result
module.exports = result;