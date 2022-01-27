/* FUNCIONES 
    Una función es una entidad que nos permite 
    procesar datos.
    La función esta compuesta por la palabra reservada function y su nombre , espacio
    para recibir los parametros y el cuerpo de la funcion.

    Ejemplo crear una función que determine si un numero es par o impar
*/

function parImpar(numero){

    var number = numero;
    if(number % 2 == 0){
        alert('Es un numero par');
    }else{
        alert('Es un numero impar');
    }


    return number

}

var hola = parImpar(3)
console.log(hola)



/**
 
0 -----> 'piedra'
1 ----->  'papel'
2 ----->  'Tijera


 */

function jugaMaquina(){
    switch (Math.floor(Math.random()*3)) {
        case 0:
            return 'piedra'
            break;
        case 1:
            return 'papel'
            break;
        case 2:
            return 'tijera'
            break;
    
        default:
            break;
    }
    return 
}

