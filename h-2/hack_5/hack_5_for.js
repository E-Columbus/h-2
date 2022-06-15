/**
 * mediante el loop for agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];

/* SOLUTION 1 - INDEX */
for (let index = 7; index >= 0; index--){
    if (index % 2 == 1)
    result.push(index)
}

/* SOLUTION 2 - REVERSE INDEX
for (let index = 1; index <= 7; index++){
    if (index % 2 == 1)
    result.push(index)
    result.reverse()
} */

/* SOLUTION 3 - EXTERNAL ARRAY'S LENGTH & INDEX
let extraArr = [0,1,2,3,4,5,6,7]
let len = extraArr.length - 7

for (let index = 7; index >= len; index--) { // reverse index method would work as well
    if (index % 2 == 1)
    result.push(extraArr[index]);
} */

console.log(result) 

//export result
module.exports = result;