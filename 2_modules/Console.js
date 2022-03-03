console.log('Algo');
console.info('Info');
console.error('Error');
console.warn('Warning')
var tabla = [
    {
        a: 1,
        b: 'a'
    },
    {
        a: 2,
        b: 'b'
    }
];


// console.table(tabla);
// console.log(tabla);

console.group('Conversación:');
console.log('Hola Jhordan');
console.log('Bla bla bla');
console.log('Bla bla bla');
console.log('Bla bla bla');
console.log('Adios Jhordan');
console.groupEnd('Conversación:');
console.log('Otra Linea');



console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
console.count('veces');