/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */

let arr = ["foo","bar","baz","qux","echo"];
let result = [];
let len = arr.length - 1

for (let index = 1; index < len; index++) {
    result.push(arr[index].replaceAll("a","@").replace("qux", arr[3].toUpperCase())) // or "QUX" 
    }  

console.log(result);

//export result
module.exports = result;