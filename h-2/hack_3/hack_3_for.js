/**
 * mediante el loop for agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 * output => [5,4,3,2,1]
 */
let result = [];

/* SOLUTION 1 - EXTERNAL ARRAY */
let extraArr = [1,2,3,4,5]

for (let index = 4; index >= 0; index--) {
    result.push(extraArr[index]);
} 

/* SOLUTION 2 - LENGTH
for (let index = 5; index >= 1; index--) { // > 0 would work as well
    result.push(result.length + 1);
}

result.reverse() */

/* SOLUTION 3 - LENGTH (ALTERNATIVE)
for (let index = 5; index > 0; index--) {
    let len = result.length + 1
    result.push(len);
}

result.reverse() */

/* SOLUTION 4 - INDEX
for (let index = 5; index >= 1; index--) {
    result.push(index);
} */
  
console.log(result);

//export result
module.exports = result;