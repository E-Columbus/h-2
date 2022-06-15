/**
 * mediante el loop for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];

/* SOLUTION 1 - INDEX */
for (let index = 1; index <= 7; index++){ // < 8 would work as well
  if (index % 2 == 1)
  result.push(index)
} 

/* SOLUTION 2 - EXTERNAL ARRAY'S LENGTH & INDEX
let extraArr = [0,1,2,3,4,5,6,7]
let len = extraArr.length

for (let index = 1; index < len; index++) {
    if (index % 2 == 1)
    result.push(extraArr[index]);
} */

console.log(result)

//export result
module.exports = result;