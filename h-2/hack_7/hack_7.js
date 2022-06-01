/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];

let result = [];
let lengthDelArray = arr.length

for(var idx = 0; idx < lengthDelArray; idx++){
	result.push(arr[idx].charAt(0).toUpperCase() + arr[idx].slice(1));
}

console.log(result);

//export result
module.exports = result;