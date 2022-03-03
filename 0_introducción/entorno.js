// Variables de entorno
let nombre = process.env.NOMBRE || 'Unknown';
let web = process.env.MI_WEB || 'no tengo web';


console.log('Hola '+ nombre);
console.log('Mi web es '+ web);

console.log("Otra cosita px");

/*
Si necesito un valor que no valla dentro del software, usamos variables de Entorno:
Peticiones a una API
Clave, Token o Acceso
URLS, IPS, Correos
*/