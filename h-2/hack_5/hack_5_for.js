/**
 * mediante el loop for agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];

let arrayAgregar = [1,3,5,7]

for (let index = 3; index >= 0; index--) {
    result.push(arrayAgregar[index]);
}
  
console.log(result);

//export result
module.exports = result;