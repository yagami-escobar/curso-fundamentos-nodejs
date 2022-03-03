
async function hola(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Hola '+ nombre);
            resolve(nombre);
        }, 1000);
    });
}

async function adios(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Adios '+ nombre);
            resolve(nombre);
            }, 1000);
    });
}


async function hablar(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Bla bla bla bla ....');
            // resolve(nombre);
            resolve('Hay un error');
        }, 1000);        
    });
}

async function main(){
    let nombre = await hola('Jhordan');
    await hablar();
     hablar();
     hablar();
    await adios(nombre);
    console.log('Final Process ...');
}

console.log('Initial Process ...')
main();
console.log('Segundo Print ...')