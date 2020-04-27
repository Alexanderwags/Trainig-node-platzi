const http=require('http');

http.createServer(router).listen(3000);
function router(req , res){
 
    console.log('Nueva peticion');
    console.log(req.url);
    switch(req.url){
        case '/hola':
             res.write('Hola, que tal');
             res.end();
             break;
        default:
             res.write('Error 404');
             res.end();
    }
    // escribir respuesta al usuario 
    // res.writeHead(201,{'Content-Type':'text/plain'})
    // res.write('hola ya se usar http desde nodejs ');
    // res.end();
}
console.log('escuchando en el puerto 3000')