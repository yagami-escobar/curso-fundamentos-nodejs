// Una nueva forma de trabajar con Asincronía
//Promesas → Las promesas pueden estar resueltas, no resueltas, pendientes, pueden fallar.
//Diferencia entre Promesas y Callback es que podemos anidar promesas.


function hola(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Hola '+ nombre);
            resolve(nombre);
        }, 1000);
    });
}

function adios(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Adios '+ nombre);
            resolve(nombre);
            }, 1000);
    });
}


function hablar(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Bla bla bla bla ....');
            // resolve(nombre);
            reject('Hay un error');
        }, 1000);        
    });
}


//IMPRIMIR
hola('Jhordan')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Proceso terminado');
    })
    .catch(error => {
        console.error('Ha habido un error');
        console.error(error);
    })