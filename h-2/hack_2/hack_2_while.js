/**
 * mediante el while for agregar los números 1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [1,2,3,4,5]
 */

let result = [];

/* SOLUTION 1 - EXTERNAL ARRAY */
result.push(1,2,3,4,5)
let len = result.length
let index = 0

while (index < len){
   index++
} 

/* SOLUTION 2 - LENGTH
let index = 1

while (index <= 5) { // < 6 would work as well
  result.push(result.length + 1);
  index++
} */

/* SOLUTION 3 - LENGTH (ALTERNATIVE)
let index = 1

while (index < 6) { 
  let len = result.length + 1
  result.push(len);
  index++
} */

/* SOLUTION 4 - INDEX
let index = 1

while(index <= 5){
  result.push(index)
  index++
} */

console.log (result)

//export result
module.exports = result;