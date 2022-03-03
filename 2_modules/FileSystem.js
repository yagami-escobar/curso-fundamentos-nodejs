// Traer un módulo
const fs = require('fs');

function leer(ruta, c1){
    fs.readFile(ruta, (err, data) => {
        c1(data.toString());
    });
}



function escribir(ruta, contenido, c2){
    fs.writeFile(ruta, contenido, (err) => {
        if(err){
            console.log('No se ha podido escribir'+err);
        }else{
            console.log('Se ha escrito correctamente');
        }
    });
}


function borrar (ruta, c1){
    fs.unlink(ruta, c1);
}


// leer(__dirname+ '/file1.txt', console.log);
// escribir(__dirname+'/file2.txt', 'Escribiendo desde Node', console.log);
borrar(__dirname+'/file2.txt', console.log);