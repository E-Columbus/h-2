/**
 * mediante el loop while agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 *  output => [5,4,3,2,1]
 */
let result = [];

/* SOLUTION 1 - EXTERNAL ARRAY */
let extraArr = [1,2,3,4,5]
let index = 4

while (index >= 0) {
    result.push(extraArr[index]);
    index--
} 

/* SOLUTION 2 - LENGTH
let index = 5

while (index >= 1) { // > 0 would work as well
    result.push(result.length + 1);
    index--
}

result.reverse() */

/* SOLUTION 3 - LENGTH (ALTERNATIVE)
let index = 5

while (index > 0) {
    let len = result.length + 1
    result.push(len);
    index--
}

result.reverse() */

/* SOLUTION 4 - INDEX
let index = 5

while(index >= 1){
   result.push(index);
   index--; 
} */

console.log(result);

//export result
module.exports = result;