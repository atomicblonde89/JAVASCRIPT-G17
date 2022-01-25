/*VARIABLES */

// var number = 7;
// var numero = 7; 
// console.log('Salida de la variable number ------->',number)
// console.log('Salida de la variable numero ------->',numero)

/*ECMA6 */
// let uno = 1;
// let dos = 2
// console.log('Salida de la variable let uno------->',uno)
// console.log('Salida de la variable let dos ------->',dos)

/*

    Diferencia entre let y var (Al alcance del bloque o también del ambito)

*/

var varExterna = 2
let letExterna = 2

{
    varExterna = 2+2;
    letExterna = 2+2;

    var varInterno = 5
    let letInterno = 5

    console.log('varInterno dentro del bloque ---->', varInterno)
    console.log('leInterno dentro del bloque ---->', letInterno)
}

console.log('varExterna ----->',varExterna )
console.log('letExterna----->',letExterna )
console.log('letInterno ----->', letInterno )





