/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];

/* SOLUTION 1 - MAP */
result.push(1,3,5,7)

result.map(function(x){
  return x
})  

/* SOLUTION 2 - FILTER
result.push(0,1,2,3,5,6,7)

result = result.filter(function(index) {
  return (index % 2 == 1);
}); */


console.log(result) 

//export result
module.exports = result;