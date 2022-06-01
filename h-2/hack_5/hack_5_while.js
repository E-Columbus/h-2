/**
 * mediante el loop while agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];

var index = 0;

while (true) {
  if(index == 0) {
   result.push([1,3,5,7].reverse());
   console.log(result[index]);
  }else{
   break
  }
  
  index++;
}

//export result
module.exports = result;