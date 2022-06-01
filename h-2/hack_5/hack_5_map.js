/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];

result.push(1,3,5,7)
result.reverse()

var map1 = result.map(x => x);
  console.log(map1)

//export result
module.exports = result;