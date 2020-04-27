function otrafuncion(){
     serompe();
}

function serompe(){
    return 3 +z;
}
function serompeasincrona(cb){
    setTimeout(function(){
        try{

            return 3+z;
        }
        catch(err){
            console.error('Error en mi funcion asincrona');
            cb(err);
            
        }
    })
}
try{
    serompeasincrona(function(){
        console.log("hay un error");
    })
  //otrafuncion()
  //  serompe();
}
catch(err){
    console.error('algo se ha roto');
    console.log(err.message)
}
console.log('esto funciona')