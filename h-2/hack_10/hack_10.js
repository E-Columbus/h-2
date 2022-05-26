/**
 * ["foo","bar","baz","qux","echo","octo","cat","foobar","quux"]
 * 
 * anexar al array result los items con los indices impares
 * formula (n % 2 == 1) para obtener un indice impar
 * 
 * example =>
 * if(indice % 2 == 1){
 *   ...
 * }  
 * 
 * 
    output => ["bar","qux","octo","foobar"]   
 */
let arr = ["foo","bar","baz","qux","echo","octo","cat","foobar","quux"];
let result = [];

function impares(a) {
  var x = []
for (var n = 0; n < a.length; n++) {
  if(n % 2 == 1) {
      x.push(a[n]);
  }
}
return x;
}

console.log (impares(arr))

//export result
module.exports = result;