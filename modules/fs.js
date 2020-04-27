const fs = require('fs')    

function leer(ruta , cb){

    fs.readFile(ruta,(error,data) =>{

         cb(data.toString())
    })
}
function escribir(ruta ,contenido, cb){

    fs.writeFile(ruta,contenido,(err) =>{
        if(err){
          console.error('No he podido escribirlo',err)
        }
        else{
            console.log('se ha escrito correctamente')
        }
    })
}
function borrar(ruta,cb){
     fs.unlink(ruta,cb)
}

// leer(__dirname + '/archivo.txt', console.log)  
// escribir(__dirname + '/archivo.txt','soy un archivo nuevo', console.log)  
borrar(__dirname + '/archivo.txt',console.log)  
