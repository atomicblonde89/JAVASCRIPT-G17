// Estructura de control Switch nos permite resumir varios if , 
// trabaja en distintos casos

var numero = 40;
var resultado= "";

switch(numero) {
	
	case 0:
	imprime ="Acabas de cumplir la mayoria de edad";
	break;
	
	case 25:
	imprime ="Ya eres un adulto";	
	break;
		
	case 40:
	imprime ="Crisis de los cuarenta";	
	break;
		
	case 75:
	imprime ="Ya eres adulto mayor";	
	break;
		
	default:
	imprime ="Tu edad es neutra";
	break;
}

console.log(imprime);







