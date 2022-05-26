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

for (var posicion =  0; posicion <= 0; posicion++){
    result.push(arr[1].replaceAll("a", "@"),arr[2].replaceAll("a", "@"),arr[3].toUpperCase())
}

console.log(result)

//export result
module.exports = result;