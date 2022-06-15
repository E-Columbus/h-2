/**
 * mediante el loop while agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];

/* SOLUTION 1 - INDEX */
let index = 7;

while (index >= 0){
  if (index % 2 == 1)
  result.push(index)
  index--
}

/* SOLUTION 2 - REVERSE INDEX
let index = 1

while (index <= 7){
  if (index % 2 == 1)
  result.push(index)
  result.reverse()
  index++
} */

/* SOLUTION 3 - EXTERNAL ARRAY'S LENGTH & INDEX
let extraArr = [0,1,2,3,4,5,6,7]
let len = extraArr.length - 7
let index = 7

while (index >= len) {
  if (index % 2 == 1)
  result.push(extraArr[index]);
  index--
} */

console.log (result)

//export result
module.exports = result;