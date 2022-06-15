/**
 * mediante el loop while agregar los números 0,1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [0,1,2,3,4,5]
 */
let result = [];

/* SOLUTION 1 - EXTERNAL ARRAY */
result.push(0,1,2,3,4,5)
let len = result.length
let index = 0

while (index < len){
   index++
} 

/* SOLUTION 2 - LENGTH
let index = 0

while (index <= 5) {
  result.push(result.length);
  index++
} */

/* SOLUTION 3 - LENGTH (ALTERNATIVE)
let index = 0

while (index < 6) { 
  let len = result.length
  result.push(len);
  index++
} */

/* SOLUTION 4 - INDEX
let index = 0

while(index <= 5){
  result.push(index)
  index++
} */

console.log (result)

//export result
module.exports = result;