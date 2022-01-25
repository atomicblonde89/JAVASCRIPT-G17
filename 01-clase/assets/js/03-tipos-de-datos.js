/*
    TIPO DE DATOS O DATOS PRIMITIVOS
    undefined: Un valor primitivo
    Boolean true o flase , 0 o 1
    Null, representa la inexistencia de datos
    String , cadena de textos
    Number , son numeros

*/

var booleano = true;
var valorNull = null;
var nuemrico = 5;
var academia = 'Desafio Latam';

console.log('Variable Bolena ---> ', typeof booleano)
console.log('Variable valorNull ---> ', typeof valorNull)
console.log('Variable nuemrico---> ', typeof nuemrico)
console.log('Variable academia ---> ', typeof academia)


/*
    CONST o Constantes
    La diferencia entre let,var y const es que las constantes no pueden ser reasignadas
*/

const clave = 123456
// clave = 7894

/*
    Operadores con Javascript
*/

let asignacion = 'Desafío Latam'
console.log('Asignacion---->', asignacion);

// Adición
let adicion = 5;
adicion += 5
console.log( 'Adición---->', adicion );

// Adición
let sustraccion = 5;
sustraccion  -= 5
console.log( 'sustracción---->', sustraccion  );

// Multiplicación
let multiplicacion = 5
multiplicacion *= 5
console.log( 'multiplicacion---->', multiplicacion  );

// Resto o Modulo
let resto = 34;
resto %= 5
console.log( 'resto----->', resto )


/* Operadores de comparacion */
let operendoCero = 4;
let operendoUno = 5;
let operandoDos = '5'
console.log('Operdador de igualdad se escribe ==', operendoUno == operandoDos )
console.log('Operdador de igualdad estricto se escribe ===', operendoUno === operandoDos )
console.log('Operador mayor que >', operendoUno > operendoCero  )
console.log('Operador menor que >', operendoCero <  operendoUno )
console.log('Operador mayor o igual que >=', operendoUno >= operendoCero  )
console.log('Operador menor o igual que >', operendoCero <=  operendoUno )
console.log('Operador de desigualdad !=', operendoCero != operendoUno )
console.log('Operador de desigualdad !==', operendoCero !== operendoUno )

/* 
&& ----> and o y 
|| ----> or 

    if( varUno != undefined || varUno !=== 0 ){

    }

*/
console.log('==========================================')
/* 
    Concatenacion de cadenas
*/
let stringUno = 'Desafio '
let stringDos = 'Latam '
let fecha = 2022
let concatenado = stringUno + stringDos + fecha

console.log('Concatendo:' ,concatenado)

console.log('==========================================')
/* 
    Template String o interpolación
*/

let templateStringUno = 'Desafío'
let templateStringDos = 'Latam'
let templateString = `Academia advdsbsdfbsf sgwrgwr${templateStringUno} ${templateStringDos}, Chile`;
console.log('TemplateString--->', templateString)



