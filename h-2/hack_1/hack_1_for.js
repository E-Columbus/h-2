/**
 * mediante el loop for agregar los números 0,1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [0,1,2,3,4,5]
 */

let result = [];

/* SOLUTION 1 - EXTERNAL ARRAY */
let extraArr = [0,1,2,3,4,5]
var len = extraArr.length
 
for (let index = 0; index < len; index++) {
    result.push(extraArr[index]);
} 
 
/* SOLUTION 2 - LENGTH
for (let index = 0; index <= 5; index++) { // < 6 would work as well
    result.push(result.length);
} */
 
/* SOLUTION 3 - LENGTH (ALTERNATIVE)
for (let index = 0; index < 6; index++) { 
    let len = result.length
    result.push(len);
} */
 
/* SOLUTION 4 - INDEX
 for (let index = 0; index <= 5; index++) {
    result.push(index);
} */
 
console.log(result);

//export result
module.exports = result;