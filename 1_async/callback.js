function hola(nombre, c1){
    setTimeout(function(){
        console.log('Hola '+ nombre);
        c1(nombre);
    }, 1000)
}


function adios(nombre, c2){
setTimeout(function(){
    console.log('Adios '+ nombre);
    c2();
}, 1000);
}


//IMPRESION
console.log('Iniciando proceso ...');
hola('Jhordan', function (nombre){
    adios(nombre, function(){
        console.log('Terminando proceso ...');    
    })
});

// hola('Jhordan', function(){})
// adios('Jhordan', function(){})