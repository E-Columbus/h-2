/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];

result.push(1,3,5,7)

result.map(function(x){
  return x
}) 

result.reverse()
  
console.log(result)

//export result
module.exports = result;