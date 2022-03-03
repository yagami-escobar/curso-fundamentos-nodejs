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


function hablar(c1){
    setTimeout(function(){
        console.log('Bla bla bla bla ....');
        c1();
    }, 1000);
    
}


function conversacion(nombre, veces, callback){
    if(veces > 0){
        hablar(function(){
            conversacion(nombre, --veces, callback);
        });
    } else{
        adios(nombre, callback);
    } 
}


console.log('Iniciando proceso ...');
hola('Jhordan', function(nombre){
    conversacion(nombre, 3, function(){
        console.log('Proceso terminado');
    });
});


//IMPRESION
// console.log('Iniciando proceso ...');
// hola('Jhordan', function (nombre){
//     hablar(function(){ 
//         hablar(function(){
//             hablar(function(){
//                 adios(nombre, function(){
//                     console.log('Terminando proceso ...');    
//                 });
//             });   
//         }); 
//     });
// });

// hola('Jhordan', function(){})
// adios('Jhordan', function(){})