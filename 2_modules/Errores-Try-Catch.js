function otraFuncion(){
     serompe();
}

function serompe(){
    return 3 + z;
}

function asyncFunction(){
    setTimeout(() => {
       try{
           return 3 + z;
       }catch(err){
        console.error('Ocurrio un error en la función async ->'+err.message);
       }
    }, 1000);
}



// IMPRESIÓN
try {
    asyncFunction();
} catch(err){
    console.error('Vaya, algo se ha roto ... -> '+err.message);
}