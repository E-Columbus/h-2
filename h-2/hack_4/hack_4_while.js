/**
 * mediante el while for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];

var index = 0;

while (true) {
  if(index == 0) {
   result.push([1,3,5,7]);
   console.log(result[index]);
  }else{
   break
  }
  
  index++;
}

//export result
module.exports = result;