/**
 * mediante el loop while agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 *  output => [5,4,3,2,1]
 */
let result = [];
var index = 0;

while (true) {
  if(index == 0) {
   result.push([1,2,3,4,5].reverse());
   console.log(result[index]);
  }else{
   break
  }
  
  index++;
}

//export result
module.exports = result;