/**
 * mediante el loop for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];

let arrayAgregar = [1,3,5,7]

for (let index = 0; index < arrayAgregar.length; index++) {
    result.push(arrayAgregar[index]);
}

console.log(result);

//export result
module.exports = result;